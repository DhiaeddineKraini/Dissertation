#!/usr/bin/env python3
"""
orchestrator.py
---------------
Coordinates the browser fuzzing workflow in multiple rounds:
1) Copies seeds
2) Runs mutation_pipeline_deterministic.py to produce mutated files
3) Runs detection.py to test those mutated files in an ASan-enabled Chrome, capturing coverage
4) Reads coverage_summary.json from the prior round to reorder or prioritize seeds
5) Logs everything in run_YYYYMMDD_HHMMSS/round_###
"""

import os
import sys
import shutil
import random
import subprocess
import datetime
import json
from pathlib import Path

###############################################################################
# CONFIG CONSTANTS
###############################################################################
BASE_DIR = Path("/home/dhia/browser-fuzzer/Dissertation")
LOGGER_DIR = BASE_DIR / "logger"
SEEDS_BASE = BASE_DIR / "tests/testing_seeds" / "combined"

# The script that mutates seeds deterministically
MUTATION_SCRIPT = SEEDS_BASE / "mutation_pipeline_deterministic.py"

# The detection script that runs mutated seeds in an ASan browser and logs coverage + anomalies
CRASH_SCRIPT = BASE_DIR / "crash-manager" / "detection.py"

DEFAULT_MUTATIONS = 2
DEFAULT_ROUNDS = 2

###############################################################################
# HELPER FUNCTIONS
###############################################################################

def validate_seed(path: Path) -> bool:
    """Check if the seed path exists and is an .html file."""
    if not path.exists():
        print(f"[ERROR] Seed not found: {path}")
        return False
    if path.suffix.lower() != ".html":
        print(f"[ERROR] Not an HTML file: {path}")
        return False
    return True

def load_coverage_summary(round_path: Path) -> dict:
    """
    Attempt to read coverage_summary.json from `round_path/crash_results/coverage_summary.json`.
    Returns an empty dict if not found. 
    """
    summary_file = round_path / "crash_results" / "coverage_summary.json"
    if summary_file.exists():
        try:
            with open(summary_file, "r", encoding="utf-8") as f:
                return json.load(f)
        except:
            pass
    return {}

def reorder_seeds_based_on_coverage(available_seeds, coverage_summary: dict):
    """
    Reorder seeds by coverage "score" from coverage_summary.
    coverage_summary might look like:
      {
        "files": {
          "mutated_0001.html": {
             "newCoverageScore": 123,
             ...
          }, ...
        }
      }
    We'll match seeds by filename and rank them descending by newCoverageScore.
    """
    seed_scores = {}
    files_data = coverage_summary.get("files", {})
    for seed in available_seeds:
        name = os.path.basename(seed)
        # Default score is 0 if not found
        score = files_data.get(name, {}).get("newCoverageScore", 0)
        seed_scores[seed] = score

    # Sort seeds by descending coverage score
    sorted_seeds = sorted(seed_scores.keys(), key=lambda s: seed_scores[s], reverse=True)
    return sorted_seeds

def get_seeds(args, previous_coverage=None):
    """
    Gather seeds from command-line arguments or from the 'complex' subdir if not enough are specified.
    If coverage data is available, reorder them accordingly.
    """
    seeds = []
    for arg in args:
        if arg.endswith(".html"):
            candidate = (SEEDS_BASE / arg).resolve()
            if validate_seed(candidate):
                seeds.append(candidate)

    # If we have 2 or more seeds from CLI, use them (with coverage reorder if coverage is present)
    if len(seeds) >= 2:
        if previous_coverage:
            seeds = reorder_seeds_based_on_coverage(seeds, previous_coverage)
        return seeds[0], seeds[1]

    # Otherwise, pick from the "complex" subdir
    complex_dir = SEEDS_BASE / "complex"
    html_files = list(complex_dir.glob("*.html"))
    if len(html_files) < 2:
        print(f"[FATAL] Need at least 2 seeds in {complex_dir}")
        sys.exit(1)

    # Reorder by coverage if available
    if previous_coverage:
        html_files = reorder_seeds_based_on_coverage(html_files, previous_coverage)

    # Return top two
    return html_files[0], html_files[1]

###############################################################################
# MAIN
###############################################################################

def main():
    mutation_count = DEFAULT_MUTATIONS
    num_rounds = DEFAULT_ROUNDS

    try:
        if len(sys.argv) > 1 and sys.argv[1].isdigit():
            mutation_count = int(sys.argv[1])
        if len(sys.argv) > 2 and sys.argv[-1].isdigit():
            num_rounds = int(sys.argv[-1])
    except ValueError:
        print("[WARN] Using default for mutation_count / rounds")

    # Create run directory
    timestamp = datetime.datetime.now().strftime("%Y%m%d_%H%M%S")
    run_dir = LOGGER_DIR / f"run_{timestamp}"
    run_dir.mkdir(parents=True, exist_ok=True)
    print(f"[INIT] Run directory => {run_dir}")

    previous_coverage = None
    for round_num in range(1, num_rounds + 1):
        round_path = run_dir / f"round_{round_num:03d}"
        round_path.mkdir()

        # If not the first round, load coverage from the previous round
        if round_num > 1:
            prev_round_dir = run_dir / f"round_{round_num - 1:03d}"
            previous_coverage = load_coverage_summary(prev_round_dir)

        # Choose seeds
        seedA, seedB = get_seeds(sys.argv[1:], previous_coverage)
        print(f"[ROUND {round_num}] Seeds chosen => A={seedA}, B={seedB}")

        # Copy seeds into seed_inputs folder
        seed_store = round_path / "seed_inputs"
        seed_store.mkdir()
        shutil.copy(seedA, seed_store)
        shutil.copy(seedB, seed_store)
        print(f"[ROUND {round_num}] Seeds stored in => {seed_store}")

        # MUTATION
        mutations_dir = round_path / "mutations"
        mutations_dir.mkdir()
        mutation_cmd = ["python3", str(MUTATION_SCRIPT), str(mutation_count)]
        env = os.environ.copy()
        env.update({
            "MUTATION_SEED_A": str(seedA),
            "MUTATION_SEED_B": str(seedB),
            "MUTATION_OUT_DIR": str(mutations_dir)
        })
        mut_proc = subprocess.run(
            mutation_cmd, env=env,
            stdout=subprocess.PIPE, stderr=subprocess.STDOUT, text=True
        )
        (mutations_dir / "mutation.log").write_text(mut_proc.stdout)
        print(f"[ROUND {round_num}] Mutation completed (code={mut_proc.returncode})")

        # DETECTION => coverage + anomalies
        crash_dir = round_path / "crash_results"
        crash_dir.mkdir()
        crash_cmd = ["python3", str(CRASH_SCRIPT), str(mutations_dir)]
        crash_proc = subprocess.run(
            crash_cmd,
            stdout=subprocess.PIPE, stderr=subprocess.STDOUT, text=True
        )
        (crash_dir / "detection.log").write_text(crash_proc.stdout)
        print(f"[ROUND {round_num}] Detection + coverage completed (code={crash_proc.returncode})")

    print(f"[COMPLETE] Final results => {run_dir}")

if __name__ == "__main__":
    main()
