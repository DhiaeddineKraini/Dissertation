#!/usr/bin/env python3
import os
import glob
import csv
import json
import time
import signal
import psutil
import platform
import subprocess
import numpy as np
from datetime import datetime
from threading import Thread
from concurrent.futures import ThreadPoolExecutor
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service
from PIL import Image, ImageChops
from io import BytesIO
import cv2
import axe_selenium_python
import torch
import torchvision.transforms as transforms
import torchvision.models as models
from sklearn.cluster import DBSCAN

# ----- Configuration (update these paths as required) -----
CHROME_BINARY_PATH   = "/home/dhia/chromium/src/out/asan/chrome"
CHROMEDRIVER_PATH    = "/home/dhia/chromium/src/out/asan/chromedriver"
MUTATION_DIR         = "/home/dhia/browser-fuzzer/Dissertation/tests/testing_seeds/combined/mutation/complex"
BASELINE_DIR         = "/home/dhia/browser-fuzzer/Dissertation/baselines"
OUTPUT_DIR           = "/home/dhia/browser-fuzzer/Dissertation/detection_results"
SYMBOLIZER_PATH      = "/usr/lib/llvm-16/bin/llvm-symbolizer"

# ----- Advanced Chrome Detector Class -----
class AdvancedChromeDetector:
    def __init__(self):
        self.setup_directories()
        self.asan_options = {
            'detect_leaks': '1',
            'abort_on_error': '1',
            # Use process ID and test name to generate unique logs
            'log_path': f"{OUTPUT_DIR}/asan_logs/ASAN_%n_%p.log"
        }
        # Load a pre-trained ResNet-50 model for anomaly classification (stubbed)
        self.model = self.load_anomaly_model()
        # Dictionary to store results for reporting
        self.results = {}

    def setup_directories(self):
        dirs = [
            f"{OUTPUT_DIR}/logs",
            f"{OUTPUT_DIR}/screenshots",
            f"{OUTPUT_DIR}/asan_logs",
            f"{OUTPUT_DIR}/reports",
            f"{OUTPUT_DIR}/network_logs",
            f"{OUTPUT_DIR}/performance",
            f"{OUTPUT_DIR}/accessibility",
            f"{OUTPUT_DIR}/media",
            f"{OUTPUT_DIR}/storage",
            f"{OUTPUT_DIR}/localization",
            f"{OUTPUT_DIR}/animations"
        ]
        for d in dirs:
            os.makedirs(d, exist_ok=True)

    def load_anomaly_model(self):
        # Stub: load a ResNet-50 model (you must provide MODEL_PATH or train your own)
        # For demonstration, we use a randomly initialized model.
        model = models.resnet50(pretrained=False)
        model.fc = torch.nn.Linear(2048, 4)  # assume 4 anomaly classes
        model.eval()
        return model

    def init_chrome(self):
        options = webdriver.ChromeOptions()
        options.binary_location = CHROME_BINARY_PATH
        options.add_argument("--headless=new")
        options.add_argument("--disable-gpu")
        options.add_argument("--no-sandbox")
        options.add_argument("--enable-features=AddressSanitizer")
        options.add_argument("--disable-dev-shm-usage")
        options.add_argument("--auto-open-devtools-for-tabs")
        options.add_argument("--enable-logging")
        options.add_argument("--v=1")
        options.add_argument("--enable-gpu-rasterization")
        options.add_argument("--force-color-profile=srgb")
        # Set up ASAN environment
        env = os.environ.copy()
        env["ASAN_OPTIONS"] = ":".join([f"{k}={v}" for k,v in self.asan_options.items()])

        service = Service(
            executable_path=CHROMEDRIVER_PATH,
            env=env,
            log_output=f"{OUTPUT_DIR}/logs/chrome_driver.log"
        )
        driver = webdriver.Chrome(options=options, service=service)
        driver.set_page_load_timeout(30)
        driver.set_script_timeout(15)
        return driver

    # ----- Test Execution and Detection Modules -----
    def execute_test(self, test_file):
        test_name = os.path.basename(test_file)
        current = {
            "file": test_name,
            "start_time": datetime.now(),
            "artifacts": {},
            "metrics": {},
            "anomalies": [],
            "status": "passed"
        }
        driver = None
        try:
            driver = self.init_chrome()
            # Load the test page
            file_url = f"file://{os.path.abspath(test_file)}"
            driver.get(file_url)
            time.sleep(2)  # Allow page to render
            
            # Capture initial screenshot
            screenshot_path = f"{OUTPUT_DIR}/screenshots/{test_name}.png"
            driver.save_screenshot(screenshot_path)
            current["artifacts"]["screenshot"] = screenshot_path

            # Run detection modules in parallel
            modules = [
                self.check_memory_errors,
                self.check_visual_differences,
                self.check_layout_anomalies,
                self.check_network_errors,
                self.check_dom_structure,
                self.check_security_issues,
                self.check_accessibility,
                self.check_media_playback,
                self.check_storage,
                self.check_event_handling,
                self.check_localization,
                self.check_performance,
                self.check_hardware_resources,
                self.check_animation_glitches,
                self.check_console_errors
            ]
            with ThreadPoolExecutor() as pool:
                pool.map(lambda fn: fn(driver, current), modules)
                
            # (Stub) Coverage & ML-based anomaly scoring
            current["metrics"]["coverage"] = self.get_coverage_report(test_name)
            current["metrics"]["anomaly_score"] = self.classify_anomaly(current)
            
        except Exception as e:
            self.record_anomaly(current, "execution_error", str(e))
            current["status"] = "error"
        finally:
            if driver:
                driver.quit()
            current["metrics"]["duration"] = (datetime.now() - current["start_time"]).total_seconds()
            self.results[test_name] = current

    # ----- Detection Modules -----
    def check_memory_errors(self, driver, current):
        # Parse ASAN logs for memory errors
        log_files = glob.glob(f"{OUTPUT_DIR}/asan_logs/*.log")
        if log_files:
            with open(log_files[0], 'r') as f:
                content = f.read()
                if "AddressSanitizer" in content:
                    self.record_anomaly(current, "memory_error", content)
                    self.symbolize_trace(log_files[0])

    def check_visual_differences(self, driver, current):
        try:
            screenshot_path = current["artifacts"].get("screenshot")
            if not screenshot_path or not os.path.exists(screenshot_path):
                return
            current_img = Image.open(screenshot_path)
            baseline_path = f"{BASELINE_DIR}/{current['file']}.png"
            if os.path.exists(baseline_path):
                baseline_img = Image.open(baseline_path)
                diff = ImageChops.difference(current_img, baseline_img)
                diff_score = np.sum(np.array(diff))
                if diff.getbbox() is not None and diff_score > 1000:
                    self.record_anomaly(current, "visual_mismatch", {"diff_score": diff_score, "baseline": baseline_path})
        except Exception as e:
            self.record_anomaly(current, "visual_analysis_error", str(e))

    def check_layout_anomalies(self, driver, current):
        try:
            # Use JavaScript to get bounding rectangles of DOM elements
            layout = driver.execute_script("""
                let elems = Array.from(document.querySelectorAll('*'));
                return elems.map(el => {
                    let rect = el.getBoundingClientRect();
                    return {x: rect.x, y: rect.y, w: rect.width, h: rect.height};
                });
            """)
            if layout and len(layout) > 0:
                positions = np.array([[e["x"], e["y"]] for e in layout])
                clustering = DBSCAN(eps=50, min_samples=3).fit(positions)
                n_clusters = len(set(clustering.labels_)) - (1 if -1 in clustering.labels_ else 0)
                if n_clusters > 20:  # arbitrary threshold
                    self.record_anomaly(current, "layout_shift", {"clusters": n_clusters})
        except Exception as e:
            self.record_anomaly(current, "layout_analysis_error", str(e))

    def check_network_errors(self, driver, current):
        try:
            logs = driver.get_log('performance')
            net_entries = [json.loads(l['message'])['message'] for l in logs if 'Network' in l['message']]
            failed = [e for e in net_entries if e.get('params', {}).get('response', {}).get('status', 200) >= 400]
            if failed:
                self.record_anomaly(current, "network_error", {"failed_count": len(failed)})
        except Exception as e:
            self.record_anomaly(current, "network_analysis_error", str(e))

    def check_dom_structure(self, driver, current):
        try:
            dom = driver.execute_script("""
                return {
                    doctype: document.doctype ? document.doctype.name : null,
                    total_elements: document.getElementsByTagName('*').length,
                    duplicate_ids: (() => {
                        let ids = Array.from(document.querySelectorAll('[id]')).map(e => e.id);
                        return ids.length !== new Set(ids).size;
                    })()
                };
            """)
            if dom["duplicate_ids"]:
                self.record_anomaly(current, "dom_structure", "Duplicate IDs found")
        except Exception as e:
            self.record_anomaly(current, "dom_analysis_error", str(e))

    def check_security_issues(self, driver, current):
        try:
            mixed = driver.execute_script("""
                return window.performance.getEntries()
                    .filter(entry => entry.initiatorType === 'script' && entry.name.startsWith('http://'));
            """)
            if mixed:
                self.record_anomaly(current, "mixed_content", {"count": len(mixed)})
            csp = driver.execute_script("""
                return document.querySelector('meta[http-equiv="Content-Security-Policy"]')?.content;
            """)
            if not csp:
                self.record_anomaly(current, "csp_violation", "Missing CSP header")
        except Exception as e:
            self.record_anomaly(current, "security_check_error", str(e))

    def check_accessibility(self, driver, current):
        try:
            axe = axe_selenium_python.Axe(driver)
            results = axe.run()
            if results.get("violations"):
                self.record_anomaly(current, "accessibility", {"violations": results["violations"], "count": len(results["violations"])})
        except Exception as e:
            self.record_anomaly(current, "accessibility_error", str(e))

    def check_media_playback(self, driver, current):
        try:
            media = driver.execute_script("""
                return Array.from(document.querySelectorAll('video, audio')).map(m => ({
                    paused: m.paused,
                    error: m.error,
                    readyState: m.readyState
                }));
            """)
            for m in media:
                if m['error'] or m['readyState'] < 4:
                    self.record_anomaly(current, "media_playback", m)
        except Exception as e:
            self.record_anomaly(current, "media_error", str(e))

    def check_storage(self, driver, current):
        try:
            driver.execute_script("localStorage.setItem('test', 'value')")
            stored = driver.execute_script("return localStorage.getItem('test')")
            if stored != 'value':
                self.record_anomaly(current, "storage_anomaly", {"expected": "value", "got": stored})
        except Exception as e:
            self.record_anomaly(current, "storage_error", str(e))

    def check_event_handling(self, driver, current):
        try:
            body = driver.find_element(By.TAG_NAME, 'body')
            driver.execute_script("arguments[0].click()", body)
            event_received = driver.execute_script("return window._eventReceived || false;")
            if not event_received:
                self.record_anomaly(current, "event_failure", "No click event detected on body")
        except Exception as e:
            self.record_anomaly(current, "event_error", str(e))

    def check_localization(self, driver, current):
        try:
            lang = driver.execute_script("return document.documentElement.lang")
            direction = driver.execute_script("return document.documentElement.dir")
            if not lang:
                self.record_anomaly(current, "i18n_issue", "Missing lang attribute")
            if direction not in ['ltr', 'rtl']:
                self.record_anomaly(current, "i18n_issue", f"Invalid dir attribute: {direction}")
        except Exception as e:
            self.record_anomaly(current, "localization_error", str(e))

    def check_performance(self, driver, current):
        try:
            timing = driver.execute_script("return window.performance.timing")
            load_time = timing['loadEventEnd'] - timing['navigationStart']
            current["metrics"]["load_time"] = load_time
            if load_time > 5000:
                self.record_anomaly(current, "slow_execution", f"Load time: {load_time}ms")
        except Exception as e:
            self.record_anomaly(current, "performance_error", str(e))

    def check_hardware_resources(self, driver, current):
        try:
            proc = psutil.Process(driver.service.process.pid)
            mem = proc.memory_info().rss
            cpu = proc.cpu_percent(interval=1)
            current["metrics"]["max_memory"] = mem
            current["metrics"]["max_cpu"] = cpu
            if mem > 2 * 1024 * 1024 * 1024:
                self.record_anomaly(current, "memory_exhaustion", f"Memory usage: {mem//1024//1024}MB")
            if cpu > 90:
                self.record_anomaly(current, "cpu_exhaustion", f"CPU usage: {cpu}%")
            gpu_info = driver.execute_script("return navigator.gpu || {};")
            if not gpu_info.get('hardwareAccelerated', True):
                self.record_anomaly(current, "gpu_anomaly", gpu_info)
        except Exception as e:
            self.record_anomaly(current, "hardware_error", str(e))

    def check_animations(self, driver, current):
        try:
            frames = []
            for _ in range(5):
                frames.append(driver.get_screenshot_as_png())
                time.sleep(0.2)
            diffs = []
            for i in range(1, len(frames)):
                img1 = Image.open(BytesIO(frames[i-1]))
                img2 = Image.open(BytesIO(frames[i]))
                diff_img = ImageChops.difference(img1, img2)
                diffs.append(np.mean(np.array(diff_img)))
            if np.std(diffs) > 15:
                self.record_anomaly(current, "animation_glitch", {"frame_diffs": diffs, "std": np.std(diffs)})
        except Exception as e:
            self.record_anomaly(current, "animation_error", str(e))

    def check_console_errors(self, driver, current):
        try:
            logs = driver.get_log('browser')
            errors = [l for l in logs if l['level'] in ['SEVERE', 'WARNING']]
            if errors:
                self.record_anomaly(current, "console_errors", {"count": len(errors), "messages": [l["message"] for l in errors]})
        except Exception as e:
            self.record_anomaly(current, "console_error", str(e))

    # ----- Advanced (Stub) Modules -----
    def get_coverage_report(self, test_name):
        # Stub: Invoke llvm-cov to get coverage data (requires Chrome built with coverage)
        try:
            cmd = ["llvm-cov", "report", CHROME_BINARY_PATH, "-instr-profile=chrome.profdata"]
            result = subprocess.run(cmd, capture_output=True, text=True)
            return result.stdout
        except Exception as e:
            return f"Coverage report error: {str(e)}"

    def classify_anomaly(self, current):
        # Stub: Extract features from current metrics and anomaly count
        features = np.array([
            current["metrics"].get("load_time", 0),
            current["metrics"].get("max_memory", 0) / (1024*1024),
            current["metrics"].get("max_cpu", 0),
            len(current["anomalies"])
        ], dtype=np.float32)
        # Normalize features (stub normalization)
        features = features / (features.max() + 1e-6)
        tensor = torch.FloatTensor(features).unsqueeze(0)
        with torch.no_grad():
            output = self.model(tensor.to("cpu"))
            score = torch.softmax(output, dim=1).cpu().numpy()[0,0]
        return float(score)

    def symbolize_trace(self, log_file):
        try:
            proc = subprocess.run(
                ["llvm-symbolizer", "-demangle"],
                input=open(log_file, "r").read(),
                capture_output=True,
                text=True,
                check=True
            )
            symbolized = proc.stdout
            sym_file = f"{OUTPUT_DIR}/asan_logs/symbolized_{os.path.basename(log_file)}"
            with open(sym_file, "w") as f:
                f.write(symbolized)
            self.current_test["artifacts"]["symbolized_trace"] = sym_file
        except Exception as e:
            print(f"Symbolization failed: {str(e)}")

    def record_anomaly(self, current, anomaly_type, details):
        entry = {
            "type": anomaly_type,
            "timestamp": datetime.now().isoformat(),
            "details": details,
            "severity": self.get_severity(anomaly_type),
            "artifacts": self.collect_artifacts(current)
        }
        current["anomalies"].append(entry)
        current["status"] = "failed"

    def get_severity(self, anomaly_type):
        severity_map = {
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
        }
        return severity_map.get(anomaly_type, 1)

    def collect_artifacts(self, current):
        return {
            "screenshot": current["artifacts"].get("screenshot", "N/A"),
            "asan_log": glob.glob(f"{OUTPUT_DIR}/asan_logs/*.log")[0] if glob.glob(f"{OUTPUT_DIR}/asan_logs/*.log") else "N/A",
            "symbolized_trace": current["artifacts"].get("symbolized_trace", "N/A")
        }

    def _finalize_test(self):
        self.current_test["metrics"]["duration"] = (datetime.now() - self.current_test["start_time"]).total_seconds()
        self.results[self.current_test["file"]] = self.current_test
        print(f"Completed test: {self.current_test['file']} (Duration: {self.current_test['metrics']['duration']}s)")

    # ----- Reporting -----
    def generate_reports(self):
        # Generate CSV report
        csv_path = f"{OUTPUT_DIR}/reports/full_report.csv"
        with open(csv_path, "w", newline="") as csvfile:
            writer = csv.writer(csvfile)
            writer.writerow(["Test File", "Status", "Anomaly Count", "Max Severity", "Duration", "Artifacts"])
            for test_name, test_data in self.results.items():
                severity = max([a["severity"] for a in test_data["anomalies"]], default=0)
                writer.writerow([
                    test_name,
                    test_data["status"],
                    len(test_data["anomalies"]),
                    severity,
                    test_data["metrics"].get("duration", 0),
                    json.dumps(test_data["artifacts"])
                ])
        # Generate JSON detailed report
        json_path = f"{OUTPUT_DIR}/reports/detailed_report.json"
        report = {
            "metadata": {
                "system": platform.uname()._asdict(),
                "execution_time": datetime.now().isoformat(),
                "chrome_version": subprocess.check_output([CHROME_BINARY_PATH, "--version"], text=True).strip()
            },
            "tests": self.results
        }
        with open(json_path, "w") as jsonfile:
            json.dump(report, jsonfile, indent=2, default=str)
        print(f"Reports generated:\n- CSV: {csv_path}\n- JSON: {json_path}")

    def run_test_suite(self):
        test_files = glob.glob(f"{MUTATION_DIR}/*.html")
        print(f"Starting detection on {len(test_files)} test files...")
        with ThreadPoolExecutor(max_workers=4) as executor:
            for test_file in test_files:
                executor.submit(self.execute_test, test_file)
        # Wait a few seconds for all threads to finish
        time.sleep(5)
        self.generate_reports()

# ----- Main Execution -----
if __name__ == "__main__":
    # Validate required paths
    for path, desc in [(CHROME_BINARY_PATH, "Chrome binary"),
                       (CHROMEDRIVER_PATH, "ChromeDriver"),
                       (MUTATION_DIR, "Mutation folder"),
                       (BASELINE_DIR, "Baseline folder"),
                       (SYMBOLIZER_PATH, "LLVM symbolizer")]:
        if not os.path.exists(path):
            print(f"Error: {desc} not found at {path}")
            exit(1)
    detector = AdvancedChromeDetector()
    detector.run_test_suite()

