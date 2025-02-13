#!/bin/bash
# run_fuzzer_pipeline.sh
#
# This script automates the fuzzing pipeline using:
#   - Two seed sets:
#       1. Web-Platform-Tests Repository seeds
#       2. Structured Seeds Using Domato
#   - Radamsa for random mutations
#   - AFL++ (with a dummy harness) for coverage-guided mutation
#
# Final generated inputs will be stored in:
#   ~/browser-fuzzer/Dissertation/input-generator/generated input using seeds afl++ radamsa and domato
#
# IMPORTANT:
#   Before running, ensure your system’s core dump pattern is set to "core" (not a pipe).
#   For example, run (as root):
#       echo core | sudo tee /proc/sys/kernel/core_pattern
#
#   Also, we export the following variable to avoid AFL++ warnings:
export AFL_I_DONT_CARE_ABOUT_MISSING_CRASHES=1

# -------------------------
# Directory Definitions
# -------------------------
# Base directory for Dissertation work
BASE_DIR=~/browser-fuzzer/Dissertation

# The Input Generator directory (where the following output folders will reside)
INPUT_GENERATOR_DIR="$BASE_DIR/input-generator"

# Seed folders (quotes are used because folder names contain spaces):
ORIGINAL_SEEDS_DIR="$BASE_DIR/seeds/seeds using Web-Platform-Tests Repository/seeds"
DOMATO_SEEDS_DIR="$BASE_DIR/seeds/Structured Seeds Using Domato/domato"

# Directories for the merged corpus, generated inputs, and AFL++ output:
MERGED_CORPUS_DIR="$INPUT_GENERATOR_DIR/merged_corpus"
# This is your desired output folder:
GENERATED_INPUT_DIR="$INPUT_GENERATOR_DIR/generated input using seeds afl++ radamsa and domato"
AFL_OUTPUT_DIR="$INPUT_GENERATOR_DIR/afl_output"

# Create required directories if they don't exist
mkdir -p "$MERGED_CORPUS_DIR" "$GENERATED_INPUT_DIR" "$AFL_OUTPUT_DIR"

# -------------------------
# Step 1: Merge the Seed Corpus (only regular files)
# -------------------------
echo "Merging seeds from:"
echo "  - $ORIGINAL_SEEDS_DIR"
echo "  - $DOMATO_SEEDS_DIR"

# Copy regular files from the original seeds folder (using find to avoid argument list too long)
find "$ORIGINAL_SEEDS_DIR" -maxdepth 1 -type f -exec cp {} "$MERGED_CORPUS_DIR" \;
# Copy regular files from the Domato seeds folder
find "$DOMATO_SEEDS_DIR" -maxdepth 1 -type f -exec cp {} "$MERGED_CORPUS_DIR" \;

echo "Merged seeds are saved in: $MERGED_CORPUS_DIR"

# -------------------------
# Step 2: Mutate Merged Seeds with Radamsa
# -------------------------
NUM_MUTATIONS=5  # Number of mutations per input file
echo "Mutating merged seeds with Radamsa..."
for file in "$MERGED_CORPUS_DIR"/*; do
    if [[ -f "$file" ]]; then
        filename=$(basename "$file")
        for i in $(seq 1 $NUM_MUTATIONS); do
            mutated_file="$GENERATED_INPUT_DIR/${filename}_radamsa_$i"
            radamsa "$file" > "$mutated_file"
            echo "Created mutation: $mutated_file"
        done
    fi
done

# -------------------------
# Step 3: Compile Dummy Harness for AFL++
# -------------------------
# The dummy harness simply reads the input and prints its size.
# Replace this with your target processing logic as needed.
DUMMY_HARNESS="$INPUT_GENERATOR_DIR/dummy_harness"
if [ ! -f "$DUMMY_HARNESS" ]; then
    echo "Compiling dummy harness for AFL++..."
    cat << 'EOF' > "$INPUT_GENERATOR_DIR/dummy_harness.c"
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

// Dummy harness: reads the entire input and prints its size.
// Replace this with your actual target code if needed.
int main(int argc, char *argv[]) {
    if (argc < 2) {
        fprintf(stderr, "Usage: %s <input_file>\n", argv[0]);
        return 1;
    }
    FILE *fp = fopen(argv[1], "rb");
    if (!fp) {
        perror("fopen");
        return 1;
    }
    fseek(fp, 0, SEEK_END);
    long filesize = ftell(fp);
    fseek(fp, 0, SEEK_SET);
    char *buffer = malloc(filesize + 1);
    if (!buffer) {
        fclose(fp);
        return 1;
    }
    fread(buffer, 1, filesize, fp);
    buffer[filesize] = '\0';
    printf("Processed input of size: %ld bytes\n", filesize);
    free(buffer);
    fclose(fp);
    return 0;
}
EOF
    # Compile with AFL++'s clang wrapper and AddressSanitizer enabled
    afl-clang-fast -fsanitize=address -o "$DUMMY_HARNESS" "$INPUT_GENERATOR_DIR/dummy_harness.c"
fi

# -------------------------
# Step 4: Run AFL++ Fuzzing on the Merged Corpus
# -------------------------
echo "Starting AFL++ fuzzing on the merged seeds (this may run indefinitely)..."
# This command runs AFL++ with the merged corpus as seeds.
# The '@@' placeholder is replaced by AFL++ with the input filename.
afl-fuzz -i "$MERGED_CORPUS_DIR" -o "$AFL_OUTPUT_DIR" -- "$DUMMY_HARNESS" @@

# -------------------------
# Step 5: Copy AFL++ Generated Inputs
# -------------------------
echo "Copying AFL++ generated inputs to the generated input folder..."
if [ -d "$AFL_OUTPUT_DIR/crashes" ]; then
    find "$AFL_OUTPUT_DIR/crashes" -type f -exec cp {} "$GENERATED_INPUT_DIR" \;
else
    echo "No crashes directory found in AFL output."
fi
if [ -d "$AFL_OUTPUT_DIR/queue" ]; then
    find "$AFL_OUTPUT_DIR/queue" -type f -exec cp {} "$GENERATED_INPUT_DIR" \;
else
    echo "No queue directory found in AFL output."
fi

echo "Fuzzing pipeline complete. All generated inputs are located in:"
echo "$GENERATED_INPUT_DIR"

