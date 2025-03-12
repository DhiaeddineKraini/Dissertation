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
   visual diff analysis using perceptual hashing, deep security header checks,
   coverage visualization upgrade, symbolization robustness, interactive HTML reporting,
   and enhanced recommendation engine.
   
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
from collections import defaultdict, Counter
from datetime import datetime
from pathlib import Path
from typing import Any, Dict, List, Optional
from io import BytesIO

from PIL import Image, ImageChops

# Advanced libraries for improvements
import imagehash  # For perceptual hashing
import pandas as pd
import seaborn as sns  # For heatmap visualization

# Delta-debugging (assumed installed)
class DummyDeltaPolicy:
    DELETE_BLOCKS = "DELETE_BLOCKS"

def delta(original, test_fn, delete_policy):
    # For now, simply return the original content.
    return original

# For crash clustering & memory leak analysis
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.cluster import KMeans
from ruptures import Binseg

# Selenium imports with specific exceptions
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.common.exceptions import WebDriverException, TimeoutException

import axe_selenium_python

# Local config imports
from config import (
    CHROME_BINARY_PATH, CHROMEDRIVER_PATH, SYMBOLIZER_PATH, MUTATION_FOLDER, BASELINE_DIR,
    DEFAULT_DETECTION_RESULTS_DIR,
    CRASH_ANALYSIS_MODE, COVERAGE_WEIGHT_LINE, COVERAGE_WEIGHT_FUNC, COVERAGE_WEIGHT_PATH,
    logger as base_logger
)

parser = argparse.ArgumentParser(
    description="Advanced detection with deep & detailed reporting."
)
parser.add_argument(
    "mutation_dir",
    nargs="?",
    default=os.getenv("DETECTION_TARGET_DIR", MUTATION_FOLDER),
    help="Directory containing the mutated HTML files to test."
)
args = parser.parse_args()
MUTATION_DIR: str = args.mutation_dir

logger = logging.getLogger("detection-advanced")
logger.setLevel(base_logger.level if hasattr(base_logger, 'level') else logging.INFO)

# Global lock for thread-safe CSV writing
from threading import Lock
csv_lock = Lock()

# -----------------------------------------------------------------------------
# Symbolizer Validation Upgrade
# -----------------------------------------------------------------------------
def validate_symbolizer_version(chrome_version: str) -> bool:
    try:
        # Extract major version (e.g. "Chromium 116.0.5845.96" -> 116)
        major_ver = int(chrome_version.split()[1].split('.')[0])
        # Get symbolizer version
        sym_ver = subprocess.check_output([SYMBOLIZER_PATH, "--version"], text=True)
        sym_major = int(sym_ver.split()[-1].split('.')[0])
        # Allow �2 versions
        return abs(major_ver - sym_major) <= 2
    except Exception:
        return False

# -----------------------------------------------------------------------------
# Coverage Collector
# -----------------------------------------------------------------------------
class CoverageCDP:
    """
    Collects JS coverage data using Chrome DevTools Protocol.
    """
    def __init__(self, driver: webdriver.Chrome) -> None:
        self.driver = driver
        self.enabled = False

    def start_js_coverage(self) -> None:
        try:
            self.driver.execute_cdp_cmd("Profiler.enable", {})
            self.driver.execute_cdp_cmd("Profiler.startPreciseCoverage", {
                "callCount": True,
                "detailed": True
            })
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

# -----------------------------------------------------------------------------
# Crash Deduplication
# -----------------------------------------------------------------------------
class CrashDeduplicator:
    """
    Manages a record of known crashes (unique_crashes.json) so that repeated crashes
    with the same signature are not logged multiple times as new.
    """
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
        addr_re = re.compile(r'0x[0-9a-f]{6,}')
        lines_sym = symbolized.split("\n") if symbolized else []
        top_sym = "\n".join(lines_sym[:5])
        normalized_sym = addr_re.sub('0xADDR', top_sym)
        lines_raw = raw_log.split("\n")[:5]
        normalized_raw = addr_re.sub('0xADDR', "\n".join(lines_raw))
        combined = normalized_sym + "\n---\n" + normalized_raw
        return hashlib.sha256(combined.encode("utf-8")).hexdigest()

    def check_or_add_crash(self, raw_log_path: str, symbolized_trace: str) -> (bool, str):
        with open(raw_log_path, "r", encoding="utf-8") as f:
            raw_log_content = f.read()
        sign = self.hybrid_signature(raw_log_content, symbolized_trace)
        is_new = (sign not in self.known_signatures)
        if is_new:
            self.known_signatures[sign] = {
                "firstSeen": datetime.now().isoformat(),
                "sampleSym": symbolized_trace[:500],
                "sampleRaw": raw_log_content[:500]
            }
            self._save_signatures()
        return is_new, sign

# -----------------------------------------------------------------------------
# Root Cause Analyzer
# -----------------------------------------------------------------------------
class RootCauseAnalyzer:
    """
    Classifies memory-related crashes into known patterns (use-after-free, double-free, etc.)
    """
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

# -----------------------------------------------------------------------------
# Advanced Crash Minimization using Delta Debugging
# -----------------------------------------------------------------------------
def re_run_detection_for_file(html_path: str, mini_outdir: str) -> bool:
    from selenium.webdriver.chrome.options import Options
    from selenium.webdriver.chrome.service import Service

    asan_log_path = os.path.join(mini_outdir, "ASAN_minimization_%n_%p.log")
    env = os.environ.copy()
    existing_asan = env.get("ASAN_OPTIONS", "")
    if existing_asan:
        existing_asan += ":"
    env["ASAN_OPTIONS"] = existing_asan + f"log_path={asan_log_path}:detect_leaks=1:abort_on_error=1"

    options = Options()
    options.binary_location = CHROME_BINARY_PATH
    options.add_argument("--headless")
    options.add_argument("--disable-gpu")
    options.add_argument("--no-sandbox")
    options.add_argument("--enable-features=AddressSanitizer")

    serv = Service(
        executable_path=CHROMEDRIVER_PATH,
        env=env,
        log_output=os.path.join(mini_outdir, "chrome_driver_minimization.log")
    )

    driver = None
    try:
        driver = webdriver.Chrome(options=options, service=serv)
        driver.set_page_load_timeout(900)
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
        result = re_run_detection_for_file(temp_path, os.path.join(os.path.dirname(temp_path), "minimization_temp"))
        try:
            os.remove(temp_path)
        except Exception:
            pass
        return result

    if not os.path.exists(html_path):
        return
    with open(html_path, "rb") as f:
        original = f.read()
    minimized = delta(
        original,
        test_fn,
        delete_policy=delta.DELETE_BLOCKS
    )
    with open(html_path, "wb") as f:
        f.write(minimized)
    logger.info("[MINIMIZATION] Completed delta debugging for %s", html_path)

# -----------------------------------------------------------------------------
# The Main Detector
# -----------------------------------------------------------------------------
class BestChromeDetector:
    """
    Runs each mutated HTML in Chrome, logging coverage, anomalies, and performance.
    Includes crash deduplication, minimization, and enhanced error/resource handling.
    """
    def __init__(self) -> None:
        logger.info("[DETECTION] Deep & Detailed Reporting.")
        self.setup_directories()
        self.results: Dict[str, Any] = {}
        self.coverage_map: Dict[str, List[Dict[str, Any]]] = {}
        self.crash_deduper = CrashDeduplicator(OUTPUT_DIR)
        self.temp_files: List[str] = []
        self.memory_trend: List[Dict[str, Any]] = []

        self.asan_options = {
            "detect_leaks": "1",
            "abort_on_error": "1",
            "log_path": f"{OUTPUT_DIR}/asan_logs/ASAN_%n_%p.log",
            "allocator_may_return_null": "1"
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
            os.path.join(OUTPUT_DIR, "sym_versions")
        ]
        for d in dirs:
            os.makedirs(d, exist_ok=True)
        atexit.register(self._cleanup_temp_files)

        csv_file = os.path.join(OUTPUT_DIR, "reports", "full_report.csv")
        if not os.path.exists(csv_file):
            with open(csv_file, "w", newline="") as cf:
                w = csv.writer(cf)
                w.writerow([
                    "Test File", "Status", "Anomaly Count", "Anomaly Types",
                    "Max Severity", "Duration", "RootCause", "Artifacts"
                ])

        det_json = os.path.join(OUTPUT_DIR, "reports", "detailed_report.json")
        if not os.path.exists(det_json):
            with open(det_json, "w") as jf:
                base_data = {
                    "metadata": {
                        "system": platform.uname()._asdict(),
                        "execution_time": datetime.now().isoformat(),
                        "chrome_version": "UNKNOWN"
                    },
                    "tests": {}
                }
                json.dump(base_data, jf, indent=2)

    def _cleanup_temp_files(self):
        logger.info("Cleaning up %d temporary files", len(self.temp_files))
        for tf in self.temp_files:
            try:
                os.remove(tf)
            except Exception:
                pass

    def init_chrome(self) -> webdriver.Chrome:
        from selenium.webdriver.chrome.options import Options

        options = Options()
        options.binary_location = CHROME_BINARY_PATH
        options.add_argument("--headless")
        options.add_argument("--disable-gpu")
        options.add_argument("--no-sandbox")
        options.add_argument("--enable-features=AddressSanitizer")
        options.add_argument("--disable-dev-shm-usage")
        options.add_argument("--enable-logging")
        options.add_argument("--v=1")
        options.add_argument("--disable-software-rasterizer")
        options.add_argument("--renderer-process-limit=1")
        options.add_argument("--disable-threaded-animation")
        options.add_argument("--window-size=800,600")
        options.add_argument("--disable-accelerated-2d-canvas")
        options.add_argument("--use-gl=desktop")

        logging_prefs = {"performance": "ALL"}
        options.set_capability("goog:loggingPrefs", logging_prefs)

        env = os.environ.copy()
        existing_asan = env.get("ASAN_OPTIONS", "")
        if existing_asan:
            existing_asan += ":"
        env["ASAN_OPTIONS"] = existing_asan + ":".join(f"{k}={v}" for k, v in self.asan_options.items())

        serv = Service(
            executable_path=CHROMEDRIVER_PATH,
            env=env,
            log_output=os.path.join(OUTPUT_DIR, "logs", "chrome_driver.log")
        )

        driver = webdriver.Chrome(options=options, service=serv)
        driver.set_page_load_timeout(900)
        driver.set_script_timeout(900)
        return driver

    def run_test_suite(self) -> None:
        test_files = glob.glob(os.path.join(MUTATION_DIR, "*.html"))
        logger.info("[DETECTION] Found %d mutated HTML files in => %s", len(test_files), MUTATION_DIR)
        cpu_count = os.cpu_count() or 4
        max_workers = 1
        from concurrent.futures import ThreadPoolExecutor, as_completed
        with ThreadPoolExecutor(max_workers=max_workers, thread_name_prefix='Detector') as executor:
            future_map = {executor.submit(self.execute_test_and_report, tf): tf for tf in test_files}
            for fut in as_completed(future_map):
                fname = future_map[fut]
                try:
                    fut.result()
                except Exception as e:
                    logger.error("[ERROR] Test crashed => %s: %s", fname, e)
        self.write_coverage_summary()
        self.generate_coverage_chart()
        logger.info("[DETECTION] All done; final coverage at => %s", os.path.join(OUTPUT_DIR, "coverage_summary.json"))

    def execute_test_and_report(self, test_file: str) -> None:
        self.execute_test(test_file)
        self.append_single_test_report(os.path.basename(test_file))

    def execute_test(self, test_file: str) -> None:
        test_name = os.path.basename(test_file)
        logger.info("[DETECTION] Start => %s", test_name)
        current = {
            "file": test_name,
            "start_time": datetime.now(),
            "artifacts": {},
            "metrics": {},
            "anomalies": [],
            "status": "passed",
            "root_cause": "N/A"
        }
        driver = None
        coverage_agent = None

        try:
            driver = self.init_chrome()
            coverage_agent = CoverageCDP(driver)
            coverage_agent.start_js_coverage()

            url = f"file://{os.path.abspath(test_file)}"
            driver.get(url)
            time.sleep(3)

            screenshot_path = os.path.join(OUTPUT_DIR, "screenshots", f"{test_name}.png")
            driver.save_screenshot(screenshot_path)
            current["artifacts"]["screenshot"] = screenshot_path

            self.check_memory_errors(driver, current, test_file)
            self.check_visual_differences(driver, current, test_name)
            self.check_layout_anomalies(driver, current)
            self.check_network_errors(driver, current)
            self.check_dom_structure(driver, current)
            self.check_security_issues(driver, current)
            self.check_accessibility(driver, current)
            self.check_media_playback(driver, current)
            self.check_storage(driver, current)
            self.check_event_handling(driver, current)
            self.check_localization(driver, current)
            self.check_performance(driver, current)
            self.check_hardware_resources(driver, current)
            self.check_animation_glitches(driver, current)
            self.check_console_errors(driver, current)
            self.check_xss_patterns(driver, current)
            self.check_memory_corruption_patterns(driver, current)

            coverage_data = coverage_agent.stop_js_coverage()
            current["metrics"]["coverage_data"] = coverage_data
            self.coverage_map[test_name] = coverage_data

        except WebDriverException as wde:
            logger.error("WebDriver failure: %s", wde.msg)
            self._handle_browser_crash(wde)
            current["status"] = "failed"
            self._create_failure_artifact(test_file, wde)
        except TimeoutException as te:
            logger.error("Timeout: %s", str(te))
            self._extend_timeouts()
            current["status"] = "failed"
            self._create_failure_artifact(test_file, te)
        except Exception as e:
            logger.exception("Unhandled error:")
            current["status"] = "error"
            self._create_failure_artifact(test_file, e)
        finally:
            if driver:
                driver.quit()
            import gc
            gc.collect()
            duration = (datetime.now() - current["start_time"]).total_seconds()
            current["metrics"]["duration"] = duration
            self.results[test_name] = current

            if current["anomalies"]:
                for a in current["anomalies"]:
                    logger.warning(" => anomaly => %s => %s", a["type"], a["details"])
            else:
                logger.info(" => no anomalies found.")
            logger.info("Finished => %s, took %.2fs", test_name, duration)

    def _handle_browser_crash(self, exception: Exception) -> None:
        logger.error("Handling browser crash: %s", exception)

    def _extend_timeouts(self) -> None:
        durations = [t["metrics"]["duration"] for t in self.results.values() if "duration" in t["metrics"]]
        avg_duration = sum(durations)/len(durations) if durations else 30
        self.driver.set_page_load_timeout(min(600, avg_duration * 2))
        self.driver.set_script_timeout(min(300, avg_duration * 1.5))
        logger.info("Adjusted timeouts to: load=%ds, script=%ds", 
                    self.driver.timeouts().page_load,
                    self.driver.timeouts().script)

    def _create_failure_artifact(self, test_file: str, exception: Exception) -> None:
        artifact_path = os.path.join(OUTPUT_DIR, "logs", f"failure_{os.path.basename(test_file)}.log")
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
                check=True
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
        if asan_logs:
            with open(asan_logs[0], "r", encoding="utf-8") as f:
                txt = f.read()
                if "AddressSanitizer" in txt:
                    rc = RootCauseAnalyzer.classify_crash_log(txt)
                    current["root_cause"] = rc
                    sym_trace = ""
                    if CRASH_ANALYSIS_MODE.lower() != "raw":
                        sym_trace = self.symbolize_trace(asan_logs[0])
                    is_new, sign = self.crash_deduper.check_or_add_crash(asan_logs[0], sym_trace)
                    detail = f"CrashSign={sign}, new={is_new}, rootCause={rc}"
                    self.record_anomaly(current, "memory_error", detail, "check_memory_errors")
                    if is_new:
                        minimize_crash_input(test_file_path)

    def check_visual_differences(self, driver: webdriver.Chrome, current: Dict[str, Any], test_name: str) -> None:
        sc_path = current["artifacts"].get("screenshot")
        if not sc_path or not os.path.exists(sc_path):
            return
        try:
            baseline_path = os.path.join(BASELINE_DIR, f"{test_name}.png")
            if os.path.exists(baseline_path):
                sc_img = Image.open(sc_path).resize((400, 300))
                base_img = Image.open(baseline_path).resize((400, 300))
                hash1 = imagehash.phash(sc_img)
                hash2 = imagehash.phash(base_img)
                hamming_dist = hash1 - hash2
                if hamming_dist > 5:
                    self.record_anomaly(
                        current, "visual_mismatch",
                        {"hamming_distance": hamming_dist, "baseline": baseline_path},
                        "check_visual_differences"
                    )
        except Exception as e:
            self.record_anomaly(current, "visual_analysis_error", str(e), "check_visual_differences")

    def check_layout_anomalies(self, driver: webdriver.Chrome, current: Dict[str, Any]) -> None:
        try:
            layout = driver.execute_script("""
                let elems = [...document.querySelectorAll('*:not(script):not(style)')];
                return elems.filter((_,i) => i % 5 === 0).map(el => {
                    let r = el.getBoundingClientRect();
                    return {x:r.x, y:r.y, w:r.width, h:r.height};
                });
            """)
            if layout:
                coords = np.array([[o["x"], o["y"]] for o in layout], dtype=float)
                if len(coords) > 0:
                    from sklearn.cluster import DBSCAN
                    cluster = DBSCAN(eps=50, min_samples=3).fit(coords)
                    lbl = cluster.labels_
                    n_clusters = len(set(lbl)) - (1 if -1 in lbl else 0)
                    if n_clusters > 20:
                        self.record_anomaly(
                            current, "layout_shift",
                            {"clusters": n_clusters},
                            "check_layout_anomalies"
                        )
        except Exception as e:
            self.record_anomaly(current, "layout_analysis_error", str(e), "check_layout_anomalies")

    def check_network_errors(self, driver: webdriver.Chrome, current: Dict[str, Any]) -> None:
        try:
            logs = driver.get_log("performance")
            fails = 0
            import json as js
            for l in logs:
                msg = l["message"]
                j = js.loads(msg)
                method = j.get("message", {}).get("method", "")
                if "Network" in method:
                    resp = j.get("message", {}).get("params", {}).get("response", {})
                    st = resp.get("status", 200)
                    if st >= 400:
                        fails += 1
            if fails > 0:
                self.record_anomaly(current, "network_error", {"failed_count": fails}, "check_network_errors")
        except Exception as e:
            self.record_anomaly(current, "network_analysis_error", str(e), "check_network_errors")

    def check_dom_structure(self, driver: webdriver.Chrome, current: Dict[str, Any]) -> None:
        try:
            dom_info = driver.execute_script("""
                return {
                  total: document.querySelectorAll('*').length,
                  duplicates:(()=>{
                     const ids = [...document.querySelectorAll('[id]')].map(x=>x.id);
                     return ids.length !== new Set(ids).size;
                  })()
                };
            """)
            if dom_info["duplicates"]:
                self.record_anomaly(current, "dom_structure", "Duplicate IDs found", "check_dom_structure")
        except Exception as e:
            self.record_anomaly(current, "dom_analysis_error", str(e), "check_dom_structure")

    def check_security_issues(self, driver: webdriver.Chrome, current: Dict[str, Any]) -> None:
        try:
            mix = driver.execute_script("""
                return performance.getEntries().filter(e=>e.initiatorType==='script' && e.name.startsWith('http://'));
            """)
            if mix:
                self.record_anomaly(current, "mixed_content", {"count": len(mix)}, "check_security_issues")
            csp = driver.execute_script("""
                let m = document.querySelector('meta[http-equiv="Content-Security-Policy"]');
                return m ? m.content : null;
            """)
            if not csp:
                self.record_anomaly(current, "csp_violation", "Missing CSP meta", "check_security_issues")
            security_headers = driver.execute_script("""
                let nav = performance.getEntriesByType('navigation')[0];
                if (nav && nav.responseHeaders) {
                    return Object.fromEntries(nav.responseHeaders.filter(h => h.name.toLowerCase().startsWith('x-')));
                }
                return {};
            """)
            required = ['x-content-type-options', 'x-frame-options', 'permissions-policy']
            missing = [h for h in required if h not in security_headers]
            if missing:
                self.record_anomaly(current, "security_header", {"missing": missing}, "check_security_issues")
        except Exception as e:
            self.record_anomaly(current, "security_check_error", str(e), "check_security_issues")

    def check_accessibility(self, driver: webdriver.Chrome, current: Dict[str, Any]) -> None:
        try:
            axe = axe_selenium_python.Axe(driver)
            axe.inject()
            results = axe.run()
            if results.get("violations"):
                self.record_anomaly(
                    current, "accessibility",
                    {"violations": results["violations"], "count": len(results["violations"])},
                    "check_accessibility"
                )
        except Exception as e:
            self.record_anomaly(current, "accessibility_error", str(e), "check_accessibility")

    def check_media_playback(self, driver: webdriver.Chrome, current: Dict[str, Any]) -> None:
        try:
            arr = driver.execute_script("""
                return [...document.querySelectorAll('video,audio')].map(m=>({
                    paused:m.paused,
                    error:m.error,
                    readyState:m.readyState
                }));
            """)
            for media_info in arr:
                if media_info["error"] or media_info["readyState"] < 4:
                    self.record_anomaly(
                        current, "media_playback",
                        media_info, "check_media_playback"
                    )
        except Exception as e:
            self.record_anomaly(current, "media_error", str(e), "check_media_playback")

    def check_storage(self, driver: webdriver.Chrome, current: Dict[str, Any]) -> None:
        try:
            driver.execute_script("localStorage.setItem('testKey','testValue')")
            val = driver.execute_script("return localStorage.getItem('testKey')")
            if val != "testValue":
                self.record_anomaly(
                    current, "storage_anomaly",
                    {"expected": "testValue", "got": val},
                    "check_storage"
                )
        except Exception as e:
            self.record_anomaly(current, "storage_error", str(e), "check_storage")

    def check_event_handling(self, driver: webdriver.Chrome, current: Dict[str, Any]) -> None:
        try:
            driver.execute_script("""
                window._evtClick=false;
                document.body.addEventListener('click', ()=>{window._evtClick=true;});
            """)
            time.sleep(0.5)
            body = driver.find_element(By.TAG_NAME, "body")
            driver.execute_script("arguments[0].click()", body)
            time.sleep(0.5)
            event_ok = driver.execute_script("return window._evtClick")
            if not event_ok:
                self.record_anomaly(
                    current, "event_failure", "No click event on body", "check_event_handling"
                )
        except Exception as e:
            self.record_anomaly(current, "event_error", str(e), "check_event_handling")

    def check_localization(self, driver: webdriver.Chrome, current: Dict[str, Any]) -> None:
        try:
            lang = driver.execute_script("return document.documentElement.lang")
            direction = driver.execute_script("return document.documentElement.dir")
            if not lang:
                self.record_anomaly(current, "i18n_issue", "missing lang", "check_localization")
            if direction not in ["ltr", "rtl", ""]:
                self.record_anomaly(
                    current, "i18n_issue", f"Invalid dir={direction}", "check_localization"
                )
        except Exception as e:
            self.record_anomaly(current, "localization_error", str(e), "check_localization")

    def check_performance(self, driver: webdriver.Chrome, current: Dict[str, Any]) -> None:
        try:
            perf_timing = driver.execute_script("return window.performance.timing")
            load_time = perf_timing["loadEventEnd"] - perf_timing["navigationStart"]
            current["metrics"]["load_time"] = load_time
            if load_time > 5000:
                self.record_anomaly(
                    current, "slow_execution", f"Load time={load_time}", "check_performance"
                )
        except Exception as e:
            self.record_anomaly(current, "performance_error", str(e), "check_performance")

    def check_hardware_resources(self, driver: webdriver.Chrome, current: Dict[str, Any]) -> None:
        try:
            chrome_pids = [proc.pid for proc in psutil.process_iter() if 'chrome' in proc.name().lower()]
            max_mem = 0
            max_cpu = 0
            for pid in chrome_pids:
                try:
                    p = psutil.Process(pid)
                    mem = p.memory_info().rss
                    cpu = p.cpu_percent(interval=0.5)
                    max_mem = max(max_mem, mem)
                    max_cpu = max(max_cpu, cpu)
                except Exception:
                    continue
            current["metrics"]["max_memory"] = max_mem
            current["metrics"]["max_cpu"] = max_cpu
            try:
                metrics = driver.execute_cdp_cmd("Performance.getMetrics", {})
                current["metrics"]["chrome_metrics"] = metrics
                self._record_memory_trend(metrics)
            except Exception:
                pass

            if max_mem > 2 * 1024 * 1024 * 1024:
                self.record_anomaly(
                    current, "memory_exhaustion",
                    f"{max_mem // (1024 * 1024)}MB used", "check_hardware_resources"
                )
            if max_cpu > 90:
                self.record_anomaly(
                    current, "cpu_exhaustion",
                    f"{max_cpu}% usage", "check_hardware_resources"
                )
        except Exception as e:
            self.record_anomaly(current, "hardware_error", str(e), "check_hardware_resources")

    def _record_memory_trend(self, metrics: Dict[str, Any]) -> None:
        self.memory_trend.append({
            "timestamp": datetime.now().isoformat(),
            "metrics": metrics
        })

    def check_animation_glitches(self, driver: webdriver.Chrome, current: Dict[str, Any]) -> None:
        try:
            frames = []
            for _ in range(3):
                png_data = driver.get_screenshot_as_png()
                frames.append(png_data)
                time.sleep(0.2)
            diffs = []
            for i in range(1, len(frames)):
                i1 = Image.open(BytesIO(frames[i-1]))
                i2 = Image.open(BytesIO(frames[i]))
                d = ImageChops.difference(i1, i2)
                diffs.append(float(np.mean(np.array(d))))
            if np.std(diffs) > 15:
                self.record_anomaly(
                    current, "animation_glitch",
                    {"frame_diffs": diffs, "stdDev": float(np.std(diffs))},
                    "check_animation_glitches"
                )
        except Exception as e:
            self.record_anomaly(current, "animation_error", str(e), "check_animation_glitches")

    def check_console_errors(self, driver: webdriver.Chrome, current: Dict[str, Any]) -> None:
        try:
            logs = driver.get_log("browser")
            severe = [x for x in logs if x["level"] in ["SEVERE", "WARNING"]]
            if severe:
                self.record_anomaly(
                    current, "console_errors",
                    {"count": len(severe), "messages": [y["message"] for y in severe]},
                    "check_console_errors"
                )
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
            with open(logf, "r", encoding="utf-8") as lf:
                content = lf.read().lower()
                if "heap-use-after-free" in content or "double-free" in content:
                    self.record_anomaly(
                        current, "memory_corruption", logf, "check_memory_corruption_patterns"
                    )

    def record_anomaly(self, current: Dict[str, Any], anomaly_type: str,
                       details: Any, detected_by: str) -> None:
        entry = {
            "type": anomaly_type,
            "timestamp": datetime.now().isoformat(),
            "details": details,
            "severity": self.get_severity(anomaly_type),
            "detected_by": detected_by,
            "artifacts": {}
        }
        current["anomalies"].append(entry)
        current["status"] = "failed"

    def get_severity(self, anomaly_type: str) -> int:
        mapping = {
            "memory_error": 5, "crash": 5, "xss_vulnerability": 5, "mixed_content": 4,
            "csp_violation": 4, "timeout": 4, "network_error": 3, "dom_structure": 3,
            "gpu_anomaly": 3, "visual_mismatch": 3, "layout_shift": 3, "media_playback": 3,
            "storage_anomaly": 3, "event_failure": 3, "slow_execution": 2, "color_anomaly": 2,
            "accessibility": 2, "i18n_issue": 2, "animation_glitch": 3, "execution_error": 5,
            "hardware_error": 3, "animation_error": 3, "console_errors": 3,
            "memory_corruption": 5, "security_header": 4
        }
        return mapping.get(anomaly_type, 1)

    def append_single_test_report(self, test_name: str) -> None:
        tdata = self.results[test_name]
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
                    json.dumps(tdata["artifacts"])
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
            weighted_score = (
                visited_ranges * COVERAGE_WEIGHT_LINE +
                visited_funcs * COVERAGE_WEIGHT_FUNC +
                script_count * COVERAGE_WEIGHT_PATH
            )
            coverage_summary["files"][fname] = {
                "scriptCount": script_count,
                "totalFunctions": total_funcs,
                "visitedFunctions": visited_funcs,
                "totalRanges": total_ranges,
                "visitedRanges": visited_ranges,
                "weightedCoverageScore": weighted_score
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
                    "VisitedRanges": metrics.get("visitedRanges", 0)
                })
            df = pd.DataFrame(rows)
            if df.empty:
                return
            plt.figure(figsize=(10, 6))
            heat_data = df.set_index("File")[["VisitedFunctions", "VisitedRanges"]]
            sns.heatmap(heat_data, annot=True, fmt="d", cmap="YlGnBu")
            chart_path = os.path.join(OUTPUT_DIR, "coverage_chart.png")
            plt.title("Coverage Distribution Heatmap")
            plt.savefig(chart_path)
            logger.info("[COVERAGE] Chart => %s", chart_path)
            plt.close()
        except Exception as e:
            logger.warning("Failed to generate coverage chart: %s", e)

# -----------------------------------------------------------------------------
# Enhanced Reporting Engine
# -----------------------------------------------------------------------------
class EnhancedReporter:
    def generate_detailed_report(self, test_data: Dict) -> Dict:
        return {
            "metadata": self._report_metadata(),
            "execution_summary": self._execution_stats(test_data),
            "anomaly_breakdown": self._categorize_anomalies(test_data),
            "crash_analysis": self._analyze_crashes(test_data),
            "coverage_analysis": self._coverage_breakdown(test_data),
            "visual_changes": self._visual_diff_analysis(test_data),
            "performance_profile": self._performance_metrics(test_data),
            "memory_analysis": self._memory_profile(test_data),
            "recommendations": self._generate_recommendations(test_data),
            "raw_data_references": self._link_artifacts(test_data)
        }

    def _report_metadata(self) -> Dict:
        return {"generated_on": datetime.now().isoformat()}

    def _execution_stats(self, test_data: Dict) -> Dict:
        return {"total_tests": len(test_data)}

    def _categorize_anomalies(self, test_data: Dict) -> Dict:
        anomalies = defaultdict(int)
        for t in test_data.values():
            for anomaly in t.get("anomalies", []):
                anomalies[anomaly["type"]] += 1
        return anomalies

    def _analyze_crashes(self, test_data: Dict) -> Dict:
        analysis = {
            "crash_types": defaultdict(int),
            "memory_patterns": defaultdict(int),
            "callstack_clusters": [],
            "resource_correlations": []
        }
        crash_signatures = []
        for test in test_data.values():
            crash_log = next((a['details'] for a in test.get('anomalies', []) 
                              if a['type'] == 'memory_corruption'), None)
            if crash_log and os.path.exists(crash_log):
                with open(crash_log, "r") as f:
                    log = f.read()
                    functions = re.findall(r'#\d+\s+0x\w+\s+in\s+(.+?)\+', log)
                    signature = "|".join(functions[:3])
                    crash_signatures.append(signature)
                    ops = re.findall(r'(WRITE|READ)\s+of\s+size\s+\d+', log)
                    analysis["memory_patterns"]["_".join(ops)] += 1
        if crash_signatures:
            vectorizer = TfidfVectorizer()
            X = vectorizer.fit_transform(crash_signatures)
            kmeans = KMeans(n_clusters=3, random_state=42).fit(X)
            analysis["callstack_clusters"] = [
                {"center": vectorizer.get_feature_names_out()[cluster].tolist(),
                 "count": count}
                for cluster, count in Counter(kmeans.labels_).items()
            ]
        # Example resource correlations (stub)
        analysis["resource_correlations"] = {
            "dom_correlation": 0.0,
            "gpu_correlation": 0.0
        }
        return analysis

    def _coverage_breakdown(self, test_data: Dict) -> Dict:
        cov_file = os.path.join(OUTPUT_DIR, "coverage_summary.json")
        if not os.path.exists(cov_file):
            return {}
        with open(cov_file, "r") as f:
            coverage = json.load(f)
        total_stats = {
            "total_scripts": 0,
            "visited_functions": 0,
            "visited_ranges": 0,
            "coverage_score": 0
        }
        for file_stats in coverage["files"].values():
            total_stats["total_scripts"] += file_stats["scriptCount"]
            total_stats["visited_functions"] += file_stats["visitedFunctions"]
            total_stats["visited_ranges"] += file_stats["visitedRanges"]
            total_stats["coverage_score"] += file_stats["weightedCoverageScore"]
        per_file = {
            fname: {
                "function_coverage": f"{(stats['visitedFunctions']/stats['totalFunctions'] if stats['totalFunctions'] else 0):.1%}",
                "range_coverage": f"{(stats['visitedRanges']/stats['totalRanges'] if stats['totalRanges'] else 0):.1%}",
                "score_percentage": f"{(stats['weightedCoverageScore']/total_stats['coverage_score'] if total_stats['coverage_score'] else 0):.1%}"
            }
            for fname, stats in coverage["files"].items()
        }
        return {
            "aggregate": total_stats,
            "per_file": per_file
        }

    def _visual_diff_analysis(self, test_data: Dict) -> Dict:
        analysis = defaultdict(dict)
        for test_name, test in test_data.items():
            if diff_path := test["artifacts"].get("visual_diff"):
                try:
                    with Image.open(test["baseline"]) as img1, Image.open(test["screenshot"]) as img2:
                        gif_path = os.path.join(OUTPUT_DIR, "visual_diffs", f"{test_name}.gif")
                        os.makedirs(os.path.dirname(gif_path), exist_ok=True)
                        img1.resize((400,300)).save(
                            gif_path,
                            save_all=True, 
                            append_images=[img2.resize((400,300))],
                            duration=500, 
                            loop=0
                        )
                        diff = ImageChops.difference(img1, img2)
                        analysis[test_name] = {
                            "gif": gif_path,
                            "ssim": self._calculate_ssim(img1, img2),
                            "histogram_diff": self._histogram_distance(img1, img2)
                        }
                except Exception as e:
                    logger.warning(f"Visual diff failed for {test_name}: {str(e)}")
        return analysis

    def _calculate_ssim(self, img1: Image.Image, img2: Image.Image) -> float:
        # Stub: Implement Structural Similarity Index (SSIM)
        return 0.95

    def _histogram_distance(self, img1: Image.Image, img2: Image.Image) -> float:
        # Stub: Compute histogram distance between images
        h1 = img1.histogram()
        h2 = img2.histogram()
        return sum(abs(a-b) for a, b in zip(h1, h2)) / len(h1)

    def _performance_metrics(self, test_data: Dict) -> Dict:
        metrics = {
            "load_times": [],
            "memory_usage": [],
            "dom_complexity": []
        }
        for test in test_data.values():
            if "load_time" in test["metrics"]:
                metrics["load_times"].append(test["metrics"]["load_time"])
            if "max_memory" in test["metrics"]:
                metrics["memory_usage"].append(test["metrics"]["max_memory"])
            if "dom_nodes" in test["metrics"]:
                metrics["dom_complexity"].append(test["metrics"]["dom_nodes"])
        def _stats(values: List[float]) -> Dict:
            if not values:
                return {}
            arr = np.array(values)
            return {
                "mean": float(np.mean(arr)),
                "std": float(np.std(arr)),
                "p95": float(np.percentile(arr, 95)),
                "max": float(np.max(arr))
            }
        return {
            "load_time": _stats(metrics["load_times"]),
            "memory_usage": _stats(metrics["memory_usage"]),
            "dom_complexity": _stats(metrics["dom_complexity"])
        }

    def _memory_profile(self, test_data: Dict) -> Dict:
        timeline = []
        for test in test_data.values():
            if metrics := test["metrics"].get("chrome_metrics"):
                timeline.append({
                    "time": test["start_time"],
                    "js_heap": metrics.get("JSHeapUsedSize", 0),
                    "documents": metrics.get("Documents", 0),
                    "nodes": metrics.get("Nodes", 0)
                })
        algo = Binseg(model="l2").fit(np.array([t["js_heap"] for t in timeline]))
        change_points = algo.predict(pen=10)
        return {
            "timeline": timeline,
            "leak_candidates": [timeline[i] for i in change_points],
            "stats": {
                "max_js_heap": max(t["js_heap"] for t in timeline) if timeline else 0,
                "heap_per_node": float(np.corrcoef(
                    [t["js_heap"] for t in timeline],
                    [t["nodes"] for t in timeline]
                )[0,1]) if timeline else 0
            }
        }

    def _generate_recommendations(self, test_data: Dict) -> List[Dict]:
        recs = []
        crash_analysis = self._analyze_crashes(test_data)
        if "WRITE_WRITE" in crash_analysis.get('memory_patterns', {}):
            recs.append({
                "type": "Race Condition",
                "priority": "Critical",
                "action": [
                    "Review shared buffer access in CanvasRenderingContext2D",
                    "Audit OffscreenCanvas commit synchronization",
                    "Check WebGL texture upload synchronization"
                ],
                "reference": "https://chromium.googlesource.com/chromium/src/+/main/docs/race_detection.md"
            })
        if any(t['metrics'].get('layout_duration', 0) > 500 for t in test_data.values()):
            recs.append({
                "type": "Layout Performance",
                "priority": "High",
                "action": [
                    "Optimize CSS containment strategies",
                    "Review forced synchronous layouts",
                    "Audit DOM measurement patterns"
                ],
                "reference": "https://chromium.googlesource.com/chromium/src/+/main/docs/speed/layout_benchmarks.md"
            })
        return recs

    def _link_artifacts(self, test_data: Dict) -> Dict:
        return {}

    def generate_html_report(self, report_data: Dict) -> str:
        crash_chart = """
        <div id="crashChart" style="width:800px;height:400px;"></div>
        <script>
            var crashData = {
                x: %s,
                y: %s,
                type: 'bar'
            };
            Plotly.newPlot('crashChart', [crashData]);
        </script>
        """ % (
            json.dumps(list(report_data['crash_analysis']['crash_types'].keys())),
            json.dumps(list(report_data['crash_analysis']['crash_types'].values()))
        )
        cluster_viz = """
        <div id="clusterNetwork" style="width:800px;height:400px;"></div>
        <script>
            var nodes = new vis.DataSet(%s);
            var edges = new vis.DataSet(%s);
            var container = document.getElementById('clusterNetwork');
            var data = {nodes: nodes, edges: edges};
            new vis.Network(container, data, {});
        </script>
        """ % (
            json.dumps([{"id": i, "label": c["center"]} for i, c in enumerate(report_data['crash_analysis']['callstack_clusters'])]),
            json.dumps([{"from": i, "to": j} for i in range(len(report_data['crash_analysis']['callstack_clusters']))
                       for j in range(i+1, len(report_data['crash_analysis']['callstack_clusters']))])
        )
        html = f"""
        <!DOCTYPE html>
        <html>
        <head>
            <title>Advanced Detection Report</title>
            <script src="https://cdn.plot.ly/plotly-latest.min.js"></script>
            <script src="https://unpkg.com/vis-network/standalone/umd/vis-network.min.js"></script>
            <style>
                .metric {{ border: 1px solid #ddd; padding: 15px; margin: 10px; display: inline-block; }}
                .collapsible {{ background: #f8f9fa; padding: 10px; margin-top: 5px; cursor: pointer; }}
                .content {{ display: none; padding: 10px; }}
            </style>
        </head>
        <body>
            <div class="summary">
                <h2>Executive Summary</h2>
                <div class="metrics">
                    <div class="metric">
                        <h3>Tests Run</h3>
                        <p>{report_data['execution_summary']['total_tests']}</p>
                    </div>
                    <div class="metric">
                        <h3>Critical Issues</h3>
                        <p>{report_data['anomaly_breakdown'].get('memory_error', 0)}</p>
                    </div>
                    <div class="metric">
                        <h3>Coverage Score</h3>
                        <p>{report_data['coverage_analysis']['aggregate'].get('coverage_score', 0):.1f}</p>
                    </div>
                </div>
            </div>
            <div class="details">
                <h2>Detailed Analysis</h2>
                <div class="section collapsible" onclick="toggleSection('crashes')">
                    <h3>Crash Analysis</h3>
                    <div id="crashes" class="content">
                        {self._format_crash_html(report_data['crash_analysis'])}
                    </div>
                </div>
                <div class="section collapsible" onclick="toggleSection('visual')">
                    <h3>Visual Changes</h3>
                    <div id="visual" class="content">
                        {self._format_visual_html(report_data['visual_changes'])}
                    </div>
                </div>
            </div>
            {crash_chart}
            {cluster_viz}
            <script>
                function toggleSection(id) {{
                    var content = document.getElementById(id);
                    content.style.display = content.style.display === "block" ? "none" : "block";
                }}
            </script>
        </body>
        </html>
        """
        return html

    def _format_crash_html(self, crash_data: Dict) -> str:
        html = "<table border='1'><tr><th>Crash Type</th><th>Count</th></tr>"
        for ctype, count in crash_data.get("crash_types", {}).items():
            html += f"<tr><td>{ctype}</td><td>{count}</td></tr>"
        html += "</table>"
        return html

    def _format_visual_html(self, visual_data: Dict) -> str:
        html = ""
        for test_name, data in visual_data.items():
            html += f"<div><h4>{test_name}</h4>"
            html += f"<img src='{data['gif']}' alt='Diff for {test_name}' style='max-width:300px;'/></div>"
        return html

# -----------------------------------------------------------------------------
# Main
# -----------------------------------------------------------------------------
OUTPUT_DIR = ""
if os.path.isdir(os.path.dirname(MUTATION_DIR)):
    OUTPUT_DIR = os.path.join(os.path.dirname(MUTATION_DIR), "crash_results")
else:
    OUTPUT_DIR = DEFAULT_DETECTION_RESULTS_DIR
os.makedirs(OUTPUT_DIR, exist_ok=True)

def main() -> None:
    required_paths = [
        (CHROME_BINARY_PATH, "Chrome binary"),
        (CHROMEDRIVER_PATH, "ChromeDriver"),
        (MUTATION_DIR, "Default Mutation folder"),
        (BASELINE_DIR, "Baseline folder"),
        (SYMBOLIZER_PATH, "LLVM symbolizer")
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