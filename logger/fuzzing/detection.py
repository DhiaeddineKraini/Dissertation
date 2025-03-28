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
from ddmin import ddmin  # Import the ddmin library
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

parser = argparse.ArgumentParser(
    description="Advanced detection with deep & detailed reporting."
)
parser.add_argument(
    "mutation_dir",
    nargs="?",
    default=os.getenv("DETECTION_TARGET_DIR", MUTATION_FOLDER),
    help="Directory containing the mutated HTML files to test.",
)
parser.add_argument(
    "--report-formats",
    default="text,json",  # Default formats are now text and JSON
    help="Comma-separated list of report formats to generate (text,json). Default: text,json",
)
args = parser.parse_args()
MUTATION_DIR: str = args.mutation_dir
REPORT_FORMATS = [fmt.strip().lower() for fmt in args.report_formats.split(",")]


logger = logging.getLogger("detection-advanced")
logger.setLevel(logging.DEBUG)


def get_chrome_options() -> Options:
    options = Options()
    options.add_argument("--headless=new")
    options.add_argument("--disable-dev-shm-usage")
    options.add_argument("--enable-features=NetworkService,NetworkServiceInProcess")
    options.add_argument("--force-device-scale-factor=1")
    options.add_argument("--disable-gpu")
    options.add_argument("--no-sandbox")
    options.add_argument("--disable-setuid-sandbox")
    options.add_argument("--disable-software-rasterizer")
    options.add_argument("--disable-background-timer-throttling")
    options.add_argument("--disable-extensions")  # Add this line
    options.add_argument("--disable-background-networking")  # Add this line
    options.add_argument("--enable-features=NetworkServiceInProcess")  # Add this line
    options.add_argument("--js-flags=--max-old-space-size=8192")
    prefs = {
        "profile.managed_default_content_settings.images": 2,
        "profile.default_content_setting_values.javascript": 1,
    }
    options.add_experimental_option("prefs", prefs)
    return options


def enable_script_interruption(driver: webdriver.Chrome):
    try:
        driver.execute_cdp_cmd("Runtime.enable", {})
        driver.execute_cdp_cmd("Debugger.enable", {})
        driver.execute_cdp_cmd("Debugger.setAsyncCallStackDepth", {"maxDepth": 32})
        driver.execute_cdp_cmd("Runtime.discardConsoleEntries", {})
        driver.execute_cdp_cmd("Performance.enable", {})
    except Exception as e:
        logger.warning("Failed enabling script interruption (CDP): %s", e)


class MemoryWatcher:
    def __init__(self, max_mb=4096):
        self.max_mb = max_mb

    def check(self):
        process = psutil.Process(os.getpid())
        used_mb = process.memory_info().rss / 1024**2
        return used_mb < self.max_mb


def validate_symbolizer_version(chrome_version: str) -> bool:
    try:
        major_ver = int(chrome_version.split()[1].split(".")[0])
        sym_ver = subprocess.check_output([SYMBOLIZER_PATH, "--version"], text=True)
        sym_major = int(sym_ver.split()[-1].split(".")[0])
        return abs(major_ver - sym_major) <= 2
    except Exception:
        return False


class CoverageCDP:
    def __init__(self, driver: webdriver.Chrome) -> None:
        self.driver = driver
        self.enabled = False

    def start_js_coverage(self) -> None:
        logger.debug(
            "[COVERAGE] start_js_coverage: Starting coverage collection..."
        )  # ADDED LOGGING
        try:
            self.driver.execute_cdp_cmd("Profiler.enable", {})
            self.driver.execute_cdp_cmd(
                "Profiler.startPreciseCoverage", {"callCount": False, "detailed": False}
            )
            self.enabled = True
            logger.debug(
                "[COVERAGE] start_js_coverage: Coverage collection started successfully."
            )  # ADDED LOGGING
        except Exception as e:
            logger.warning("[COVERAGE] start_js_coverage => %s", e)
            logger.warning(
                "[COVERAGE] start_js_coverage: Failed to start coverage collection."
            )  # ADDED LOGGING

    def stop_js_coverage(self) -> List[Dict[str, Any]]:
        if not self.enabled:
            logger.debug(
                "[COVERAGE] stop_js_coverage: Coverage not enabled, returning empty data."
            )  # ADDED LOGGING
            return []
        try:
            logger.debug(
                "[COVERAGE] stop_js_coverage: Stopping coverage and taking data..."
            )  # ADDED LOGGING
            result = self.driver.execute_cdp_cmd("Profiler.takePreciseCoverage", {})
            coverage_data = result.get("result", [])
            self.driver.execute_cdp_cmd("Profiler.stopPreciseCoverage", {})
            self.driver.execute_cdp_cmd("Profiler.disable", {})
            logger.debug(
                f"[COVERAGE] stop_js_coverage: Coverage data collected, {len(coverage_data)} scripts."
            )  # ADDED LOGGING with script count
            return coverage_data
        except Exception as e:
            logger.warning("[COVERAGE] stop_js_coverage => %s", e)
            logger.warning(
                "[COVERAGE] stop_js_coverage: Error stopping coverage, returning empty data."
            )  # ADDED LOGGING
            return []

    def get_performance_metrics(self) -> Dict[str, Any]:
        try:
            metrics = self.driver.execute_cdp_cmd("Performance.getMetrics", {})
            return metrics.get("metrics", {})  # Return the metrics data
        except Exception as e:
            logger.warning("[COVERAGE] get_performance_metrics => %s", e)
            return {}


class CrashDeduplicator:
    def __init__(self, outdir: str) -> None:
        self.outdir = outdir
        self.signatures_file = os.path.join(outdir, "unique_crashes.json")
        self.known_signatures: Dict[str, Any] = {}
        self._load_signatures()

    def _load_signatures(self) -> None:
        if os.path.exists(self.signatures_file):
            try:
                with open(self.signatures_file, "r", encoding="utf-8") as f:
                    self.known_signatures = json.load(f)
            except Exception as e:
                logger.warning("Failed loading signatures: %s", e)

    def _save_signatures(self) -> None:
        with open(self.signatures_file, "w", encoding="utf-8") as f:
            json.dump(self.known_signatures, f, indent=2)

    def hybrid_signature(self, raw_log: str, symbolized: str) -> str:
        addr_re = re.compile(r"0x[0-9a-f]{6,}")
        lines_sym = symbolized.split("\n") if symbolized else []
        top_sym = "\n".join(lines_sym[:5])
        normalized_sym = addr_re.sub("0xADDR", top_sym)
        lines_raw = raw_log.split("\n")[:5]
        normalized_raw = addr_re.sub("0xADDR", "\n".join(lines_raw))
        combined = normalized_sym + "\n---\n" + normalized_raw
        return hashlib.sha256(combined.encode("utf-8")).hexdigest()

    def check_or_add_crash(
        self, raw_log_path: str, symbolized_trace: str
    ) -> tuple[bool, str]:
        with open(raw_log_path, "r", encoding="utf-8") as f:
            raw_log_content = f.read()
        sign = self.hybrid_signature(raw_log_content, symbolized_trace)
        is_new = sign not in self.known_signatures
        if is_new:
            self.known_signatures[sign] = {
                "firstSeen": datetime.now().isoformat(),
                "sampleSym": symbolized_trace[:500],
                "sampleRaw": raw_log_content[:500],
            }
            self._save_signatures()
        return is_new, sign


class RootCauseAnalyzer:
    @staticmethod
    def classify_crash_log(log_text: str) -> str:
        txt = log_text.lower()
        if "use-after-free" in txt:
            return "Use-After-Free"
        if "heap-buffer-overflow" in txt:
            return "Heap-Buffer-Overflow"
        if "double-free" in txt:
            return "Double-Free"
        if "undefinedbehavior" in txt or "undefined-behavior" in txt:
            return "UB-Sanitizer"
        return "Unknown"


def re_run_detection_for_file(html_path: str, mini_outdir: str) -> bool:
    from selenium.webdriver.chrome.options import Options

    asan_log_path = os.path.join(mini_outdir, "ASAN_minimization_%n_%p.log")
    env = os.environ.copy()
    existing_asan = env.get("ASAN_OPTIONS", "")
    if existing_asan:
        existing_asan += ":"
    env["ASAN_OPTIONS"] = (
        existing_asan + f"log_path={asan_log_path}:detect_leaks=1:abort_on_error=1"
    )
    options = get_chrome_options()
    serv = Service(
        executable_path=CHROMEDRIVER_PATH,
        env=env,
        log_output=os.path.join(mini_outdir, "chrome_driver_minimization.log"),
    )
    driver = None
    try:
        driver = webdriver.Chrome(options=options, service=serv)
        driver.set_page_load_timeout(120)
        url = f"file://{os.path.abspath(html_path)}"
        driver.get(url)
        time.sleep(3)
        logs_created = glob.glob(os.path.join(mini_outdir, "ASAN_minimization_*.log"))
        if not logs_created:
            return False
        with open(logs_created[0], "r", encoding="utf-8") as lf:
            content = lf.read()
            if "AddressSanitizer" in content:
                return True
    except Exception as e:
        logger.warning("[MINIMIZATION] Re-run detection => %s", e)
        return False
    finally:
        if driver:
            driver.quit()
    return False


def minimize_crash_input(html_path: str) -> None:
    """Minimizes a crashing HTML input using the ddmin algorithm."""

    def test_fn(content: bytes) -> bool:
        """Test function for ddmin: checks if the given HTML content still crashes."""
        with tempfile.NamedTemporaryFile(delete=False, suffix=".html") as tf:
            tf.write(content)
            temp_path = tf.name
        try:
            mini_outdir = os.path.join(os.path.dirname(temp_path), "minimization_temp")
            os.makedirs(
                mini_outdir, exist_ok=True
            )  # Ensure directory for asan logs exists

            result = re_run_detection_for_file(temp_path, mini_outdir)
            return result
        except Exception as e:
            logger.error("[MINIMIZATION] Error in test function: %s", e)
            return False
        finally:
            try:
                os.remove(temp_path)
                shutil.rmtree(mini_outdir, ignore_errors=True)
            except Exception as e:
                logger.warning(
                    f"[MINIMIZATION] Could not remove temp file or directory : {e}"
                )

    if not os.path.exists(html_path):
        logger.warning("[MINIMIZATION] Crash input file not found: %s", html_path)
        return

    try:
        with open(html_path, "rb") as f:
            original_content = f.read()

        minimized_content = ddmin(original_content, test_fn)

        with open(
            html_path + ".minimized", "wb"
        ) as minimized_file:  # create new minimised file
            minimized_file.write(minimized_content)

        logger.info(
            "[MINIMIZATION] Minimized crash input saved to: %s",
            html_path + ".minimized",
        )

    except Exception as e:
        logger.error("[MINIMIZATION] Error during minimization: %s", e)


class BestChromeDetector:
    def __init__(self) -> None:
        logger.info("[DETECTION] Deep & Detailed Reporting.")
        self.setup_directories()
        self.results: Dict[str, Any] = {}
        self.coverage_map: Dict[str, List[Dict[str, Any]]] = {}
        self.crash_deduper = CrashDeduplicator(OUTPUT_DIR)
        self.temp_files: List[str] = []
        self.memory_trend: List[Dict[str, Any]] = []
        self.global_timeout = 300
        self.important_timeout = 600  # 10 minutes in seconds
        self.less_important_timeout = 300  # 5 minutes in seconds
        self.retry_count = 2
        self.asan_options = {
            "detect_leaks": "1",
            "abort_on_error": "1",
            "log_path": f"{OUTPUT_DIR}/asan_logs/ASAN_%n_%p.log",
            "allocator_may_return_null": "1",
            "malloc_context_size": "10",
            "symbolize": "1",
        }

    def setup_directories(self) -> None:
        dirs = [
            os.path.join(OUTPUT_DIR, "logs"),
            os.path.join(OUTPUT_DIR, "asan_logs"),
            os.path.join(OUTPUT_DIR, "reports"),
            os.path.join(OUTPUT_DIR, "network_logs"),
            os.path.join(OUTPUT_DIR, "performance"),
            os.path.join(OUTPUT_DIR, "accessibility"),
            os.path.join(OUTPUT_DIR, "storage"),
            os.path.join(OUTPUT_DIR, "localization"),
            os.path.join(OUTPUT_DIR, "sym_versions"),
            os.path.join(OUTPUT_DIR, "crash_logs"),
        ]
        for d in dirs:
            os.makedirs(d, exist_ok=True)
        atexit.register(self._cleanup_temp_files)

        det_json = os.path.join(OUTPUT_DIR, "reports", "detailed_report.json")
        if not os.path.exists(det_json):
            with open(det_json, "w") as jf:
                base_data = {
                    "metadata": {
                        "system": platform.uname()._asdict(),
                        "execution_time": datetime.now().isoformat(),
                        "chrome_version": "UNKNOWN",
                    },
                    "tests": {},
                }
                json.dump(base_data, jf, indent=2)

    @retry(stop=stop_after_attempt(3), wait=wait_exponential(multiplier=1, max=10))
    def init_chrome_with_retry(self):
        return self.init_chrome()

    def init_chrome(self) -> webdriver.Chrome:
        options = webdriver.ChromeOptions()
        options.binary_location = CHROME_BINARY_PATH
        temp_user_data_dir = tempfile.mkdtemp(prefix="chrome_user_data_")
        options.add_argument(f"--user-data-dir={temp_user_data_dir}")
        options.add_argument("--headless=new")
        options.add_argument("--no-sandbox")
        options.add_argument("--disable-dev-shm-usage")
        options.add_argument("--js-flags=--max-old-space-size=8192")
        options.add_argument("--disable-blink-features=AutomationControlled")
        options.add_argument("--allow-file-access-from-files")
        options.add_argument("--disable-media-session-api")
        options.add_argument("--autoplay-policy=no-user-gesture-required")
        options.add_argument("--enable-crash-reporter")
        options.add_argument("--disable-extensions")
        options.add_argument(f"--crash-dumps-dir={OUTPUT_DIR}/crash_dumps")
        options.set_capability(
            "goog:loggingPrefs", {"browser": "ALL", "performance": "ALL"}
        )

        asan_log_dir = os.path.join(OUTPUT_DIR, "asan_logs")
        os.makedirs(asan_log_dir, exist_ok=True)  # Ensure directory exists

        env = os.environ.copy()

        # Set/Update ASAN_OPTIONS:
        asan_options = {
            "detect_leaks": "1",
            "abort_on_error": "1",  # Critical for ASan to work as expected
            "symbolize": "1",  # If you have symbolization tools available
            "log_path": os.path.join(asan_log_dir, f"ASAN_%n_%p.log"),
        }

        existing_asan_options = env.get("ASAN_OPTIONS")
        if existing_asan_options:
            asan_options.update(
                {
                    part.split("=")[0]: part.split("=")[1]
                    for part in existing_asan_options.split(":")
                    if "=" in part
                }
            )
        env["ASAN_OPTIONS"] = ":".join(f"{k}={v}" for k, v in asan_options.items())
        logs_dir = os.path.join(OUTPUT_DIR, "logs") # Place in the 'logs' subdirectory
        os.makedirs(logs_dir, exist_ok=True)       # Ensure the directory exists
        chromedriver_log_path = os.path.join(logs_dir, "chromedriver.log") # Use the consistent name
        service = Service(
            executable_path=CHROMEDRIVER_PATH,
            env=env,
           # service_args=["--verbose"],
            log_output=chromedriver_log_path,   
            timeout=720,
        )
        driver = webdriver.Chrome(service=service, options=options)
        driver.execute_cdp_cmd("Network.enable", {})
        driver.execute_cdp_cmd(
            "Network.setBlockedURLs",
            {
                "urls": [
                    "*.mp4",
                    "*.mp3",
                    "*.avi",
                    "*.webm",
                    "*.ogg",
                    "*.wav",
                    "*.png",
                    "*.jpg",
                    "*.jpeg",
                    "*.gif",
                    "*.woff",
                    "*.ttf",
                ]
            },
        )
        driver.execute_cdp_cmd("Performance.enable", {})
        RemoteConnection.set_timeout(720)
        driver.set_page_load_timeout(120)
        driver.set_script_timeout(30)
        return driver

    def _is_browser_alive(self, driver) -> bool:
        try:
            return driver.service.process.poll() is None and driver.execute_script(
                "return !!window;"
            )
        except Exception:
            return False

    def _capture_crash_artifacts(self, driver):
        if driver is None:
            logger.warning("No driver instance available to capture crash artifacts.")
            return
        log_dir = os.path.join(OUTPUT_DIR, "crash_logs")
        os.makedirs(log_dir, exist_ok=True)
        log_path = os.path.join(log_dir, f"crash_{datetime.now().isoformat()}.log")
        try:
            logs = "\n".join(
                [str(driver.get_log("browser")), str(driver.get_log("driver"))]
            )
            with open(log_path, "w", encoding="utf-8") as f:
                f.write(logs)
        except Exception as ex:
            logger.warning(f"Failed to capture crash artifacts: {str(ex)}")

    def _execute_single_test(self, test_file: str) -> None:
        test_name = os.path.basename(test_file)
        logger.info("[DETECTION] Start => %s", test_name)
        current = {
            "file": test_name,
            "start_time": datetime.now(),
            "artifacts": {},
            "metrics": {},
            "anomalies": [],
            "status": "passed",
            "root_cause": "N/A",
        }

        driver = None
        monitor_thread = None
        execution_finished = threading.Event()

        try:
            driver = (
                self.init_chrome()
            )  # Initialize Chrome driver (ensure ASan is enabled in init_chrome)

            important_checks = [
                "check_memory_errors",
                "check_security_issues",
                "check_console_errors",
            ]
            current_timeout = (
                self.important_timeout
                if any(
                    check.__name__ in important_checks
                    for check in [
                        self.check_memory_errors,
                        self.check_security_issues,
                        self.check_console_errors,
                    ]
                )
                else self.less_important_timeout
            )

            driver.set_page_load_timeout(current_timeout)
            driver.set_script_timeout(current_timeout)

            def monitor_execution(driver, timeout, current, test_file):
                time.sleep(timeout)
                if execution_finished.is_set():
                    return

                logger.error(
                    f"Test {test_file} exceeded maximum execution time of {timeout} seconds."
                )
                self.record_anomaly(
                    current,
                    "max_execution_timeout",
                    f"Test exceeded {timeout} seconds",
                    "monitor_execution",
                    anomaly_category="timeout",
                )
                current["status"] = "failed"
                self._capture_crash_artifacts(
                    driver
                )  # Capture artifacts before quitting (assuming defined)
                try:
                    driver.quit()
                except Exception as e:
                    logger.warning(
                        f"[ERROR] Test did not respond, unable to quit driver: {e}"
                    )
                    pass  # Ignore if driver can't quit gracefully

            monitor_thread = threading.Thread(
                target=monitor_execution,
                args=(driver, current_timeout, current, test_file),
                daemon=True,
            )
            monitor_thread.start()

            if not self._is_browser_alive(
                driver
            ):  # Check browser alive status (assuming _is_browser_alive defined)
                raise RuntimeError("Browser failed to initialize")

            enable_script_interruption(
                driver
            )  # Enable script interruption (assuming defined)

            file_uri = f"file://{os.path.abspath(test_file)}"
            logger.info("Testing file: %s", file_uri)

            try:  # Handle initial page load timeout (now uses dynamic timeout)
                driver.get(file_uri)
                execution_finished.set()  # Signal successful page load
            except TimeoutException:
                logger.warning(f"Timeout loading {file_uri}")
                self.record_anomaly(
                    current,
                    "timeout_error",
                    f"Timeout loading URL",
                    "_execute_single_test",
                )  # Record timeout anomaly
                return  # Skip further checks for this file

            wait = WebDriverWait(
                driver, current_timeout // 6
            )  # Dynamic WebDriverWait timeout

            try:  # Handle document readyState timeout
                wait.until(
                    lambda d: d.execute_script("return document.readyState")
                    in ["interactive", "complete"]
                )
                driver.execute_script(
                    "window.stop();"
                )  # Stop further page loading after readyState reached
            except TimeoutException:
                logger.warning("Timeout waiting for document readyState")
                self.record_anomaly(
                    current,
                    "timeout_error",
                    "Timeout waiting for document readyState",
                    "_execute_single_test",
                )
                return  # Skip further checks if readyState timeout

            ready_state = driver.execute_script("return document.readyState")
            logger.info("Document readyState: %s", ready_state)
            if ready_state not in ["interactive", "complete"]:
                raise Exception(f"Document not loaded properly (state: {ready_state})")

            if driver.service.process.poll() is not None:
                raise Exception(
                    "Browser process crashed during test"
                )  # Detect browser crashes

            # ********************* IMPORTANT CHECKS (10-minute timeout if needed) *********************
            self.check_memory_errors(
                driver, current, test_file
            )  # Check for memory errors (ASan)
            self.check_console_errors(driver, current)  # Check browser console errors
            self.check_security_issues(driver, current)  # Check security-related issues

           

            more_checks = [  # List of less important checks
              #  self.check_dom_structure,
                self.check_media_playback,
                self.check_storage,
                self.check_event_handling,
                self.check_localization,
                self.check_performance,
                self.check_hardware_resources,
                self.check_xss_patterns,
                self.check_memory_corruption_patterns,
                self.check_js_heap_usage,
            ]
            for check in more_checks:  # Execute less important checks
                if check.__name__ in [
                    "check_js_heap_usage",
                    
                ]:  # Special handling for checks with test_file argument
                    check(driver, current, test_file)
                else:
                    check(driver, current)

            if self._is_browser_alive(
                driver
            ):  # Check browser alive before coverage (again)
                coverage_agent = CoverageCDP(
                    driver
                )  # Initialize coverage agent (assuming CoverageCDP defined)
                coverage_agent.start_js_coverage()
                performance_metrics = (
                    coverage_agent.get_performance_metrics()
                )  # Get detailed performance metrics
                current["metrics"][
                    "performance_data_cdp"
                ] = performance_metrics  # Store in results
                if (
                    self._is_browser_alive(driver) and coverage_agent
                ):  # Double check before stopping coverage
                    coverage_data = coverage_agent.stop_js_coverage()
                    current["metrics"]["coverage_data"] = coverage_data
                    self.coverage_map[test_name] = coverage_data  # Store coverage data
                else:
                    logger.warning(
                        "[DETECTION] Browser not alive or coverage agent not initialized, cannot collect coverage for %s",
                        test_name,
                    )  # ADDED WARNING LOGGING

        except TimeoutException as te:  # Catch TimeoutException for page load, readyState, etc.
            logger.error(f"Test {test_name} timed out: {te}")
            self.record_anomaly(
                current, "timeout_error", str(te), "_execute_single_test"
            )  # Record timeout anomaly

        except Exception as e:  # Generic exception handler for unexpected errors
            logger.error(f"Test {test_name} => Exception: {str(e)}")
            current["status"] = "failed"
            self._capture_crash_artifacts(driver)  # Attempt to capture crash artifacts
            if driver:
                try:
                    self.check_console_errors(
                        driver, current
                    )  # Attempt to get console logs even on general exception
                    self.check_security_issues(
                        driver, current
                    )  # Attempt to get security logs even on general exception
                except Exception as e2:
                    logger.warning(
                        "Final anomaly detection failed: %s", e2
                    )  # Log if final anomaly detection fails in exception handler

        finally:
            execution_finished.set()  # Signal monitor thread to stop in finally block
            if monitor_thread and monitor_thread.is_alive():
                monitor_thread.join(
                    timeout=30
                )  # Wait for monitor thread to finish, with timeout
            if driver:  # Check if driver was initialized before attempting to quit
                try:
                    driver.quit()  # Ensure driver is quit in finally block
                except Exception as e:
                    logger.warning(
                        f"Error quitting driver: {e}"
                    )  # Log if driver.quit() fails in finally
            duration = (datetime.now() - current["start_time"]).total_seconds()
            current["metrics"]["duration"] = duration
            self.results[test_name] = current  # Store test results
            if current["anomalies"]:  # Log anomalies if any
                for a in current["anomalies"]:
                    logger.warning(" => anomaly => %s => %s", a["type"], a["details"])
            else:
                logger.info(
                    " => no anomalies found for %s", test_name
                )  # Log if no anomalies found
            logger.info(
                "Finished => %s, took %.2fs", test_name, duration
            )  # Log test completion and duration

    def check_js_heap_usage(
        self, driver: webdriver.Chrome, current: Dict[str, Any], test_file: str
    ):
        try:
            metrics = driver.execute_cdp_cmd("Performance.getMetrics", {})
            js_heap = None
            for m in metrics.get("metrics", []):
                if m.get("name") == "JSHeapUsedSize":
                    js_heap = m.get("value")
                    break
            if js_heap is not None:
                current["metrics"]["js_heap"] = js_heap
                if js_heap > 2 * 1024**3:
                    self.record_anomaly(
                        current,
                        "memory_error",
                        f"Excessive JS heap usage: {js_heap} bytes",
                        "check_js_heap_usage",
                        anomaly_category="performance",  # Example category
                    )
        except Exception as e:
            self.record_anomaly(
                current,
                "memory_analysis_error",
                str(e),
                "check_js_heap_usage",
                anomaly_category="internal_error",
            )  # Example category

    def execute_test(self, test_file: str) -> None:
        try:
            for attempt in range(self.retry_count + 1):
                try:
                    self._execute_single_test(test_file)
                    break
                except TimeoutException as te:
                    if attempt < self.retry_count:
                        logger.warning(
                            f"Timeout (attempt {attempt+1}/{self.retry_count+1}) for {test_file}. Retrying..."
                        )
                        self._cleanup_temp_files()
                        continue
                    else:
                        raise te
        except TimeoutException as te:
            logger.error(f"Test {test_file} failed due to global timeout: {te}")
            self._create_failure_artifact(test_file, te)
            raise

    def calculate_safe_concurrency(self) -> int:
        forced_workers = 1 # Or maybe 2 if your system is reasonably powerful
        logger.info(f"Resource throttling disabled, forcing concurrency to {forced_workers}")
        return forced_workers  

    def system_health_ok(self) -> bool:
        return (
            psutil.cpu_percent() < 75
            and psutil.virtual_memory().available > 512 * 1024 * 1024
        )

    def _cleanup_temp_files(self):
        logger.info("Cleaning up %d temporary files", len(self.temp_files))
        for tf in self.temp_files:
            try:
                os.remove(tf)
            except Exception:
                pass
        subprocess.run(
            ["pkill", "-f", "chrome|chromedriver"], stderr=subprocess.DEVNULL
        )
        cache_dirs = [
            tempfile.gettempdir(),
            "/dev/shm",
            os.path.expanduser("~/.cache/chromium"),
        ]
        for d in cache_dirs:
            if os.path.exists(d):
                try:
                    for item in os.listdir(d):
                        if "org.chromium." in item:
                            full_path = os.path.join(d, item)
                            if os.path.isfile(full_path) or os.path.islink(full_path):
                                os.remove(full_path)
                            elif os.path.isdir(full_path):
                                subprocess.run(["rm", "-rf", full_path])
                except Exception:
                    pass
        logger.info("System cleanup completed")

    def _create_failure_artifact(self, test_file: str, exception: Exception) -> None:
        artifact_path = os.path.join(
            OUTPUT_DIR, "logs", f"failure_{os.path.basename(test_file)}.log"
        )
        with open(artifact_path, "w", encoding="utf-8") as af:
            af.write(str(exception))
        logger.info("Created failure artifact at %s", artifact_path)

    def symbolize_trace(self, log_file: str) -> str:
        try:
            chrome_version = subprocess.check_output(
                [CHROME_BINARY_PATH, "--version"], text=True
            ).strip()
            sym_cache_dir = os.path.join(OUTPUT_DIR, "sym_versions")
            if not os.path.exists(sym_cache_dir):
                os.makedirs(sym_cache_dir)
            if not validate_symbolizer_version(chrome_version):
                logger.error("Symbolizer version mismatch!")
                return ""
        except Exception as e:
            logger.warning("Error obtaining Chrome version: %s", e)
            chrome_version = "UNKNOWN"
        try:
            with open(log_file, "r", encoding="utf-8") as lf:
                log_data = lf.read()
            proc = subprocess.run(
                [SYMBOLIZER_PATH, "-demangle"],
                input=log_data,
                capture_output=True,
                text=True,
                check=True,
            )
            sym = proc.stdout
            out_sym = os.path.join(
                OUTPUT_DIR, "asan_logs", f"symbolized_{os.path.basename(log_file)}"
            )
            with open(out_sym, "w", encoding="utf-8") as sf:
                sf.write(sym)
            logger.info("Symbolized => %s", out_sym)
            return sym
        except Exception as e:
            logger.warning("Symbolization error => %s", e)
            return ""

    def check_memory_errors(
        self, driver: webdriver.Chrome, current: Dict[str, Any], test_file_path: str
    ) -> None:
        asan_logs = glob.glob(os.path.join(OUTPUT_DIR, "asan_logs", "*.log"))
        for logf in asan_logs:
            try:
                with open(logf, "r", encoding="utf-8") as f:
                    txt = f.read()
                if "AddressSanitizer" in txt:
                    rc = RootCauseAnalyzer.classify_crash_log(txt)
                    current["root_cause"] = rc
                    sym_trace = ""
                    if CRASH_ANALYSIS_MODE.lower() != "raw":
                        sym_trace = self.symbolize_trace(logf)
                    is_new, sign = self.crash_deduper.check_or_add_crash(
                        logf, sym_trace
                    )
                    detail = f"CrashSign={sign}, new={is_new}, rootCause={rc}"
                    self.record_anomaly(
                        current,
                        "memory_error",
                        detail,
                        "check_memory_errors",
                        anomaly_category="crash",
                    )  # Example category

                    # Embed raw and symbolized logs in JSON report
                    current["artifacts"]["raw_asan_log"] = os.path.basename(logf)
                    if sym_trace:
                        current["artifacts"]["symbolized_asan_log"] = os.path.basename(
                            os.path.join(
                                OUTPUT_DIR,
                                "asan_logs",
                                f"symbolized_{os.path.basename(logf)}",
                            )
                        )

                    if is_new:
                        minimize_crash_input(test_file_path)
                        current["artifacts"]["minimized_input"] = (
                            os.path.basename(test_file_path) + ".minimized"
                        )  # Track minimized input in report

            except Exception:
                pass

    def check_dom_structure(
        self, driver: webdriver.Chrome, current: Dict[str, Any]
    ) -> None:
        try:
            # 1. DOM Size
            dom_size = driver.execute_script(
                "return document.querySelectorAll('*').length;"
            )
            current["metrics"]["dom_nodes"] = dom_size
            if dom_size > 5000:
                self.record_anomaly(
                    current,
                    "large_dom_size",
                    f"DOM contains a large number of nodes: {dom_size}",
                    "check_dom_structure",
                    anomaly_category="dom_structure",
                )  # Example category

            # 2. Deep Nesting
            max_depth = 0
            deepest_element = None

            def get_depth(element, depth=0):
                nonlocal max_depth, deepest_element
                if depth > max_depth:
                    max_depth = depth
                    deepest_element = element
                for child in element.find_elements(By.XPATH, "./*"):
                    get_depth(child, depth + 1)

            get_depth(driver.find_element(By.TAG_NAME, "html"))
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
                )  # Example category

            # 3. Duplicate IDs
            duplicate_ids = driver.execute_script(
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
            if duplicate_ids:
                elements_with_duplicate_ids = []
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
                )  # Example category

            # 4. Blocking Scripts in Body
            scripts_in_body = driver.execute_script(
                """
            return Array.from(document.body.querySelectorAll('script'))
                .filter(s => !s.async && !s.defer && !s.type)
                .map(s => s.outerHTML);
            """
            )
            if scripts_in_body:
                self.record_anomaly(
                    current,
                    "blocking_scripts_in_body",
                    {"scripts": scripts_in_body},
                    "check_dom_structure",
                    anomaly_category="performance",
                )  # Example category

        except Exception as e:
            self.record_anomaly(
                current,
                "dom_structure_check_error",
                str(e),
                "check_dom_structure",
                anomaly_category="internal_error",
            )  # Example category

    def check_security_issues(
        self, driver: webdriver.Chrome, current: Dict[str, Any]
    ) -> None:
        try:
            # 1. Mixed Content Check
            mixed_content_resources = []
            try:
                performance_logs = driver.get_log("performance")
            except WebDriverException as e:
                logger.warning(
                    f"Failed to get 'performance' logs in check_security_issues: {e}"
                )
                performance_logs = []  # or None
            if performance_logs:  # Check if the logs were successfully retrieved
                for entry in performance_logs:
                    try:
                        message = json.loads(entry["message"])
                        if (
                            "message" in entry
                            and "Network.responseReceived" in entry["message"]
                            and "params" in message
                            and "response" in message["params"]
                        ):
                            url = message["params"]["response"]["url"]
                            if url.startswith(
                                "http://"
                            ) and driver.current_url.startswith("https://"):
                                mixed_content_resources.append(url)
                    except (json.JSONDecodeError, KeyError) as e:
                        logger.warning(f"Error processing performance log entry: {e}")

            if mixed_content_resources:
                self.record_anomaly(
                    current,
                    "mixed_content",
                    {"resources": mixed_content_resources},
                    "check_security_issues",
                    anomaly_category="security",
                )  # Example category

            # 2. CSP Violations
            csp_violations = []
            try:
                browser_logs = driver.get_log("browser")
            except WebDriverException as e:
                logger.warning(
                    f"Failed to get 'browser' logs in check_security_issues: {e}"
                )
                browser_logs = []  # or None
            if browser_logs:  # Ensure logs were retrieved
                for entry in browser_logs:
                    if "content security policy" in entry.get("message", "").lower():
                        csp_violations.append(entry)
            if csp_violations:
                self.record_anomaly(
                    current,
                    "csp_violation",
                    {"violations": csp_violations},
                    "check_security_issues",
                    anomaly_category="security",
                )  # Example category

            # 3. Missing Security Headers
            nav_entry = driver.execute_script(
                "return performance.getEntriesByType('navigation')[0];"
            )
            if nav_entry:
                headers = nav_entry.get("responseHeaders", [])
                headers_dict = {
                    header["name"].lower(): header["value"] for header in headers
                }
                required_headers = {
                    "x-content-type-options": "nosniff",
                    "x-frame-options": ["deny", "sameorigin"],
                    "strict-transport-security": r"max-age=\d+; includeSubDomains",
                    "content-security-policy": ".+",
                    "x-xss-protection": "1; mode=block",
                }
                missing_or_invalid_headers = {}
                for header, expected_value in required_headers.items():
                    actual_value = headers_dict.get(header)
                    if not actual_value:
                        missing_or_invalid_headers[header] = "Missing"
                    elif isinstance(expected_value, list):
                        if actual_value not in expected_value:
                            missing_or_invalid_headers[
                                header
                            ] = f"Invalid (expected one of: {', '.join(expected_value)})"
                    elif not re.match(expected_value, actual_value):
                        missing_or_invalid_headers[
                            header
                        ] = f"Invalid (does not match: {expected_value})"
                if missing_or_invalid_headers:
                    self.record_anomaly(
                        current,
                        "missing_or_invalid_security_headers",
                        missing_or_invalid_headers,
                        "check_security_issues",
                        anomaly_category="security",
                    )  # Example category

            # 4. Insecure External Script Inclusion
            scripts = driver.find_elements(By.TAG_NAME, "script")
            insecure_scripts = []
            for script in scripts:
                src = script.get_attribute("src")
                if src and src.startswith("http://"):
                    insecure_scripts.append(src)
            if insecure_scripts:
                self.record_anomaly(
                    current,
                    "insecure_external_script",
                    {"scripts": insecure_scripts},
                    "check_security_issues",
                    anomaly_category="security",
                )  # Example category

        except Exception as e:
            self.record_anomaly(
                current,
                "security_check_error",
                str(e),
                "check_security_issues",
                anomaly_category="internal_error",
            )  # Example category

    def check_accessibility(
        self, driver: webdriver.Chrome, current: Dict[str, Any]
    ) -> None:
        try:
            axe = axe_selenium_python.Axe(driver)
            axe.inject()
            rules = {
                "wcag2a": {"type": "tag", "values": ["wcag2a"]},
                "wcag2aa": {"type": "tag", "values": ["wcag2aa"]},
                "wcag21aa": {"type": "tag", "values": ["wcag21aa"]},
                "section508": {"type": "tag", "values": ["section508"]},
                "best-practice": {"type": "tag", "values": ["best-practice"]},
            }
            all_violations = []
            for ruleset, options in rules.items():
                results = axe.run(context="body", options={"runOnly": options})
                violations = results.get("violations", [])
                for violation in violations:
                    violation["ruleset"] = ruleset
                    violation["element_html"] = driver.find_element(
                        By.CSS_SELECTOR, violation["target"][0]
                    ).get_attribute("outerHTML")
                    try:
                        element = driver.find_element(
                            By.CSS_SELECTOR, violation["target"][0]
                        )
                        violation["screenshot"] = element.screenshot_as_base64
                    except Exception as e:
                        logger.warning(
                            f"Failed to capture screenshot of violating element: {e}"
                        )
                all_violations.extend(violations)

            if all_violations:
                summary = {}
                for v in all_violations:
                    ruleset = v["ruleset"]
                    summary[ruleset] = summary.get(ruleset, 0) + 1
                self.record_anomaly(
                    current,
                    "accessibility_violations",
                    {"violations": all_violations, "summary": summary},
                    "check_accessibility",
                    anomaly_category="accessibility",
                )  # Example category

        except Exception as e:
            self.record_anomaly(
                current,
                "accessibility_check_error",
                str(e),
                "check_accessibility",
                anomaly_category="internal_error",
            )  # Example category

    def check_media_playback(
        self, driver: webdriver.Chrome, current: Dict[str, Any]
    ) -> None:
        try:
            media_elements = driver.find_elements(By.CSS_SELECTOR, "video, audio")
            for element in media_elements:
                media_info = {
                    "tagName": element.tag_name,
                    "src": element.get_attribute("src"),
                    "paused": element.get_property("paused"),
                    "error": element.get_property("error"),
                    "readyState": element.get_property("readyState"),
                    "duration": element.get_property("duration"),
                    "networkState": element.get_property("networkState"),
                }
                if media_info["error"]:
                    error_message = f"Media error: {media_info['error']['code']} - {media_info['error']['message']}"
                    self.record_anomaly(
                        current,
                        "media_playback_error",
                        error_message,
                        "check_media_playback",
                        element=element,
                        anomaly_category="media",
                    )  # Example category
                elif media_info["readyState"] < 4:
                    self.record_anomaly(
                        current,
                        "media_playback_incomplete",
                        f"readyState: {media_info['readyState']}",
                        "check_media_playback",
                        element=element,
                        anomaly_category="media",
                    )  # Example category
                elif (
                    media_info.get("duration", 0) > 0
                    and media_info["networkState"] == 3
                ):
                    self.record_anomaly(
                        current,
                        "media_playback_no_source",
                        "No source found for media",
                        "check_media_playback",
                        element=element,
                        anomaly_category="media",
                    )  # Example category

                try:
                    if media_info["paused"]:
                        element.play()
                        time.sleep(2)
                        if element.get_property("paused"):
                            self.record_anomaly(
                                current,
                                "media_playback_failed_to_play",
                                "Failed to play media",
                                "check_media_playback",
                                element=element,
                                anomaly_category="media",
                            )  # Example category
                    else:
                        element.pause()
                        time.sleep(2)
                        if not element.get_property("paused"):
                            self.record_anomaly(
                                current,
                                "media_playback_failed_to_pause",
                                "Failed to pause media",
                                "check_media_playback",
                                element=element,
                                anomaly_category="media",
                            )  # Example category

                except Exception as e:
                    self.record_anomaly(
                        current,
                        "media_playback_interaction_error",
                        str(e),
                        "check_media_playback",
                        element=element,
                        anomaly_category="media",
                    )  # Example category

        except Exception as e:
            self.record_anomaly(
                current,
                "media_playback_error",
                str(e),
                "check_media_playback",
                anomaly_category="media",
            )  # Example category

    def record_anomaly(
        self,
        current: Dict[str, Any],
        anomaly_type: str,
        details: Any,
        detected_by: str,
        anomaly_category: str = "general",
        element: Optional[webdriver.Remote] = None,
    ) -> None:
        entry = {
            "type": anomaly_type,
            "category": anomaly_category,  # Added category
            "timestamp": datetime.now().isoformat(),
            "details": details,
            "severity": self.get_severity(anomaly_type),
            "detected_by": detected_by,
            "artifacts": {},
        }
        if element:
            entry["artifacts"]["element_screenshot"] = self.capture_element_screenshot(
                element
            )  # More descriptive artifact name

        current["anomalies"].append(entry)
        current["status"] = "failed"
        # Report update is now done at the end in run_test_suite
        # self.append_single_test_report(current["file"])

    def capture_element_screenshot(self, element: webdriver.Remote) -> Optional[str]:
        try:
            return element.screenshot_as_base64
        except Exception as e:
            logger.error(f"Error capturing element screenshot: {e}")
            return None

    def check_storage(self, driver: webdriver.Chrome, current: Dict[str, Any]) -> None:
        try:
            # Local Storage Checks
            test_key = "fuzz_test_key_" + str(uuid.uuid4())[:8]
            test_value = "fuzz_test_value_" + str(uuid.uuid4())[:8]
            driver.execute_script(
                f"localStorage.setItem('{test_key}', '{test_value}');"
            )
            retrieved_value = driver.execute_script(
                f"return localStorage.getItem('{test_key}');"
            )
            if retrieved_value != test_value:
                self.record_anomaly(
                    current,
                    "local_storage_anomaly",
                    f"Value mismatch: expected '{test_value}', got '{retrieved_value}'",
                    "check_storage",
                    anomaly_category="storage",
                )  # Example category
            driver.execute_script(f"localStorage.removeItem('{test_key}');")
            retrieved_after_remove = driver.execute_script(
                f"return localStorage.getItem('{test_key}');"
            )
            if retrieved_after_remove is not None:
                self.record_anomaly(
                    current,
                    "local_storage_remove_failed",
                    "Failed to remove item from localStorage",
                    "check_storage",
                    anomaly_category="storage",
                )  # Example category

            # Session Storage Checks
            test_key_session = "fuzz_test_key_session" + str(uuid.uuid4())[:8]
            test_value_session = "fuzz_test_value_session" + str(uuid.uuid4())[:8]
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
                )  # Example category
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
                )  # Example category

            # Cookie Checks
            cookie_name = "fuzz_test_cookie_" + str(uuid.uuid4())[:8]
            cookie_value = "fuzz_test_cookie_value_" + str(uuid.uuid4())[:8]
            driver.add_cookie({"name": cookie_name, "value": cookie_value})
            cookies = driver.get_cookies()
            found = False
            for cookie in cookies:
                if cookie["name"] == cookie_name and cookie["value"] == cookie_value:
                    found = True
                    break
            if not found:
                self.record_anomaly(
                    current,
                    "cookie_set_failed",
                    "Failed to set the cookie correctly.",
                    "check_storage",
                    anomaly_category="storage",
                )  # Example category
            driver.delete_cookie(cookie_name)
            cookies_after_delete = driver.get_cookies()
            cookie_exists_after_delete = any(
                c["name"] == cookie_name for c in cookies_after_delete
            )
            if cookie_exists_after_delete:
                self.record_anomaly(
                    current,
                    "cookie_deletion_failed",
                    f"Failed to delete cookie '{cookie_name}'",
                    "check_storage",
                    anomaly_category="storage",
                )  # Example category

        except Exception as e:
            self.record_anomaly(
                current,
                "storage_error",
                str(e),
                "check_storage",
                anomaly_category="storage",
            )  # Example category

    def check_event_handling(
        self, driver: webdriver.Chrome, current: Dict[str, Any]
    ) -> None:
        try:
            # 1. Click Event Handling
            click_test_id = "fuzz_click_test_" + str(uuid.uuid4())[:8]
            driver.execute_script(
                f"""
                let test_element = document.createElement('button');
                test_element.id = '{click_test_id}';
                test_element.addEventListener('click', function() {{ this.setAttribute('data-clicked', 'true'); }});
                document.body.appendChild(test_element);
            """
            )
            try:
                element = WebDriverWait(driver, 10).until(
                    EC.presence_of_element_located((By.ID, click_test_id))
                )
                element.click()
                time.sleep(0.5)
                if not element.get_attribute("data-clicked"):
                    self.record_anomaly(
                        current,
                        "click_event_failed",
                        f"Click event handler not executed on element",
                        "check_event_handling",
                        anomaly_category="event_handling",
                    )  # Example category
            except TimeoutException:
                self.record_anomaly(
                    current,
                    "element_not_found",
                    f"Element with id '{click_test_id}' not found",
                    "check_event_handling",
                    anomaly_category="event_handling",
                )  # Example category

            # 2. Mouseover Event
            mouseover_test_id = "fuzz_mouseover_test_" + str(uuid.uuid4())[:8]
            driver.execute_script(
                f"""
                let test_element = document.createElement('div');
                test_element.id = '{mouseover_test_id}';
                test_element.addEventListener('mouseover', function() {{ this.setAttribute('data-mouseover', 'true'); }});
                document.body.appendChild(test_element);
            """
            )
            try:
                element = WebDriverWait(driver, 10).until(
                    EC.presence_of_element_located((By.ID, mouseover_test_id))
                )
                ActionChains(driver).move_to_element(element).perform()
                time.sleep(0.5)
                if not element.get_attribute("data-mouseover"):
                    self.record_anomaly(
                        current,
                        "mouseover_event_failed",
                        f"Mouseover event handler not executed on element",
                        "check_event_handling",
                        anomaly_category="event_handling",
                    )  # Example category
            except TimeoutException:
                self.record_anomaly(
                    current,
                    "element_not_found",
                    f"Element with id '{mouseover_test_id}' not found",
                    "check_event_handling",
                    anomaly_category="event_handling",
                )  # Example category

            # 3. Form Submission (if forms are present)
            forms = driver.find_elements(By.TAG_NAME, "form")
            if forms:
                form = forms[0]
                submit_button_test_id = "fuzz_submit_test_" + str(uuid.uuid4())[:8]
                driver.execute_script(
                    f"""
                     let submit_button = document.createElement('button');
                     submit_button.type = 'submit';
                     submit_button.id = '{submit_button_test_id}';
                     arguments[0].appendChild(submit_button)
                """,
                    form,
                )
                try:
                    submit_button = WebDriverWait(driver, 10).until(
                        EC.presence_of_element_located((By.ID, submit_button_test_id))
                    )
                    driver.execute_script(
                        "arguments[0].setAttribute('data-submitted', 'false')", form
                    )
                    form.submit()
                    time.sleep(2)
                    driver.execute_script(
                        """
                        arguments[0].addEventListener('submit', function(event) {
                             event.preventDefault();
                             this.setAttribute('data-submitted', 'prevented');
                             });
                   """,
                        form,
                    )
                    if form.get_attribute("data-submitted") == "prevented":
                        self.record_anomaly(
                            current,
                            "form_submission_prevented",
                            "Form submission prevented by JavaScript",
                            "check_event_handling",
                            anomaly_category="event_handling",
                        )  # Example category
                except TimeoutException:
                    self.record_anomaly(
                        current,
                        "element_not_found",
                        f"Submit button not found in form",
                        "check_event_handling",
                        anomaly_category="event_handling",
                    )  # Example category

        except Exception as e:
            self.record_anomaly(
                current,
                "event_handling_error",
                str(e),
                "check_event_handling",
                anomaly_category="event_handling",
            )  # Example category

    def check_localization(
        self, driver: webdriver.Chrome, current: Dict[str, Any]
    ) -> None:
        try:
            html_lang = driver.execute_script("return document.documentElement.lang;")
            html_dir = driver.execute_script("return document.documentElement.dir;")

            if not html_lang:
                self.record_anomaly(
                    current,
                    "missing_lang_attribute",
                    "The 'lang' attribute is missing from the <html> tag.",
                    "check_localization",
                    anomaly_category="localization",
                )  # Example category
            elif not re.match(r"^[a-zA-Z]{2,3}(-[a-zA-Z]{2,3})?$", html_lang):
                self.record_anomaly(
                    current,
                    "invalid_lang_attribute",
                    f"Invalid 'lang' attribute value: {html_lang}",
                    "check_localization",
                    anomaly_category="localization",
                )  # Example category

            if html_lang and html_dir:
                expected_dir = (
                    "rtl" if html_lang.startswith(("ar", "he", "fa", "ur")) else "ltr"
                )
                if html_dir != expected_dir:
                    self.record_anomaly(
                        current,
                        "lang_dir_mismatch",
                        f"'lang' and 'dir' attributes mismatch: lang={html_lang}, dir={html_dir}",
                        "check_localization",
                        anomaly_category="localization",
                    )  # Example category

            untranslated_text = driver.find_elements(
                By.XPATH, "//*[text()='Placeholder Text' or text()='Lorem ipsum']"
            )
            if untranslated_text:
                elements = []
                for el in untranslated_text:
                    element_info = {"tag": el.tag_name, "text": el.text}
                    elements.append(element_info)
                self.record_anomaly(
                    current,
                    "untranslated_text",
                    f"Found untranslated placeholder text: {elements}",
                    "check_localization",
                    anomaly_category="localization",
                )  # Example category

            date_elements = driver.find_elements(By.XPATH, "//*[contains(@*, 'date')]")
            for el in date_elements:
                date_format = el.get_attribute("type") or el.tag_name
                date_value = el.get_attribute("value") or el.text
                if date_value:
                    try:
                        datetime.strptime(date_value, "%Y-%m-%d")
                    except ValueError:
                        self.record_anomaly(
                            current,
                            "invalid_date_format",
                            f"Invalid date format: {date_value}, expected YYYY-MM-DD",
                            "check_localization",
                            element=el,
                            anomaly_category="localization",
                        )  # Example category

        except Exception as e:
            self.record_anomaly(
                current,
                "localization_error",
                str(e),
                "check_localization",
                anomaly_category="localization",
            )  # Example category

    def check_performance(
        self, driver: webdriver.Chrome, current: Dict[str, Any]
    ) -> None:
        try:
            # 1. Page Load Time
            navigation_start = driver.execute_script(
                "return window.performance.timing.navigationStart;"
            )
            load_event_end = driver.execute_script(
                "return window.performance.timing.loadEventEnd;"
            )
            if navigation_start is not None and load_event_end is not None:
                load_time = load_event_end - navigation_start
                current["metrics"]["load_time"] = load_time
                if load_time > 5000:
                    self.record_anomaly(
                        current,
                        "slow_page_load",
                        f"Page load time exceeds threshold: {load_time} ms",
                        "check_performance",
                        anomaly_category="performance",
                    )  # Example category

            # 2. Resource Load Times
            resource_timings = driver.execute_script(
                "return window.performance.getEntriesByType('resource');"
            )
            slow_resources = []
            for resource in resource_timings:
                duration = resource.get("duration", 0)
                if duration > 3000:
                    slow_resources.append(
                        {
                            "url": resource["name"],
                            "duration": duration,
                            "initiatorType": resource.get("initiatorType"),
                            "resourceType": resource.get("resourceType"),
                        }
                    )  # More resource details
            if slow_resources:
                self.record_anomaly(
                    current,
                    "slow_resources",
                    {"resources": slow_resources},
                    "check_performance",
                    anomaly_category="performance",
                )  # Example category

            # 3. Long Tasks
            long_tasks = driver.execute_script(
                """
                const longTasks = [];
                try {
                     new PerformanceObserver(list => {
                        list.getEntries().forEach(entry => {
                            if (entry.duration > 100) {
                                longTasks.push({ name: entry.name, duration: entry.duration });
                               }
                         });
                      }).observe({type: 'longtask', buffered: true});
                } catch(e){}
                return longTasks
                """
            )
            if long_tasks:
                self.record_anomaly(
                    current,
                    "long_tasks",
                    {"tasks": long_tasks},
                    "check_performance",
                    anomaly_category="performance",
                )  # Example category

            # 4. First Input Delay (FID)
            fid = driver.execute_script(
                "return new Promise(resolve => {try {fid = new Promise(resolve => { new PerformanceObserver(list => {resolve(list.getEntries()[0].processingStart - list.getEntries()[0].startTime);}).observe({ type: 'first-input', buffered: true });});fid.then(value => resolve(value));} catch(e) {resolve(null);} })"
            )
            if fid and fid > 300:
                self.record_anomaly(
                    current,
                    "high_fid",
                    f"First Input Delay (FID) is high: {fid} ms",
                    "check_performance",
                    anomaly_category="performance",
                )  # Example category

            # 5. Time to First Byte (TTFB)
            ttfb = driver.execute_script(
                """
                let navEntry = performance.getEntriesByType('navigation')[0];
                return navEntry ? navEntry.responseStart - navEntry.requestStart : null;
            """
            )
            if ttfb is not None and ttfb > 1000:
                self.record_anomaly(
                    current,
                    "high_ttfb",
                    f"Time to First Byte (TTFB) is high: {ttfb} ms",
                    "check_performance",
                    anomaly_category="performance",
                )  # Example category

        except Exception as e:
            self.record_anomaly(
                current,
                "performance_check_error",
                str(e),
                "check_performance",
                anomaly_category="internal_error",
            )  # Example category

    def check_hardware_resources(
        self, driver: webdriver.Chrome, current: Dict[str, Any]
    ) -> None:
        try:
            process = psutil.Process(os.getpid())
            initial_cpu_percent = psutil.cpu_percent()
            initial_memory_info = process.memory_info()
            initial_disk_io = psutil.disk_io_counters()
            time.sleep(5)
            final_cpu_percent = psutil.cpu_percent()
            final_memory_info = process.memory_info()
            final_disk_io = psutil.disk_io_counters()

            cpu_usage = final_cpu_percent - initial_cpu_percent
            memory_usage = (final_memory_info.rss - initial_memory_info.rss) / (
                1024**2
            )
            disk_read = (final_disk_io.read_bytes - initial_disk_io.read_bytes) / (
                1024**2
            )
            disk_write = (final_disk_io.write_bytes - initial_disk_io.write_bytes) / (
                1024**2
            )

            current["metrics"]["cpu_usage"] = cpu_usage
            current["metrics"]["memory_usage"] = memory_usage
            current["metrics"]["disk_read"] = disk_read
            current["metrics"]["disk_write"] = disk_write

            if cpu_usage > 90:
                self.record_anomaly(
                    current,
                    "high_cpu_usage",
                    f"CPU usage exceeded threshold: {cpu_usage:.2f}%",
                    "check_hardware_resources",
                    anomaly_category="hardware",
                )  # Example category
            if memory_usage > 500:
                self.record_anomaly(
                    current,
                    "high_memory_usage",
                    f"Memory usage exceeded threshold: {memory_usage:.2f} MB",
                    "check_hardware_resources",
                    anomaly_category="hardware",
                )  # Example category
            if disk_read > 100:
                self.record_anomaly(
                    current,
                    "high_disk_read",
                    f"Disk read exceeded threshold: {disk_read:.2f} MB",
                    "check_hardware_resources",
                    anomaly_category="hardware",
                )  # Example category
            if disk_write > 50:
                self.record_anomaly(
                    current,
                    "high_disk_write",
                    f"Disk write exceeded threshold: {disk_write:.2f} MB",
                    "check_hardware_resources",
                    anomaly_category="hardware",
                )  # Example category

            logger.info(
                "Resource Usage: CPU=%.2f%%, Memory=%.2f MB, Disk Read=%.2f MB, Disk Write=%.2f MB",
                cpu_usage,
                memory_usage,
                disk_read,
                disk_write,
            )

        except Exception as e:
            self.record_anomaly(
                current,
                "hardware_check_error",
                str(e),
                "check_hardware_resources",
                anomaly_category="internal_error",
            )  # Example category

  

    def check_console_errors(
        self, driver: webdriver.Chrome, current: Dict[str, Any]
    ) -> None:
        try:
            console_logs = driver.get_log("browser")
            errors_and_warnings = []
            for log_entry in console_logs:
                level = log_entry["level"]
                if level in ["SEVERE", "WARNING"]:
                    message = log_entry["message"]
                    source = log_entry.get("source", "unknown")
                    url = log_entry.get("url", "")

                    error_type = "general"
                    if (
                        "net::ERR_" in message
                        or "failed to load resource" in message.lower()
                        or "status code:" in message.lower()
                    ):
                        error_type = "network_error"
                    elif (
                        "javascript error:" in message.lower()
                        or "uncaught" in message.lower()
                        or "syntaxerror" in message.lower()
                    ):
                        error_type = "javascript_error"
                    elif "404" in message or "500" in message:
                        error_type = "http_error"

                    errors_and_warnings.append(
                        {
                            "level": level,
                            "type": error_type,
                            "message": message,
                            "source": source,
                            "url": url,
                        }
                    )
            if errors_and_warnings:
                error_counts = {}
                for error in errors_and_warnings:
                    err_type = error["type"]
                    error_counts[err_type] = error_counts.get(err_type, 0) + 1

                anomaly_details = {
                    "errors_warnings": errors_and_warnings,
                    "error_counts": error_counts,
                }
                self.record_anomaly(
                    current,
                    "console_errors_warnings",
                    anomaly_details,
                    "check_console_errors",
                    anomaly_category="console",
                )  # Example category

        except Exception as e:
            self.record_anomaly(
                current,
                "console_check_error",
                str(e),
                "check_console_errors",
                anomaly_category="console",
            )  # Example category

    def check_xss_patterns(
        self, driver: webdriver.Chrome, current: Dict[str, Any]
    ) -> None:
        try:
            html_content = driver.page_source
            xss_patterns = [
                r"<script[^>]*>[^<]*</script>",
                r"on\w+=\".*javascript:.*\"",
                r"data:text/html;base64,[a-zA-Z0-9+/=]+",
                r"eval\(",
                r"fromCharCode\(",
                r"String\.fromCharCode\(",
                r"setTimeout\(",
                r"setInterval\(",
                r"<iframe[^>]*src=[^>]*>",
                r"<object[^>]*data=[^>]*>",
                r"<embed[^>]*src=[^>]*>",
            ]
            suspicious_elements = []
            for pattern in xss_patterns:
                matches = re.finditer(pattern, html_content, re.IGNORECASE)
                for match in matches:
                    try:
                        matching_element = driver.find_element(
                            By.XPATH, f"//*[contains(text(),'{match.group(0)}')]"
                        )
                        element_info = {
                            "tag": matching_element.tag_name,
                            "outerHTML": matching_element.get_attribute("outerHTML"),
                        }
                        suspicious_elements.append(
                            {
                                "element_info": element_info,
                                "pattern": pattern,
                                "match": match.group(0),
                            }
                        )
                    except Exception:
                        suspicious_elements.append(
                            {"pattern": pattern, "match": match.group(0)}
                        )

            if suspicious_elements:
                self.record_anomaly(
                    current,
                    "potential_xss_in_html",
                    suspicious_elements,
                    "check_xss_patterns",
                    anomaly_category="security",
                )  # Example category

            for entry in driver.get_log("browser"):
                if entry["level"] == "SEVERE":
                    message = entry.get("message", "")
                    decoded_message = unquote(message)
                    if any(
                        re.search(p, decoded_message, re.IGNORECASE)
                        for p in xss_patterns
                    ):
                        self.record_anomaly(
                            current,
                            "potential_xss_execution",
                            message,
                            "check_xss_patterns",
                            anomaly_category="security",
                        )  # Example category

        except Exception as e:
            self.record_anomaly(
                current,
                "xss_check_error",
                str(e),
                "check_xss_patterns",
                anomaly_category="internal_error",
            )  # Example category

    def check_memory_corruption_patterns(
        self, driver: webdriver.Chrome, current: Dict[str, Any]
    ) -> None:
        try:
            asan_logs = glob.glob(os.path.join(OUTPUT_DIR, "asan_logs", "*.log"))
            for log_file in asan_logs:
                try:
                    with open(log_file, "r", encoding="utf-8") as f:
                        log_content = f.read()

                    memory_errors = {}
                    error_types = [
                        "heap-use-after-free",
                        "heap-buffer-overflow",
                        "stack-buffer-overflow",
                        "global-buffer-overflow",
                        "use-after-poison",
                        "container-overflow",
                        "double-free",
                    ]
                    for err_type in error_types:
                        matches = re.findall(
                            r"" + err_type, log_content, re.IGNORECASE
                        )  # Dynamic regex pattern
                        if matches:
                            memory_errors[err_type] = matches

                    for error_type, matches in memory_errors.items():
                        self.record_anomaly(
                            current,
                            error_type,
                            {
                                "count": len(matches),
                                "log_file": log_file,
                                "matches": matches,
                            },
                            "check_memory_corruption_patterns",
                            anomaly_category="crash",
                        )  # Example category

                    if (
                        "segmentation fault" in log_content.lower()
                        or "segfault" in log_content.lower()
                    ):
                        self.record_anomaly(
                            current,
                            "segfault",
                            {"log_file": log_file},
                            "check_memory_corruption_patterns",
                            anomaly_category="crash",
                        )  # Example category
                    if "memory usage:" in log_content.lower():
                        memory_usage = float(
                            log_content.lower().split("memory usage:")[1].split()[0]
                        )
                        if memory_usage > 1e9:
                            self.record_anomaly(
                                current,
                                "excessive_memory_usage",
                                f"Potentially excessive memory usage detected : {memory_usage}",
                                "check_memory_corruption_patterns",
                                anomaly_category="performance",
                            )  # Example category

                except Exception as log_error:
                    logger.error(
                        f"Error reading or processing ASan log file {log_file}: {log_error}"
                    )

        except Exception as e:
            self.record_anomaly(
                current,
                "memory_corruption_check_error",
                str(e),
                "check_memory_corruption_patterns",
                anomaly_category="internal_error",
            )  # Example category

    def get_severity(self, anomaly_type: str) -> int:
        mapping = {
            "memory_error": 5,
            "crash": 5,
            "xss_vulnerability": 5,
            "mixed_content": 4,
            "csp_violation": 4,
            "timeout": 4,
            "network_error": 3,
            "dom_structure": 3,
            "gpu_anomaly": 3,
            "media_playback": 3,
            "storage_anomaly": 3,
            "event_failure": 3,
            "slow_execution": 2,
            "accessibility": 2,
            "i18n_issue": 2,
            "execution_error": 5,
            "hardware_error": 3,
            "console_errors": 3,
            "memory_corruption": 5,
            "security_header": 4,
        }
        return mapping.get(anomaly_type, 1)

    def generate_text_report(self):
        report_path = os.path.join(OUTPUT_DIR, "reports", "full_report.txt")
        with open(report_path, "w", encoding="utf-8") as text_file:
            text_file.write("=" * 70 + "\n")
            text_file.write("        WEBPAGE ANOMALY DETECTION REPORT      \n")
            text_file.write("=" * 70 + "\n\n")
            text_file.write(
                f"Report Generation Time: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}\n\n"
            )

            total_tests = len(self.results)
            passed_tests = sum(
                1 for r in self.results.values() if r["status"] == "passed"
            )
            failed_tests = total_tests - passed_tests

            text_file.write("----- OVERALL TEST SUMMARY -----\n")
            text_file.write(
                f"Total Webpages Tested:        {total_tests}\n"
            )  # More user-friendly labels
            text_file.write(f"Webpages Passed without Issues: {passed_tests}\n")
            text_file.write(f"Webpages with Detected Issues:   {failed_tests}\n\n")

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
                    5: "Critical",
                    4: "High",
                    3: "Medium",
                    2: "Low",
                    1: "Informational",
                }.get(sev, f"Severity {sev}")
                text_file.write(
                    f"{severity_level_text} Issues:   {severity_counts[sev]}\n"
                )
            text_file.write("\n")

            text_file.write("----- MOST COMMON ISSUES DETECTED -----\n")
            top_anomalies = Counter(anomaly_counts).most_common(5)
            if top_anomalies:
                text_file.write(
                    "The most frequent types of issues detected were:\n"
                )  # More descriptive intro
                for anomaly_type, count in top_anomalies:
                    # More user-friendly phrasing for anomaly types
                    anomaly_description = anomaly_type.replace("_", " ").title()
                    text_file.write(
                        f"- {anomaly_description}: Detected in {count} webpages\n"
                    )
            else:
                text_file.write("No common issues were detected across the webpages.\n")
            text_file.write("\n")

            if failed_tests > 0:  # Conditionally add detailed results section
                text_file.write(
                    "----- WEBPAGES WITH DETECTED ISSUES (Details) -----\n"
                )  # Section title only if there are failures
                for test_name, tdata in self.results.items():
                    if (
                        tdata["status"] == "failed"
                    ):  # Only show details for failed tests
                        text_file.write(f"\n--- Webpage File: {test_name} ---\n")
                        # Status and Duration are still useful, but less technical
                        test_status_text = (
                            "Failed with Issues"
                            if tdata["status"] == "failed"
                            else "Passed"
                        )  # User-friendly status text
                        text_file.write(f"Test Result: {test_status_text}\n")
                        text_file.write(
                            f"Test Duration: {tdata['metrics'].get('duration', 0):.2f} seconds\n"
                        )  # "seconds" unit for clarity
                        if tdata["root_cause"] != "N/A":
                            root_cause_text = (
                                tdata["root_cause"].replace("-", " ").title()
                            )  # User-friendly root cause
                            text_file.write(
                                f"Likely Cause of Crash (if crashed): {root_cause_text}\n"
                            )  # More descriptive label for root cause

                        if tdata["anomalies"]:
                            text_file.write(
                                "Detected Anomalies:\n"
                            )  # User-friendly heading
                            for anomaly in tdata["anomalies"]:
                                anomaly_severity_text = (
                                    {  # User-friendly severity levels again
                                        5: "Critical",
                                        4: "High",
                                        3: "Medium",
                                        2: "Low",
                                        1: "Informational",
                                    }.get(
                                        anomaly["severity"],
                                        f"Severity {anomaly['severity']}",
                                    )
                                )

                                anomaly_type_text = (
                                    anomaly["type"].replace("_", " ").title()
                                )  # User-friendly anomaly type

                                text_file.write(
                                    f"  - Issue Type: {anomaly_type_text}, Severity: {anomaly_severity_text}, Detected by: {anomaly['detected_by']}\n"
                                )  # More descriptive anomaly line
                                if anomaly["details"]:
                                    if isinstance(anomaly["details"], dict):
                                        details_str = "\n".join(
                                            [
                                                f"    - {k.replace('_', ' ').title()}: {v}"
                                                for k, v in anomaly["details"].items()
                                            ]
                                        )  # Format dict details
                                        text_file.write(details_str + "\n")
                                    else:
                                        text_file.write(
                                            f"    - Details: {anomaly['details']}\n"
                                        )  # Simpler details display

            text_file.write("\n" + "=" * 70 + "\n")
            text_file.write("       END OF ANOMALY REPORT      \n")
            text_file.write("=" * 70 + "\n")
        logger.info(f"[REPORT] Text report generated: {report_path}")

    def generate_json_report(self):
        det_json_path = os.path.join(OUTPUT_DIR, "reports", "detailed_report.json")
        with open(det_json_path, "r", encoding="utf-8") as jf:
            existing = json.load(jf)
        if "tests" not in existing:
            existing["tests"] = {}
        existing["tests"] = self.results  # Directly assign all results
        existing["metadata"]["execution_time"] = datetime.now().isoformat()
        if existing["metadata"].get("chrome_version") == "UNKNOWN":
            try:
                cver = subprocess.check_output(
                    [CHROME_BINARY_PATH, "--version"], text=True
                ).strip()
                existing["metadata"]["chrome_version"] = cver
            except Exception:
                pass
        with open(det_json_path, "w", encoding="utf-8") as jf:
            json.dump(existing, jf, indent=2, default=str)
        logger.info("[REPORT] JSON report generated: %s", det_json_path)

    def write_coverage_summary(self) -> None:
        coverage_summary = {"files": {}}
        logger.debug(
            f"[write_coverage_summary] self.coverage_map keys: {self.coverage_map.keys()}"
        )  # ADDED DEBUG LOGGING HERE
        for fname, cov_list in self.coverage_map.items():
            logger.debug(
                f"[write_coverage_summary] Processing file: {fname}, Coverage Data: {cov_list}"
            )  # ADDED DEBUG LOGGING HERE
            script_count = len(cov_list)
            total_funcs, visited_funcs = 0, 0
            total_ranges, visited_ranges = 0, 0
            for script_cov in cov_list:
                funcs = script_cov.get("functions", [])
                total_funcs += len(funcs)
                for f in funcs:
                    has_visit = False
                    for rng in f.get("ranges", []):
                        total_ranges += 1
                        if rng.get("count", 0) > 0:
                            visited_ranges += 1
                            has_visit = True
                    if has_visit:
                        visited_funcs += 1
            weighted_score = (
                visited_ranges * COVERAGE_WEIGHT_LINE
                + visited_funcs * COVERAGE_WEIGHT_FUNC
                + script_count * COVERAGE_WEIGHT_PATH
            )
            coverage_summary["files"][fname] = {
                "scriptCount": script_count,
                "totalFunctions": total_funcs,
                "visitedFunctions": visited_funcs,
                "totalRanges": total_ranges,
                "visitedRanges": visited_ranges,
                "weightedCoverageScore": weighted_score,
            }
        out_path = os.path.join(OUTPUT_DIR, "coverage_summary.json")
        with open(out_path, "w", encoding="utf-8") as wf:
            json.dump(coverage_summary, wf, indent=2)
        logger.info("[COVERAGE] coverage_summary => %s", out_path)

    def generate_coverage_chart(self) -> None:
        try:
            cov_file = os.path.join(OUTPUT_DIR, "coverage_summary.json")
            if not os.path.exists(cov_file):
                return
            with open(cov_file, "r", encoding="utf-8") as cf:
                data = json.load(cf)
            if "files" not in data:
                return
            rows = []
            for fname, metrics in data["files"].items():
                rows.append(
                    {
                        "File": fname,
                        "VisitedFunctions": metrics.get("visitedFunctions", 0),
                        "VisitedRanges": metrics.get("visitedRanges", 0),
                    }
                )
            df = pd.DataFrame(rows)
            if df.empty:
                return
            plt.figure(figsize=(10, 6))
            heat_data = df.set_index("File")[["VisitedFunctions", "VisitedRanges"]]
            sns.heatmap(heat_data, annot=True, fmt="d")
            chart_path = os.path.join(OUTPUT_DIR, "coverage_chart.png")
            plt.title("Coverage Distribution Heatmap")
            plt.savefig(chart_path)
            logger.info("[COVERAGE] Chart => %s", chart_path)
            plt.close()
        except Exception as e:
            logger.warning("Failed to generate coverage chart: %s", e)

    def print_console_summary(self):
        total = len(self.results)
        passed = sum(1 for r in self.results.values() if r["status"] == "passed")
        failed = total - passed
        severity_counts = defaultdict(int)
        for res in self.results.values():
            max_sev = max((a["severity"] for a in res["anomalies"]), default=0)
            severity_counts[max_sev] += 1
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
        print("\n" + tabulate(table, headers=["Metric", "Value"], tablefmt="psql"))

    def run_test_suite(self) -> None:
        test_files = sorted(
            glob.glob(os.path.join(MUTATION_DIR, "*.html")),
            key=lambda x: os.path.getsize(x),
        )
        BATCH_SIZE = 4
        from concurrent.futures import ThreadPoolExecutor, as_completed

        for i in range(0, len(test_files), BATCH_SIZE):
            batch = test_files[i : i + BATCH_SIZE]
            logger.info(f"Processing batch {i//BATCH_SIZE+1} ({len(batch)} files)")
            if not self.system_health_ok():
                time.sleep(30)
            with ThreadPoolExecutor(
                max_workers=self.calculate_safe_concurrency(),
                thread_name_prefix="Detector",
            ) as executor:
                future_map = {
                    executor.submit(self.execute_test, tf): tf for tf in batch
                }
                for fut in as_completed(future_map):
                    fname = future_map[fut]
                    try:
                        fut.result()
                    except Exception as e:
                        logger.error("[ERROR] Test crashed => %s: %s", fname, e)

        self.write_coverage_summary()
        if "chart" in REPORT_FORMATS:
            self.generate_coverage_chart()
        if "text" in REPORT_FORMATS:  # Generate text report at the end
            self.generate_text_report()
        if "json" in REPORT_FORMATS:  # Generate JSON report at the end
            self.generate_json_report()
        self.print_console_summary()


OUTPUT_DIR = ""
if os.path.isdir(os.path.dirname(MUTATION_DIR)):
    OUTPUT_DIR = os.path.join(os.path.dirname(MUTATION_DIR), "crash_results")
else:
    OUTPUT_DIR = DEFAULT_DETECTION_RESULTS_DIR
os.makedirs(OUTPUT_DIR, exist_ok=True)


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
    args = parse_args()
    global MUTATION_DIR, OUTPUT_DIR, REPORT_FORMATS
    MUTATION_DIR = args.mutation_dir
    REPORT_FORMATS = [fmt.strip().lower() for fmt in args.report_formats.split(",")]

    required_paths = [
        (CHROME_BINARY_PATH, "Chrome binary"),
        (CHROMEDRIVER_PATH, "ChromeDriver"),
        (MUTATION_DIR, "Default Mutation folder"),
        (BASELINE_DIR, "Baseline folder"),
        (SYMBOLIZER_PATH, "LLVM symbolizer"),
    ]
    for p, desc in required_paths:
        if not os.path.exists(p):
            logger.error("[FATAL] %s not found => %s", desc, p)
            import sys

            sys.exit(1)
    detector = BestChromeDetector()
    detector.run_test_suite()


if __name__ == "__main__":
    main()
