#!/usr/bin/env python3
"""
config py
---------
central configuration module for the production ready fuzzing tool
it loads and validates environment variables ensures critical binaries exist
seeds random number generators for reproducibility and sets up project wide logging
"""

import os  
import logging 
from pathlib import Path  
from dotenv import load_dotenv 
from typing import Optional

# -------------------------------------------------------------------------
# load env if present
# -------------------------------------------------------------------------
# dir this config file
CONFIG_DIR = Path(__file__).parent 
# path env file same dir
ENV_FILE = CONFIG_DIR / ".env"
# check env exist
if ENV_FILE.exists():
    # load env var from file
    load_dotenv(dotenv_path=ENV_FILE)

# -------------------------------------------------------------------------
# project directories configuration
# -------------------------------------------------------------------------
# project base dir
# read "base_dir" env var use default path
# !! update default need !!
BASE_DIR: str = os.getenv("BASE_DIR", "/home/dhia/browser-fuzzer/Dissertation")

# main log dir fuzzer run
# env var "logger_dir" default "logger" subdir base_dir
LOGGER_DIR: str = os.getenv("LOGGER_DIR", os.path.join(BASE_DIR, "logger"))

# base dir seed file html js input
# env var "seeds_base" default path
SEEDS_BASE: str = os.getenv(
    "SEEDS_BASE",
    os.path.join(BASE_DIR, "tests", "testing_seeds", "combined")
)

# path seed classify json file
# use select complex seed
# default "classifications json" seeds_base
CLASSIFICATIONS_JSON: str = os.path.join(SEEDS_BASE, "classifications.json")

# dir baseline artifact screenshot coverage 
# env var "baseline_dir" default "baselines" subdir base_dir
BASELINE_DIR: str = os.getenv("BASELINE_DIR", os.path.join(BASE_DIR, "baselines"))

# default out dir generate mutate file
# use if no specific path give
# default "mutation" subdir baseline_dir
MUTATION_FOLDER: str = os.path.join(BASELINE_DIR, "mutation")

# -------------------------------------------------------------------------
# binary paths configuration
# -------------------------------------------------------------------------
# path chrome execute
# crucial detect
# !! point asan build use !!
# env var "chrome_binary_path" default
CHROME_BINARY_PATH = os.getenv(
    "CHROME_BINARY_PATH",
    "/home/dhia/chromium/src/out/asan/chrome" 
)
# path chromedriver execute
# require selenium match chrome version
# env var "chromedriver_path" default
CHROMEDRIVER_PATH = os.getenv(
    "CHROMEDRIVER_PATH",
    "/home/dhia/chromium/src/out/asan/chromedriver" 
)

# path llvm symbolizer tool
# decode asan crash log address name line
# env var "symbolizer_path" default
SYMBOLIZER_PATH = os.getenv(
    "SYMBOLIZER_PATH",
    "/usr/lib/llvm-16/bin/llvm-symbolizer" 
)

# -------------------------------------------------------------------------
# detection and analysis configuration
# -------------------------------------------------------------------------
# default dir detect result crash coverage report
# env var "default_detection_results_dir" default "crash_results" base_dir
DEFAULT_DETECTION_RESULTS_DIR: str = os.getenv(
    "DEFAULT_DETECTION_RESULTS_DIR",
    os.path.join(BASE_DIR, "crash_results")
)

# --- coverage weighting ---
# influence seed priority base coverage type important
# line range cover weight
COVERAGE_WEIGHT_LINE  = float(os.getenv("COVERAGE_WEIGHT_LINE",  "1.0"))
# function cover weight
COVERAGE_WEIGHT_FUNC  = float(os.getenv("COVERAGE_WEIGHT_FUNC",  "2.0"))
# path script count cover weight
COVERAGE_WEIGHT_PATH  = float(os.getenv("COVERAGE_WEIGHT_PATH",  "3.0"))

# --- crash analysis mode ---
# how crash log process raw symbolize hybrid
# "hybrid" maybe use both raw symbolize info
CRASH_ANALYSIS_MODE   = os.getenv("CRASH_ANALYSIS_MODE", "hybrid")

# -------------------------------------------------------------------------
# reproducibility configuration
# -------------------------------------------------------------------------
# seed random number generator rng
# ensure deterministic random choice reproducible
RNG_SEED = int(os.getenv("RNG_SEED", "12345"))

# -------------------------------------------------------------------------
# logging setup
# -------------------------------------------------------------------------
# config root logger project
logging.basicConfig(
    level=logging.INFO,  # min log level debug info warn error critical
    format="[%(asctime)s][%(levelname)s] %(name)s: %(message)s", # log message form
    datefmt="%H:%M:%S" # timestamp form
)
# get logger instance this config mod
logger = logging.getLogger("fuzzer-config")

# -------------------------------------------------------------------------
# validation functions
# -------------------------------------------------------------------------
def ensure_chrome_binaries_exist() -> None:
    """
    check chrome chromedriver path exist
    log error raise filenotfounderror missing stop early
    """
    chrome_path = Path(CHROME_BINARY_PATH)
    chromedriver_path = Path(CHROMEDRIVER_PATH)

    # check chrome bin
    if not chrome_path.exists():
        logger.error("chrome binary not found => %s", CHROME_BINARY_PATH)
        raise FileNotFoundError(f"chrome_binary_path not found: {CHROME_BINARY_PATH}")

    # check chromedriver bin
    if not chromedriver_path.exists():
        logger.error("chromedriver not found => %s", CHROMEDRIVER_PATH)
        raise FileNotFoundError(f"chromedriver_path not found: {CHROMEDRIVER_PATH}")

def init_global_seed() -> None:
    """
    seed python `random` `numpy` rng rng_seed
    ensure deterministic behave reproducible
    """
    import random 
    import numpy as np 

    # seed python rng
    random.seed(RNG_SEED)
    # seed numpy rng
    np.random.seed(RNG_SEED)
    # log seed confirm
    logger.info("initialized global rngs with seed: %d", RNG_SEED)

# -------------------------------------------------------------------------
# initial validation execution
# -------------------------------------------------------------------------
# validate essential bin import
ensure_chrome_binaries_exist()

# seed rng import
init_global_seed()

# log config load confirm
logger.info("configuration loaded and validated successfully")