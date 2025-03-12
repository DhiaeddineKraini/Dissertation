#!/usr/bin/env python3
"""
orchestrator.py
---------------
Coordinates multi-round fuzzing:
1) Picks seeds using a "top-k with randomness" approach rather than always picking the top 2.
2) Runs an advanced mutation pipeline (grammar-based, bit-level, fractal, etc.).
3) Invokes detection to gather anomalies, coverage, crash info, etc.
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
from pathlib import Path
from typing import Any, Dict, List, Tuple

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
        except:
            pass
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
    crash_seeds = []
    round_dirs = sorted(d for d in run_dir.iterdir() if d.is_dir() and d.name.startswith("round_"))
    if not round_dirs:
        return []

    last_round = round_dirs[-1]
    unique_crash_file = last_round / "crash_results" / "unique_crashes.json"
    if not unique_crash_file.exists():
        return []

    try:
        with open(unique_crash_file, "r", encoding="utf-8") as f:
            data = json.load(f)
        for sig in data.keys():
            seed_path = run_dir / f"crash_seed_{sig[:8]}.html"
            if not seed_path.exists():
                with open(seed_path, "w", encoding="utf-8") as cf:
                    cf.write(f"<!-- Crash signature: {sig} -->\n<html><body>New crash seed</body></html>")
                crash_seeds.append(seed_path)
    except Exception as e:
        logger.error("[CRASH-SEEDS] Failed => %s", e)

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

    # reorder by coverage if we have it
    if previous_coverage:
        seeds = reorder_seeds_based_on_coverage(seeds, previous_coverage)
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
                sc = cov_info.get("weightedCoverageScore", cov_info.get("newCoverageScore", 0.0))
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
                sum_score += metrics.get("weightedCoverageScore", metrics.get("newCoverageScore", 0.0))
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
    run_dir = Path(LOGGER_DIR) / f"run_{timestamp}"  # e.g. ~/browser-fuzzer/Dissertation/logger/run_YYYYMMDD_HHMMSS
    run_dir.mkdir(parents=True, exist_ok=True)
    logger.info("[INIT] Created run => %s", run_dir)

    previous_coverage: Dict[str, Any] = {}

    for round_num in range(1, num_rounds + 1):
        round_path = run_dir / f"round_{round_num:03d}"
        round_path.mkdir()
        logger.info("[ROUND %d] => directory => %s", round_num, round_path)

        # load coverage from prior round
        if round_num > 1:
            prev_round_dir = run_dir / f"round_{round_num - 1:03d}"
            previous_coverage = load_coverage_summary(prev_round_dir)

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

        env = os.environ.copy()
        env.update({
            "MUTATION_SEED_A": str(seedA),
            "MUTATION_SEED_B": str(seedB),
            "MUTATION_OUT_DIR": str(mutations_dir)
        })
        mutation_cmd = ["python3", MUTATION_SCRIPT, str(mutation_count)]
        mut_proc = subprocess.run(mutation_cmd, env=env,
                                  stdout=subprocess.PIPE, stderr=subprocess.STDOUT, text=True)
        (mutations_dir / "mutation.log").write_text(mut_proc.stdout)
        logger.info("[ROUND %d] => Mutation => returncode=%d", round_num, mut_proc.returncode)

        # run detection
        crash_dir = round_path / "crash_results"
        crash_dir.mkdir()
        detection_cmd = ["python3", CRASH_SCRIPT, str(mutations_dir)]
        det_proc = subprocess.run(detection_cmd,
                                  stdout=subprocess.PIPE, stderr=subprocess.STDOUT, text=True)
        (crash_dir / "detection.log").write_text(det_proc.stdout)
        logger.info("[ROUND %d] => Detection => returncode=%d", round_num, det_proc.returncode)

    # finalize coverage
    aggregate_coverage_across_all_rounds(run_dir)
    logger.info("[COMPLETE] All fuzzing rounds done => results => %s", run_dir)

if __name__ == "__main__":
    main()
