#!/usr/bin/env python3
"""
detection.py
------------
Executes mutated HTML files in an ASan-enabled Chrome to detect anomalies, crashes,
and gather deep, detailed reporting.
"""

import os
import glob 
import json 
import time 
import platform 
import subprocess 
import logging 
import hashlib 
import argparse 
import psutil 
import re 
import atexit 
import tempfile 
import threading 
from collections import defaultdict, Counter 
from datetime import datetime 
from typing import Any, Dict, List, Optional 
from io import BytesIO 
import matplotlib.pyplot as plt 
import pandas as pd 
from tabulate import tabulate 
from ddmin import ddmin  
import shutil 
import uuid 
from selenium.webdriver.support import expected_conditions as EC 
from selenium.webdriver.common.action_chains import ActionChains 
from urllib.parse import unquote 
from selenium.webdriver.chrome.options import Options 
from selenium.webdriver.remote.remote_connection import RemoteConnection 
import seaborn as sns 
from selenium import webdriver 
from selenium.webdriver.chrome.service import Service 
from selenium.webdriver.common.by import By 
from selenium.webdriver.support.ui import WebDriverWait 
from selenium.common.exceptions import WebDriverException, TimeoutException 
from tenacity import retry, stop_after_attempt, wait_exponential
import axe_selenium_python 


# import configuration settings from config.py
from config import (
    CHROME_BINARY_PATH,
    CHROMEDRIVER_PATH,
    SYMBOLIZER_PATH,
    MUTATION_FOLDER,
    BASELINE_DIR,
    DEFAULT_DETECTION_RESULTS_DIR,
    CRASH_ANALYSIS_MODE,
    COVERAGE_WEIGHT_LINE,
    COVERAGE_WEIGHT_FUNC,
    COVERAGE_WEIGHT_PATH,
    logger as base_logger, 
)

# setup command line argument parser
parser = argparse.ArgumentParser(
    description="Advanced detection with deep & detailed reporting."
)
# argument for the directory containin mutated files, can be optional uses default from config
parser.add_argument(
    "mutation_dir",
    nargs="?", # means 0 or 1 argument
    default=os.getenv("DETECTION_TARGET_DIR", MUTATION_FOLDER), # get from env var or use config default
    help="Directory containing the mutated HTML files to test.",
)
# argument for report formats
parser.add_argument(
    "--report-formats",
    default="text,json",  # default formats are now text and json
    help="Comma-separated list of report formats to generate (text,json). Default: text,json",
)
# parse the arguments provided when runnin the script
args = parser.parse_args()
# store the mutation directory path
MUTATION_DIR: str = args.mutation_dir
# parse the report formats argument into a list, make lowercase and remove spaces
REPORT_FORMATS = [fmt.strip().lower() for fmt in args.report_formats.split(",")]


# setup logger specifically for this detection script
logger = logging.getLogger("detection-advanced")
logger.setLevel(logging.DEBUG) # set log level to debug to see detailed logs


def get_chrome_options() -> Options:
    """configure and return chrome options for selenium."""
    options = Options()
    # run chrome headless (no ui window) using the new method
    options.add_argument("--headless=new")
    # overcome resource limits in docker/linux environments
    options.add_argument("--disable-dev-shm-usage")
    # enable specific chrome features, might improve stability or performance
    options.add_argument("--enable-features=NetworkService,NetworkServiceInProcess")
    # force standard screen scaling
    options.add_argument("--force-device-scale-factor=1")
    # disable gpu acceleration, often needed in headless/server environments
    options.add_argument("--disable-gpu")
    # disable the sandbox, sometimes required for asan or in certain environments
    options.add_argument("--no-sandbox")
    # another sandbox related flag
    options.add_argument("--disable-setuid-sandbox")
    # disable software rendering fallback
    options.add_argument("--disable-software-rasterizer")
    # prevent chrome from throttling background tabs/timers
    options.add_argument("--disable-background-timer-throttling")
    # disable browser extensions, might interfere with fuzzing
    options.add_argument("--disable-extensions")  
    # disable background network activity
    options.add_argument("--disable-background-networking")  
    # another network service flag
    options.add_argument("--enable-features=NetworkServiceInProcess")  
    # increase javascript heap size limit
    options.add_argument("--js-flags=--max-old-space-size=8192")
    # set some chrome preferences
    prefs = {
        "profile.managed_default_content_settings.images": 2, # disable images
        "profile.default_content_setting_values.javascript": 1, # ensure javascript is enabled
    }
    options.add_experimental_option("prefs", prefs)
    return options


def enable_script_interruption(driver: webdriver.Chrome):
    """tries enable cdp features for better debugging/control."""
    try:
        # enable chrome devtools protocol domains
        driver.execute_cdp_cmd("Runtime.enable", {})
        driver.execute_cdp_cmd("Debugger.enable", {})
        # set how deep async call stacks should be tracked
        driver.execute_cdp_cmd("Debugger.setAsyncCallStackDepth", {"maxDepth": 32})
        # clear any existing console messages
        driver.execute_cdp_cmd("Runtime.discardConsoleEntries", {})
        # enable performance domain
        driver.execute_cdp_cmd("Performance.enable", {})
    except Exception as e:
        # log warning if enabling fails
        logger.warning("Failed enabling script interruption (CDP): %s", e)


class MemoryWatcher:
    """simple class to check current process memory usage."""
    def __init__(self, max_mb=4096):
        # set the maximum allowed memory in megabytes
        self.max_mb = max_mb

    def check(self):
        """checks if current memory usage is below the limit."""
        process = psutil.Process(os.getpid()) # get current process
        # get resident set size (rss) memory in megabytes
        used_mb = process.memory_info().rss / 1024**2
        # return true if used memory is less than max allowed
        return used_mb < self.max_mb


def validate_symbolizer_version(chrome_version: str) -> bool:
    """checks if symbolizer version is compatible with chrome version."""
    # compares major version numbers of chrome and llvm symbolizer
    try:
        # try get major version from chrome version string
        major_ver = int(chrome_version.split()[1].split(".")[0])
        # try get symbolizer version from its output
        sym_ver = subprocess.check_output([SYMBOLIZER_PATH, "--version"], text=True)
        sym_major = int(sym_ver.split()[-1].split(".")[0])
        # check if major versions are close (within 2)
        return abs(major_ver - sym_major) <= 2
    except Exception:
        # return false if any error happen during version check
        return False


class CoverageCDP:
    """handles javascript coverage collection using chrome devtools protocol."""
    def __init__(self, driver: webdriver.Chrome) -> None:
        self.driver = driver # store the selenium driver instance
        self.enabled = False # flag to track if coverage is currently active

    def start_js_coverage(self) -> None:
        """sends cdp commands to start precise javascript coverage."""
        logger.debug(
            "[COVERAGE] start_js_coverage: Starting coverage collection..."
        )  # added logging
        try:
            # enable the profiler domain
            self.driver.execute_cdp_cmd("Profiler.enable", {})
            # start precise coverage collection
            self.driver.execute_cdp_cmd(
                "Profiler.startPreciseCoverage", {"callCount": False, "detailed": False}
            )
            self.enabled = True # set flag
            logger.debug(
                "[COVERAGE] start_js_coverage: Coverage collection started successfully."
            )  # added logging
        except Exception as e:
            # log warning if starting coverage fails
            logger.warning("[COVERAGE] start_js_coverage => %s", e)
            logger.warning(
                "[COVERAGE] start_js_coverage: Failed to start coverage collection."
            )  # added logging

    def stop_js_coverage(self) -> List[Dict[str, Any]]:
        """sends cdp commands to stop coverage and retrieve the data."""
        if not self.enabled: # if not started, return empty list
            logger.debug(
                "[COVERAGE] stop_js_coverage: Coverage not enabled, returning empty data."
            )  # added logging
            return []
        try:
            logger.debug(
                "[COVERAGE] stop_js_coverage: Stopping coverage and taking data..."
            )  # added logging
            # retrieve the collected coverage data
            result = self.driver.execute_cdp_cmd("Profiler.takePreciseCoverage", {})
            # extract the actual coverage result list
            coverage_data = result.get("result", [])
            # stop the coverage collection process
            self.driver.execute_cdp_cmd("Profiler.stopPreciseCoverage", {})
            # disable the profiler domain
            self.driver.execute_cdp_cmd("Profiler.disable", {})
            logger.debug(
                f"[COVERAGE] stop_js_coverage: Coverage data collected, {len(coverage_data)} scripts."
            )  # added logging with script count
            return coverage_data # return the collected data
        except Exception as e:
            # log warning if stopping or retrieving fails
            logger.warning("[COVERAGE] stop_js_coverage => %s", e)
            logger.warning(
                "[COVERAGE] stop_js_coverage: Error stopping coverage, returning empty data."
            )  # added logging
            return [] # return empty list on error

    def get_performance_metrics(self) -> Dict[str, Any]:
        """retrieves performance metrics using cdp."""
        try:
            # send command to get performance metrics
            metrics = self.driver.execute_cdp_cmd("Performance.getMetrics", {})
            # return the list of metrics from the result
            return metrics.get("metrics", {}) # return the metrics data
        except Exception as e:
            # log warning if fails
            logger.warning("[COVERAGE] get_performance_metrics => %s", e)
            return {} # return empty dict on error


class CrashDeduplicator:
    """manages unique crash signatures to avoid reporting duplicates."""
    def __init__(self, outdir: str) -> None:
        self.outdir = outdir # output directory for storing results
        # path to the json file storing known crash signatures
        self.signatures_file = os.path.join(outdir, "unique_crashes.json")
        # dictionary to hold known signatures in memory
        self.known_signatures: Dict[str, Any] = {}
        # load existing signatures from file on initialization
        self._load_signatures()

    def _load_signatures(self) -> None:
        """loads known crash signatures from the json file."""
        if os.path.exists(self.signatures_file): # check if file exists
            try:
                # open and parse the json file
                with open(self.signatures_file, "r", encoding="utf-8") as f:
                    self.known_signatures = json.load(f)
            except Exception as e:
                # log warning if loading fails
                logger.warning("Failed loading signatures: %s", e)

    def _save_signatures(self) -> None:
        """saves the current known signatures back to the json file."""
        # open the file for writing
        with open(self.signatures_file, "w", encoding="utf-8") as f:
            # dump the known_signatures dict to json with indentation
            json.dump(self.known_signatures, f, indent=2)

    def hybrid_signature(self, raw_log: str, symbolized: str) -> str:
        """generates a crash signature based on both raw and symbolized logs."""
        # regex to find memory addresses
        addr_re = re.compile(r"0x[0-9a-f]{6,}")
        # take top 5 lines of symbolized log
        lines_sym = symbolized.split("\n") if symbolized else []
        top_sym = "\n".join(lines_sym[:5])
        # normalize symbolized lines by replacing addresses
        normalized_sym = addr_re.sub("0xADDR", top_sym)
        # take top 5 lines of raw log
        lines_raw = raw_log.split("\n")[:5]
        # normalize raw lines by replacing addresses
        normalized_raw = addr_re.sub("0xADDR", "\n".join(lines_raw))
        # combine normalized parts
        combined = normalized_sym + "\n---\n" + normalized_raw
        # return sha256 hash of the combined string as signature
        return hashlib.sha256(combined.encode("utf-8")).hexdigest()

    def check_or_add_crash(
        self, raw_log_path: str, symbolized_trace: str
    ) -> tuple[bool, str]:
        """checks if a crash is new, adds it if it is, returns (is_new, signature)."""
        # read the raw crash log content
        with open(raw_log_path, "r", encoding="utf-8") as f:
            raw_log_content = f.read()
        # generate the signature for this crash
        sign = self.hybrid_signature(raw_log_content, symbolized_trace)
        # check if signature is already known
        is_new = sign not in self.known_signatures
        if is_new: # if it's a new crash
            # add it to known signatures with timestamp and log samples
            self.known_signatures[sign] = {
                "firstSeen": datetime.now().isoformat(),
                "sampleSym": symbolized_trace[:500], # store first 500 chars
                "sampleRaw": raw_log_content[:500], # store first 500 chars
            }
            # save the updated signatures list to file
            self._save_signatures()
        # return whether it was new and the signature itself
        return is_new, sign


class RootCauseAnalyzer:
    """simple classifier for asan crash types based on log content."""
    @staticmethod
    def classify_crash_log(log_text: str) -> str:
        """tries classify the crash type by looking for keywords in the log."""
        txt = log_text.lower() # convert log to lowercase for case-insensitive search
        # check for common asan error types
        if "use-after-free" in txt:
            return "Use-After-Free"
        if "heap-buffer-overflow" in txt:
            return "Heap-Buffer-Overflow"
        if "double-free" in txt:
            return "Double-Free"
        if "undefinedbehavior" in txt or "undefined-behavior" in txt:
            return "UB-Sanitizer"
        # if no specific keyword found, return unknown
        return "Unknown"


def re_run_detection_for_file(html_path: str, mini_outdir: str) -> bool:
    """runs detection on a single file, used during crash input minimization."""
    from selenium.webdriver.chrome.options import Options # import options here if needed

    # setup asan log path specific for minimization runs
    asan_log_path = os.path.join(mini_outdir, "ASAN_minimization_%n_%p.log")
    # copy current environment variables
    env = os.environ.copy()
    # get existing asan options
    existing_asan = env.get("ASAN_OPTIONS", "")
    if existing_asan: # append colon if options already exist
        existing_asan += ":"
    # set asan options for minimization: log path, leak detection, abort on error
    env["ASAN_OPTIONS"] = (
        existing_asan + f"log_path={asan_log_path}:detect_leaks=1:abort_on_error=1"
    )
    # get chrome options using the helper function
    options = get_chrome_options()
    # setup chromedriver service with the modified environment and specific log path
    serv = Service(
        executable_path=CHROMEDRIVER_PATH,
        env=env,
        log_output=os.path.join(mini_outdir, "chrome_driver_minimization.log"),
    )
    driver = None # initialize driver variable
    try:
        # start chrome webdriver
        driver = webdriver.Chrome(options=options, service=serv)
        driver.set_page_load_timeout(120) # set generous timeout
        # create file uri for the html path
        url = f"file://{os.path.abspath(html_path)}"
        driver.get(url) # load the file
        time.sleep(3) # wait a bit for potential crash to happen/log
        # check if any asan log files were created in minimization output dir
        logs_created = glob.glob(os.path.join(mini_outdir, "ASAN_minimization_*.log"))
        if not logs_created: # if no logs created, maybe didn't crash
            return False
        # if log file exists, read it
        with open(logs_created[0], "r", encoding="utf-8") as lf:
            content = lf.read()
            # check if the log contains the asan error message
            if "AddressSanitizer" in content:
                return True # return true if it crashed
    except Exception as e:
        # log warning if any error occurred during the re-run
        logger.warning("[MINIMIZATION] Re-run detection => %s", e)
        return False # return false on error
    finally:
        # ensure driver is quit even if errors happened
        if driver:
            driver.quit()
    return False # return false if no crash detected


def minimize_crash_input(html_path: str) -> None:
    """minimizes a crashing html input using the ddmin algorithm."""

    def test_fn(content: bytes) -> bool:
        """test function for ddmin: checks if the given html content still crashes."""
        # create a temporary html file with the provided content
        with tempfile.NamedTemporaryFile(delete=False, suffix=".html", mode='wb') as tf: # write bytes
            tf.write(content)
            temp_path = tf.name
        try:
            # create a temporary directory for this test run's logs
            mini_outdir = os.path.join(os.path.dirname(temp_path), "minimization_temp")
            os.makedirs(
                mini_outdir, exist_ok=True
            )  # ensure directory for asan logs exists

            # run the detection on the temporary file
            result = re_run_detection_for_file(temp_path, mini_outdir)
            return result # return true if it still crashes, false otherwise
        except Exception as e:
            # log error if the test function itself fails
            logger.error("[MINIMIZATION] Error in test function: %s", e)
            return False # assume it didnt crash if test fails
        finally:
            # cleanup: remove the temporary file and directory
            try:
                os.remove(temp_path)
                # ignore errors when removing tree
                shutil.rmtree(mini_outdir, ignore_errors=True)
            except Exception as e:
                # log warning if cleanup failed
                logger.warning(
                    f"[MINIMIZATION] Could not remove temp file or directory : {e}"
                )

    # check if the original crashing input file exists
    if not os.path.exists(html_path):
        logger.warning("[MINIMIZATION] Crash input file not found: %s", html_path)
        return

    try:
        # read the original crashing content as bytes
        with open(html_path, "rb") as f:
            original_content = f.read()

        # run the ddmin algorithm using the original content and the test function
        minimized_content = ddmin(original_content, test_fn)

        # save the minimized content to a new file
        with open(
            html_path + ".minimized", "wb"
        ) as minimized_file:  # create new minimised file, write bytes
            minimized_file.write(minimized_content)

        logger.info(
            "[MINIMIZATION] Minimized crash input saved to: %s",
            html_path + ".minimized",
        )

    except Exception as e:
        # log error if minimization process fails
        logger.error("[MINIMIZATION] Error during minimization: %s", e)


class BestChromeDetector:
    """main class orchestrating the detection process for multiple files."""
    def __init__(self) -> None:
        logger.info("[DETECTION] Deep & Detailed Reporting.")
        # setup output directories
        self.setup_directories()
        # dictionary to store results for each test file
        self.results: Dict[str, Any] = {}
        # dictionary to store coverage data for each file
        self.coverage_map: Dict[str, List[Dict[str, Any]]] = {}
        # initialize crash deduplicator helper
        self.crash_deduper = CrashDeduplicator(OUTPUT_DIR)
        # list to keep track of temporary files for later cleanup
        self.temp_files: List[str] = []
        # list to store memory usage trend data
        self.memory_trend: List[Dict[str, Any]] = []
        # default timeout for tests
        self.global_timeout = 300 # seconds
        # longer timeout for tests involving potentially slow checks
        self.important_timeout = 600  # 10 minutes in seconds
        # shorter timeout for less critical checks
        self.less_important_timeout = 300  # 5 minutes in seconds
        # number of times to retry a failed test
        self.retry_count = 2
        # default asan options dictionary
        self.asan_options = {
            "detect_leaks": "1", # enable leak detection
            "abort_on_error": "1", # ensure process exits on error
            # log path template
            "log_path": f"{OUTPUT_DIR}/asan_logs/ASAN_%n_%p.log",
            "allocator_may_return_null": "1", # handle allocation failures maybe
            "malloc_context_size": "10", # stack trace depth for mallocs
            "symbolize": "1", # request symbolization in log
        }

    def setup_directories(self) -> None:
        """creates all necessary output directories for storing results."""
        # list of subdirectories to create within the main output directory
        dirs = [
            os.path.join(OUTPUT_DIR, "logs"), # general logs
            os.path.join(OUTPUT_DIR, "asan_logs"), # asan specific logs
            os.path.join(OUTPUT_DIR, "reports"), # final reports (json, text)
            os.path.join(OUTPUT_DIR, "network_logs"), # network logs
            os.path.join(OUTPUT_DIR, "performance"), # performance metrics
            os.path.join(OUTPUT_DIR, "accessibility"), # accessibility reports
            os.path.join(OUTPUT_DIR, "storage"), # storage related artifacts
            os.path.join(OUTPUT_DIR, "localization"), # localization artifacts
            os.path.join(OUTPUT_DIR, "sym_versions"), # symbolizer cache maybe
            os.path.join(OUTPUT_DIR, "crash_logs"), # specific crash artifact logs
        ]
        # create each directory, exist_ok=true prevents error if it already exists
        for d in dirs:
            os.makedirs(d, exist_ok=True)
        # register the cleanup function to run when the script exits
        atexit.register(self._cleanup_temp_files)

        # initialize the detailed json report file if it doesnt exist
        det_json = os.path.join(OUTPUT_DIR, "reports", "detailed_report.json")
        if not os.path.exists(det_json):
            with open(det_json, "w") as jf:
                # create basic structure with metadata
                base_data = {
                    "metadata": {
                        "system": platform.uname()._asdict(), # system info
                        "execution_time": datetime.now().isoformat(), # start time
                        "chrome_version": "UNKNOWN", # placeholder for version
                    },
                    "tests": {}, # placeholder for test results
                }
                json.dump(base_data, jf, indent=2) # write json to file

    @retry(stop=stop_after_attempt(3), wait=wait_exponential(multiplier=1, max=10))
    def init_chrome_with_retry(self):
        """wraps init_chrome with tenacity retry logic."""
        # calls init_chrome, retries 3 times with exponential backoff if it fails
        return self.init_chrome()

    def init_chrome(self) -> webdriver.Chrome:
        """initializes and returns a selenium chrome webdriver instance."""
        options = webdriver.ChromeOptions()
        # set path to the chrome binary
        options.binary_location = CHROME_BINARY_PATH
        # create a temporary directory for user data
        temp_user_data_dir = tempfile.mkdtemp(prefix="chrome_user_data_")
        # add the temp dir path to chrome options
        options.add_argument(f"--user-data-dir={temp_user_data_dir}")
        # add common headless/fuzzing options
        options.add_argument("--headless=new")
        options.add_argument("--no-sandbox")
        options.add_argument("--disable-dev-shm-usage")
        options.add_argument("--js-flags=--max-old-space-size=8192")
        # try disable automation detection features
        options.add_argument("--disable-blink-features=AutomationControlled")
        # allow loading local files
        options.add_argument("--allow-file-access-from-files")
        # disable media session api
        options.add_argument("--disable-media-session-api")
        # allow autoplay without user interaction
        options.add_argument("--autoplay-policy=no-user-gesture-required")
        # enable chrome's built-in crash reporter
        options.add_argument("--enable-crash-reporter")
        # disable extensions
        options.add_argument("--disable-extensions")
        # specify directory for chrome to store crash dumps
        options.add_argument(f"--crash-dumps-dir={OUTPUT_DIR}/crash_dumps")
        # enable logging preferences to capture browser and performance logs
        options.set_capability(
            "goog:loggingPrefs", {"browser": "ALL", "performance": "ALL"}
        )

        # ensure asan log directory exists
        asan_log_dir = os.path.join(OUTPUT_DIR, "asan_logs")
        os.makedirs(asan_log_dir, exist_ok=True) # ensure directory exists

        # copy current environment variables to modify them for this driver instance
        env = os.environ.copy()

        # setup asan options specifically for this driver instance
        asan_options = {
            "detect_leaks": "1",
            "abort_on_error": "1",  # critical for asan to work as expected
            "symbolize": "1",  # if you have symbolization tools available
            # set unique log path for this specific driver instance using pid
            "log_path": os.path.join(asan_log_dir, f"ASAN_%n_%p.log"),
        }

        # get any existing asan options from environment
        existing_asan_options = env.get("ASAN_OPTIONS")
        if existing_asan_options:
            # parse existing options string into dict
            existing_dict = {
                part.split("=")[0]: part.split("=")[1]
                for part in existing_asan_options.split(":")
                if "=" in part
            }
            # update our options dict with the existing ones
            asan_options.update(existing_dict)
        # format the final asan options dict back into a string
        env["ASAN_OPTIONS"] = ":".join(f"{k}={v}" for k, v in asan_options.items())

        # setup chromedriver service
        logs_dir = os.path.join(OUTPUT_DIR, "logs") # place in the 'logs' subdirectory
        os.makedirs(logs_dir, exist_ok=True)       # ensure the directory exists
        chromedriver_log_path = os.path.join(logs_dir, "chromedriver.log") # use the consistent name
        service = Service(
            executable_path=CHROMEDRIVER_PATH, # path to chromedriver executable
            env=env, # pass the modified environment with asan options
           # service_args=["--verbose"], # optional verbose logging from chromedriver
            log_output=chromedriver_log_path, # log chromedriver output to file
            timeout=720, # increase service startup timeout
        )
        # create the webdriver instance using the service and options
        driver = webdriver.Chrome(service=service, options=options)
        # enable cdp domains needed for various checks
        driver.execute_cdp_cmd("Network.enable", {})
        # block common large media/font files to speed up loading
        driver.execute_cdp_cmd(
            "Network.setBlockedURLs",
            {
                "urls": [
                    "*.mp4", "*.mp3", "*.avi", "*.webm", "*.ogg", "*.wav", # video/audio
                    "*.png", "*.jpg", "*.jpeg", "*.gif", # images
                    "*.woff", "*.ttf", # fonts
                ]
            },
        )
        driver.execute_cdp_cmd("Performance.enable", {})
        # set timeouts for the remote connection and driver commands
        RemoteConnection.set_timeout(720) # long timeout for connection
        driver.set_page_load_timeout(120) # timeout for page loads
        driver.set_script_timeout(30) # timeout for javascript execution
        return driver # return the initialized driver instance

    def _is_browser_alive(self, driver) -> bool:
        """checks if the chrome browser process associated with the driver is still running."""
        try:
            # check if service process exited and window object exists
            return driver.service.process.poll() is None and driver.execute_script(
                "return !!window;"
            )
        except Exception:
            # if any error occurs assume not alive
            return False

    def _capture_crash_artifacts(self, driver):
        """tries capture browser/driver logs when a crash is suspected."""
        if driver is None: # check if driver exists
            logger.warning("No driver instance available to capture crash artifacts.")
            return
        # directory to store crash logs
        log_dir = os.path.join(OUTPUT_DIR, "crash_logs")
        os.makedirs(log_dir, exist_ok=True) # ensure directory exists
        # generate unique log file name with timestamp
        log_path = os.path.join(log_dir, f"crash_{datetime.now().isoformat()}.log")
        try:
            # try retrieve logs from selenium logging api
            logs = "\n".join(
                [str(driver.get_log("browser")), str(driver.get_log("driver"))]
            )
            # write the combined logs to the file
            with open(log_path, "w", encoding="utf-8") as f:
                f.write(logs)
        except Exception as ex:
            # log warning if capturing artifacts fails
            logger.warning(f"Failed to capture crash artifacts: {str(ex)}")

    def _execute_single_test(self, test_file: str) -> None:
        """executes all detection checks for a single html test file."""
        test_name = os.path.basename(test_file) # get filename for logging/reporting
        logger.info("[DETECTION] Start => %s", test_name)
        # initialize dictionary to store results for this test
        current = {
            "file": test_name,
            "start_time": datetime.now(),
            "artifacts": {}, # store paths to related files
            "metrics": {}, # store performance/coverage metrics
            "anomalies": [], # list of detected anomalies
            "status": "passed", # initial status
            "root_cause": "N/A", # crash root cause classification
        }

        driver = None # initialize driver variable
        monitor_thread = None # initialize timeout monitor thread variable
        execution_finished = threading.Event() # event flag to signal test completion

        try:
            # initialize chrome driver
            driver = self.init_chrome()

            # list of check functions considered more important
            important_checks = [
                "check_memory_errors", # asan checks
                "check_security_issues", # security checks
                "check_console_errors", # severe console errors
            ]
            # determine timeout based on whether important checks are run
            current_timeout = (
                self.important_timeout # use longer timeout
                if any(
                    check.__name__ in important_checks
                    for check in [ # list of functions to check against
                        self.check_memory_errors,
                        self.check_security_issues,
                        self.check_console_errors,
                    ]
                )
                else self.less_important_timeout # use shorter timeout
            )

            # set page load and script execution timeouts for driver
            driver.set_page_load_timeout(current_timeout)
            driver.set_script_timeout(current_timeout)

            # --- timeout monitoring thread ---
            def monitor_execution(driver, timeout, current, test_file):
                """thread function to monitor test execution time."""
                # pause execution for the duration of the timeout
                time.sleep(timeout)
                # check if the main execution finished event has already been set
                if execution_finished.is_set():
                    return # if finished, exit thread

                # if event not set after timeout duration, log error
                logger.error(
                    f"Test {test_file} exceeded maximum execution time of {timeout} seconds."
                )
                # record a timeout anomaly
                self.record_anomaly(
                    current,
                    "max_execution_timeout",
                    f"Test exceeded {timeout} seconds",
                    "monitor_execution",
                    anomaly_category="timeout",
                )
                current["status"] = "failed" # mark test as failed
                # try capture logs before quitting
                self._capture_crash_artifacts(driver)
                try:
                    driver.quit() # try quit the driver
                except Exception as e:
                    # log warning if quitting fails
                    logger.warning(
                        f"[ERROR] Test did not respond, unable to quit driver: {e}"
                    )
                    pass # ignore if driver cant quit

            # create and start the monitor thread
            monitor_thread = threading.Thread(
                target=monitor_execution,
                args=(driver, current_timeout, current, test_file),
                daemon=True, # daemon thread allows main program to exit
            )
            monitor_thread.start()

            # initial check if browser started correctly
            if not self._is_browser_alive(driver):
                raise RuntimeError("Browser failed to initialize")

            # enable cdp features for script control/debugging
            enable_script_interruption(driver)

            # construct file uri
            file_uri = f"file://{os.path.abspath(test_file)}"
            logger.info("Testing file: %s", file_uri)

            # --- page load and readiness checks ---
            try: # handle initial page load timeout
                driver.get(file_uri) # attempt to load the file
                execution_finished.set()  # signal successful page load
            except TimeoutException:
                # if page load times out
                logger.warning(f"Timeout loading {file_uri}")
                self.record_anomaly(
                    current,
                    "timeout_error",
                    f"Timeout loading URL",
                    "_execute_single_test",
                ) # record timeout anomaly
                return # skip further checks

            # setup wait object with shorter timeout relative to main timeout
            wait = WebDriverWait(
                driver, current_timeout // 6 # dynamic webdriverwait timeout
            )

            try: # handle document ready state timeout
                # wait until javascript reports page is interactive or complete
                wait.until(
                    lambda d: d.execute_script("return document.readyState")
                    in ["interactive", "complete"]
                )
                # try stop further loading once page seems ready
                driver.execute_script("window.stop();")
            except TimeoutException:
                # if ready state not reached within timeout
                logger.warning("Timeout waiting for document readyState")
                self.record_anomaly(
                    current,
                    "timeout_error",
                    "Timeout waiting for document readyState",
                    "_execute_single_test",
                )
                return # skip further checks

            # final check on ready state after wait
            ready_state = driver.execute_script("return document.readyState")
            logger.info("Document readyState: %s", ready_state)
            # if still not ready, raise exception
            if ready_state not in ["interactive", "complete"]:
                raise Exception(f"Document not loaded properly (state: {ready_state})")

            # check if browser process crashed during load or wait
            if driver.service.process.poll() is not None:
                raise Exception("Browser process crashed during test") # detect browser crashes

            # --- run detection checks ---
            # ********************* important checks *********************
            self.check_memory_errors(driver, current, test_file) # checks asan logs
            self.check_console_errors(driver, current) # checks browser console errors
            self.check_security_issues(driver, current) # checks security related issues

            # ********************* less critical checks *********************
            # list of other check functions to run
            more_checks = [
              # self.check_dom_structure, # disabled
                self.check_media_playback,
                self.check_storage, # local/session storage, cookies
                self.check_event_handling, # basic event listener checks
                self.check_localization, # lang attribute, placeholder text etc
                self.check_performance, # timings, long tasks
                self.check_hardware_resources, # cpu/memory usage (approximate)
                self.check_xss_patterns, # simple pattern matching for potential xss
                self.check_memory_corruption_patterns, # check asan logs again
                self.check_js_heap_usage, # check js heap size via cdp
            ]
            # run each check function
            for check in more_checks:
                # some checks need the test file path, others dont
                if check.__name__ in ["check_js_heap_usage", "check_memory_errors"]: # list checks needing filepath
                    check(driver, current, test_file)
                else:
                    check(driver, current)

            # --- coverage and performance data collection ---
            # check if browser alive one last time before collecting coverage
            if self._is_browser_alive(driver):
                # initialize coverage helper class
                coverage_agent = CoverageCDP(driver)
                # start coverage collection
                coverage_agent.start_js_coverage()
                # get detailed performance metrics via cdp
                performance_metrics = coverage_agent.get_performance_metrics()
                # store metrics in results dictionary
                current["metrics"]["performance_data_cdp"] = performance_metrics
                # check again before stopping coverage
                if self._is_browser_alive(driver) and coverage_agent: # double check
                    # stop coverage collection and get data
                    coverage_data = coverage_agent.stop_js_coverage()
                    # store coverage data in results
                    current["metrics"]["coverage_data"] = coverage_data
                    # store coverage data in the main coverage map
                    self.coverage_map[test_name] = coverage_data
                else:
                    # log warning if browser died or coverage wasnt enabled
                    logger.warning(
                        "[DETECTION] Browser not alive or coverage agent not initialized, cannot collect coverage for %s",
                        test_name,
                    ) # added warning logging

        except TimeoutException as te: # catch specific timeout exceptions
            logger.error(f"Test {test_name} timed out: {te}")
            self.record_anomaly(
                current, "timeout_error", str(te), "_execute_single_test"
            ) # record timeout anomaly

        except Exception as e: # generic exception handler for unexpected errors
            logger.error(f"Test {test_name} => Exception: {str(e)}")
            current["status"] = "failed" # mark as failed
            self._capture_crash_artifacts(driver) # attempt capture artifacts
            # try run final checks even on generic error
            if driver: # check if driver object exists
                try:
                    self.check_console_errors(driver, current) # attempt get console logs
                    self.check_security_issues(driver, current) # attempt get security logs
                except Exception as e2:
                    # log warning if final checks fail
                    logger.warning("Final anomaly detection failed: %s", e2)

        finally:
            # --- cleanup and final logging for this test ---
            execution_finished.set() # signal monitor thread to stop
            if monitor_thread and monitor_thread.is_alive(): # check if monitor thread exists and running
                monitor_thread.join(timeout=30) # wait for monitor thread to finish

            if driver: # check if driver was initialized
                try:
                    driver.quit() # ensure driver is quit
                except Exception as e:
                    # log warning if quitting driver fails
                    logger.warning(f"Error quitting driver: {e}")
            # calculate test duration
            duration = (datetime.now() - current["start_time"]).total_seconds()
            current["metrics"]["duration"] = duration
            # store the final results dictionary for this test
            self.results[test_name] = current
            # log summary of anomalies found (or none)
            if current["anomalies"]:
                for a in current["anomalies"]:
                    logger.warning(" => anomaly => %s => %s", a["type"], a["details"])
            else:
                logger.info(" => no anomalies found for %s", test_name) # log if no anomalies found
            # final log message for this test execution
            logger.info(
                "Finished => %s, took %.2fs", test_name, duration
            )

    def check_js_heap_usage(
        self, driver: webdriver.Chrome, current: Dict[str, Any], test_file: str # test_file seems unused here
    ):
        """checks javascript heap usage using cdp performance metrics."""
        try:
            # get performance metrics via cdp
            metrics = driver.execute_cdp_cmd("Performance.getMetrics", {})
            js_heap = None
            # find the specific metric for js heap size
            for m in metrics.get("metrics", []):
                if m.get("name") == "JSHeapUsedSize":
                    js_heap = m.get("value")
                    break # stop once found
            if js_heap is not None:
                # store the heap size in metrics
                current["metrics"]["js_heap"] = js_heap
                # record anomaly if heap usage seems excessive
                if js_heap > 2 * 1024**3: # 2gb threshold
                    self.record_anomaly(
                        current,
                        "memory_error", # anomaly type
                        f"Excessive JS heap usage: {js_heap} bytes",
                        "check_js_heap_usage",
                        anomaly_category="performance",
                    )
        except Exception as e:
            # record anomaly if checking heap usage fails
            self.record_anomaly(
                current,
                "memory_analysis_error", # anomaly type
                str(e),
                "check_js_heap_usage",
                anomaly_category="internal_error",
            )

    def execute_test(self, test_file: str) -> None:
        """wrapper around _execute_single_test to handle retries on timeout."""
        try:
            # loop for the configured number of retries
            for attempt in range(self.retry_count + 1):
                try:
                    # try run the main test execution logic
                    self._execute_single_test(test_file)
                    # if it completes without timeout, break retry loop
                    break
                except TimeoutException as te:
                    # if a timeout occurs
                    if attempt < self.retry_count:
                        # log warning and retry if attempts remaining
                        logger.warning(
                            f"Timeout (attempt {attempt+1}/{self.retry_count+1}) for {test_file}. Retrying..."
                        )
                        # perform cleanup before retrying
                        self._cleanup_temp_files()
                        continue # go to next attempt
                    else:
                        # if max retries reached, re-raise timeout exception
                        raise te
        except TimeoutException as te:
            # if timeout persists after retries, log final error
            logger.error(f"Test {test_file} failed due to global timeout: {te}")
            # create a specific artifact log for this failure case
            self._create_failure_artifact(test_file, te)
            raise # re-raise the final timeout exception

    def calculate_safe_concurrency(self) -> int:
        """calculates number of tests to run in parallel."""
        # this implementation forces concurrency to 1
        forced_workers = 1
        logger.info(f"Resource throttling disabled, forcing concurrency to {forced_workers}")
        return forced_workers

    def system_health_ok(self) -> bool:
        """checks if system cpu and memory usage are below thresholds."""
        # checks cpu usage < 75% and available memory > 512 mb
        return (
            psutil.cpu_percent() < 75
            and psutil.virtual_memory().available > 512 * 1024 * 1024
        )

    def _cleanup_temp_files(self):
        """cleans up temporary files and potentially kills leftover processes."""
        logger.info("Cleaning up %d temporary files", len(self.temp_files))
        # remove files tracked in self.temp_files list
        for tf in self.temp_files:
            try:
                os.remove(tf)
            except Exception:
                pass # ignore errors during cleanup
        # try kill chrome and chromedriver processes forcefully
        subprocess.run(["pkill", "-f", "chrome|chromedriver"], stderr=subprocess.DEVNULL)
        # list of common cache/temp directories
        cache_dirs = [
            tempfile.gettempdir(), # system temp dir
            "/dev/shm", # shared memory directory
            os.path.expanduser("~/.cache/chromium"), # chrome user cache
        ]
        # iterate through cache directories
        for d in cache_dirs:
            if os.path.exists(d):
                try:
                    # iterate through items in the directory
                    for item in os.listdir(d):
                        # look for items related to chromium
                        if "org.chromium." in item:
                            full_path = os.path.join(d, item)
                            # remove files/links directly
                            if os.path.isfile(full_path) or os.path.islink(full_path):
                                os.remove(full_path)
                            # remove directories recursively
                            elif os.path.isdir(full_path):
                                subprocess.run(["rm", "-rf", full_path])
                except Exception:
                    pass # ignore errors during cleanup
        logger.info("System cleanup completed")

    def _create_failure_artifact(self, test_file: str, exception: Exception) -> None:
        """creates a log file containing exception info when a test fails fundamentally."""
        # generate artifact path in the logs directory
        artifact_path = os.path.join(
            OUTPUT_DIR, "logs", f"failure_{os.path.basename(test_file)}.log"
        )
        # write the string representation of the exception to the file
        with open(artifact_path, "w", encoding="utf-8") as af:
            af.write(str(exception))
        logger.info("Created failure artifact at %s", artifact_path)

    def symbolize_trace(self, log_file: str) -> str:
        """symbolizes an asan stack trace using llvm-symbolizer."""
        try:
            # get chrome version to potentially check symbolizer compatibility
            chrome_version = subprocess.check_output(
                [CHROME_BINARY_PATH, "--version"], text=True
            ).strip()
            # directory for caching symbolizer version info maybe
            sym_cache_dir = os.path.join(OUTPUT_DIR, "sym_versions")
            if not os.path.exists(sym_cache_dir):
                os.makedirs(sym_cache_dir)
            # validate symbolizer version against chrome version
            if not validate_symbolizer_version(chrome_version):
                logger.error("Symbolizer version mismatch!")
                return "" # return empty if mismatch
        except Exception as e:
            # log warning if getting chrome version fails
            logger.warning("Error obtaining Chrome version: %s", e)
            chrome_version = "UNKNOWN" # set placeholder
        try:
            # read the raw asan log file content
            with open(log_file, "r", encoding="utf-8") as lf:
                log_data = lf.read()
            # run the symbolizer process, feeding log data via stdin
            proc = subprocess.run(
                [SYMBOLIZER_PATH, "-demangle"], # command and args
                input=log_data, # provide log data as input
                capture_output=True, # capture stdout/stderr
                text=True, # work with text, not bytes
                check=True, # raise error if symbolizer exits non-zero
            )
            # get the symbolized output from stdout
            sym = proc.stdout
            # define path for the output symbolized log file
            out_sym = os.path.join(
                OUTPUT_DIR, "asan_logs", f"symbolized_{os.path.basename(log_file)}"
            )
            # write the symbolized output to the new file
            with open(out_sym, "w", encoding="utf-8") as sf:
                sf.write(sym)
            logger.info("Symbolized => %s", out_sym)
            return sym # return the symbolized text
        except Exception as e:
            # log warning if symbolization fails
            logger.warning("Symbolization error => %s", e)
            return "" # return empty on error

    def check_memory_errors(
        self, driver: webdriver.Chrome, current: Dict[str, Any], test_file_path: str
    ) -> None:
        """checks for asan crash logs, classifies, symbolizes, and deduplicates them."""
        # find all log files in the asan logs directory
        asan_logs = glob.glob(os.path.join(OUTPUT_DIR, "asan_logs", "*.log"))
        # process each log file found
        for logf in asan_logs:
            try:
                # read the log file content
                with open(logf, "r", encoding="utf-8") as f:
                    txt = f.read()
                # check if it's actually an asan error log
                if "AddressSanitizer" in txt:
                    # classify the crash type using the helper
                    rc = RootCauseAnalyzer.classify_crash_log(txt)
                    current["root_cause"] = rc # store classification
                    sym_trace = "" # initialize variable for symbolized trace

                    # symbolize the trace if analysis mode requires it
                    if CRASH_ANALYSIS_MODE.lower() != "raw":
                        sym_trace = self.symbolize_trace(logf)
                    # check if this crash signature is new using the deduplicator
                    is_new, sign = self.crash_deduper.check_or_add_crash(logf, sym_trace)

                    # create detail string for anomaly report
                    detail = f"CrashSign={sign}, new={is_new}, rootCause={rc}"
                    # record the memory error anomaly
                    self.record_anomaly(
                        current,
                        "memory_error", # anomaly type
                        detail, # details
                        "check_memory_errors", # detector function name
                        anomaly_category="crash", # category
                    )

                    # add log file paths as artifacts in the results
                    current["artifacts"]["raw_asan_log"] = os.path.basename(logf)
                    if sym_trace:
                        # embed symbolized log filename
                        current["artifacts"]["symbolized_asan_log"] = os.path.basename(
                            os.path.join(
                                OUTPUT_DIR, "asan_logs", f"symbolized_{os.path.basename(logf)}"
                            )
                        )

                    # if the crash is new, try to minimize the input html file
                    if is_new:
                        minimize_crash_input(test_file_path)
                        # record the path to the minimized file as an artifact
                        current["artifacts"]["minimized_input"] = (
                            os.path.basename(test_file_path) + ".minimized"
                        ) # track minimized input in report

            except Exception:
                # ignore errors processing individual log files
                pass

    def check_dom_structure(
        self, driver: webdriver.Chrome, current: Dict[str, Any]
    ) -> None:
        """analyzes the dom structure for potential issues like size, depth, duplicates."""
        try:
            # 1. check total number of dom nodes
            dom_size = driver.execute_script(
                "return document.querySelectorAll('*').length;" # js to count all elements
            )
            current["metrics"]["dom_nodes"] = dom_size # store count in metrics
            # record anomaly if dom size is very large
            if dom_size > 5000:
                self.record_anomaly(
                    current,
                    "large_dom_size",
                    f"DOM contains a large number of nodes: {dom_size}",
                    "check_dom_structure",
                    anomaly_category="dom_structure",
                )

            # 2. check maximum nesting depth
            max_depth = 0
            deepest_element = None
            # recursive python function to find depth
            def get_depth(element, depth=0):
                nonlocal max_depth, deepest_element
                if depth > max_depth:
                    max_depth = depth
                    deepest_element = element
                for child in element.find_elements(By.XPATH, "./*"):
                    get_depth(child, depth + 1)
            # start depth calculation from the html element
            get_depth(driver.find_element(By.TAG_NAME, "html"))
            # record anomaly if nesting is very deep
            if max_depth > 15:
                deepest_element_html = (
                    deepest_element.get_attribute("outerHTML")
                    if deepest_element
                    else "N/A"
                )
                self.record_anomaly(
                    current,
                    "excessive_dom_nesting",
                    f"Excessive DOM nesting detected (depth: {max_depth}). Deepest element: {deepest_element_html}",
                    "check_dom_structure",
                    anomaly_category="dom_structure",
                )

            # 3. check for duplicate element ids
            duplicate_ids = driver.execute_script(
                # js to find elements with the same id
                """
                const ids = new Set();
                const duplicates = new Set();
                document.querySelectorAll('[id]').forEach(el => {
                    if (ids.has(el.id)) {
                       duplicates.add(el.id)
                    } else {
                      ids.add(el.id);
                    }
                });
                return Array.from(duplicates);
            """
            )
            if duplicate_ids: # if duplicates found
                elements_with_duplicate_ids = []
                # get outerhtml for elements with duplicate ids
                for id_value in duplicate_ids:
                    elements = driver.find_elements(By.ID, id_value)
                    for element in elements:
                        elements_with_duplicate_ids.append(
                            element.get_attribute("outerHTML")
                        )
                self.record_anomaly(
                    current,
                    "duplicate_ids",
                    {"ids": duplicate_ids, "elements": elements_with_duplicate_ids},
                    "check_dom_structure",
                    anomaly_category="dom_structure",
                )

            # 4. check for blocking scripts in body
            scripts_in_body = driver.execute_script(
                # js to find script tags in body that lack async or defer
                """
            return Array.from(document.body.querySelectorAll('script'))
                .filter(s => !s.async && !s.defer && !s.type)
                .map(s => s.outerHTML);
            """
            )
            if scripts_in_body: # if blocking scripts found
                self.record_anomaly(
                    current,
                    "blocking_scripts_in_body",
                    {"scripts": scripts_in_body},
                    "check_dom_structure",
                    anomaly_category="performance",
                )

        except Exception as e:
            # record anomaly if the dom check itself fails
            self.record_anomaly(
                current,
                "dom_structure_check_error",
                str(e),
                "check_dom_structure",
                anomaly_category="internal_error",
            )

    def check_security_issues(
        self, driver: webdriver.Chrome, current: Dict[str, Any]
    ) -> None:
        """checks for common web security issues like mixed content, csp, headers."""
        try:
            # 1. check for mixed content
            mixed_content_resources = []
            try:
                # get performance logs from selenium logging api
                performance_logs = driver.get_log("performance")
            except WebDriverException as e:
                # log warning if getting logs fails
                logger.warning(
                    f"Failed to get 'performance' logs in check_security_issues: {e}"
                )
                performance_logs = [] # use empty list if failed

            if performance_logs: # check if logs were retrieved
                # process performance log entries
                for entry in performance_logs:
                    try:
                        # parse the json message within the log entry
                        message = json.loads(entry["message"])
                        # check for network response events
                        if (
                            "message" in entry # check key exists
                            and "Network.responseReceived" in entry["message"] # check substring
                            and "params" in message["message"] # check nested keys
                            and "response" in message["message"]["params"] # check nested keys
                        ):
                            url = message["message"]["params"]["response"]["url"] # get resource url
                            # if resource url is http while page is https, its mixed content
                            if url.startswith("http://") and driver.current_url.startswith("https://"):
                                mixed_content_resources.append(url)
                    except (json.JSONDecodeError, KeyError) as e:
                        # log warning if parsing entry fails
                        logger.warning(f"Error processing performance log entry: {e}")

            if mixed_content_resources: # if mixed content found
                self.record_anomaly(
                    current,
                    "mixed_content",
                    {"resources": mixed_content_resources},
                    "check_security_issues",
                    anomaly_category="security",
                )

            # 2. check for content security policy violations in console logs
            csp_violations = []
            try:
                # get browser console logs
                browser_logs = driver.get_log("browser")
            except WebDriverException as e:
                logger.warning(
                    f"Failed to get 'browser' logs in check_security_issues: {e}"
                )
                browser_logs = [] # use empty list if failed

            if browser_logs: # ensure logs were retrieved
                # look for messages containing 'content security policy'
                for entry in browser_logs:
                    if "content security policy" in entry.get("message", "").lower():
                        csp_violations.append(entry) # store the whole log entry
            if csp_violations: # if violations found
                self.record_anomaly(
                    current,
                    "csp_violation",
                    {"violations": csp_violations}, # report the violation log entries
                    "check_security_issues",
                    anomaly_category="security",
                )

            # 3. check for missing/invalid security headers
            # get navigation timing entry which includes response headers
            nav_entry = driver.execute_script(
                "return performance.getEntriesByType('navigation')[0];"
            )
            if nav_entry: # if entry found
                # extract headers from the navigation entry
                headers = nav_entry.get("responseHeaders", [])
                # convert header list to a dictionary
                headers_dict = {header["name"].lower(): header["value"] for header in headers}
                # define required headers and their expected values/patterns
                required_headers = {
                    "x-content-type-options": "nosniff",
                    "x-frame-options": ["deny", "sameorigin"], # allow multiple valid values
                    "strict-transport-security": r"max-age=\d+; includeSubDomains", # regex pattern
                    "content-security-policy": ".+", # regex pattern (any value)
                    "x-xss-protection": "1; mode=block", # specific value
                }
                missing_or_invalid_headers = {}
                # check each required header
                for header, expected_value in required_headers.items():
                    actual_value = headers_dict.get(header)
                    if not actual_value: # if header missing
                        missing_or_invalid_headers[header] = "Missing"
                    elif isinstance(expected_value, list): # if multiple valid values
                        if actual_value not in expected_value: # check if actual value is one of the allowed ones
                            missing_or_invalid_headers[header] = f"Invalid (expected one of: {', '.join(expected_value)})"
                    elif not re.match(expected_value, actual_value): # if regex pattern check fails
                        missing_or_invalid_headers[header] = f"Invalid (does not match: {expected_value})"
                # record anomaly if any issues found
                if missing_or_invalid_headers:
                    self.record_anomaly(
                        current,
                        "missing_or_invalid_security_headers",
                        missing_or_invalid_headers,
                        "check_security_issues",
                        anomaly_category="security",
                    )

            # 4. check for insecure external script inclusion
            scripts = driver.find_elements(By.TAG_NAME, "script") # find all script tags
            insecure_scripts = []
            for script in scripts:
                src = script.get_attribute("src") # get the src attribute
                # if src exists and starts with http://
                if src and src.startswith("http://"):
                    insecure_scripts.append(src)
            if insecure_scripts: # if insecure scripts found
                self.record_anomaly(
                    current,
                    "insecure_external_script",
                    {"scripts": insecure_scripts},
                    "check_security_issues",
                    anomaly_category="security",
                )

        except Exception as e:
            # record anomaly if the security check function itself fails
            self.record_anomaly(
                current,
                "security_check_error",
                str(e),
                "check_security_issues",
                anomaly_category="internal_error",
            )

    def check_accessibility(
        self, driver: webdriver.Chrome, current: Dict[str, Any]
    ) -> None:
        """performs accessibility checks using axe-selenium-python."""
        try:
            # initialize axe engine with the selenium driver
            axe = axe_selenium_python.Axe(driver)
            # inject the axe-core javascript library into the current page
            axe.inject()
            # define rulesets/tags to test against
            rules = {
                "wcag2a": {"type": "tag", "values": ["wcag2a"]},
                "wcag2aa": {"type": "tag", "values": ["wcag2aa"]},
                "wcag21aa": {"type": "tag", "values": ["wcag21aa"]},
                "section508": {"type": "tag", "values": ["section508"]},
                "best-practice": {"type": "tag", "values": ["best-practice"]},
            }
            all_violations = [] # list to store all violations found
            # run axe analysis for each defined ruleset
            for ruleset, options in rules.items():
                results = axe.run(context="body", options={"runOnly": options}) # run on body context
                # extract violations from the results
                violations = results.get("violations", [])
                # process each violation to add more context
                for violation in violations:
                    violation["ruleset"] = ruleset # add which ruleset it came from
                    # try capture outerhtml of the violating element
                    violation["element_html"] = driver.find_element(
                        By.CSS_SELECTOR, violation["nodes"][0]["target"][0] # get selector from violation data
                    ).get_attribute("outerHTML")
                    # try capture screenshot of the violating element
                    try:
                        element = driver.find_element(By.CSS_SELECTOR, violation["nodes"][0]["target"][0])
                        violation["screenshot"] = element.screenshot_as_base64
                    except Exception as e:
                        # log warning if screenshot capture fails
                        logger.warning(f"Failed to capture screenshot of violating element: {e}")
                # add violations from this ruleset run to the main list
                all_violations.extend(violations)

            if all_violations: # if violations found across all rulesets
                # create a summary count of violations by ruleset
                summary = {}
                for v in all_violations:
                    ruleset = v["ruleset"]
                    summary[ruleset] = summary.get(ruleset, 0) + 1
                # record anomaly with the violation details and summary
                self.record_anomaly(
                    current,
                    "accessibility_violations",
                    {"violations": all_violations, "summary": summary},
                    "check_accessibility",
                    anomaly_category="accessibility",
                )

        except Exception as e:
            # record anomaly if accessibility check fails
            self.record_anomaly(
                current,
                "accessibility_check_error",
                str(e),
                "check_accessibility",
                anomaly_category="internal_error",
            )

    def check_media_playback(
        self, driver: webdriver.Chrome, current: Dict[str, Any]
    ) -> None:
        """checks status and basic playback of video/audio elements."""
        try:
            # find all video and audio elements on the page
            media_elements = driver.find_elements(By.CSS_SELECTOR, "video, audio")
            # process each media element found
            for element in media_elements:
                 # get various properties of the media element using javascript
                 media_info = driver.execute_script("""
                     const el = arguments[0];
                     return {
                         tagName: el.tagName,
                         src: el.src,
                         paused: el.paused,
                         error: el.error ? { code: el.error.code, message: el.error.message } : null,
                         readyState: el.readyState,
                         duration: el.duration,
                         networkState: el.networkState
                     };
                 """, element)

                 # check if media element reported an error
                 if media_info["error"]:
                     error_message = f"Media error: {media_info['error']['code']} - {media_info['error']['message']}"
                     self.record_anomaly(
                         current,
                         "media_playback_error",
                         error_message,
                         "check_media_playback",
                         element=element, # pass element for potential screenshot
                         anomaly_category="media",
                     )
                 # check if readyState indicates not enough data loaded
                 elif media_info["readyState"] < 4: # readyState 4 means enough data
                     self.record_anomaly(
                         current,
                         "media_playback_incomplete",
                         f"readyState: {media_info['readyState']}",
                         "check_media_playback",
                         element=element,
                         anomaly_category="media",
                     )
                 # check network state for issues
                 elif (
                     media_info.get("duration", 0) > 0 # check duration > 0
                     and media_info["networkState"] == 3 # 3 means no source found
                 ):
                     self.record_anomaly(
                         current,
                         "media_playback_no_source",
                         "No source found for media",
                         "check_media_playback",
                         element=element,
                         anomaly_category="media",
                     )

                 # --- basic playback interaction tests ---
                 try:
                     # try playing if paused
                     if media_info["paused"]:
                         # element.play() # .play() is not a selenium method
                         driver.execute_script("arguments[0].play()", element) # use js
                         time.sleep(2) # wait short time
                         # check if still paused
                         if driver.execute_script("return arguments[0].paused", element):
                             self.record_anomaly(
                                 current,
                                 "media_playback_failed_to_play",
                                 "Failed to play media",
                                 "check_media_playback",
                                 element=element,
                                 anomaly_category="media",
                             )
                     # try pausing if playing
                     else:
                         # element.pause() # use js instead
                         driver.execute_script("arguments[0].pause()", element)
                         time.sleep(2) # wait short time
                         # check if actually paused
                         if not driver.execute_script("return arguments[0].paused", element):
                             self.record_anomaly(
                                 current,
                                 "media_playback_failed_to_pause",
                                 "Failed to pause media",
                                 "check_media_playback",
                                 element=element,
                                 anomaly_category="media",
                             )

                 except Exception as e:
                     # record anomaly if interacting fails
                     self.record_anomaly(
                         current,
                         "media_playback_interaction_error",
                         str(e),
                         "check_media_playback",
                         element=element,
                         anomaly_category="media",
                     )

        except Exception as e:
            # record anomaly if the main media check function fails
            self.record_anomaly(
                current,
                "media_playback_error", # anomaly type
                str(e),
                "check_media_playback",
                anomaly_category="media", # category
            )

    def record_anomaly(
        self,
        current: Dict[str, Any],
        anomaly_type: str,
        details: Any,
        detected_by: str,
        anomaly_category: str = "general", # added category parameter
        element: Optional[webdriver.remote.webelement.WebElement] = None, # type hint for element
    ) -> None:
        """records detected anomaly information into the current test results."""
        # create dictionary for the anomaly entry
        entry = {
            "type": anomaly_type, # type of anomaly
            "category": anomaly_category,  # added category
            "timestamp": datetime.now().isoformat(), # time anomaly detected
            "details": details, # specific details
            "severity": self.get_severity(anomaly_type), # assign severity level
            "detected_by": detected_by, # which check function found it
            "artifacts": {}, # placeholder for related artifacts
        }
        # if an associated web element was provided
        if element:
             # try capture screenshot of the element and add as artifact
            screenshot_data = self.capture_element_screenshot(element)
            if screenshot_data:
                 entry["artifacts"]["element_screenshot"] = screenshot_data # descriptive artifact name

        # append the anomaly entry to the list for the current test
        current["anomalies"].append(entry)
        # mark the test status as failed
        current["status"] = "failed"
        # report update is done at the end

    def capture_element_screenshot(self, element: webdriver.remote.webelement.WebElement) -> Optional[str]: # Type hint added
        """tries capture screenshot of a specific web element."""
        try:
            # use selenium's screenshot_as_base64 method
            return element.screenshot_as_base64
        except Exception as e:
            # log error if screenshot capture fails
            logger.error(f"Error capturing element screenshot: {e}")
            return None # return nothing if failed

    def check_storage(self, driver: webdriver.Chrome, current: Dict[str, Any]) -> None:
        """tests basic functionality of local storage, session storage, and cookies."""
        try:
            # --- local storage checks ---
            # generate unique key/value for testing
            test_key = "fuzz_test_key_" + str(uuid.uuid4())[:8]
            test_value = "fuzz_test_value_" + str(uuid.uuid4())[:8]
            # try set item in local storage using javascript
            driver.execute_script(
                f"localStorage.setItem('{test_key}', '{test_value}');"
            )
            # try retrieve the item back
            retrieved_value = driver.execute_script(
                f"return localStorage.getItem('{test_key}');"
            )
            # check if retrieved value matches the original value
            if retrieved_value != test_value:
                self.record_anomaly(
                    current,
                    "local_storage_anomaly", # anomaly type
                    f"Value mismatch: expected '{test_value}', got '{retrieved_value}'",
                    "check_storage",
                    anomaly_category="storage",
                )
            # try remove the item
            driver.execute_script(f"localStorage.removeItem('{test_key}');")
            # try retrieve again after removal
            retrieved_after_remove = driver.execute_script(
                f"return localStorage.getItem('{test_key}');"
            )
            # check if item is null after removal
            if retrieved_after_remove is not None:
                self.record_anomaly(
                    current,
                    "local_storage_remove_failed",
                    "Failed to remove item from localStorage",
                    "check_storage",
                    anomaly_category="storage",
                )

            # --- session storage checks (similar logic to local storage) ---
            test_key_session = "fuzz_test_key_session" + str(uuid.uuid4())[:8] # unique key
            test_value_session = "fuzz_test_value_session" + str(uuid.uuid4())[:8] # unique value
            driver.execute_script(
                f"sessionStorage.setItem('{test_key_session}', '{test_value_session}');"
            )
            retrieved_session = driver.execute_script(
                f"return sessionStorage.getItem('{test_key_session}');"
            )
            if retrieved_session != test_value_session:
                self.record_anomaly(
                    current,
                    "session_storage_anomaly",
                    f"Value mismatch: expected '{test_value_session}', got '{retrieved_session}'",
                    "check_storage",
                    anomaly_category="storage",
                )
            driver.execute_script(f"sessionStorage.removeItem('{test_key_session}');")
            retrieved_session_after_remove = driver.execute_script(
                f"return sessionStorage.getItem('{test_key_session}');"
            )
            if retrieved_session_after_remove is not None:
                self.record_anomaly(
                    current,
                    "session_storage_remove_failed",
                    "Failed to remove item from sessionStorage",
                    "check_storage",
                    anomaly_category="storage",
                )

            # --- cookie checks ---
            cookie_name = "fuzz_test_cookie_" + str(uuid.uuid4())[:8] # unique name
            cookie_value = "fuzz_test_cookie_value_" + str(uuid.uuid4())[:8] # unique value
            # try add a cookie using selenium's method
            driver.add_cookie({"name": cookie_name, "value": cookie_value})
            # get all cookies
            cookies = driver.get_cookies()
            found = False
            # check if the added cookie exists and has the correct value
            for cookie in cookies:
                if cookie["name"] == cookie_name and cookie["value"] == cookie_value:
                    found = True
                    break
            if not found: # if cookie not found or value mismatch
                self.record_anomaly(
                    current,
                    "cookie_set_failed",
                    "Failed to set the cookie correctly.",
                    "check_storage",
                    anomaly_category="storage",
                )
            # try delete the cookie
            driver.delete_cookie(cookie_name)
            # get cookies again after deletion
            cookies_after_delete = driver.get_cookies()
            # check if cookie still exists after delete attempt
            cookie_exists_after_delete = any(
                c["name"] == cookie_name for c in cookies_after_delete
            )
            if cookie_exists_after_delete: # if cookie deletion failed
                self.record_anomaly(
                    current,
                    "cookie_deletion_failed",
                    f"Failed to delete cookie '{cookie_name}'",
                    "check_storage",
                    anomaly_category="storage",
                )

        except Exception as e:
            # record anomaly if the storage check function itself fails
            self.record_anomaly(
                current,
                "storage_error", # anomaly type
                str(e),
                "check_storage",
                anomaly_category="storage", # category
            )

    def check_event_handling(
        self, driver: webdriver.Chrome, current: Dict[str, Any]
    ) -> None:
        """tests basic event handling by programmatically adding listeners and triggering events."""
        try:
            # --- test click event ---
            click_test_id = "fuzz_click_test_" + str(uuid.uuid4())[:8] # unique id
            # execute javascript to create element and add listener
            driver.execute_script(
                f"""
                let test_element = document.createElement('button');
                test_element.id = '{click_test_id}';
                test_element.addEventListener('click', function() {{ this.setAttribute('data-clicked', 'true'); }});
                document.body.appendChild(test_element);
            """
            )
            try:
                # wait for the test button to appear
                element = WebDriverWait(driver, 10).until( # use wait
                    EC.presence_of_element_located((By.ID, click_test_id))
                )
                # simulate a click
                element.click()
                time.sleep(0.5) # wait for handler
                # check if attribute was set
                if not element.get_attribute("data-clicked"):
                    self.record_anomaly(
                        current,
                        "click_event_failed",
                        f"Click event handler not executed on element",
                        "check_event_handling",
                        anomaly_category="event_handling",
                    )
            except TimeoutException:
                # record anomaly if element not found
                self.record_anomaly(
                    current,
                    "element_not_found", # anomaly type
                    f"Element with id '{click_test_id}' not found",
                    "check_event_handling",
                    anomaly_category="event_handling",
                )

            # --- test mouseover event (similar logic) ---
            mouseover_test_id = "fuzz_mouseover_test_" + str(uuid.uuid4())[:8]
            # inject div with mouseover listener
            driver.execute_script(
                f"""
                let test_element = document.createElement('div');
                test_element.id = '{mouseover_test_id}';
                test_element.addEventListener('mouseover', function() {{ this.setAttribute('data-mouseover', 'true'); }});
                document.body.appendChild(test_element);
            """
            )
            try:
                # wait for element presence
                element = WebDriverWait(driver, 10).until(
                    EC.presence_of_element_located((By.ID, mouseover_test_id))
                )
                # simulate moving mouse cursor over element
                ActionChains(driver).move_to_element(element).perform()
                time.sleep(0.5) # wait for handler
                # check if attribute was set
                if not element.get_attribute("data-mouseover"):
                    self.record_anomaly(
                        current,
                        "mouseover_event_failed",
                        f"Mouseover event handler not executed on element",
                        "check_event_handling",
                        anomaly_category="event_handling",
                    )
            except TimeoutException:
                self.record_anomaly(
                    current,
                    "element_not_found",
                    f"Element with id '{mouseover_test_id}' not found",
                    "check_event_handling",
                    anomaly_category="event_handling",
                )

            # --- test form submission event (if forms exist) ---
            forms = driver.find_elements(By.TAG_NAME, "form") # find forms
            if forms: # if forms found
                form = forms[0] # test only the first form
                # create a unique id for potential injected submit button
                submit_button_test_id = "fuzz_submit_test_" + str(uuid.uuid4())[:8]
                # try inject a submit button into the form
                driver.execute_script(
                    f"""
                     let submit_button = document.createElement('button');
                     submit_button.type = 'submit';
                     submit_button.id = '{submit_button_test_id}';
                     arguments[0].appendChild(submit_button)
                """,
                    form, # pass form element as argument
                )
                try:
                    # wait for the injected submit button
                    submit_button = WebDriverWait(driver, 10).until(
                        EC.presence_of_element_located((By.ID, submit_button_test_id))
                    )
                    # add attribute to track submission attempt
                    driver.execute_script("arguments[0].setAttribute('data-submitted', 'false')", form)
                    # trigger form submission
                    form.submit()
                    time.sleep(2) # wait to see if navigation happened

                    # --- check if submission was prevented ---
                    # add listener *after* submission attempt (flawed logic)
                    driver.execute_script(
                        """
                        arguments[0].addEventListener('submit', function(event) {
                             event.preventDefault(); // prevent actual submission
                             this.setAttribute('data-submitted', 'prevented'); // set flag if prevented
                             });
                   """,
                        form,
                    )
                    # check the flag attribute
                    if form.get_attribute("data-submitted") == "prevented":
                        self.record_anomaly(
                            current,
                            "form_submission_prevented",
                            "Form submission prevented by JavaScript",
                            "check_event_handling",
                            anomaly_category="event_handling",
                        )
                except TimeoutException:
                    # record anomaly if submit button not found
                    self.record_anomaly(
                        current,
                        "element_not_found",
                        f"Submit button not found in form",
                        "check_event_handling",
                        anomaly_category="event_handling",
                    )

        except Exception as e:
            # record anomaly if the main event check function fails
            self.record_anomaly(
                current,
                "event_handling_error",
                str(e),
                "check_event_handling",
                anomaly_category="event_handling", # category
            )

    def check_localization(
        self, driver: webdriver.Chrome, current: Dict[str, Any]
    ) -> None:
        """checks for basic localization/internationalization issues."""
        try:
            # get lang attribute from html tag
            html_lang = driver.execute_script("return document.documentElement.lang;")
            # get dir attribute from html tag
            html_dir = driver.execute_script("return document.documentElement.dir;")

            # check if lang attribute is missing
            if not html_lang:
                self.record_anomaly(
                    current,
                    "missing_lang_attribute",
                    "The 'lang' attribute is missing from the <html> tag.",
                    "check_localization",
                    anomaly_category="localization",
                )
            # check if lang attribute value seems valid
            elif not re.match(r"^[a-zA-Z]{2,3}(-[a-zA-Z]{2,3})?$", html_lang):
                self.record_anomaly(
                    current,
                    "invalid_lang_attribute",
                    f"Invalid 'lang' attribute value: {html_lang}",
                    "check_localization",
                    anomaly_category="localization",
                )

            # check for mismatch between lang and dir attributes
            if html_lang and html_dir:
                # determine expected direction based on common rtl languages
                expected_dir = (
                    "rtl" if html_lang.startswith(("ar", "he", "fa", "ur")) else "ltr"
                )
                # record anomaly if actual direction doesn't match expected
                if html_dir != expected_dir:
                    self.record_anomaly(
                        current,
                        "lang_dir_mismatch",
                        f"'lang' and 'dir' attributes mismatch: lang={html_lang}, dir={html_dir}",
                        "check_localization",
                        anomaly_category="localization",
                    )

            # check for common placeholder text
            untranslated_text = driver.find_elements(
                By.XPATH, "//*[text()='Placeholder Text' or text()='Lorem ipsum']" # xpath query
            )
            if untranslated_text: # if placeholder text found
                elements = []
                # collect info about elements containing placeholders
                for el in untranslated_text:
                    element_info = {"tag": el.tag_name, "text": el.text}
                    elements.append(element_info)
                # record anomaly
                self.record_anomaly(
                    current,
                    "untranslated_text",
                    f"Found untranslated placeholder text: {elements}",
                    "check_localization",
                    anomaly_category="localization",
                )

            # check for potentially non-localized date formats
            date_elements = driver.find_elements(By.XPATH, "//*[contains(@*, 'date')]") # broad xpath
            for el in date_elements:
                # get type attribute or tag name
                date_format = el.get_attribute("type") or el.tag_name
                # get value attribute or text content
                date_value = el.get_attribute("value") or el.text
                if date_value: # if value exists
                    # try parse date assuming yyyy-mm-dd format
                    try:
                        datetime.strptime(date_value, "%Y-%m-%d")
                    except ValueError: # if parsing fails
                        self.record_anomaly(
                            current,
                            "invalid_date_format",
                            f"Invalid date format: {date_value}, expected YYYY-MM-DD",
                            "check_localization",
                            element=el, # pass element for screenshot
                            anomaly_category="localization",
                        )

        except Exception as e:
            # record anomaly if the localization check function fails
            self.record_anomaly(
                current,
                "localization_error",
                str(e),
                "check_localization",
                anomaly_category="localization", # category
            )

    def check_performance(
        self, driver: webdriver.Chrome, current: Dict[str, Any]
    ) -> None:
        """checks various performance metrics using navigation timing and resource timing apis."""
        try:
            # --- check overall page load time ---
            # get navigation start time via javascript
            navigation_start = driver.execute_script(
                "return window.performance.timing.navigationStart;"
            )
            # get load event end time via javascript
            load_event_end = driver.execute_script(
                "return window.performance.timing.loadEventEnd;"
            )
            # check if metrics are valid
            if navigation_start is not None and load_event_end is not None:
                load_time = load_event_end - navigation_start # calculate load time in milliseconds
                current["metrics"]["load_time"] = load_time # store metric
                # record anomaly if load time exceeds threshold
                if load_time > 5000: # 5 second threshold
                    self.record_anomaly(
                        current,
                        "slow_page_load",
                        f"Page load time exceeds threshold: {load_time} ms",
                        "check_performance",
                        anomaly_category="performance",
                    )

            # --- check individual resource load times ---
            # use resource timing api via javascript
            resource_timings = driver.execute_script(
                "return window.performance.getEntriesByType('resource');"
            )
            slow_resources = []
            # process each resource timing entry
            for resource in resource_timings:
                duration = resource.get("duration", 0) # get resource load duration
                # record resource as slow if duration exceeds threshold
                if duration > 3000: # 3 second threshold
                    slow_resources.append(
                        {
                            "url": resource["name"], # resource url
                            "duration": duration, # duration in ms
                            "initiatorType": resource.get("initiatorType"), # e.g., 'script', 'img'
                            "resourceType": resource.get("entryType"), # 'resource'
                        }
                    )
            if slow_resources: # if slow resources found
                self.record_anomaly(
                    current,
                    "slow_resources",
                    {"resources": slow_resources}, # report list of slow resources
                    "check_performance",
                    anomaly_category="performance",
                )

            # --- check for long javascript tasks ---
            # uses performance observer api
            long_tasks = driver.execute_script(
                # js to setup observer and collect long tasks
                """
                const longTasks = [];
                try {
                     // check if performanceobserver is supported
                     if (window.PerformanceObserver) {
                         // create observer
                         new PerformanceObserver(list => {
                            list.getEntries().forEach(entry => {
                                // check duration
                                if (entry.duration > 100) { // threshold 100ms
                                   longTasks.push({ name: entry.name, duration: entry.duration });
                                }
                             });
                          }).observe({type: 'longtask', buffered: true}); // observe long tasks
                     }
                } catch(e){} // ignore errors setting up observer
                // return whatever was collected immediately
                return longTasks
                """
            )
            if long_tasks: # if long tasks detected
                self.record_anomaly(
                    current,
                    "long_tasks",
                    {"tasks": long_tasks},
                    "check_performance",
                    anomaly_category="performance",
                )

            # --- check first input delay (fid) ---
            # fid is hard to measure reliably with automation
            fid = driver.execute_script(
                # js using promise and observer to try capture fid
                "return new Promise(resolve => {try {fid = new Promise(resolve => { new PerformanceObserver(list => {resolve(list.getEntries()[0].processingStart - list.getEntries()[0].startTime);}).observe({ type: 'first-input', buffered: true });});fid.then(value => resolve(value));} catch(e) {resolve(null);} })"
            )
            if fid and fid > 300: # if fid measured and exceeds threshold
                self.record_anomaly(
                    current,
                    "high_fid",
                    f"First Input Delay (FID) is high: {fid} ms",
                    "check_performance",
                    anomaly_category="performance",
                )

            # --- check time to first byte (ttfb) ---
            # uses navigation timing api again
            ttfb = driver.execute_script(
                """
                let navEntry = performance.getEntriesByType('navigation')[0];
                // calculate ttfb = response start time - request start time
                return navEntry ? navEntry.responseStart - navEntry.requestStart : null;
            """
            )
            if ttfb is not None and ttfb > 1000: # if ttfb calculated and exceeds threshold
                self.record_anomaly(
                    current,
                    "high_ttfb",
                    f"Time to First Byte (TTFB) is high: {ttfb} ms",
                    "check_performance",
                    anomaly_category="performance",
                )

        except Exception as e:
            # record anomaly if the performance check function fails
            self.record_anomaly(
                current,
                "performance_check_error",
                str(e),
                "check_performance",
                anomaly_category="internal_error",
            )

    def check_hardware_resources(
        self, driver: webdriver.Chrome, current: Dict[str, Any]
    ) -> None:
        """estimates cpu and memory usage during the test run."""
        try:
            # get python process info using psutil
            process = psutil.Process(os.getpid()) # gets the python script process
            # record initial metrics
            initial_cpu_percent = psutil.cpu_percent(interval=None) # get overall cpu usage
            initial_memory_info = process.memory_info()
            initial_disk_io = psutil.disk_io_counters() # get disk io stats
            # wait for a short period
            time.sleep(5)
            # record final metrics
            final_cpu_percent = psutil.cpu_percent(interval=None)
            final_memory_info = process.memory_info()
            final_disk_io = psutil.disk_io_counters()

            # calculate approximate deltas
            cpu_usage = final_cpu_percent # use final percent as approximation
            memory_usage = (final_memory_info.rss - initial_memory_info.rss) / (1024**2) # memory delta for script
            disk_read = (final_disk_io.read_bytes - initial_disk_io.read_bytes) / (1024**2) # disk read delta
            disk_write = (final_disk_io.write_bytes - initial_disk_io.write_bytes) / (1024**2) # disk write delta

            # store the calculated deltas in metrics
            current["metrics"]["cpu_usage"] = cpu_usage
            current["metrics"]["memory_usage"] = memory_usage
            current["metrics"]["disk_read"] = disk_read
            current["metrics"]["disk_write"] = disk_write

            # record anomalies if deltas exceed arbitrary thresholds
            if cpu_usage > 90: # system cpu usage high
                self.record_anomaly(
                    current,
                    "high_cpu_usage",
                    f"CPU usage exceeded threshold: {cpu_usage:.2f}%",
                    "check_hardware_resources",
                    anomaly_category="hardware",
                )
            if memory_usage > 500: # script memory increase high
                self.record_anomaly(
                    current,
                    "high_memory_usage",
                    f"Memory usage exceeded threshold: {memory_usage:.2f} MB",
                    "check_hardware_resources",
                    anomaly_category="hardware", # maybe internal_error is better?
                )
            if disk_read > 100: # disk read high
                self.record_anomaly(
                    current,
                    "high_disk_read",
                    f"Disk read exceeded threshold: {disk_read:.2f} MB",
                    "check_hardware_resources",
                    anomaly_category="hardware",
                )
            if disk_write > 50: # disk write high
                self.record_anomaly(
                    current,
                    "high_disk_write",
                    f"Disk write exceeded threshold: {disk_write:.2f} MB",
                    "check_hardware_resources",
                    anomaly_category="hardware",
                )

            # log the approximate usage values
            logger.info(
                "Resource Usage: CPU=%.2f%%, Memory=%.2f MB, Disk Read=%.2f MB, Disk Write=%.2f MB",
                cpu_usage, memory_usage, disk_read, disk_write
            )

        except Exception as e:
            # record anomaly if the hardware check function fails
            self.record_anomaly(
                current,
                "hardware_check_error",
                str(e),
                "check_hardware_resources",
                anomaly_category="internal_error",
            )

    def check_console_errors(
        self, driver: webdriver.Chrome, current: Dict[str, Any]
    ) -> None:
        """retrieves and analyzes browser console logs for errors and warnings."""
        try:
            # get console logs using selenium logging api
            console_logs = driver.get_log("browser")
            errors_and_warnings = []
            # process each log entry
            for log_entry in console_logs:
                level = log_entry["level"] # get log level
                # filter for severe errors or warnings
                if level in ["SEVERE", "WARNING"]:
                    message = log_entry["message"] # get log message
                    source = log_entry.get("source", "unknown") # get source
                    url = log_entry.get("url", "") # get associated url

                    # --- try categorize the error ---
                    error_type = "general" # default category
                    msg_lower = message.lower() # lowercase message
                    if "net::err_" in msg_lower or "failed to load resource" in msg_lower or "status code:" in msg_lower:
                        error_type = "network_error"
                    elif "javascript error:" in msg_lower or "uncaught" in msg_lower or "syntaxerror" in msg_lower:
                        error_type = "javascript_error"
                    elif "404" in message or "500" in message: # check for http status codes
                        error_type = "http_error"

                    # store relevant information
                    errors_and_warnings.append(
                        {
                            "level": level,
                            "type": error_type, # category guess
                            "message": message,
                            "source": source,
                            "url": url,
                        }
                    )
            if errors_and_warnings: # if errors or warnings found
                # create summary counts by error type
                error_counts = {}
                for error in errors_and_warnings:
                    err_type = error["type"]
                    error_counts[err_type] = error_counts.get(err_type, 0) + 1

                # structure details for the anomaly report
                anomaly_details = {
                    "errors_warnings": errors_and_warnings, # list of errors/warnings
                    "error_counts": error_counts, # summary counts
                }
                # record anomaly
                self.record_anomaly(
                    current,
                    "console_errors_warnings", # anomaly type
                    anomaly_details,
                    "check_console_errors",
                    anomaly_category="console",
                )

        except Exception as e:
            # record anomaly if the console check function fails
            self.record_anomaly(
                current,
                "console_check_error",
                str(e),
                "check_console_errors",
                anomaly_category="console", # category
            )

    def check_xss_patterns(
        self, driver: webdriver.Chrome, current: Dict[str, Any]
    ) -> None:
        """performs basic pattern matching in html source and console logs for potential xss."""
        try:
            # get the full html source of the page
            html_content = driver.page_source
            # list of regex patterns commonly associated with xss
            xss_patterns = [
                r"<script[^>]*>[^<]*</script>", # script tags
                r"on\w+=\".*javascript:.*\"", # on... handlers with javascript:
                r"data:text/html;base64,[a-zA-Z0-9+/=]+", # data urls with html
                r"eval\(", # eval function call
                r"fromCharCode\(", # fromcharcode call
                r"String\.fromCharCode\(", # string.fromcharcode call
                r"setTimeout\(", # settimeout call
                r"setInterval\(", # setinterval call
                r"<iframe[^>]*src=[^>]*>", # iframe tags
                r"<object[^>]*data=[^>]*>", # object tags
                r"<embed[^>]*src=[^>]*>", # embed tags
            ]
            suspicious_elements = []
            # search for each pattern in the html source
            for pattern in xss_patterns:
                 matches = re.finditer(pattern, html_content, re.IGNORECASE) # ignore case
                 for match in matches:
                     # try find the element containing the match using xpath
                     try:
                         # this xpath is very basic
                         matching_element = driver.find_element(
                             By.XPATH, f"//*[contains(text(),'{match.group(0)}')]" # find element containing matched text
                         )
                         # store info about the potentially suspicious element
                         element_info = {
                             "tag": matching_element.tag_name,
                             "outerHTML": matching_element.get_attribute("outerHTML"),
                         }
                         suspicious_elements.append(
                             {"element_info": element_info, "pattern": pattern, "match": match.group(0)}
                         )
                     except Exception:
                         # if finding element fails, just report pattern and matched text
                         suspicious_elements.append(
                             {"pattern": pattern, "match": match.group(0)}
                         )

            if suspicious_elements: # if suspicious patterns found in html
                self.record_anomaly(
                    current,
                    "potential_xss_in_html",
                    suspicious_elements,
                    "check_xss_patterns",
                    anomaly_category="security",
                )

            # --- check console logs for executed patterns ---
            # iterate through browser console logs
            for entry in driver.get_log("browser"):
                if entry["level"] == "SEVERE": # look at severe errors
                    message = entry.get("message", "")
                    decoded_message = unquote(message) # decode url-encoded parts
                    # check if the error message contains any of the xss patterns
                    if any(re.search(p, decoded_message, re.IGNORECASE) for p in xss_patterns):
                        # record anomaly if pattern found in error message
                        self.record_anomaly(
                            current,
                            "potential_xss_execution", # type suggests executed xss
                            message, # report the original message
                            "check_xss_patterns",
                            anomaly_category="security",
                        )

        except Exception as e:
            # record anomaly if the xss check function fails
            self.record_anomaly(
                current,
                "xss_check_error",
                str(e),
                "check_xss_patterns",
                anomaly_category="internal_error",
            )

    def check_memory_corruption_patterns(
        self, driver: webdriver.Chrome, current: Dict[str, Any]
    ) -> None:
        """scans asan logs again specifically for common memory error patterns."""
        try:
            # find all asan log files
            asan_logs = glob.glob(os.path.join(OUTPUT_DIR, "asan_logs", "*.log"))
            # process each log file
            for log_file in asan_logs:
                try:
                    # read log content
                    with open(log_file, "r", encoding="utf-8") as f:
                        log_content = f.read()

                    # dictionary to store found memory errors
                    memory_errors = {}
                    # list of specific asan error type strings
                    error_types = [
                        "heap-use-after-free",
                        "heap-buffer-overflow",
                        "stack-buffer-overflow",
                        "global-buffer-overflow",
                        "use-after-poison",
                        "container-overflow",
                        "double-free",
                    ]
                    # search for each specific error type string
                    for err_type in error_types:
                         # use findall to get all occurrences
                         matches = re.findall(r"" + re.escape(err_type), log_content, re.IGNORECASE) # escape pattern
                         if matches: # if pattern found
                             memory_errors[err_type] = matches # store matches

                    # record anomalies for found patterns
                    for error_type, matches in memory_errors.items():
                        self.record_anomaly(
                            current,
                            error_type, # use error type string as anomaly type
                            {
                                "count": len(matches),
                                "log_file": os.path.basename(log_file), # report log filename
                                "matches": matches, # report list of matched strings
                            },
                            "check_memory_corruption_patterns",
                            anomaly_category="crash",
                        )

                    # check for generic segfault message
                    if ("segmentation fault" in log_content.lower()
                        or "segfault" in log_content.lower()):
                        self.record_anomaly(
                            current,
                            "segfault",
                            {"log_file": os.path.basename(log_file)},
                            "check_memory_corruption_patterns",
                            anomaly_category="crash",
                        )
                    # check for potentially high memory usage reported in log
                    if "memory usage:" in log_content.lower():
                        # try extract memory usage number
                        memory_usage = float(log_content.lower().split("memory usage:")[1].split()[0])
                        if memory_usage > 1e9: # if usage > 1gb
                            self.record_anomaly(
                                current,
                                "excessive_memory_usage",
                                f"Potentially excessive memory usage detected : {memory_usage}",
                                "check_memory_corruption_patterns",
                                anomaly_category="performance",
                            )

                except Exception as log_error:
                    # log error if reading/processing a specific log fails
                    logger.error(
                        f"Error reading or processing ASan log file {log_file}: {log_error}"
                    )

        except Exception as e:
            # record anomaly if the pattern check function itself fails
            self.record_anomaly(
                current,
                "memory_corruption_check_error",
                str(e),
                "check_memory_corruption_patterns",
                anomaly_category="internal_error",
            )

    def get_severity(self, anomaly_type: str) -> int:
        """assigns a numerical severity level to different anomaly types."""
        # higher number means more severe
        mapping = {
            # highest severity (5)
            "memory_error": 5,
            "crash": 5,
            "xss_vulnerability": 5,
            "memory_corruption": 5,
            # high severity (4)
            "mixed_content": 4,
            "csp_violation": 4,
            "timeout": 4,
            "security_header": 4,
            # medium severity (3)
            "network_error": 3,
            "dom_structure": 3,
            "gpu_anomaly": 3,
            "media_playback": 3,
            "storage_anomaly": 3,
            "event_failure": 3,
            "hardware_error": 3,
            "console_errors": 3,
            # low severity (2)
            "slow_execution": 2,
            "accessibility": 2,
            "i18n_issue": 2,
            # informational / internal errors (1)
            "execution_error": 5, # maybe execution error should be high severity?
        }
        # return severity based on exact match or default to 1
        return mapping.get(anomaly_type, 1)

    def generate_text_report(self):
        """generates a human-readable text summary report of the detection results."""
        report_path = os.path.join(OUTPUT_DIR, "reports", "full_report.txt")
        with open(report_path, "w", encoding="utf-8") as text_file:
            # --- report header ---
            text_file.write("=" * 70 + "\n")
            text_file.write("        WEBPAGE ANOMALY DETECTION REPORT      \n")
            text_file.write("=" * 70 + "\n\n")
            text_file.write(
                f"Report Generation Time: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}\n\n"
            )

            # --- overall summary ---
            total_tests = len(self.results)
            passed_tests = sum(1 for r in self.results.values() if r["status"] == "passed")
            failed_tests = total_tests - passed_tests
            text_file.write("----- OVERALL TEST SUMMARY -----\n")
            text_file.write(f"Total Webpages Tested:        {total_tests}\n")
            text_file.write(f"Webpages Passed without Issues: {passed_tests}\n")
            text_file.write(f"Webpages with Detected Issues:   {failed_tests}\n\n")

            # --- severity summary ---
            severity_counts = defaultdict(int)
            anomaly_counts = defaultdict(int)
            for res in self.results.values():
                max_sev = max((a["severity"] for a in res["anomalies"]), default=0)
                severity_counts[max_sev] += 1
                for a in res["anomalies"]:
                    anomaly_counts[a["type"]] += 1
            text_file.write("----- SEVERITY OF ISSUES FOUND -----\n")
            for sev in sorted(severity_counts, reverse=True):
                severity_level_text = {
                    5: "Critical", 4: "High", 3: "Medium", 2: "Low", 1: "Informational",
                }.get(sev, f"Severity {sev}")
                text_file.write(f"{severity_level_text} Issues:   {severity_counts[sev]}\n")
            text_file.write("\n")

            # --- anomaly type summary ---
            text_file.write("----- MOST COMMON ISSUES DETECTED -----\n")
            top_anomalies = Counter(anomaly_counts).most_common(5)
            if top_anomalies:
                text_file.write("The most frequent types of issues detected were:\n")
                for anomaly_type, count in top_anomalies:
                    anomaly_description = anomaly_type.replace("_", " ").title()
                    text_file.write(f"- {anomaly_description}: Detected in {count} webpages\n")
            else:
                text_file.write("No common issues were detected across the webpages.\n")
            text_file.write("\n")

            # --- detailed results for failed tests ---
            if failed_tests > 0:
                text_file.write("----- WEBPAGES WITH DETECTED ISSUES (Details) -----\n")
                for test_name, tdata in self.results.items():
                    if tdata["status"] == "failed": # only show details for failed tests
                        text_file.write(f"\n--- Webpage File: {test_name} ---\n")
                        test_status_text = "Failed with Issues"
                        text_file.write(f"Test Result: {test_status_text}\n")
                        text_file.write(f"Test Duration: {tdata['metrics'].get('duration', 0):.2f} seconds\n")
                        if tdata["root_cause"] != "N/A":
                            root_cause_text = tdata["root_cause"].replace("-", " ").title()
                            text_file.write(f"Likely Cause of Crash (if crashed): {root_cause_text}\n")
                        if tdata["anomalies"]:
                            text_file.write("Detected Anomalies:\n")
                            for anomaly in tdata["anomalies"]:
                                anomaly_severity_text = {
                                    5: "Critical", 4: "High", 3: "Medium", 2: "Low", 1: "Informational",
                                }.get(anomaly["severity"], f"Severity {anomaly['severity']}")
                                anomaly_type_text = anomaly["type"].replace("_", " ").title()
                                text_file.write(f"  - Issue Type: {anomaly_type_text}, Severity: {anomaly_severity_text}, Detected by: {anomaly['detected_by']}\n")
                                if anomaly["details"]:
                                    if isinstance(anomaly["details"], dict):
                                        details_str = "\n".join([f"    - {k.replace('_', ' ').title()}: {v}" for k, v in anomaly["details"].items()])
                                        text_file.write(details_str + "\n")
                                    else:
                                        text_file.write(f"    - Details: {anomaly['details']}\n")

            # --- report footer ---
            text_file.write("\n" + "=" * 70 + "\n")
            text_file.write("       END OF ANOMALY REPORT      \n")
            text_file.write("=" * 70 + "\n")
        logger.info(f"[REPORT] Text report generated: {report_path}")

    def generate_json_report(self):
        """generates a detailed json report containing all results and metadata."""
        det_json_path = os.path.join(OUTPUT_DIR, "reports", "detailed_report.json")
        try:
            # load existing data first
            with open(det_json_path, "r", encoding="utf-8") as jf:
                existing = json.load(jf)
        except (FileNotFoundError, json.JSONDecodeError):
            existing = {"metadata": {}, "tests": {}} # create structure if missing/invalid

        # update the 'tests' section with the results
        if "tests" not in existing:
            existing["tests"] = {}
        existing["tests"] = self.results  # assign all results

        # update metadata
        existing["metadata"]["execution_time"] = datetime.now().isoformat() # update timestamp
        # try get chrome version if not already known
        if existing["metadata"].get("chrome_version") == "UNKNOWN":
            try:
                # run chrome binary with --version flag
                cver = subprocess.check_output(
                    [CHROME_BINARY_PATH, "--version"], text=True
                ).strip()
                existing["metadata"]["chrome_version"] = cver
            except Exception:
                pass # ignore errors getting version
        # write the updated data back to the json file
        with open(det_json_path, "w", encoding="utf-8") as jf:
            # use default=str to handle non-serializable types
            json.dump(existing, jf, indent=2, default=str)
        logger.info("[REPORT] JSON report generated: %s", det_json_path)

    def write_coverage_summary(self) -> None:
        """calculates and writes a summary of javascript coverage data."""
        # dictionary to hold summary data per file
        coverage_summary = {"files": {}}
        logger.debug(
            f"[write_coverage_summary] self.coverage_map keys: {self.coverage_map.keys()}"
        )  # added debug logging here
        # iterate through coverage data collected for each test file
        for fname, cov_list in self.coverage_map.items():
            logger.debug(
                f"[write_coverage_summary] Processing file: {fname}, Coverage Data: {cov_list}"
            )  # added debug logging here
            # cov_list is a list of coverage data per script in the file
            script_count = len(cov_list)
            total_funcs, visited_funcs = 0, 0
            total_ranges, visited_ranges = 0, 0 # ranges often correspond to basic blocks
            # process coverage for each script within the file
            for script_cov in cov_list:
                # get function coverage details
                funcs = script_cov.get("functions", [])
                total_funcs += len(funcs) # count total functions
                for f in funcs:
                    has_visit = False # flag if any part of the function was executed
                    # get range coverage details within the function
                    for rng in f.get("ranges", []):
                        total_ranges += 1 # count total ranges
                        # check if range execution count is > 0
                        if rng.get("count", 0) > 0:
                            visited_ranges += 1 # increment visited ranges count
                            has_visit = True # mark function as visited
                    if has_visit:
                        visited_funcs += 1 # increment visited functions count
            # calculate a weighted score based on different coverage metrics
            weighted_score = (
                visited_ranges * COVERAGE_WEIGHT_LINE # weight for visited ranges
                + visited_funcs * COVERAGE_WEIGHT_FUNC # weight for visited functions
                + script_count * COVERAGE_WEIGHT_PATH # weight for number of scripts
            )
            # store summary metrics for this file
            coverage_summary["files"][fname] = {
                "scriptCount": script_count,
                "totalFunctions": total_funcs,
                "visitedFunctions": visited_funcs,
                "totalRanges": total_ranges,
                "visitedRanges": visited_ranges,
                "weightedCoverageScore": weighted_score,
            }
        # write the summary dictionary to a json file
        out_path = os.path.join(OUTPUT_DIR, "coverage_summary.json")
        with open(out_path, "w", encoding="utf-8") as wf:
            json.dump(coverage_summary, wf, indent=2)
        logger.info("[COVERAGE] coverage_summary => %s", out_path)

    def generate_coverage_chart(self) -> None:
        """generates a heatmap chart visualizing coverage distribution."""
        try:
            # path to the summary file generated previously
            cov_file = os.path.join(OUTPUT_DIR, "coverage_summary.json")
            if not os.path.exists(cov_file): # check if summary file exists
                return
            # load the coverage summary data
            with open(cov_file, "r", encoding="utf-8") as cf:
                data = json.load(cf)
            if "files" not in data: # check if data contains file summaries
                return
            # prepare data for plotting using pandas dataframe
            rows = []
            for fname, metrics in data["files"].items():
                rows.append(
                    {
                        "File": fname,
                        "VisitedFunctions": metrics.get("visitedFunctions", 0),
                        "VisitedRanges": metrics.get("visitedRanges", 0),
                    }
                )
            df = pd.DataFrame(rows) # create pandas dataframe
            if df.empty: # check if dataframe is empty
                return
            # create the plot figure
            plt.figure(figsize=(10, 6))
            # select data for heatmap
            heat_data = df.set_index("File")[["VisitedFunctions", "VisitedRanges"]]
            # generate heatmap using seaborn
            sns.heatmap(heat_data, annot=True, fmt="d") # show values, integer format
            # save the chart to a png file
            chart_path = os.path.join(OUTPUT_DIR, "coverage_chart.png")
            plt.title("Coverage Distribution Heatmap") # add title
            plt.savefig(chart_path)
            logger.info("[COVERAGE] Chart => %s", chart_path)
            plt.close() # close the plot figure
        except Exception as e:
            # log warning if chart generation fails
            logger.warning("Failed to generate coverage chart: %s", e)

    def print_console_summary(self):
        """prints a summary table of test results to the console."""
        # calculate basic stats
        total = len(self.results)
        passed = sum(1 for r in self.results.values() if r["status"] == "passed")
        failed = total - passed
        # count tests by highest severity level found
        severity_counts = defaultdict(int)
        for res in self.results.values():
            max_sev = max((a["severity"] for a in res["anomalies"]), default=0)
            severity_counts[max_sev] += 1
        # prepare data for the table
        table = [
            ["Total Tests", total],
            ["Passed", passed],
            ["Failed", failed],
            ["Critical Issues", severity_counts[5]],
            ["High Severity", severity_counts[4]],
            ["Medium Severity", severity_counts[3]],
            ["Low Severity", severity_counts[2]],
            ["Info", severity_counts[1]],
        ]
        # print the table using tabulate library
        print("\n" + tabulate(table, headers=["Metric", "Value"], tablefmt="psql"))

    def run_test_suite(self) -> None:
        """main method to run the detection process for all files in the mutation directory."""
        # find all html files in the target mutation directory
        test_files = sorted(
            glob.glob(os.path.join(MUTATION_DIR, "*.html")),
            key=lambda x: os.path.getsize(x), # sort by file size
        )
        # setup for batch processing
        BATCH_SIZE = 4 # number of files per batch
        # import concurrency tools
        from concurrent.futures import ThreadPoolExecutor, as_completed

        # process files in batches
        for i in range(0, len(test_files), BATCH_SIZE):
            batch = test_files[i : i + BATCH_SIZE] # get the current batch
            logger.info(f"Processing batch {i//BATCH_SIZE+1} ({len(batch)} files)")
            # check system health before starting a batch
            if not self.system_health_ok():
                time.sleep(30) # pause if system load is high
            # create thread pool executor
            with ThreadPoolExecutor(
                max_workers=self.calculate_safe_concurrency(), # determine num workers
                thread_name_prefix="Detector", # name threads
            ) as executor:
                # submit each file in the batch to the executor
                future_map = {
                    executor.submit(self.execute_test, tf): tf for tf in batch
                }
                # process results as they complete
                for fut in as_completed(future_map):
                    fname = future_map[fut]
                    try:
                        # retrieve result (or exception) from the future
                        fut.result()
                    except Exception as e:
                        # log error if execute_test raised an unhandled exception
                        logger.error("[ERROR] Test crashed => %s: %s", fname, e)

        # --- final reporting ---
        # write coverage summary file
        self.write_coverage_summary()
        # generate reports based on requested formats
        if "chart" in REPORT_FORMATS:
            self.generate_coverage_chart()
        if "text" in REPORT_FORMATS:
            self.generate_text_report()
        if "json" in REPORT_FORMATS:
            self.generate_json_report()
        # print summary table to console
        self.print_console_summary()


# --- global scope setup ---
# determine output directory based on mutation dir or default
OUTPUT_DIR = ""
# check if mutation dir's parent exists
if os.path.isdir(os.path.dirname(MUTATION_DIR)):
    # place crash results in a sibling directory
    OUTPUT_DIR = os.path.join(os.path.dirname(MUTATION_DIR), "crash_results")
else:
    # use default directory
    OUTPUT_DIR = DEFAULT_DETECTION_RESULTS_DIR
# ensure the final output directory exists
os.makedirs(OUTPUT_DIR, exist_ok=True)


# function to parse args
def parse_args():
    parser = argparse.ArgumentParser(
        description="Advanced detection with deep & detailed reporting."
    )
    parser.add_argument(
        "mutation_dir",
        nargs="?",
        default=os.getenv("DETECTION_TARGET_DIR", MUTATION_FOLDER),
        help="Directory containing mutated HTML files",
    )
    parser.add_argument(
        "--report-formats",
        default="text,json",
        help="Comma-separated list of report formats to generate (text,json). Default: text,json",
    )
    return parser.parse_args()


def main() -> None:
    """main execution function."""
    # parse arguments
    args = parse_args()
    global MUTATION_DIR, OUTPUT_DIR, REPORT_FORMATS # declare globals to modify
    # update globals based on parsed args
    MUTATION_DIR = args.mutation_dir
    REPORT_FORMATS = [fmt.strip().lower() for fmt in args.report_formats.split(",")]

    # validate existence of critical paths
    required_paths = [
        (CHROME_BINARY_PATH, "Chrome binary"),
        (CHROMEDRIVER_PATH, "ChromeDriver"),
        (MUTATION_DIR, "Default Mutation folder"),
        (BASELINE_DIR, "Baseline folder"),
        (SYMBOLIZER_PATH, "LLVM symbolizer"),
    ]
    all_paths_ok = True
    for p, desc in required_paths:
         # check if path exists
         if not os.path.exists(p):
             logger.error("[FATAL] %s not found => %s", desc, p)
             all_paths_ok = False # set flag if missing

    # exit if essential paths are missing
    if not all_paths_ok:
        import sys
        sys.exit(1) # exit script with error code

    # create the main detector instance
    detector = BestChromeDetector()
    # start the test suite execution
    detector.run_test_suite()


# standard python entry point check
if __name__ == "__main__":
    main()