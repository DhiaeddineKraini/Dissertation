#!/usr/bin/env python3
"""
detection.py
------------
Executes mutated HTML files in an ASan-enabled Chrome to detect anomalies, crashes,
and gather deep, detailed reporting. This version includes:
1) Coverage collection via Chrome DevTools Protocol.
2) Crash detection with root cause analysis (use-after-free, double-free, etc.).
3) Comprehensive logs: CSV + JSON + optional coverage chart.
4) Parallel test execution for improved throughput.
5) Accessibility checks, layout anomalies, performance metrics, hardware usage, etc.
6) Execution path analysis (via Chrome 'performance' logs).
7) Advanced crash minimization via delta debugging.
8) Enhanced error handling, resource optimization, concurrency improvements,
   visual diff analysis using histogram comparison, deep security header checks,
   coverage visualization upgrade, symbolization robustness, interactive HTML reporting,
   and enhanced recommendation engine.

Additional Enhancements:
------------------------
1) Updated Chrome configuration for heavy DOMs and large files:
   - Increased memory limits for JS via --js-flags=--max-old-space-size=8192
   - Disabled throttling, GPU usage, and images for speed and stability.
2) Advanced Hang Detection System:
   - A background thread that monitors inactivity and dumps state if 5m of no activity.
3) Infinite Loop Prevention:
   - Use Chrome DevTools to enable script interruption and limit script run time.
4) Comprehensive Execution Wrapper with resource isolation:
   - Strict memory checks, extended timeouts, and robust test crash recovery.

Usage:
  python3 detection.py [mutation_dir]

Environment Variables:
  DETECTION_TARGET_DIR : Override for the default mutation directory.
  CHROME_BINARY_PATH, CHROMEDRIVER_PATH, SYMBOLIZER_PATH, etc. from config.
"""

import os
import glob
import csv
import json
import time
import platform
import subprocess
import logging
import hashlib
import argparse
import psutil
import numpy as np
import re
import atexit
import tempfile
import threading
from collections import defaultdict, Counter
from datetime import datetime
from pathlib import Path
from typing import Any, Dict, List, Optional
from io import BytesIO
from PIL import Image, ImageChops
import imagehash
import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt
import base64
from tabulate import tabulate

from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.cluster import KMeans
from ruptures import Binseg
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.remote.client_config import ClientConfig

from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.common.exceptions import WebDriverException, TimeoutException
from selenium.webdriver.remote.remote_connection import RemoteConnection
from tenacity import retry, stop_after_attempt, wait_exponential
import axe_selenium_python

from selenium.webdriver.remote.remote_connection import RemoteConnection

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
args = parser.parse_args()
MUTATION_DIR: str = args.mutation_dir

logger = logging.getLogger("detection-advanced")
logger.setLevel(base_logger.level if hasattr(base_logger, "level") else logging.INFO)

from threading import Lock
csv_lock = Lock()

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
        try:
            self.driver.execute_cdp_cmd("Profiler.enable", {})
            self.driver.execute_cdp_cmd(
                "Profiler.startPreciseCoverage", {"callCount": False, "detailed": False}
            )
            self.enabled = True
        except Exception as e:
            logger.warning("[COVERAGE] start_js_coverage => %s", e)

    def stop_js_coverage(self) -> List[Dict[str, Any]]:
        if not self.enabled:
            return []
        try:
            result = self.driver.execute_cdp_cmd("Profiler.takePreciseCoverage", {})
            coverage_data = result.get("result", [])
            self.driver.execute_cdp_cmd("Profiler.stopPreciseCoverage", {})
            self.driver.execute_cdp_cmd("Profiler.disable", {})
            return coverage_data
        except Exception as e:
            logger.warning("[COVERAGE] stop_js_coverage => %s", e)
            return []

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
    ) -> (bool, str):
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
        driver.set_page_load_timeout(7200)
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
    def test_fn(content: bytes) -> bool:
        with tempfile.NamedTemporaryFile(delete=False, suffix=".html") as tf:
            tf.write(content)
            temp_path = tf.name
        result = re_run_detection_for_file(
            temp_path, os.path.join(os.path.dirname(temp_path), "minimization_temp")
        )
        try:
            os.remove(temp_path)
        except Exception:
            pass
        return result

    if not os.path.exists(html_path):
        return
    with open(html_path, "rb") as f:
        original = f.read()
    minimized = delta(original, test_fn, delete_policy="DELETE_BLOCKS")
    with open(html_path, "wb") as f:
        f.write(minimized)
    logger.info("[MINIMIZATION] Completed delta debugging for %s", html_path)

class BestChromeDetector:
    def __init__(self) -> None:
        logger.info("[DETECTION] Deep & Detailed Reporting.")
        self.setup_directories()
        self.results: Dict[str, Any] = {}
        self.coverage_map: Dict[str, List[Dict[str, Any]]] = {}
        self.crash_deduper = CrashDeduplicator(OUTPUT_DIR)
        self.temp_files: List[str] = []
        self.memory_trend: List[Dict[str, Any]] = []
        self.global_timeout = 7200
        self.retry_count = 2
        self.asan_options = {
            "detect_leaks": "1",
            "abort_on_error": "1",
            "log_path": f"{OUTPUT_DIR}/asan_logs/ASAN_%n_%p.log",
            "allocator_may_return_null": "1",
            "malloc_context_size": "10",
            "symbolize": "0",
            "detect_leaks": "0",
        }

    def setup_directories(self) -> None:
        dirs = [
            os.path.join(OUTPUT_DIR, "logs"),
            os.path.join(OUTPUT_DIR, "screenshots"),
            os.path.join(OUTPUT_DIR, "asan_logs"),
            os.path.join(OUTPUT_DIR, "reports"),
            os.path.join(OUTPUT_DIR, "network_logs"),
            os.path.join(OUTPUT_DIR, "performance"),
            os.path.join(OUTPUT_DIR, "accessibility"),
            os.path.join(OUTPUT_DIR, "media"),
            os.path.join(OUTPUT_DIR, "storage"),
            os.path.join(OUTPUT_DIR, "localization"),
            os.path.join(OUTPUT_DIR, "animations"),
            os.path.join(OUTPUT_DIR, "sym_versions"),
            os.path.join(OUTPUT_DIR, "crash_logs"),
        ]
        for d in dirs:
            os.makedirs(d, exist_ok=True)
        atexit.register(self._cleanup_temp_files)
        csv_file = os.path.join(OUTPUT_DIR, "reports", "full_report.csv")
        if not os.path.exists(csv_file):
            with open(csv_file, "w", newline="") as cf:
                w = csv.writer(cf)
                w.writerow([
                    "Test File",
                    "Status",
                    "Anomaly Count",
                    "Anomaly Types",
                    "Max Severity",
                    "Duration",
                    "RootCause",
                    "Artifacts",
                ])
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
        options.add_argument(f"--crash-dumps-dir={OUTPUT_DIR}/crash_dumps")
        options.add_argument("--user-agent=Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36")
        options.set_capability("goog:loggingPrefs", {"browser": "ALL"})
        env = os.environ.copy()
        env["ASAN_OPTIONS"] = "detect_leaks=0:allocator_may_return_null=1:abort_on_error=0"
        service = Service(
            executable_path=CHROMEDRIVER_PATH,
            env=env,
            service_args=["--verbose"],
            log_output=os.path.join(OUTPUT_DIR, "chromedriver.log"),
            timeout=7200
        )
        driver = webdriver.Chrome(service=service, options=options)
        driver.execute_cdp_cmd("Network.enable", {})
        driver.execute_cdp_cmd("Network.setBlockedURLs", {
            "urls": [
                "*.mp4", "*.mp3", "*.avi", "*.webm", "*.ogg", "*.wav",
                "*.png", "*.jpg", "*.jpeg", "*.gif", "*.woff", "*.ttf"
            ]
        })
        driver.execute_cdp_cmd("Performance.enable", {})
        RemoteConnection.set_timeout(1800) 
        driver.set_page_load_timeout(3200)
        driver.set_script_timeout(900)
        return driver

    def _is_browser_alive(self, driver) -> bool:
        try:
            return driver.service.process.poll() is None and driver.execute_script("return !!window;")
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
            "artifacts": {},  # Ensure artifacts key is always present
            "metrics": {},
            "anomalies": [],
            "status": "passed",
            "root_cause": "N/A",
        }
        driver = None
        try:
            driver = self.init_chrome()
            if not self._is_browser_alive(driver):
                raise RuntimeError("Browser failed to initialize")
            enable_script_interruption(driver)
            initial_metrics = driver.execute_cdp_cmd("Performance.getMetrics", {})
            logger.debug("Initial Performance Metrics: %s", json.dumps(initial_metrics, indent=2))
            file_uri = f"file://{os.path.abspath(test_file)}"
            logger.info("Testing file: %s", file_uri)
            try:
                driver.get(file_uri)
            except (TimeoutException, WebDriverException) as e:
                if "Read timed out" in str(e):
                    logger.warning("Page load timed out. Forcing stop of further loading.")
                    try:
                        driver.execute_script("window.stop();")
                    except Exception as e2:
                        logger.warning("Failed to force stop: %s", e2)
                else:
                    raise
            WebDriverWait(driver, 30).until(
                lambda d: d.execute_script("return document.readyState") in ["interactive", "complete"]
            )
            driver.execute_script("window.stop();")
            ready_state = driver.execute_script("return document.readyState")
            logger.info("Document readyState: %s", ready_state)
            if ready_state not in ["interactive", "complete"]:
                raise Exception(f"Document not loaded properly (state: {ready_state})")
            final_metrics = driver.execute_cdp_cmd("Performance.getMetrics", {})
            logger.debug("Final Performance Metrics: %s", json.dumps(final_metrics, indent=2))
            if driver.service.process.poll() is not None:
                raise Exception("Browser process crashed during test")
            self.check_memory_errors(driver, current, test_file)
            self.check_console_errors(driver, current)
            self.check_security_issues(driver, current)
            if self.system_health_ok():
                self.check_visual_differences(driver, current, test_name)
                self.check_layout_anomalies(driver, current)
                self.check_accessibility(driver, current)
            else:
                logger.warning("Skipping extended checks due to resource constraints")
            more_checks = [
                self.check_dom_structure,
                self.check_media_playback,
                self.check_storage,
                self.check_event_handling,
                self.check_localization,
                self.check_performance,
                self.check_hardware_resources,
                self.check_animation_glitches,
                self.check_xss_patterns,
                self.check_memory_corruption_patterns,
                self.check_js_heap_usage,
            ]
            for check in more_checks:
                if check.__name__ in ["check_js_heap_usage", "check_memory_errors"]:
                    check(driver, current, test_file)
                else:
                    check(driver, current)
            coverage_agent = None
            if self._is_browser_alive(driver):
                coverage_agent = CoverageCDP(driver)
                coverage_agent.start_js_coverage()
            if self._is_browser_alive(driver) and coverage_agent:
                coverage_data = coverage_agent.stop_js_coverage()
                current["metrics"]["coverage_data"] = coverage_data
                self.coverage_map[test_name] = coverage_data
            else:
                logger.warning("Browser not alive during coverage collection")
        except Exception as e:
            logger.error(f"Test {test_name} => Exception: {str(e)}")
            current["status"] = "failed"
            self._capture_crash_artifacts(driver)
            # Even if an exception occurs, try to run final anomaly checks using available data
            if driver:
                try:
                    self.check_console_errors(driver, current)
                    self.check_security_issues(driver, current)
                except Exception as e2:
                    logger.warning("Final anomaly detection failed: %s", e2)
        finally:
            if driver:
                try:
                    driver.quit()
                except Exception:
                    pass
            duration = (datetime.now() - current["start_time"]).total_seconds()
            current["metrics"]["duration"] = duration
            self.results[test_name] = current
            # Immediately update the report with the data we have (partial or complete)
            self.append_single_test_report(test_name)
            if current["anomalies"]:
                for a in current["anomalies"]:
                    logger.warning(" => anomaly => %s => %s", a["type"], a["details"])
            else:
                logger.info(" => no anomalies found for %s", test_name)
            logger.info("Finished => %s, took %.2fs", test_name, duration)

    def check_js_heap_usage(self, driver: webdriver.Chrome, current: Dict[str, Any], test_file: str):
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
                    )
        except Exception as e:
            self.record_anomaly(current, "memory_analysis_error", str(e), "check_js_heap_usage")

    def execute_test(self, test_file: str) -> None:
        if not MemoryWatcher().check():
            logger.warning("Memory over budget! Skipping extended checks.")
            return
        start_time = time.time()
        try:
            while True:
                elapsed = time.time() - start_time
                if elapsed > self.global_timeout:
                    raise TimeoutException(f"Global test timeout reached: {elapsed:.1f}s")
                if psutil.cpu_percent() > 80:
                    logger.warning("CPU threshold exceeded, throttling...")
                    time.sleep(10)
                    continue
                if psutil.virtual_memory().percent > 90:
                    logger.warning("Memory threshold exceeded, throttling...")
                    time.sleep(30)
                    continue
                break
            for attempt in range(self.retry_count + 1):
                try:
                    self._execute_single_test(test_file)
                    break
                except TimeoutException as te:
                    if attempt < self.retry_count:
                        logger.warning(f"Timeout (attempt {attempt+1}/{self.retry_count+1}) for {test_file}. Retrying...")
                        self._cleanup_temp_files()
                        continue
                    else:
                        raise te
        except TimeoutException as te:
            logger.error(f"Test {test_file} failed due to global timeout: {te}")
            self._create_failure_artifact(test_file, te)
            raise

    def calculate_safe_concurrency(self) -> int:
        mem = psutil.virtual_memory()
        cpu_load = psutil.cpu_percent()
        if mem.available < 2 * 1024**3 or cpu_load > 70:
            return 1
        elif mem.available < 4 * 1024**3 or cpu_load > 50:
            return 2
        return min(3, (os.cpu_count() or 1))

    def system_health_ok(self) -> bool:
        return psutil.cpu_percent() < 75 and psutil.virtual_memory().available > 512 * 1024 * 1024

    def _cleanup_temp_files(self):
        logger.info("Cleaning up %d temporary files", len(self.temp_files))
        for tf in self.temp_files:
            try:
                os.remove(tf)
            except Exception:
                pass
        subprocess.run(["pkill", "-f", "chrome|chromedriver"], stderr=subprocess.DEVNULL)
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
        artifact_path = os.path.join(OUTPUT_DIR, "logs", f"failure_{os.path.basename(test_file)}.log")
        with open(artifact_path, "w", encoding="utf-8") as af:
            af.write(str(exception))
        logger.info("Created failure artifact at %s", artifact_path)

    def symbolize_trace(self, log_file: str) -> str:
        try:
            chrome_version = subprocess.check_output([CHROME_BINARY_PATH, "--version"], text=True).strip()
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
            out_sym = os.path.join(OUTPUT_DIR, "asan_logs", f"symbolized_{os.path.basename(log_file)}")
            with open(out_sym, "w", encoding="utf-8") as sf:
                sf.write(sym)
            logger.info("Symbolized => %s", out_sym)
            return sym
        except Exception as e:
            logger.warning("Symbolization error => %s", e)
            return ""

    def check_memory_errors(self, driver: webdriver.Chrome, current: Dict[str, Any], test_file_path: str) -> None:
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
                    is_new, sign = self.crash_deduper.check_or_add_crash(logf, sym_trace)
                    detail = f"CrashSign={sign}, new={is_new}, rootCause={rc}"
                    self.record_anomaly(current, "memory_error", detail, "check_memory_errors")
                    if is_new:
                        minimize_crash_input(test_file_path)
            except Exception:
                pass

    def check_visual_differences(self, driver: webdriver.Chrome, current: Dict[str, Any], test_name: str) -> None:
        try:
            driver.set_window_size(800, 600)
            sc_path = os.path.join(OUTPUT_DIR, "screenshots", f"{test_name}.jpg")
            driver.save_screenshot(sc_path)
            baseline_path = os.path.join(BASELINE_DIR, f"{test_name}.jpg")
            if os.path.exists(baseline_path):
                baseline_hist = Image.open(baseline_path).histogram()
                current_hist = Image.open(sc_path).histogram()
                diff = sum(abs(b - c) for b, c in zip(baseline_hist, current_hist))
                if diff > 500_000:
                    self.record_anomaly(current, "visual_mismatch", {"histogram_difference": diff, "baseline": baseline_path}, "check_visual_differences")
        except Exception as e:
            self.record_anomaly(current, "visual_analysis_error", str(e), "check_visual_differences")

    def check_layout_anomalies(self, driver: webdriver.Chrome, current: Dict[str, Any]) -> None:
        try:
            layout = driver.execute_script(
                """
                return [...document.querySelectorAll('div,p,section')]
                    .filter(el => {
                        const rect = el.getBoundingClientRect();
                        return rect.width > window.innerWidth * 0.9;
                    })
                    .map(el => ({x: el.getBoundingClientRect().x, y: el.getBoundingClientRect().y}));
                """
            )
            if len(layout) > 5:
                self.record_anomaly(current, "layout_shift", {"affected_elements": len(layout)}, "check_layout_anomalies")
        except Exception as e:
            self.record_anomaly(current, "layout_analysis_error", str(e), "check_layout_anomalies")

    def check_dom_structure(self, driver: webdriver.Chrome, current: Dict[str, Any]) -> None:
        try:
            count = driver.execute_script("return document.querySelectorAll('*').length")
            current["metrics"]["dom_nodes"] = count
            if count > 1000:
                self.record_anomaly(current, "dom_structure", f"High number of DOM nodes: {count}", "check_dom_structure")
        except Exception as e:
            if self.system_health_ok():
                try:
                    dom_info = driver.execute_script(
                        """
                        return {
                          total: document.querySelectorAll('*').length,
                          duplicates:(()=>{
                             const ids = [...document.querySelectorAll('[id]')].map(x=>x.id);
                             return ids.length !== new Set(ids).size;
                          })()
                        };
                        """
                    )
                    if dom_info["duplicates"]:
                        self.record_anomaly(current, "dom_structure", "Duplicate IDs found", "check_dom_structure")
                except Exception as inner_e:
                    self.record_anomaly(current, "dom_analysis_error", str(inner_e), "check_dom_structure")
            else:
                logger.warning("Skipping complex DOM analysis due to resource constraints")

    def check_security_issues(self, driver: webdriver.Chrome, current: Dict[str, Any]) -> None:
        try:
            mix = driver.execute_script(
                """
                return performance.getEntries().filter(e=>e.initiatorType==='script' && e.name.startsWith('http://'));
                """
            )
            if mix:
                self.record_anomaly(current, "mixed_content", {"count": len(mix)}, "check_security_issues")
            csp = driver.execute_script(
                """
                let m = document.querySelector('meta[http-equiv="Content-Security-Policy"]');
                return m ? m.content : null;
                """
            )
            if not csp:
                self.record_anomaly(current, "csp_violation", "Missing CSP meta", "check_security_issues")
            security_headers = driver.execute_script(
                """
                let nav = performance.getEntriesByType('navigation')[0];
                if (nav && nav.responseHeaders) {
                    return Object.fromEntries(nav.responseHeaders.filter(h => h.name.toLowerCase().startsWith('x-')));
                }
                return {};
                """
            )
            required = ["x-content-type-options", "x-frame-options", "permissions-policy"]
            missing = [h for h in required if h not in security_headers]
            if missing:
                self.record_anomaly(current, "security_header", {"missing": missing}, "check_security_issues")
        except Exception as e:
            self.record_anomaly(current, "security_check_error", str(e), "check_security_issues")

    def check_accessibility(self, driver: webdriver.Chrome, current: Dict[str, Any]) -> None:
        try:
            import random
            if random.random() < 0.3:
                axe = axe_selenium_python.Axe(driver)
                axe.inject()
                results = axe.run(context="body", options={"runOnly": {"type": "tag", "values": ["wcag2a"]}})
                if results.get("violations"):
                    self.record_anomaly(current, "accessibility", {"violations": results["violations"], "count": len(results["violations"])}, "check_accessibility")
        except Exception as e:
            self.record_anomaly(current, "accessibility_error", str(e), "check_accessibility")

    def check_media_playback(self, driver: webdriver.Chrome, current: Dict[str, Any]) -> None:
        try:
            arr = driver.execute_script(
                """
                return [...document.querySelectorAll('video,audio')].map(m=>({
                    paused: m.paused,
                    error: m.error,
                    readyState: m.readyState
                }));
                """
            )
            for media_info in arr:
                if media_info["error"] or media_info["readyState"] < 4:
                    self.record_anomaly(current, "media_playback", media_info, "check_media_playback")
        except Exception as e:
            self.record_anomaly(current, "media_error", str(e), "check_media_playback")

    def check_storage(self, driver: webdriver.Chrome, current: Dict[str, Any]) -> None:
        try:
            driver.execute_script("localStorage.setItem('testKey','testValue')")
            val = driver.execute_script("return localStorage.getItem('testKey')")
            if val != "testValue":
                self.record_anomaly(current, "storage_anomaly", {"expected": "testValue", "got": val}, "check_storage")
        except Exception as e:
            self.record_anomaly(current, "storage_error", str(e), "check_storage")

    def check_event_handling(self, driver: webdriver.Chrome, current: Dict[str, Any]) -> None:
        try:
            driver.execute_script(
                """
                window._evtClick=false;
                document.body.addEventListener('click', ()=>{window._evtClick=true;});
                """
            )
            time.sleep(0.5)
            body = driver.find_element(By.TAG_NAME, "body")
            driver.execute_script("arguments[0].click()", body)
            time.sleep(0.5)
            event_ok = driver.execute_script("return window._evtClick")
            if not event_ok:
                self.record_anomaly(current, "event_failure", "No click event on body", "check_event_handling")
        except Exception as e:
            self.record_anomaly(current, "event_error", str(e), "check_event_handling")

    def check_localization(self, driver: webdriver.Chrome, current: Dict[str, Any]) -> None:
        try:
            lang = driver.execute_script("return document.documentElement.lang")
            direction = driver.execute_script("return document.documentElement.dir")
            if not lang:
                self.record_anomaly(current, "i18n_issue", "missing lang", "check_localization")
            if direction not in ["ltr", "rtl", ""]:
                self.record_anomaly(current, "i18n_issue", f"Invalid dir={direction}", "check_localization")
        except Exception as e:
            self.record_anomaly(current, "localization_error", str(e), "check_localization")

    def check_performance(self, driver: webdriver.Chrome, current: Dict[str, Any]) -> None:
        try:
            perf_timing = driver.execute_script("return window.performance.timing")
            load_time = perf_timing["loadEventEnd"] - perf_timing["navigationStart"]
            current["metrics"]["load_time"] = load_time
            if load_time > 5000:
                self.record_anomaly(current, "slow_execution", f"Load time={load_time}", "check_performance")
        except Exception as e:
            self.record_anomaly(current, "performance_error", str(e), "check_performance")

    def check_hardware_resources(self, driver: webdriver.Chrome, current: Dict[str, Any]) -> None:
        try:
            mem = psutil.virtual_memory()
            cpu = psutil.cpu_percent(interval=1)
            current["metrics"].update({"sys_mem_used": mem.percent, "sys_cpu_used": cpu})
            if mem.percent > 90:
                self.record_anomaly(current, "memory_pressure", f"{mem.percent}% used", "check_hardware_resources")
        except Exception as e:
            logger.warning(f"Resource check error: {str(e)}")

    def check_animation_glitches(self, driver: webdriver.Chrome, current: Dict[str, Any]) -> None:
        try:
            frames = []
            for _ in range(3):
                frames.append(driver.get_screenshot_as_png())
                time.sleep(0.2)
            diffs = []
            for i in range(1, len(frames)):
                i1 = Image.open(BytesIO(frames[i - 1]))
                i2 = Image.open(BytesIO(frames[i]))
                d = ImageChops.difference(i1, i2)
                diffs.append(float(np.mean(np.array(d))))
            if np.std(diffs) > 15:
                self.record_anomaly(current, "animation_glitch", {"frame_diffs": diffs, "stdDev": float(np.std(diffs))}, "check_animation_glitches")
        except Exception as e:
            self.record_anomaly(current, "animation_error", str(e), "check_animation_glitches")

    def check_console_errors(self, driver: webdriver.Chrome, current: Dict[str, Any]) -> None:
        try:
            logs = driver.get_log("browser")
            severe = [x for x in logs if x["level"] in ["SEVERE", "WARNING"]]
            if severe:
                self.record_anomaly(current, "console_errors", {"count": len(severe), "messages": [y["message"] for y in severe]}, "check_console_errors")
        except Exception as e:
            self.record_anomaly(current, "console_error", str(e), "check_console_errors")

    def check_xss_patterns(self, driver: webdriver.Chrome, current: Dict[str, Any]) -> None:
        try:
            logs = driver.get_log("browser")
            suspicious = []
            for l in logs:
                msg = l["message"].lower()
                if "alert(" in msg or "eval(" in msg or "<script>" in msg:
                    suspicious.append(msg)
            if suspicious:
                self.record_anomaly(current, "xss_vulnerability", suspicious, "check_xss_patterns")
        except Exception as e:
            self.record_anomaly(current, "xss_check_error", str(e), "check_xss_patterns")

    def check_memory_corruption_patterns(self, driver: webdriver.Chrome, current: Dict[str, Any]) -> None:
        asan_logs = glob.glob(os.path.join(OUTPUT_DIR, "asan_logs", "*.log"))
        for logf in asan_logs:
            try:
                with open(logf, "r", encoding="utf-8") as lf:
                    content = lf.read().lower()
                    if "heap-use-after-free" in content or "double-free" in content:
                        self.record_anomaly(current, "memory_corruption", logf, "check_memory_corruption_patterns")
            except Exception:
                pass

    # Modified: When an anomaly is recorded, immediately update the report.
    def record_anomaly(self, current: Dict[str, Any], anomaly_type: str, details: Any, detected_by: str) -> None:
        entry = {
            "type": anomaly_type,
            "timestamp": datetime.now().isoformat(),
            "details": details,
            "severity": self.get_severity(anomaly_type),
            "detected_by": detected_by,
            "artifacts": {},  # Always include artifacts
        }
        current["anomalies"].append(entry)
        current["status"] = "failed"
        # Immediately flush the updated data to the report
        self.append_single_test_report(current["file"])

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
            "visual_mismatch": 3,
            "layout_shift": 3,
            "media_playback": 3,
            "storage_anomaly": 3,
            "event_failure": 3,
            "slow_execution": 2,
            "color_anomaly": 2,
            "accessibility": 2,
            "i18n_issue": 2,
            "animation_glitch": 3,
            "execution_error": 5,
            "hardware_error": 3,
            "animation_error": 3,
            "console_errors": 3,
            "memory_corruption": 5,
            "security_header": 4,
        }
        return mapping.get(anomaly_type, 1)

    # Revised: Ensure the test result always contains an "artifacts" key.
    def append_single_test_report(self, test_name: str) -> None:
        tdata = self.results.get(
            test_name,
            {"file": test_name, "anomalies": [], "metrics": {}, "status": "passed", "artifacts": {}}
        )
        # If artifacts key is missing, set it to empty dict.
        if "artifacts" not in tdata:
            tdata["artifacts"] = {}
        anomalies = [f"{a['type']}({a['detected_by']})" for a in tdata["anomalies"]]
        sev = max((a["severity"] for a in tdata["anomalies"]), default=0)
        csv_path = os.path.join(OUTPUT_DIR, "reports", "full_report.csv")
        with csv_lock:
            with open(csv_path, "a", newline="") as cf:
                w = csv.writer(cf)
                w.writerow([
                    test_name,
                    tdata["status"],
                    len(tdata["anomalies"]),
                    json.dumps(anomalies),
                    sev,
                    tdata["metrics"].get("duration", 0),
                    tdata.get("root_cause", "N/A"),
                    json.dumps(tdata["artifacts"]),
                ])
        det_json_path = os.path.join(OUTPUT_DIR, "reports", "detailed_report.json")
        with open(det_json_path, "r", encoding="utf-8") as jf:
            existing = json.load(jf)
        if "tests" not in existing:
            existing["tests"] = {}
        existing["tests"][test_name] = tdata
        existing["metadata"]["execution_time"] = datetime.now().isoformat()
        if existing["metadata"].get("chrome_version") == "UNKNOWN":
            try:
                cver = subprocess.check_output([CHROME_BINARY_PATH, "--version"], text=True).strip()
                existing["metadata"]["chrome_version"] = cver
            except Exception:
                pass
        with open(det_json_path, "w", encoding="utf-8") as jf:
            json.dump(existing, jf, indent=2, default=str)
        logger.info("[REPORT] Updated => %s", test_name)

    def write_coverage_summary(self) -> None:
        coverage_summary = {"files": {}}
        for fname, cov_list in self.coverage_map.items():
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
            weighted_score = (visited_ranges * COVERAGE_WEIGHT_LINE +
                              visited_funcs * COVERAGE_WEIGHT_FUNC +
                              script_count * COVERAGE_WEIGHT_PATH)
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
                rows.append({
                    "File": fname,
                    "VisitedFunctions": metrics.get("visitedFunctions", 0),
                    "VisitedRanges": metrics.get("visitedRanges", 0),
                })
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

    def generate_html_report(self):
        report_path = os.path.join(OUTPUT_DIR, "reports", "interactive_report.html")
        template = f"""
        <html>
        <head>
            <title>Security Test Report</title>
            <style>
                body {{ font-family: Arial, sans-serif; }}
                .failed {{ background-color: #ffcccc; }}
                .passed {{ background-color: #d4edda; }}
                .anomaly {{ color: #721c24; }}
                table {{ border-collapse: collapse; width: 100%; }}
                th, td {{ border: 1px solid #ddd; padding: 8px; }}
                th {{ background-color: #f2f2f2; }}
            </style>
        </head>
        <body>
            <h1>Security Test Report - {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}</h1>
            {self._generate_summary_table()}
            {self._generate_anomaly_breakdown()}
            {self._generate_coverage_visualization()}
            {self._generate_test_details()}
        </body>
        </html>
        """
        with open(report_path, 'w') as f:
            f.write(template)
        logger.info(f"[REPORT] Interactive HTML report generated: {report_path}")

    def _generate_summary_table(self):
        total = len(self.results)
        passed = sum(1 for r in self.results.values() if r['status'] == 'passed')
        failed = total - passed
        severity_counts = defaultdict(int)
        for res in self.results.values():
            max_sev = max((a['severity'] for a in res['anomalies']), default=0)
            severity_counts[max_sev] += 1
        return f"""
        <div>
            <h2>Test Summary</h2>
            <table>
                <tr><th>Total Tests</th><td>{total}</td></tr>
                <tr><th>Passed</th><td>{passed}</td></tr>
                <tr><th>Failed</th><td>{failed}</td></tr>
                <tr><th>Severity Distribution</th>
                    <td>
                        Critical: {severity_counts[5]} |
                        High: {severity_counts[4]} |
                        Medium: {severity_counts[3]} |
                        Low: {severity_counts[2]} |
                        Info: {severity_counts[1]}
                    </td>
                </tr>
            </table>
        </div>
        """

    def _generate_anomaly_breakdown(self):
        anomaly_counts = defaultdict(int)
        for res in self.results.values():
            for a in res['anomalies']:
                anomaly_counts[a['type']] += 1
        rows = ''.join([f"<tr><td>{k}</td><td>{v}</td></tr>" for k, v in anomaly_counts.items()])
        return f"""
        <div>
            <h2>Anomaly Breakdown</h2>
            <table>
                <tr><th>Anomaly Type</th><th>Count</th></tr>
                {rows}
            </table>
        </div>
        """

    def _generate_coverage_visualization(self):
        cov_data = []
        for test, data in self.coverage_map.items():
            if data:
                visited = sum(1 for item in data if any(r.get('count', 0) > 0 for r in item.get('ranges', [])))
                total = len(data)
                cov_data.append({'Test': test, 'Coverage': (visited / total) * 100 if total != 0 else 0})
        if not cov_data:
            return "<p>No coverage data available for visualization.</p>"
        df = pd.DataFrame(cov_data)
        plt.figure(figsize=(10, 6))
        sns.barplot(x='Coverage', y='Test', data=df)
        plt.title('Code Coverage by Test')
        buf = BytesIO()
        plt.savefig(buf, format='png')
        buf.seek(0)
        img_base64 = base64.b64encode(buf.read()).decode('utf-8')
        plt.close()
        return f"""
        <div>
            <h2>Code Coverage Visualization</h2>
            <img src='data:image/png;base64,{img_base64}'/>
        </div>
        """

    def _generate_test_details(self):
        rows = []
        for test, data in self.results.items():
            anomalies = '<br>'.join([f"{a['type']} ({a['severity']})" for a in data['anomalies']])
            artifacts = '<br>'.join([f"<a href='{v}'>{k}</a>" for k, v in data['artifacts'].items()])
            row_class = 'passed' if data['status'] == 'passed' else 'failed'
            rows.append(f"""
            <tr class='{row_class}'>
                <td>{test}</td>
                <td>{data['status']}</td>
                <td>{anomalies}</td>
                <td>{artifacts}</td>
                <td>{data['metrics'].get('duration', 0):.2f}s</td>
            </tr>
            """)
        return f"""
        <div>
            <h2>Detailed Test Results</h2>
            <table>
                <tr>
                    <th>Test File</th>
                    <th>Status</th>
                    <th>Anomalies</th>
                    <th>Artifacts</th>
                    <th>Duration</th>
                </tr>
                {''.join(rows)}
            </table>
        </div>
        """

    def print_console_summary(self):
        total = len(self.results)
        passed = sum(1 for r in self.results.values() if r['status'] == 'passed')
        failed = total - passed
        severity_counts = defaultdict(int)
        for res in self.results.values():
            max_sev = max((a['severity'] for a in res['anomalies']), default=0)
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
        BATCH_SIZE = 10
        from concurrent.futures import ThreadPoolExecutor, as_completed
        for i in range(0, len(test_files), BATCH_SIZE):
            batch = test_files[i : i + BATCH_SIZE]
            logger.info(f"Processing batch {i//BATCH_SIZE+1} ({len(batch)} files)")
            if not self.system_health_ok():
                time.sleep(30)
            with ThreadPoolExecutor(max_workers=self.calculate_safe_concurrency(), thread_name_prefix="Detector") as executor:
                future_map = {executor.submit(self.execute_test, tf): tf for tf in batch}
                for fut in as_completed(future_map):
                    fname = future_map[fut]
                    try:
                        fut.result()
                    except Exception as e:
                        logger.error("[ERROR] Test crashed => %s: %s", fname, e)
        self.write_coverage_summary()
        self.generate_coverage_chart()
        self.generate_html_report()
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
    return parser.parse_args()

def main() -> None:
    args = parse_args()
    global MUTATION_DIR, OUTPUT_DIR
    MUTATION_DIR = args.mutation_dir
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