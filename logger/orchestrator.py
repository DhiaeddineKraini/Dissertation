#!/usr/bin/env python3                           # Use the Python 3 interpreter from the environment

import os                                         # Provides functions for interacting with the operating system
import sys                                        # Provides access to variables and functions related to the Python interpreter
import shutil                                     # Provides high-level file operations (e.g., copying files)
import random                                     # Provides functions to generate random numbers and selections
import subprocess                                 # Enables spawning new processes, connecting to their input/output/error pipes, and obtaining their return codes
import datetime                                   # Provides classes for manipulating dates and times
from pathlib import Path                          # Offers an object-oriented approach to file system paths

# Configuration variables:
BASE_DIR = Path("/home/dhia/browser-fuzzer/Dissertation")  
# The base directory for the project

LOGGER_DIR = BASE_DIR / "logger"                
# Directory where logs will be stored

SEEDS_BASE = BASE_DIR / "tests/testing_seeds/combined"  
# Base directory for the testing seed HTML files

MUTATION_SCRIPT = SEEDS_BASE / "mutation_pipeline_deterministic.py"  
# Path to the mutation pipeline script

CRASH_SCRIPT = BASE_DIR / "crash-manager/detection.py"  
# Path to the crash detection script

DEFAULT_MUTATIONS = 1                           # Default number of mutations to perform per round
DEFAULT_ROUNDS = 1                              # Default number of rounds to execute

def validate_seed(path: Path):
    """Verify seed exists and is HTML file"""
    if not path.exists():                       # Check if the file exists
        print(f"[ERROR] Seed not found: {path}") # Print an error message if it does not
        return False                            # Return False indicating the seed is invalid
    if path.suffix.lower() != ".html":          # Check if the file extension is '.html'
        print(f"[ERROR] Not an HTML file: {path}") # Print an error if the file is not HTML
        return False                            # Return False indicating the seed is invalid
    return True                                 # Return True if the seed is valid

def get_seeds(args):
    """Resolve seed paths with validation"""
    seeds = []                                  # Initialize an empty list to store valid seed paths
    for arg in args:                            # Loop over each command-line argument provided (excluding the script name)
        if arg.endswith(".html"):               # Check if the argument ends with '.html'
            seed_path = (SEEDS_BASE / arg).resolve()  
            # Resolve the full path of the seed relative to SEEDS_BASE
            if validate_seed(seed_path):        # Validate the seed file
                seeds.append(seed_path)         # Add the valid seed path to the list
    
    if len(seeds) >= 2:                         # If we have at least 2 valid seeds from the arguments
        return seeds[0], seeds[1]               # Return the first two seeds

    # If not enough seeds were provided, auto-pick seeds from the "complex" directory:
    complex_dir = SEEDS_BASE / "complex"          # Define the directory containing complex seed HTML files
    html_files = list(complex_dir.glob("*.html")) # List all HTML files in the complex directory
    
    if len(html_files) < 2:                       # If there are fewer than 2 HTML files in the directory
        print(f"[FATAL] Need at least 2 seeds in {complex_dir}")  # Print a fatal error message
        sys.exit(1)                             # Exit the program with an error status
        
    return random.sample(html_files, 2)         # Otherwise, randomly select and return 2 seed files

def main():
    # Parse command-line arguments for mutation count and rounds
    mutation_count = DEFAULT_MUTATIONS          # Set default mutation count
    num_rounds = DEFAULT_ROUNDS                 # Set default number of rounds
    
    try:
        if len(sys.argv) > 1:                   # If there is at least one command-line argument (excluding script name)
            if sys.argv[1].isdigit():           # If the first argument is a digit
                mutation_count = int(sys.argv[1])  # Set mutation count from the first argument
            elif len(sys.argv) >= 3 and sys.argv[2].isdigit():  
                # Else if there are at least 3 arguments and the second is a digit
                mutation_count = int(sys.argv[2])  # Set mutation count from the second argument
                
        if len(sys.argv) > 2 and sys.argv[-1].isdigit():  
            # If there are more than 2 arguments and the last argument is a digit
            num_rounds = int(sys.argv[-1])      # Set number of rounds from the last argument
    except ValueError:
        print("[WARN] Using default values for counts")  # Warn if conversion fails and defaults are used

    # Resolve seeds based on the command-line arguments (ignoring the first argument which is typically the count)
    seedA, seedB = get_seeds(sys.argv[1:])       # Get two seed file paths by processing the remaining arguments
    
    # Print the configuration details
    print(f"[CONFIG] Seed A: {seedA}")            
    print(f"[CONFIG] Seed B: {seedB}")
    print(f"[CONFIG] Mutations per round: {mutation_count}")
    print(f"[CONFIG] Rounds: {num_rounds}")

    # Create a run directory based on the current timestamp to store logs and results
    timestamp = datetime.datetime.now().strftime("%Y%m%d_%H%M%S")  
    # Format current time as a timestamp string (e.g., 20230224_141523)
    run_dir = LOGGER_DIR / f"run_{timestamp}"   # Define the run directory path
    run_dir.mkdir(parents=True, exist_ok=True)   # Create the run directory (including any necessary parent directories)
    print(f"[INIT] Run directory: {run_dir}")     # Inform the user of the run directory

    # Loop over the number of rounds specified
    for round_num in range(1, num_rounds + 1):
        round_path = run_dir / f"round_{round_num:03d}"  # Define a directory for the current round (padded number)
        round_path.mkdir()                        # Create the round directory
        
        # 1. Store seeds: Copy the seed files into a subdirectory for this round
        seed_store = round_path / "seed_inputs"   # Define a directory for seed inputs
        seed_store.mkdir()                        # Create the seed inputs directory
        shutil.copy(seedA, seed_store)            # Copy Seed A into the seed inputs directory
        shutil.copy(seedB, seed_store)            # Copy Seed B into the seed inputs directory
        print(f"[ROUND {round_num}] Seeds stored in {seed_store}")  # Inform that seeds have been stored

        # 2. Run mutations: Execute the mutation pipeline script to generate mutated HTML files
        mutations_dir = round_path / "mutations"    # Define a directory for mutation outputs
        mutations_dir.mkdir()                       # Create the mutations directory
        
        mutation_cmd = [                           # Build the command to run the mutation script
            "python3", str(MUTATION_SCRIPT),       # Use python3 to run the mutation script
            str(mutation_count)                    # Pass the mutation count as an argument to the script
        ]
        
        env = os.environ.copy()                     # Copy the current environment variables
        env.update({                               # Update the environment with seed and output directory information
            "MUTATION_SEED_A": str(seedA),
            "MUTATION_SEED_B": str(seedB),
            "MUTATION_OUT_DIR": str(mutations_dir)
        })
        
        result = subprocess.run(                   # Run the mutation command as a subprocess
            mutation_cmd,
            env=env,                               # Use the updated environment
            stdout=subprocess.PIPE,                # Capture standard output
            stderr=subprocess.STDOUT,              # Merge standard error into standard output
            text=True                              # Return output as a string (text mode)
        )
        
        # Save the mutation process output (logs) to a file in the mutations directory
        (mutations_dir / "mutation.log").write_text(result.stdout)
        print(f"[ROUND {round_num}] Mutation completed (code={result.returncode})")
        
        # 3. Run crash detection: Execute the crash detection script on the generated mutations
        crash_dir = round_path / "crash_results"    # Define a directory for crash detection results
        crash_dir.mkdir()                           # Create the crash detection directory
        
        crash_cmd = ["python3", str(CRASH_SCRIPT), str(mutations_dir)]  
        # Build the command to run the crash detection script, passing the mutations directory as an argument
        crash_result = subprocess.run(             # Run the crash detection command as a subprocess
            crash_cmd,
            stdout=subprocess.PIPE,                # Capture standard output
            stderr=subprocess.STDOUT,              # Merge standard error into standard output
            text=True                              # Return output as text
        )
        
        # Save the crash detection logs to a file in the crash results directory
        (crash_dir / "detection.log").write_text(crash_result.stdout)
        print(f"[ROUND {round_num}] Crash detection completed (code={crash_result.returncode})")

    # After all rounds are complete, print the location of the final results
    print(f"[COMPLETE] Final results in {run_dir}")

if __name__ == "__main__":                       # If this script is executed (not imported as a module)
    main()                                       # Run the main function
