#!/usr/bin/env python3
import os
import glob
import csv
import json
import time
import psutil
import platform
import subprocess
import numpy as np
from datetime import datetime
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service
from PIL import Image, ImageChops
from io import BytesIO
import cv2
import axe_selenium_python
from sklearn.cluster import DBSCAN
import argparse  # For command-line arguments

# ----- Configuration (update these paths as required) -----
CHROME_BINARY_PATH   = "/home/dhia/chromium/src/out/asan/chrome"
CHROMEDRIVER_PATH    = "/home/dhia/chromium/src/out/asan/chromedriver"
DEFAULT_MUTATION_DIR = "/home/dhia/browser-fuzzer/Dissertation/tests/testing_seeds/combined/mutation/complex"
BASELINE_DIR         = "/home/dhia/browser-fuzzer/Dissertation/baselines"

# First check for an environment variable, then allow override via CLI positional argument.
mutation_dir_env = os.getenv("DETECTION_TARGET_DIR", DEFAULT_MUTATION_DIR)

parser = argparse.ArgumentParser(description="Run detection tests on mutation files.")
parser.add_argument("mutation_dir", nargs="?", default=mutation_dir_env,
                    help="Directory containing mutation HTML files")
args = parser.parse_args()
MUTATION_DIR = args.mutation_dir

# If the mutation directory is provided from orchestrator.py, we want the output (crash results)
# to be saved in a sibling folder named "crash_results".
if os.path.isdir(os.path.dirname(MUTATION_DIR)):
    OUTPUT_DIR = os.path.join(os.path.dirname(MUTATION_DIR), "crash_results")
else:
    OUTPUT_DIR = "/home/dhia/browser-fuzzer/Dissertation/detection_results"

# Make sure OUTPUT_DIR exists
os.makedirs(OUTPUT_DIR, exist_ok=True)

SYMBOLIZER_PATH      = "/usr/lib/llvm-16/bin/llvm-symbolizer"

class BestChromeDetector:
    def __init__(self):
        print("Initializing Best Chrome Detector (no ML, no coverage)...")
        self.setup_directories()

        # ASAN environment
        self.asan_options = {
            'detect_leaks': '1',
            'abort_on_error': '1',
            'log_path': f"{OUTPUT_DIR}/asan_logs/ASAN_%n_%p.log"
        }

        self.results = {}
        print("Initialization complete.\n")

    def setup_directories(self):
        """Ensure all output directories exist. Also initialize CSV/JSON reports if missing."""
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
        print(f"Created/verified output directories in {OUTPUT_DIR}.")

        # CSV
        csv_path = f"{OUTPUT_DIR}/reports/full_report.csv"
        if not os.path.exists(csv_path):
            with open(csv_path, "w", newline="") as csvfile:
                writer = csv.writer(csvfile)
                writer.writerow([
                    "Test File", 
                    "Status", 
                    "Anomaly Count", 
                    "Anomaly Types", 
                    "Max Severity", 
                    "Duration", 
                    "Artifacts"
                ])
        # JSON
        json_path = f"{OUTPUT_DIR}/reports/detailed_report.json"
        if not os.path.exists(json_path):
            with open(json_path, "w") as jf:
                json.dump({
                    "metadata": {
                        "system": platform.uname()._asdict(),
                        "execution_time": datetime.now().isoformat(),
                        "chrome_version": "UNKNOWN"
                    },
                    "tests": {}
                }, jf, indent=2)

    def init_chrome(self):
        """Initialize headless Chrome with performance log + ASAN environment (Selenium 4+ style)."""
        print("Initializing Chrome with performance logs + ASAN settings...")

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

        # Enable performance logging
        logging_prefs = {"performance": "ALL"}
        options.set_capability("goog:loggingPrefs", logging_prefs)

        env = os.environ.copy()
        env["ASAN_OPTIONS"] = ":".join(f"{k}={v}" for k,v in self.asan_options.items())

        service = Service(
            executable_path=CHROMEDRIVER_PATH,
            env=env,
            log_output=f"{OUTPUT_DIR}/logs/chrome_driver.log"
        )

        driver = webdriver.Chrome(
            options=options,
            service=service
        )
        driver.set_page_load_timeout(30)
        driver.set_script_timeout(15)
        print("Chrome browser initialized.\n")
        return driver

    def run_test_suite(self):
        """Synchronous test of all HTML in MUTATION_DIR. Updates CSV/JSON after each file."""
        test_files = glob.glob(f"{MUTATION_DIR}/*.html")
        print(f"Found {len(test_files)} test files in {MUTATION_DIR}\n")

        for test_file in test_files:
            self.execute_test(test_file)
            self.append_single_test_report(os.path.basename(test_file))

        print("All tests completed.")

    def execute_test(self, test_file):
        """Run all detection checks on one file."""
        test_name = os.path.basename(test_file)
        print(f"Starting test for: {test_name}")
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
            file_url = f"file://{os.path.abspath(test_file)}"
            print(f"Loading: {file_url}")
            driver.get(file_url)
            time.sleep(2)

            # Inject a body click event from code
            driver.execute_script("""
                if (!window._eventReceived) {
                    window._eventReceived = false;
                    document.body.addEventListener('click', ()=>{ window._eventReceived = true; }, false);
                }
            """)

            # Screenshot
            screenshot_path = f"{OUTPUT_DIR}/screenshots/{test_name}.png"
            driver.save_screenshot(screenshot_path)
            current["artifacts"]["screenshot"] = screenshot_path
            print(f"Screenshot => {screenshot_path}")

            # Detection modules
            self.check_memory_errors(driver, current)
            self.check_visual_differences(driver, current)
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

        except Exception as e:
            self.record_anomaly(current, "execution_error", str(e), detected_by="execute_test")
            current["status"] = "error"
            print(f"Error while testing {test_name}: {str(e)}")

        finally:
            if driver:
                driver.quit()
            current["metrics"]["duration"] = (datetime.now() - current["start_time"]).total_seconds()
            self.results[test_name] = current
            print(f"Finished test: {test_name} (duration={current['metrics']['duration']:.2f}s)\n")

            if current["anomalies"]:
                for a in current["anomalies"]:
                    print(f"  => Found anomaly: {a['type']} by {a.get('detected_by','?')} => {a['details']}")
            else:
                print(f"  => No anomalies found for {test_name}.\n")

    # ----- Detection Modules -----
    def check_memory_errors(self, driver, current):
        print("  Checking memory errors (ASAN logs)...")
        log_files = glob.glob(f"{OUTPUT_DIR}/asan_logs/*.log")
        if log_files:
            with open(log_files[0], 'r') as f:
                content = f.read()
                if "AddressSanitizer" in content:
                    self.record_anomaly(current, "memory_error", content, "check_memory_errors")
                    self.symbolize_trace(log_files[0])
        print("  Memory error check done.")

    def check_visual_differences(self, driver, current):
        print("  Checking visual diffs vs baseline...")
        screenshot_path = current["artifacts"].get("screenshot")
        if not screenshot_path or not os.path.exists(screenshot_path):
            print("  No screenshot => skipping visual diff.")
            return
        try:
            from PIL import Image, ImageChops
            screenshot_img = Image.open(screenshot_path)
            baseline_path = f"{BASELINE_DIR}/{current['file']}.png"
            if os.path.exists(baseline_path):
                baseline_img = Image.open(baseline_path)
                diff = ImageChops.difference(screenshot_img, baseline_img)
                diff_score = np.sum(np.array(diff))
                if diff.getbbox() and diff_score > 1000:
                    self.record_anomaly(current,"visual_mismatch",{
                        "diff_score": diff_score,
                        "baseline": baseline_path
                    },"check_visual_differences")
                    print(f"  Visual mismatch => diff={diff_score}")
        except Exception as e:
            self.record_anomaly(current,"visual_analysis_error",str(e),"check_visual_differences")
        print("  Visual difference check done.")

    def check_layout_anomalies(self, driver, current):
        print("  Checking layout anomalies with DBSCAN...")
        try:
            layout = driver.execute_script("""
                let elems = Array.from(document.querySelectorAll('*'));
                return elems.map(el => {
                    let rect = el.getBoundingClientRect();
                    return {x: rect.x, y: rect.y, w: rect.width, h: rect.height};
                });
            """)
            if layout:
                pos = np.array([[e["x"], e["y"]] for e in layout])
                if len(pos)>0:
                    clustering = DBSCAN(eps=50, min_samples=3).fit(pos)
                    n_clusters = len(set(clustering.labels_)) - (1 if -1 in clustering.labels_ else 0)
                    if n_clusters>20:
                        self.record_anomaly(current,"layout_shift",{"clusters":n_clusters},"check_layout_anomalies")
                        print(f"  layout_shift => {n_clusters} clusters")
        except Exception as e:
            self.record_anomaly(current,"layout_analysis_error",str(e),"check_layout_anomalies")
        print("  Layout anomaly check done.")

    def check_network_errors(self, driver, current):
        print("  Checking network logs (performance logs) ...")
        try:
            logs = driver.get_log("performance")
            net_entries = [
                json.loads(l['message'])['message']
                for l in logs if "Network" in l['message']
            ]
            failed = [ e for e in net_entries if e.get("params",{}).get("response",{}).get("status",200)>=400 ]
            if failed:
                self.record_anomaly(current,"network_error",{"failed_count":len(failed)},"check_network_errors")
                print(f"  Found {len(failed)} network errors.")
        except Exception as e:
            self.record_anomaly(current,"network_analysis_error",str(e),"check_network_errors")
        print("  Network check done.")

    def check_dom_structure(self, driver, current):
        print("  Checking DOM structure...")
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
                self.record_anomaly(current,"dom_structure","Duplicate IDs found","check_dom_structure")
                print("  Found duplicate IDs => dom_structure fail.")
        except Exception as e:
            self.record_anomaly(current,"dom_analysis_error",str(e),"check_dom_structure")
        print("  DOM check done.")

    def check_security_issues(self, driver, current):
        print("  Checking CSP, mixed content...")
        try:
            # Mixed content
            mixed = driver.execute_script("""
                return window.performance.getEntries()
                    .filter(e => e.initiatorType==='script' && e.name.startsWith('http://'))
            """)
            if mixed:
                self.record_anomaly(current,"mixed_content",{"count":len(mixed)},"check_security_issues")
                print(f"  Mixed content => {len(mixed)} found")

            # CSP
            csp = driver.execute_script("""
                return document.querySelector('meta[http-equiv="Content-Security-Policy"]')?.content
            """)
            if not csp:
                self.record_anomaly(current,"csp_violation","Missing CSP header","check_security_issues")
                print("  Missing CSP => csp_violation.")
        except Exception as e:
            self.record_anomaly(current,"security_check_error",str(e),"check_security_issues")
        print("  Security check done.")

    def check_accessibility(self, driver, current):
        print("  Checking accessibility with axe-core (inject + run)...")
        try:
            axe = axe_selenium_python.Axe(driver)
            axe.inject()
            results = axe.run()
            if results.get("violations"):
                self.record_anomaly(current,"accessibility",{
                    "violations":results["violations"],
                    "count":len(results["violations"])
                },"check_accessibility")
                print(f"  Accessibility => {len(results['violations'])} violations.")
        except Exception as e:
            self.record_anomaly(current,"accessibility_error",str(e),"check_accessibility")
        print("  Accessibility check done.")

    def check_media_playback(self, driver, current):
        print("  Checking media playback...")
        try:
            media = driver.execute_script("""
                return Array.from(document.querySelectorAll('video, audio')).map(m => ({
                    paused: m.paused,
                    error: m.error,
                    readyState: m.readyState
                }));
            """)
            for m in media:
                if m['error'] or m['readyState']<4:
                    self.record_anomaly(current,"media_playback",m,"check_media_playback")
                    print("  Found media playback error.")
        except Exception as e:
            self.record_anomaly(current,"media_error",str(e),"check_media_playback")
        print("  Media check done.")

    def check_storage(self, driver, current):
        print("  Checking localStorage usage...")
        try:
            driver.execute_script("localStorage.setItem('testKey','testValue')")
            val = driver.execute_script("return localStorage.getItem('testKey')")
            if val!='testValue':
                self.record_anomaly(current,"storage_anomaly",{
                    "expected":"testValue",
                    "got":val
                },"check_storage")
                print("  Storage => mismatch.")
        except Exception as e:
            self.record_anomaly(current,"storage_error",str(e),"check_storage")
        print("  Storage check done.")

    def check_event_handling(self, driver, current):
        print("  Checking event handling on body...")
        try:
            time.sleep(0.5)
            body = driver.find_element(By.TAG_NAME,"body")
            driver.execute_script("arguments[0].click()", body)
            time.sleep(0.5)
            event_received = driver.execute_script("return window._eventReceived")
            if not event_received:
                self.record_anomaly(current,"event_failure","No click event on body","check_event_handling")
                print("  No click event => event_failure.")
        except Exception as e:
            self.record_anomaly(current,"event_error",str(e),"check_event_handling")
        print("  Event handling check done.")

    def check_localization(self, driver, current):
        print("  Checking i18n (lang & dir)...")
        try:
            lang = driver.execute_script("return document.documentElement.lang")
            direction = driver.execute_script("return document.documentElement.dir")
            if not lang:
                self.record_anomaly(current,"i18n_issue","Missing lang attribute","check_localization")
                print("  i18n => missing lang.")
            if direction not in ["ltr","rtl"]:
                self.record_anomaly(current,"i18n_issue",f"Invalid dir: {direction}","check_localization")
                print(f"  i18n => invalid dir '{direction}'")
        except Exception as e:
            self.record_anomaly(current,"localization_error",str(e),"check_localization")
        print("  i18n check done.")

    def check_performance(self, driver, current):
        print("  Checking performance metrics (load time)...")
        try:
            timing = driver.execute_script("return window.performance.timing")
            load_time = timing["loadEventEnd"] - timing["navigationStart"]
            current["metrics"]["load_time"] = load_time
            if load_time>5000:
                self.record_anomaly(current,"slow_execution",f"Load time: {load_time}ms","check_performance")
                print(f"  Performance => load time {load_time}ms.")
        except Exception as e:
            self.record_anomaly(current,"performance_error",str(e),"check_performance")
        print("  Performance check done.")

    def check_hardware_resources(self, driver, current):
        print("  Monitoring hardware usage...")
        try:
            proc = psutil.Process(driver.service.process.pid)
            mem = proc.memory_info().rss
            cpu = proc.cpu_percent(interval=1)
            current["metrics"]["max_memory"] = mem
            current["metrics"]["max_cpu"] = cpu
            if mem>2*1024*1024*1024:
                self.record_anomaly(current,"memory_exhaustion",f"{mem//1024//1024}MB used","check_hardware_resources")
                print(f"  memory_exhaustion => {mem//1024//1024}MB")
            if cpu>90:
                self.record_anomaly(current,"cpu_exhaustion",f"{cpu}% CPU usage","check_hardware_resources")
                print(f"  CPU => {cpu}% usage.")
            gpu_info = driver.execute_script("return navigator.gpu || {};")
            if not gpu_info.get("hardwareAccelerated",True):
                self.record_anomaly(current,"gpu_anomaly",gpu_info,"check_hardware_resources")
                print("  GPU acceleration disabled => gpu_anomaly")
        except Exception as e:
            self.record_anomaly(current,"hardware_error",str(e),"check_hardware_resources")
        print("  Hardware usage check done.")

    def check_animation_glitches(self, driver, current):
        print("  Checking for animation glitches (frame diffs) ...")
        try:
            frames=[]
            for _ in range(5):
                frames.append(driver.get_screenshot_as_png())
                time.sleep(0.2)
            diffs=[]
            for i in range(1,len(frames)):
                img1=Image.open(BytesIO(frames[i-1]))
                img2=Image.open(BytesIO(frames[i]))
                diff_img=ImageChops.difference(img1,img2)
                diffs.append(np.mean(np.array(diff_img)))
            if np.std(diffs)>15:
                self.record_anomaly(current,"animation_glitch",{
                    "frame_diffs":diffs,
                    "std":float(np.std(diffs))
                },"check_animation_glitches")
                print(f"  animation_glitch => std dev={np.std(diffs):.2f}")
        except Exception as e:
            self.record_anomaly(current,"animation_error",str(e),"check_animation_glitches")
        print("  Animation glitch check done.")

    def check_console_errors(self, driver, current):
        print("  Checking console for errors/warnings...")
        try:
            logs = driver.get_log("browser")
            errors = [l for l in logs if l["level"] in ["SEVERE","WARNING"]]
            if errors:
                self.record_anomaly(current,"console_errors",{
                    "count": len(errors),
                    "messages":[l["message"] for l in errors]
                },"check_console_errors")
                print(f"  console_errors => {len(errors)} found.")
        except Exception as e:
            self.record_anomaly(current,"console_error",str(e),"check_console_errors")
        print("  Console check done.")

    # ---------- Symbolization (ASAN) ----------
    def symbolize_trace(self, log_file):
        print(f"  Symbolizing ASAN trace => {log_file} ...")
        try:
            proc = subprocess.run(
                [SYMBOLIZER_PATH,"-demangle"],
                input=open(log_file,"r").read(),
                capture_output=True,
                text=True,
                check=True
            )
            symbolized = proc.stdout
            sym_file = f"{OUTPUT_DIR}/asan_logs/symbolized_{os.path.basename(log_file)}"
            with open(sym_file,"w") as f:
                f.write(symbolized)
            print(f"  Symbolized trace => {sym_file}")
        except Exception as e:
            print(f"Symbolization failed => {str(e)}")

    # ---------- Anomaly Recording & Reporting ----------
    def record_anomaly(self, current, anomaly_type, details, detected_by="unknown"):
        entry = {
            "type": anomaly_type,
            "timestamp": datetime.now().isoformat(),
            "details": details,
            "severity": self.get_severity(anomaly_type),
            "detected_by": detected_by,
            "artifacts": self.collect_artifacts(current)
        }
        current["anomalies"].append(entry)
        current["status"] = "failed"
        print(f"  Recorded => {anomaly_type} (method={detected_by}): {details}")

    def get_severity(self, anomaly_type):
        mapping = {
            "memory_error":5,"crash":5,"xss_vulnerability":5,"mixed_content":4,
            "csp_violation":4,"timeout":4,"network_error":3,"dom_structure":3,
            "gpu_anomaly":3,"visual_mismatch":3,"layout_shift":3,"media_playback":3,
            "storage_anomaly":3,"event_failure":3,"slow_execution":2,"color_anomaly":2,
            "accessibility":2,"i18n_issue":2,"animation_glitch":3,"execution_error":5,
            "hardware_error":3,"animation_error":3,"console_errors":3
        }
        return mapping.get(anomaly_type,1)

    def collect_artifacts(self, current):
        asan_log_list = glob.glob(f"{OUTPUT_DIR}/asan_logs/*.log")
        asan_log = asan_log_list[0] if asan_log_list else "N/A"
        return {
            "screenshot": current["artifacts"].get("screenshot","N/A"),
            "asan_log": asan_log,
            "symbolized_trace": "N/A"
        }

    def append_single_test_report(self, test_name):
        """After each test, update CSV & JSON. We list anomalies as 'type (detected_by)'."""
        test_data = self.results[test_name]
        anomaly_list=[f"{a['type']} ({a['detected_by']})" for a in test_data["anomalies"]]
        severity = max((a["severity"] for a in test_data["anomalies"]), default=0)

        # 1) CSV
        csv_path = f"{OUTPUT_DIR}/reports/full_report.csv"
        with open(csv_path,"a",newline="") as csvfile:
            writer = csv.writer(csvfile)
            writer.writerow([
                test_name,
                test_data["status"],
                len(test_data["anomalies"]),
                json.dumps(anomaly_list),
                severity,
                test_data["metrics"].get("duration",0),
                json.dumps(test_data["artifacts"])
            ])

        # 2) JSON
        json_path = f"{OUTPUT_DIR}/reports/detailed_report.json"
        with open(json_path,"r") as jf:
            report_data = json.load(jf)

        if "tests" not in report_data:
            report_data["tests"] = {}
        report_data["tests"][test_name] = test_data

        # Update metadata
        report_data["metadata"]["execution_time"] = datetime.now().isoformat()

        # Possibly update Chrome version
        if report_data["metadata"].get("chrome_version") == "UNKNOWN":
            try:
                cver = subprocess.check_output([CHROME_BINARY_PATH,"--version"],text=True).strip()
                report_data["metadata"]["chrome_version"] = cver
            except:
                pass

        with open(json_path,"w") as jf:
            json.dump(report_data,jf,indent=2,default=str)

        print(f"Reports updated after {test_name}.\n")


# ----- Main Execution -----
if __name__=="__main__":
    # Validate required paths
    for path,desc in [
        (CHROME_BINARY_PATH,"Chrome binary"),
        (CHROMEDRIVER_PATH,"ChromeDriver"),
        (MUTATION_DIR,"Mutation folder"),
        (BASELINE_DIR,"Baseline folder"),
        (SYMBOLIZER_PATH,"LLVM symbolizer")
    ]:
        if not os.path.exists(path):
            print(f"Error: {desc} not found at {path}")
            exit(1)

    detector = BestChromeDetector()
    detector.run_test_suite()

