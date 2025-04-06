#!/usr/bin/env python3
"""
orchestrator.py
---------------
Coordinates multi-round fuzzing:
1) Picks seeds using a "top-k with randomness" approach rather than always picking the top 2.
2) Runs an advanced mutation pipeline.
3) Invokes detection to gather anomalies, coverage, crash info, etc. (calling detection.py from the same folder).
4) Aggregates results across rounds with optional coverage chart.
"""

import os
import sys
import shutil
import subprocess
import datetime
import json
import logging
import random
import time
from pathlib import Path
from typing import Any, Dict, List, Tuple
from collections import defaultdict

# Shared config from your tool
from config import (
    LOGGER_DIR, SEEDS_BASE, init_global_seed,
    COVERAGE_WEIGHT_LINE, COVERAGE_WEIGHT_FUNC, COVERAGE_WEIGHT_PATH,
    logger as base_logger
)

logger = logging.getLogger("orchestrator-advanced")
logger.setLevel(base_logger.level)

THIS_FOLDER = Path(__file__).parent  # e.g. ~/browser-fuzzer/Dissertation/logger/fuzzing
MUTATION_SCRIPT = str(THIS_FOLDER / "mutation_pipeline_deterministic.py")
CRASH_SCRIPT = str(THIS_FOLDER / "detection.py")

DEFAULT_MUTATIONS = 1
DEFAULT_ROUNDS = 1




# -------------------------------------------------------------------------
# Helper: validate_seed, load_coverage_summary, etc.
# -------------------------------------------------------------------------
def validate_seed(path: Path) -> bool:
    if not path.exists():
        logger.error("[ERROR] Seed not found => %s", path)
        return False
    if path.suffix.lower() != ".html":
        logger.error("[ERROR] Not an HTML file => %s", path)
        return False
    return True

def load_coverage_summary(round_path: Path) -> Dict[str, Any]:
    cov_file = round_path / "crash_results" / "coverage_summary.json"
    if cov_file.exists():
        try:
            with open(cov_file, "r", encoding="utf-8") as f:
                return json.load(f)
        except Exception as e:
            logger.error("Failed to load coverage summary: %s", e)
    return {}

def compute_weighted_coverage_score(cov_data: Dict[str, Any]) -> float:
    total_ranges = cov_data.get("totalRanges", 0)
    visited_ranges = cov_data.get("visitedRanges", 0)
    total_funcs = cov_data.get("totalFunctions", 0)
    script_count = cov_data.get("scriptCount", 0)

    line_cov = visited_ranges * COVERAGE_WEIGHT_LINE
    func_cov = total_funcs * COVERAGE_WEIGHT_FUNC
    path_cov = script_count * COVERAGE_WEIGHT_PATH
    return line_cov + func_cov + path_cov

def reorder_seeds_based_on_coverage(
    seeds: List[Path],
    coverage_summary: Dict[str, Any]
) -> List[Path]:
    coverage_files = coverage_summary.get("files", {})

    def get_score(sp: Path) -> float:
        name = sp.name
        data = coverage_files.get(name, {})
        return compute_weighted_coverage_score(data)

    return sorted(seeds, key=get_score, reverse=True)

def gather_new_crash_seeds(run_dir: Path) -> List[Path]:
    """Gathers newly detected crash seeds and creates seed files with the crashing input."""
    crash_seeds = []
    round_dirs = sorted(d for d in run_dir.iterdir() if d.is_dir() and d.name.startswith("round_"))
    if not round_dirs:
        return []

    last_round = round_dirs[-1]
    unique_crash_file = last_round / "crash_results" / "unique_crashes.json"
    if not unique_crash_file.exists():
        return []
    
    detailed_report_file = last_round / "crash_results" / "reports" / "detailed_report.json"
    detailed_report = {} # init detailed report variable

    if detailed_report_file.exists():
        try:
             with open(detailed_report_file, 'r', encoding='utf-8') as f:
                detailed_report = json.load(f)

        except Exception as e:
            logger.warning(f"[Detailed Report] Failed to load file {e}")



    try:
        with open(unique_crash_file, "r", encoding="utf-8") as f:
            crash_data = json.load(f)

        for signature, crash_info in crash_data.items():
            seed_path = run_dir / f"crash_seed_{signature[:8]}.html" # creates file based on the signature


            # Extract crashing input from the detailed report
            test_file_name = "" # initialize file name with empty string
            for test_name, test_data in detailed_report.get("tests",{}).items():

                if test_data.get("root_cause") != "N/A": # if root cause is present
                   test_file_name = test_name # gets file name
                   break # exits the loop because the crashing test has been found



            if test_file_name != "": # if the crashing test has been found

                original_seed_path = last_round / "mutations" / test_file_name # calculates the crashing file path
                
                try:
                    with open(original_seed_path, "r", encoding="utf-8") as original_seed_file:
                        crashing_input = original_seed_file.read()
                        with open(seed_path, "w", encoding="utf-8") as crash_seed_file:
                             crash_seed_file.write(crashing_input)  # Use the crashing input

                    logger.info(f"Crash seed file created: {seed_path} using input {original_seed_path}")
                    crash_seeds.append(seed_path)


                except Exception as e:

                     logger.error(f"Failed to create crash seed file {seed_path} from {original_seed_path}. Error: {e}") # adds details about the error




            else:
                logger.warning("No suitable crashing file found in detailed_report.json")



    except Exception as e:
        logger.error("[CRASH-SEEDS] Failed to gather crash seeds: %s", e)

    return crash_seeds

def choose_seeds_with_randomness(sorted_seeds: List[Path], top_k: int = 5) -> Tuple[Path, Path]:
    if len(sorted_seeds) < 2:
        raise RuntimeError("Not enough seeds to pick two distinct seeds.")

    k = min(top_k, len(sorted_seeds))
    candidates = sorted_seeds[:k]

    seedA = random.choice(candidates)
    candidates = [c for c in candidates if c != seedA]
    seedB = random.choice(candidates) if candidates else seedA

    return seedA, seedB

# --- Evolutionary Seed Selection Enhancements ---
def calculate_seed_impact(seed_path: Path, coverage_data: Dict[str, Any]) -> float:
    """Determine how much new coverage a seed contributed"""
    filename = seed_path.name
    impact = 0
    for file_data in coverage_data.get("files", {}).values():
        if filename in file_data.get("source_files", []):
            impact += file_data.get("visitedRanges", 0) * COVERAGE_WEIGHT_LINE
            impact += file_data.get("visitedFunctions", 0) * COVERAGE_WEIGHT_FUNC
    return impact

def select_evolutionary_seeds(seeds: List[Path], coverage_data: Dict[str, Any]) -> List[Path]:
    """Prioritize seeds that contributed to coverage expansion"""
    scored = []
    for seed in seeds:
        score = calculate_seed_impact(seed, coverage_data)
        # Bonus for crash seeds
        if "crash_seed" in seed.name:
            score *= 1.5
        scored.append((seed, score))
    scored.sort(key=lambda x: x[1], reverse=True)
    keep_count = max(2, len(scored) // 2)
    return [s[0] for s in scored[:keep_count]]

def get_seeds(
    cli_args: List[str],
    previous_coverage: Dict[str, Any],
    new_crash_seeds: List[Path],
    top_k: int = 5
) -> Tuple[Path, Path]:
    seeds: List[Path] = []
    # CLI seeds
    for arg in cli_args:
        if arg.endswith(".html"):
            cand = Path(SEEDS_BASE) / arg
            if validate_seed(cand):
                seeds.append(cand)

    # crash seeds
    for sc in new_crash_seeds:
        if validate_seed(sc):
            seeds.append(sc)

    # deduplicate
    seeds = list(dict.fromkeys(seeds))

    # fallback to complex if < 2
    if len(seeds) < 2:
        complex_dir = Path(SEEDS_BASE) / "complex"
        fallback_files = list(complex_dir.glob("*.html"))
        for fb in fallback_files:
            if validate_seed(fb):
                seeds.append(fb)
        seeds = list(dict.fromkeys(seeds))

    if len(seeds) < 2:
        raise RuntimeError("[FATAL] Not enough seeds after fallback to 'complex'.")

    # reorder by coverage if we have it and apply evolutionary selection
    if previous_coverage:
        seeds = reorder_seeds_based_on_coverage(seeds, previous_coverage)
        seeds = select_evolutionary_seeds(seeds, previous_coverage)
    else:
        random.shuffle(seeds)

    return choose_seeds_with_randomness(seeds, top_k=top_k)

def aggregate_coverage_across_all_rounds(run_dir: Path) -> None:
    round_dirs = sorted(d for d in run_dir.iterdir() if d.is_dir() and d.name.startswith("round_"))
    final_coverage = {"rounds": {}, "aggregate": {}}

    best_score = 0.0
    for rd in round_dirs:
        cov_file = rd / "crash_results" / "coverage_summary.json"
        if cov_file.exists():
            with open(cov_file, "r", encoding="utf-8") as f:
                data = json.load(f)
            final_coverage["rounds"][rd.name] = data
            files_data = data.get("files", {})
            for f_name, cov_info in files_data.items():
                sc = cov_info.get("weightedCoverageScore", 0.0)
                if sc > best_score:
                    best_score = sc

    final_coverage["aggregate"]["highestCoverageSeen"] = best_score
    out_file = run_dir / "final_coverage_summary.json"
    with open(out_file, "w", encoding="utf-8") as wf:
        json.dump(final_coverage, wf, indent=2)
    logger.info("[AGGREGATE] Final coverage => %s", out_file)

    try:
        import matplotlib.pyplot as plt
        rd_names = []
        total_scores = []
        for rd in round_dirs:
            label = rd.name
            cdata = final_coverage["rounds"].get(label, {})
            sum_score = 0.0
            for fname, metrics in cdata.get("files", {}).items():
                sum_score += metrics.get("weightedCoverageScore", 0.0)
            rd_names.append(label)
            total_scores.append(sum_score)

        if total_scores:
            plt.figure()
            plt.bar(rd_names, total_scores)
            plt.title("Coverage Across Rounds")
            plt.xlabel("Round")
            plt.ylabel("Total Weighted Coverage")
            chart_path = run_dir / "coverage_across_rounds.png"
            plt.savefig(chart_path)
            logger.info("[AGGREGATE] Coverage chart => %s", chart_path)
            plt.close()
    except ImportError:
        logger.warning("matplotlib not installed => skipping coverage chart generation.")

# --- Coverage-Guided Seed Prioritization Enhancements ---
def calculate_coverage_gaps(previous_coverage: Dict[str, Any]) -> Dict[str, List[str]]:
    """Identify least-covered elements/attributes from coverage data"""
    gaps = {"elements": [], "attributes": [], "events": []}
    if not previous_coverage.get("files"):
        return gaps

    element_counts = defaultdict(int)
    attribute_counts = defaultdict(int)
    event_counts = defaultdict(int)

    for file_data in previous_coverage["files"].values():
        for elem, data in file_data.get("element_coverage", {}).items():
            element_counts[elem] += data.get("count", 0)
        for attr, data in file_data.get("attribute_coverage", {}).items():
            attribute_counts[attr] += data.get("count", 0)
        for event, data in file_data.get("event_coverage", {}).items():
            event_counts[event] += data.get("count", 0)

    gap_size = max(1, len(element_counts) // 4)
    gaps["elements"] = sorted(element_counts, key=lambda x: element_counts[x])[:gap_size]

    gap_size = max(1, len(attribute_counts) // 4)
    gaps["attributes"] = sorted(attribute_counts, key=lambda x: attribute_counts[x])[:gap_size]

    gap_size = max(1, len(event_counts) // 4)
    gaps["events"] = sorted(event_counts, key=lambda x: event_counts[x])[:gap_size]

    return gaps

def main() -> None:
    init_global_seed()

    mutation_count = DEFAULT_MUTATIONS
    num_rounds = DEFAULT_ROUNDS

    try:
        if len(sys.argv) > 1 and sys.argv[1].isdigit():
            mutation_count = int(sys.argv[1])
        if len(sys.argv) > 2 and sys.argv[-1].isdigit():
            num_rounds = int(sys.argv[-1])
    except ValueError:
        logger.warning("[WARN] Using default mutation_count/rounds => %d/%d", mutation_count, num_rounds)

    timestamp = datetime.datetime.now().strftime("%Y%m%d_%H%M%S")
    run_dir = Path(LOGGER_DIR) / f"run_{timestamp}"
    run_dir.mkdir(parents=True, exist_ok=True)
    logger.info("[INIT] Created run => %s", run_dir)

    previous_coverage: Dict[str, Any] = {}
    crash_data: Dict[str, Any] = {}

    # Track unique crashes and coverage across rounds
    unique_crashes_seen = set()
    cumulative_coverage = {}

    for round_num in range(1, num_rounds + 1):
        # Create a new random seed for this round based on round number and timestamp
        round_seed = int(time.time()) + round_num * 1000
        os.environ["MUTATION_ROUND_SEED"] = str(round_seed)

        round_path = run_dir / f"round_{round_num:03d}"
        round_path.mkdir()
        logger.info("[ROUND %d] => directory => %s", round_num, round_path)

        # load coverage from prior round
        if round_num > 1:
            prev_round_dir = run_dir / f"round_{round_num - 1:03d}"
            previous_coverage = load_coverage_summary(prev_round_dir)

            # Extract crash data from previous round
            crash_file = prev_round_dir / "crash_results" / "unique_crashes.json"
            if crash_file.exists():
                try:
                    with open(crash_file, "r", encoding="utf-8") as f:
                        crash_data = json.load(f)
                        for sig in crash_data.keys():
                            unique_crashes_seen.add(sig)
                except Exception as e:
                    logger.error("[CRASH-DATA] Failed to load => %s", e)

            coverage_gaps_data = calculate_coverage_gaps(previous_coverage)  # Calculate coverage gaps here

        new_crash_seeds = gather_new_crash_seeds(run_dir)
        seedA, seedB = get_seeds(sys.argv[1:], previous_coverage, new_crash_seeds, top_k=5)
        logger.info("[ROUND %d] => Seeds => A=%s, B=%s", round_num, seedA, seedB)

        # copy seeds
        seed_store = round_path / "seed_inputs"
        seed_store.mkdir()
        shutil.copy(seedA, seed_store)
        shutil.copy(seedB, seed_store)

        # run mutation pipeline
        mutations_dir = round_path / "mutations"
        mutations_dir.mkdir()
        mutation_log_file = round_path / "mutation.log"  # Path to the round-specific log file
        mutation_cmd = ["python3", MUTATION_SCRIPT, str(mutation_count)]

        env = os.environ.copy()
        env.update({
            "MUTATION_SEED_A": str(seedA),
            "MUTATION_SEED_B": str(seedB),
            "MUTATION_OUT_DIR": str(mutations_dir),
            "MUTATION_ROUND_NUM": str(round_num),
            "MUTATION_ROUND_SEED": str(round_seed),
            "UNIQUE_CRASHES_COUNT": str(len(unique_crashes_seen)),
            "COVERAGE_GAPS": json.dumps(coverage_gaps_data) if round_num > 1 else "{}"  # ADDED LINE HERE
        })

        try:
            mut_proc = subprocess.run(mutation_cmd, env=env, stdout=subprocess.PIPE, stderr=subprocess.STDOUT, text=True, check=True)
            (round_path / "mutation.log").write_text(mut_proc.stdout)
            logger.info("[ROUND %d] => Mutation => returncode=%d, logfile=%s", round_num, mut_proc.returncode, mutation_log_file)

        except subprocess.CalledProcessError as e:
            logger.error(f"[ROUND {round_num}] Mutation process failed with return code {e.returncode}.")
            logger.error(f"Mutation Output (stderr and stdout):\n{e.output}")  # Print the output of the failed subprocess
            continue  # Or decide how to handle the error, e.g., break the loop, exit, etc.
        except Exception as e:
            logger.exception(f"[ROUND {round_num}] An unexpected error occurred during mutation: {e}")
            continue # Or decide how to handle the error

        # Run detection
        crash_dir = round_path / "crash_results"
        crash_dir.mkdir()
        detection_log_file = crash_dir / "detection.log"
        detection_cmd = ["python3", CRASH_SCRIPT, str(mutations_dir)]

        try:
            det_proc = subprocess.run(detection_cmd, stdout=subprocess.PIPE, stderr=subprocess.STDOUT, text=True, check=True)  # Capture output
            (crash_dir / "detection.log").write_text(det_proc.stdout)
            logger.info("[ROUND %d] => Detection => returncode=%d", round_num, det_proc.returncode)
        except subprocess.CalledProcessError as e:
            logger.error(f"[ROUND {round_num}] Detection process failed with return code {e.returncode}.")
            logger.error(f"Detection Output (stderr and stdout):\n{e.output}") # Print the output of the failed subprocess
            continue # Or decide how to handle the error
        except Exception as e:
            logger.exception(f"[ROUND {round_num}] An unexpected error occurred during detection: {e}")
            continue # Or decide how to handle the error

    # finalize coverage
    aggregate_coverage_across_all_rounds(run_dir)
    logger.info("[COMPLETE] All fuzzing rounds done => results => %s", run_dir)

if __name__ == "__main__":
    main()
