#!/usr/bin/env python3
import os
import sys
import time
import shutil
import random
import subprocess
import datetime

##############################################################################
# CONFIG: Adjust these paths if necessary
##############################################################################

LOGGER_PATH = "/home/dhia/browser-fuzzer/Dissertation/logger"
SEEDS_BASE_PATH = "/home/dhia/browser-fuzzer/Dissertation/tests/testing_seeds/combined"
MUTATION_SCRIPT = os.path.join(SEEDS_BASE_PATH, "mutation_pipeline_deterministic.py")
CRASH_SCRIPT    = "/home/dhia/browser-fuzzer/Dissertation/crash-manager/detection.py"

DEFAULT_MUTATION_COUNT = 5
DEFAULT_NUM_ROUNDS     = 1

##############################################################################
def pick_auto_seeds():
    """
    If no seeds specified, we randomly choose two .html files from 'complex/'.
    Modify if you prefer 'simple/', 'moderate/', or a combined approach.
    """
    complex_folder = os.path.join(SEEDS_BASE_PATH, "complex")
    if not os.path.isdir(complex_folder):
        print(f"[WARN] No 'complex' folder found at {complex_folder}; cannot auto-pick seeds.")
        return None, None

    all_html = [f for f in os.listdir(complex_folder) if f.endswith(".html")]
    if len(all_html) < 2:
        print(f"[WARN] Not enough HTML seeds in {complex_folder} for auto-pick.")
        return None, None

    chosen = random.sample(all_html, 2)
    seedA = os.path.join("complex", chosen[0])
    seedB = os.path.join("complex", chosen[1])
    return seedA, seedB

def main():
    """
    Usage:
      python3 orchestrator.py [seedA.html] [seedB.html] [mutation_count] [num_rounds]

    Examples:
      - 0 seeds => auto-pick 2 from 'complex/'
      - 1 seed => use that as seedA, auto-pick seedB
      - 2 seeds => use exactly those 2 seeds
      - If mutation_count not specified => default=5
      - If num_rounds not specified => default=1

    The script creates a main run folder named run_YYYYmmdd_HHMMSS in LOGGER_PATH.
    For each round_XXX, it:
      1) Copies seeds to seed_inputs/
      2) Runs mutation script (outputs to mutations/)
      3) Runs crash detection on that same mutations/ folder
         and saves results under crash_results/
    """

    args = sys.argv[1:]

    #-----------------------------
    # 1. Identify seeds from CLI
    #-----------------------------
    seeds_found = []
    if len(args) >= 1 and args[0].endswith(".html"):
        seeds_found.append(args[0])
    if len(args) >= 2 and args[1].endswith(".html"):
        seeds_found.append(args[1])

    seedA = None
    seedB = None
    seed_count_cli = len(seeds_found)  # 0, 1, or 2

    if seed_count_cli == 2:
        # user specified 2 seeds
        seedA, seedB = seeds_found[0], seeds_found[1]
    elif seed_count_cli == 1:
        # user specified only 1 => auto-pick second
        seedA = seeds_found[0]
        print(f"[INFO] One seed specified => {seedA}. Auto-picking second seed from 'complex/'.")
        autoA, autoB = pick_auto_seeds()
        if not autoA or not autoB:
            print("[ERROR] Auto-picking second seed failed. Exiting.")
            sys.exit(1)
        # We'll keep user-chosen as seedA, then auto-pick seedB
        seedB = autoB
        print(f"[INFO] Using user seed => {seedA} + auto seed => {seedB}")
    else:
        # 0 seeds => auto-pick both
        print("[INFO] No seeds specified => auto-picking 2 from 'complex/'.")
        autoA, autoB = pick_auto_seeds()
        if not autoA or not autoB:
            print("[ERROR] Auto-pick seeds failed. Exiting.")
            sys.exit(1)
        seedA, seedB = autoA, autoB
        print(f"[INFO] Auto-selected seeds => {seedA}, {seedB}")

    #--------------------------------------------
    # 2. Parse optional mutation_count & rounds
    #--------------------------------------------
    mutation_count = DEFAULT_MUTATION_COUNT
    num_rounds     = DEFAULT_NUM_ROUNDS

    idx_for_count  = seed_count_cli  # next arg after seeds
    if len(args) > idx_for_count:
        try:
            mutation_count = int(args[idx_for_count])
        except ValueError:
            print(f"[WARN] Invalid mutation_count '{args[idx_for_count]}'. Using default={DEFAULT_MUTATION_COUNT}.")

    idx_for_rounds = idx_for_count + 1
    if len(args) > idx_for_rounds:
        try:
            num_rounds = int(args[idx_for_rounds])
        except ValueError:
            print(f"[WARN] Invalid num_rounds '{args[idx_for_rounds]}'. Using default={DEFAULT_NUM_ROUNDS}.")

    print(f"[INFO] Final parameters =>")
    print(f"       seedA: {seedA}")
    print(f"       seedB: {seedB}")
    print(f"       mutation_count: {mutation_count}")
    print(f"       num_rounds: {num_rounds}")

    #--------------------------------------------
    # 3. Create main run folder
    #--------------------------------------------
    run_label = datetime.datetime.now().strftime("run_%Y%m%d_%H%M%S")
    big_run_folder = os.path.join(LOGGER_PATH, run_label)
    os.makedirs(big_run_folder, exist_ok=True)
    print(f"[INFO] Created main folder => {big_run_folder}")

    #--------------------------------------------
    # 4. For each round, run the pipeline
    #--------------------------------------------
    for round_idx in range(1, num_rounds + 1):
        round_label = f"round_{round_idx:03d}"
        round_folder = os.path.join(big_run_folder, round_label)
        os.makedirs(round_folder, exist_ok=True)
        print(f"[INFO] Starting {round_label} => {round_folder}")

        seeds_subdir     = os.path.join(round_folder, "seed_inputs")
        mutations_subdir = os.path.join(round_folder, "mutations")
        crash_subdir     = os.path.join(round_folder, "crash_results")

        os.makedirs(seeds_subdir, exist_ok=True)
        os.makedirs(mutations_subdir, exist_ok=True)
        os.makedirs(crash_subdir, exist_ok=True)

        # 4a) Copy seeds
        seedA_path = os.path.join(SEEDS_BASE_PATH, seedA)
        seedB_path = os.path.join(SEEDS_BASE_PATH, seedB)
        try:
            shutil.copy2(seedA_path, seeds_subdir)
            shutil.copy2(seedB_path, seeds_subdir)
            print(f"[INFO] Copied seeds => {seeds_subdir}")
        except Exception as e:
            print(f"[ERROR] Could not copy seeds: {e}")
            continue

        # 4b) Run mutation script
        print(f"[INFO] Round {round_label}: running mutation script with {mutation_count} mutations.")
        mutation_cmd = [
            "python3",
            MUTATION_SCRIPT,
            str(mutation_count)
        ]
        env = os.environ.copy()
        env["MUTATION_OUT_DIR"] = mutations_subdir

        # pass the user or auto-picked seeds to the pipeline if needed
        env["MUTATION_SEED_A"] = seedA_path
        env["MUTATION_SEED_B"] = seedB_path

        ret = subprocess.run(mutation_cmd, env=env)
        if ret.returncode != 0:
            print(f"[ERROR] Mutation script failed in {round_label} (code={ret.returncode}).")
            continue
        print("[INFO] Mutation pipeline done => check:", mutations_subdir)

        # 4c) Crash detection: pass the 'mutations_subdir' so it only checks new pages
        print(f"[INFO] Round {round_label}: running crash detection =>", CRASH_SCRIPT)
        crash_cmd = ["python3", CRASH_SCRIPT, mutations_subdir]
        ret2 = subprocess.run(crash_cmd)
        if ret2.returncode != 0:
            print(f"[ERROR] Crash detection failed in {round_label} (code={ret2.returncode}).")
        else:
            print("[INFO] Crash detection done.")

        # 4d) Copy detection results
        detection_output = os.path.join(os.path.dirname(CRASH_SCRIPT), "test_results.csv")
        if os.path.exists(detection_output):
            try:
                shutil.copy2(detection_output, crash_subdir)
            except Exception as e:
                print(f"[ERROR] copying detection results: {e}")
        else:
            print(f"[WARN] {round_label}: detection script did not produce test_results.csv?")

        print(f"[INFO] Completed {round_label} => see {round_folder}")

    # end for
    print(f"[INFO] All done. see => {big_run_folder}")


if __name__ == "__main__":
    main()

