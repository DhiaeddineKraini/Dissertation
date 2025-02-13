#!/usr/bin/env bash
#
# integrated_fuzz_setup_without_fuzzilli.sh
# ------------------------------------------
# Demonstrates how to:
#   1) Generate HTML seeds with Domato
#   2) Mutate those seeds with Radamsa
#   3) Merge them into one corpus
#   4) Launch AFL++ in dumb fuzzing mode using a dummy target
#
# Usage:
#   ./integrated_fuzz_setup_without_fuzzilli.sh [--skip-seed-generation]
#
set -euo pipefail

# Parse an optional argument
SKIP_SEED_GEN=false
if [[ "${1:-}" == "--skip-seed-generation" ]]; then
    SKIP_SEED_GEN=true
fi

#################################
#        CONFIGURATION           #
#################################

# --- Domato ---
DOMATO_DIR="./domato"                 # Path to the Domato repository
DOMATO_SEEDS_DIR="./domato_seeds"     # Directory where Domato seeds will be stored
NUM_DOMATO_TESTS=300                  # Number of tests to generate with Domato

# --- Radamsa ---
RADAMSA_BIN="./radamsa/bin/radamsa"    # Path to Radamsa binary
NUM_RADAMSA_MUTATIONS_PER_SEED=10     # Number of mutations per seed
MUTATED_SEEDS_DIR="./mutated_seeds"     # Directory for Radamsa-mutated seeds

# --- Master Corpus ---
MASTER_CORPUS_DIR="./master_corpus"   # Directory where all seeds will be merged

# --- AFL++ ---
AFL_BIN="afl-fuzz"                    # AFL++ executable (assumed to be installed system-wide)
AFL_OUTPUT_DIR="./afl_findings"        # Directory for AFL++ findings
# Use the dummy target binary that you compiled (make sure it's in this directory and executable)
AFL_TARGET_CMD="./dummy_target @@"     

#################################
#   1. (MANUAL) DOMATO TWEAKS    #
#################################
echo "[*] Make sure Domato grammar is updated if needed."

#################################
#      2. GENERATE WITH DOMATO   #
#################################
if [ "$SKIP_SEED_GEN" = false ]; then
    echo "[+] Generating HTML seeds with Domato..."
    mkdir -p "${DOMATO_SEEDS_DIR}"
    pushd "${DOMATO_DIR}" >/dev/null
    python3 generator.py -o "../${DOMATO_SEEDS_DIR}" -n "${NUM_DOMATO_TESTS}"
    popd >/dev/null
    echo "[+] Domato seeds generated in: ${DOMATO_SEEDS_DIR}"

    #################################
    #    3. MUTATE ALL SEEDS W/ RADAMSA
    #################################
    echo "[+] Mutating Domato seeds with Radamsa..."
    mkdir -p "${MUTATED_SEEDS_DIR}"
    for f in "${DOMATO_SEEDS_DIR}"/*.html; do
      base_name=$(basename "$f" .html)
      for (( i=1; i<=NUM_RADAMSA_MUTATIONS_PER_SEED; i++ )); do
        out_file="${MUTATED_SEEDS_DIR}/${base_name}.mut${i}.html"
        "${RADAMSA_BIN}" "$f" > "$out_file"
      done
    done
    echo "[+] Radamsa mutation complete. Mutated seeds are in: ${MUTATED_SEEDS_DIR}"

    #################################
    #     4. COMBINE INTO CORPUS     #
    #################################
    echo "[+] Combining Domato seeds and mutated seeds into a master corpus..."
    mkdir -p "${MASTER_CORPUS_DIR}"
    cp "${DOMATO_SEEDS_DIR}"/*.html "${MASTER_CORPUS_DIR}" 2>/dev/null || true
    cp "${MUTATED_SEEDS_DIR}"/* "${MASTER_CORPUS_DIR}" 2>/dev/null || true
    echo "[+] Master corpus is ready at: ${MASTER_CORPUS_DIR}"
else
    echo "[*] Skipping seed generation. Using existing master corpus at: ${MASTER_CORPUS_DIR}"
fi

#################################
#     5. LAUNCH AFL++ FUZZING    #
#################################
echo "[+] Launching AFL++ with the combined corpus in dumb mode..."
mkdir -p "${AFL_OUTPUT_DIR}"

# Use the -n flag for dumb fuzzing (i.e., skip instrumentation checks)
"${AFL_BIN}" -n -i "${MASTER_CORPUS_DIR}" -o "${AFL_OUTPUT_DIR}" -- ${AFL_TARGET_CMD}

echo "[+] AFL++ started. Check '${AFL_OUTPUT_DIR}' for crashes and coverage data."

