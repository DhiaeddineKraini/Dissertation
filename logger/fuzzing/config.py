#!/usr/bin/env python3
"""
config.py
---------
Central configuration module for the production-ready fuzzing tool.
It loads and validates environment variables, ensures critical binaries exist,
seeds random number generators for reproducibility, and sets up project-wide logging.
"""

import os
import logging
from pathlib import Path
from dotenv import load_dotenv
from typing import Optional

# -------------------------------------------------------------------------
# Load .env if present
# -------------------------------------------------------------------------
CONFIG_DIR = Path(__file__).parent              # e.g. ~/browser-fuzzer/Dissertation/logger/fuzzing
ENV_FILE = CONFIG_DIR / ".env"
if ENV_FILE.exists():
    load_dotenv(dotenv_path=ENV_FILE)

## Project base directory
BASE_DIR: str = os.getenv("BASE_DIR", "/home/dhia/browser-fuzzer/Dissertation")

# Main logging directory for orchestrator runs
LOGGER_DIR: str = os.getenv("LOGGER_DIR", os.path.join(BASE_DIR, "logger"))

# Seeds directory (HTML/JS seeds)
SEEDS_BASE: str = os.getenv(
    "SEEDS_BASE",
    os.path.join(BASE_DIR, "tests", "testing_seeds", "combined")
)

# Path to a seed classification JSON file, used for selecting “complex” seeds
CLASSIFICATIONS_JSON: str = os.path.join(SEEDS_BASE, "classifications.json")

# Baseline directory for storing reference screenshots, code coverage logs, etc.
BASELINE_DIR: str = os.getenv("BASELINE_DIR", os.path.join(BASE_DIR, "baselines"))

# Default directory for generated mutated files if none is provided
MUTATION_FOLDER: str = os.path.join(BASELINE_DIR, "mutation")

# Binaries (update if you keep them in fuzzer/ or some other place)
CHROME_BINARY_PATH = os.getenv(
    "CHROME_BINARY_PATH",
    "/home/dhia/chromium/src/out/asan/chrome"
)
CHROMEDRIVER_PATH = os.getenv(
    "CHROMEDRIVER_PATH",
    "/home/dhia/chromium/src/out/asan/chromedriver"
)

# Symbolizer (if you use it)
SYMBOLIZER_PATH = os.getenv(
    "SYMBOLIZER_PATH",
    "/usr/lib/llvm-16/bin/llvm-symbolizer"
)

# Default directory for storing detection outputs (crash logs, coverage, etc.)
DEFAULT_DETECTION_RESULTS_DIR: str = os.getenv(
    "DEFAULT_DETECTION_RESULTS_DIR",
    os.path.join(BASE_DIR, "crash_results")
)
# Coverage weighting
COVERAGE_WEIGHT_LINE  = float(os.getenv("COVERAGE_WEIGHT_LINE",  "1.0"))
COVERAGE_WEIGHT_FUNC  = float(os.getenv("COVERAGE_WEIGHT_FUNC",  "2.0"))
COVERAGE_WEIGHT_PATH  = float(os.getenv("COVERAGE_WEIGHT_PATH",  "3.0"))
CRASH_ANALYSIS_MODE   = os.getenv("CRASH_ANALYSIS_MODE", "hybrid")

# RNG seed
RNG_SEED = int(os.getenv("RNG_SEED", "12345"))

# -------------------------------------------------------------------------
# Logging
# -------------------------------------------------------------------------
logging.basicConfig(
    level=logging.INFO,
    format="[%(asctime)s][%(levelname)s] %(name)s: %(message)s",
    datefmt="%H:%M:%S"
)
logger = logging.getLogger("fuzzer-config")

def ensure_chrome_binaries_exist() -> None:
    """
    Ensures that Chrome and ChromeDriver paths exist, else raises an error.
    """
    if not Path(CHROME_BINARY_PATH).exists():
        logger.error("Chrome binary not found => %s", CHROME_BINARY_PATH)
        raise FileNotFoundError(f"CHROME_BINARY_PATH not found: {CHROME_BINARY_PATH}")

    if not Path(CHROMEDRIVER_PATH).exists():
        logger.error("ChromeDriver not found => %s", CHROMEDRIVER_PATH)
        raise FileNotFoundError(f"CHROMEDRIVER_PATH not found: {CHROMEDRIVER_PATH}")

def init_global_seed() -> None:
    """
    Seeds Python & NumPy RNG for deterministic results.
    """
    import random
    import numpy as np
    random.seed(RNG_SEED)
    np.random.seed(RNG_SEED)

# Validate required binaries
ensure_chrome_binaries_exist()
