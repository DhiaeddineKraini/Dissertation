#!/usr/bin/env python3
"""
detection.py
------------
Loads mutated HTML test files in an ASan-enabled Chrome using Selenium 4,
collects JavaScript coverage (via CDP), logs anomalies, and performs crash dedup.
Writes coverage_summary.json summarizing coverage across tested inputs,
plus unique_crashes.json for deduplicated crash signatures.
"""

import os
import glob
import csv
import json
import time
import psutil
import platform
import subprocess
import numpy as np
import argparse
import hashlib
from datetime import datetime
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service
from PIL import Image, ImageChops
from io import BytesIO
import cv2
import axe_selenium_python
from sklearn.cluster import DBSCAN
from selenium.webdriver.support.ui import WebDriverWait

###############################################################################
# CONFIG CONSTANTS
###############################################################################
CHROME_BINARY_PATH   = "/home/dhia/chromium/src/out/asan/chrome"
CHROMEDRIVER_PATH    = "/home/dhia/chromium/src/out/asan/chromedriver"
DEFAULT_MUTATION_DIR = "/home/dhia/browser-fuzzer/Dissertation/tests/testing_seeds/combined/mutation/complex"
BASELINE_DIR         = "/home/dhia/browser-fuzzer/Dissertation/baselines"
SYMBOLIZER_PATH      = "/usr/lib/llvm-16/bin/llvm-symbolizer"

parser = argparse.ArgumentParser(description="Run detection on mutated files + coverage + crash dedup.")
parser.add_argument("mutation_dir", nargs="?", default=os.getenv("DETECTION_TARGET_DIR", DEFAULT_MUTATION_DIR),
                    help="Directory containing mutation HTML files.")
args = parser.parse_args()
MUTATION_DIR = args.mutation_dir

if os.path.isdir(os.path.dirname(MUTATION_DIR)):
    OUTPUT_DIR = os.path.join(os.path.dirname(MUTATION_DIR), "crash_results")
else:
    OUTPUT_DIR = "/home/dhia/browser-fuzzer/Dissertation/detection_results"
os.makedirs(OUTPUT_DIR, exist_ok=True)

###############################################################################
# COVERAGE + CRASH DEDUP
###############################################################################

class CoverageCDP:
    """Enable/disable JS coverage with Selenium 4's DevTools commands."""
    def __init__(self, driver):
        self.driver = driver
        self.enabled = False

    def start_js_coverage(self):
        try:
            self.driver.execute_cdp_cmd("Profiler.enable", {})
            self.driver.execute_cdp_cmd("Profiler.startPreciseCoverage", {
                "callCount": True,
                "detailed": True
            })
            self.enabled = True
        except Exception as e:
            print(f"[COVERAGE] Error enabling coverage => {e}")

    def stop_js_coverage(self):
        results = []
        if not self.enabled:
            return results
        try:
            coverage_result = self.driver.execute_cdp_cmd("Profiler.takePreciseCoverage", {})
            results = coverage_result.get("result", [])
            self.driver.execute_cdp_cmd("Profiler.stopPreciseCoverage", {})
            self.driver.execute_cdp_cmd("Profiler.disable", {})
        except Exception as e:
            print(f"[COVERAGE] Error stopping coverage => {e}")
        return results

class CrashDeduplicator:
    """
    Maintains a dictionary of known crash signatures in unique_crashes.json.
    On new ASan crashes, we symbolize, hash top frames => deduplicate or add new.
    """
    def __init__(self, outdir):
        self.outdir = outdir
        self.signatures_file = os.path.join(self.outdir, "unique_crashes.json")
        self.known_signatures = {}
        self._load_signatures()

    def _load_signatures(self):
        if os.path.exists(self.signatures_file):
            try:
                with open(self.signatures_file,"r",encoding="utf-8") as f:
                    self.known_signatures = json.load(f)
            except:
                pass

    def _save_signatures(self):
        with open(self.signatures_file,"w",encoding="utf-8") as f:
            json.dump(self.known_signatures,f,indent=2)

    def compute_signature(self, symbolized_trace):
        lines = symbolized_trace.split("\n")
        relevant = lines[:8]
        data = "\n".join(relevant)
        return hashlib.sha256(data.encode("utf-8")).hexdigest()

    def check_or_add_crash(self, symbolized_trace):
        sign = self.compute_signature(symbolized_trace)
        is_new = sign not in self.known_signatures
        if is_new:
            self.known_signatures[sign] = {
                "firstSeen": datetime.now().isoformat(),
                "traceSample": symbolized_trace[:500]
            }
            self._save_signatures()
        return is_new, sign

###############################################################################
# DETECTOR
###############################################################################

class BestChromeDetector:
    def __init__(self):
        print("Initializing coverage-based BestChromeDetector with crash dedup...\n")
        self.setup_directories()
        self.asan_options = {
            "detect_leaks":"1",
            "abort_on_error":"1",
            "log_path": f"{OUTPUT_DIR}/asan_logs/ASAN_%n_%p.log"
        }
        self.results = {}
        self.crash_deduper = CrashDeduplicator(OUTPUT_DIR)

        # A map from filename => coverage data
        self.coverage_map = {}

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

        csv_path = os.path.join(OUTPUT_DIR,"reports","full_report.csv")
        if not os.path.exists(csv_path):
            with open(csv_path,"w",newline="") as cf:
                w = csv.writer(cf)
                w.writerow(["Test File","Status","Anomaly Count","Anomaly Types",
                            "Max Severity","Duration","Artifacts"])

        json_path = os.path.join(OUTPUT_DIR,"reports","detailed_report.json")
        if not os.path.exists(json_path):
            with open(json_path,"w") as jf:
                json.dump({
                    "metadata":{
                        "system": platform.uname()._asdict(),
                        "execution_time": datetime.now().isoformat(),
                        "chrome_version": "UNKNOWN"
                    },
                    "tests":{}
                }, jf, indent=2)
        print(f"Created/verified output directories => {OUTPUT_DIR}\n")

    def init_chrome(self):
        from selenium.webdriver.chrome.options import Options as ChromeOptions
        print("Initializing Chrome (ASan + coverage) ...\n")
        options = ChromeOptions()
        options.binary_location = CHROME_BINARY_PATH
        options.add_argument("--headless")
        options.add_argument("--disable-gpu")
        options.add_argument("--no-sandbox")
        options.add_argument("--enable-features=AddressSanitizer")
        options.add_argument("--disable-dev-shm-usage")
        options.add_argument("--enable-logging")
        options.add_argument("--v=1")

        logging_prefs = {"performance":"ALL"}
        options.set_capability("goog:loggingPrefs",logging_prefs)

        env = os.environ.copy()
        env["ASAN_OPTIONS"] = ":".join(f"{k}={v}" for k,v in self.asan_options.items())

        serv = Service(
            executable_path=CHROMEDRIVER_PATH,
            env=env,
            log_output=f"{OUTPUT_DIR}/logs/chrome_driver.log"
        )
        driver = webdriver.Chrome(options=options, service=serv)
        return driver

    def run_test_suite(self):
        test_files = glob.glob(os.path.join(MUTATION_DIR,"*.html"))
        print(f"Found {len(test_files)} test files in => {MUTATION_DIR}\n")
        for tf in test_files:
            self.execute_test(tf)
            self.append_single_test_report(os.path.basename(tf))

        self.write_coverage_summary()
        print("All tests completed with coverage-based detection.\n")

    def write_coverage_summary(self):
        """
        Summarize coverage_map => coverage_summary.json
        coverage_map: { "fileName.html": [list of coverage dicts], ... }
        We'll produce a simple newCoverageScore = # of visited function ranges
        """
        summary = {"files": {}}
        for fname, coverage_items in self.coverage_map.items():
            script_count = len(coverage_items)
            total_funcs = 0
            visited = 0
            for cov_item in coverage_items:
                funcs = cov_item.get("functions", [])
                total_funcs += len(funcs)
                for f in funcs:
                    for r in f.get("ranges", []):
                        if r.get("count",0) > 0:
                            visited += 1
            summary["files"][fname] = {
                "scriptCount": script_count,
                "totalFunctions": total_funcs,
                "visitedFunctions": visited,
                "newCoverageScore": visited*10
            }
        outpath = os.path.join(OUTPUT_DIR, "coverage_summary.json")
        with open(outpath,"w",encoding="utf-8") as f:
            json.dump(summary,f,indent=2)
        print(f"[COVERAGE] Wrote coverage summary => {outpath}")

    def execute_test(self, test_file):
        test_name = os.path.basename(test_file)
        print(f"Starting test => {test_name}")
        current = {
            "file": test_name,
            "start_time": datetime.now(),
            "artifacts": {},
            "metrics": {},
            "anomalies": [],
            "status": "passed"
        }
        driver = None
        coverage_client = None
        try:
            driver = self.init_chrome()
            coverage_client = CoverageCDP(driver)
            coverage_client.start_js_coverage()

            # Load the test file
            if test_file.startswith("http"):
                url = test_file
            else:
                url = f"file://{os.path.abspath(test_file)}"
            driver.get(url)
            time.sleep(2)

            # Screenshot
            screenshot_path = os.path.join(OUTPUT_DIR,"screenshots",f"{test_name}.png")
            driver.save_screenshot(screenshot_path)
            current["artifacts"]["screenshot"] = screenshot_path

            # Insert various detection checks
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

            # Stop coverage
            coverage_data = coverage_client.stop_js_coverage()
            current["metrics"]["coverage_data"] = coverage_data
            self.coverage_map[test_name] = coverage_data

        except Exception as e:
            self.record_anomaly(current, "execution_error", str(e), "execute_test")
            current["status"] = "error"
            print(f"Error executing {test_name}: {e}")
        finally:
            if driver:
                driver.quit()
            current["metrics"]["duration"] = (datetime.now() - current["start_time"]).total_seconds()
            self.results[test_name] = current
            if current["anomalies"]:
                for a in current["anomalies"]:
                    print(f"  => Anomaly: {a['type']} => {a['details']}")
            else:
                print(f"  => No anomalies for {test_name}")
            print(f"Finished test => {test_name}, duration={current['metrics']['duration']:.2f}s\n")

    ##########################################################################
    # CRASH / Symbolization
    ##########################################################################

    def symbolize_trace(self, log_file):
        print(f"Symbolizing => {log_file}")
        try:
            proc = subprocess.run(
                [SYMBOLIZER_PATH,"-demangle"],
                input=open(log_file,"r").read(),
                capture_output=True,
                text=True,
                check=True
            )
            symbolized = proc.stdout
            sym_outfile = os.path.join(OUTPUT_DIR,"asan_logs",f"symbolized_{os.path.basename(log_file)}")
            with open(sym_outfile,"w",encoding="utf-8") as sf:
                sf.write(symbolized)
            print(f"Symbolized trace => {sym_outfile}")
            return symbolized
        except Exception as e:
            print(f"Symbolization failed => {e}")
            return ""

    ##########################################################################
    # ANOMALY CHECKS (All from original script)
    ##########################################################################

    def check_memory_errors(self, driver, current):
        print(" [MEMORY] Checking ASAN logs ...")
        asan_logs = glob.glob(os.path.join(OUTPUT_DIR,"asan_logs","*.log"))
        if asan_logs:
            # Just parse the first log
            with open(asan_logs[0],"r") as f:
                content = f.read()
                if "AddressSanitizer" in content:
                    sym_trace = self.symbolize_trace(asan_logs[0])
                    is_new, sign = self.crash_deduper.check_or_add_crash(sym_trace)
                    details = f"Crash signature={sign}, is_new={is_new}"
                    self.record_anomaly(current,"memory_error",details,"check_memory_errors")

    def check_visual_differences(self, driver, current):
        print(" [VISUAL] Checking diffs vs baseline ...")
        screenshot_path = current["artifacts"].get("screenshot")
        if not screenshot_path or not os.path.exists(screenshot_path):
            print("  No screenshot => skipping visual diff.")
            return
        try:
            from PIL import Image, ImageChops
            sc_img = Image.open(screenshot_path)
            baseline_candidate = os.path.join(BASELINE_DIR,f"{current['file']}.png")
            if os.path.exists(baseline_candidate):
                base_img = Image.open(baseline_candidate)
                diff = ImageChops.difference(sc_img, base_img)
                diff_score = np.sum(np.array(diff))
                if diff.getbbox() and diff_score>1000:
                    self.record_anomaly(current,"visual_mismatch",{
                        "diff_score": diff_score,
                        "baseline": baseline_candidate
                    }, "check_visual_differences")
                    print(f"  => visual mismatch => diff={diff_score}")
        except Exception as e:
            self.record_anomaly(current,"visual_analysis_error",str(e),"check_visual_differences")

    def check_layout_anomalies(self, driver, current):
        print(" [LAYOUT] Checking layout anomalies with DBSCAN ...")
        try:
            layout = driver.execute_script("""
                const elems = Array.from(document.querySelectorAll('*'));
                return elems.map(el=>{
                    const r = el.getBoundingClientRect();
                    return {x:r.x,y:r.y,w:r.width,h:r.height};
                });
            """)
            if layout:
                pos = np.array([[e["x"],e["y"]] for e in layout])
                if len(pos)>0:
                    clustering = DBSCAN(eps=50, min_samples=3).fit(pos)
                    lbl = clustering.labels_
                    n_clusters = len(set(lbl)) - (1 if -1 in lbl else 0)
                    if n_clusters > 20:
                        self.record_anomaly(current,"layout_shift",{"clusters": n_clusters},"check_layout_anomalies")
                        print(f"  => layout_shift => {n_clusters} clusters.")
        except Exception as e:
            self.record_anomaly(current,"layout_analysis_error",str(e),"check_layout_anomalies")

    def check_network_errors(self, driver, current):
        print(" [NETWORK] Checking performance logs ...")
        try:
            logs = driver.get_log("performance")
            net_entries = []
            for l in logs:
                msg = l["message"]
                import json
                try:
                    j = json.loads(msg)
                    m = j.get("message",{})
                    if "Network" in msg:
                        net_entries.append(m)
                except:
                    pass
            failed = []
            for e in net_entries:
                resp = e.get("params",{}).get("response",{})
                status = resp.get("status",200)
                if status>=400:
                    failed.append(e)
            if failed:
                self.record_anomaly(current,"network_error",{"failed_count":len(failed)},"check_network_errors")
                print(f"  => Found {len(failed)} network errors.")
        except Exception as e:
            self.record_anomaly(current,"network_analysis_error",str(e),"check_network_errors")

    def check_dom_structure(self, driver, current):
        print(" [DOM] Checking DOM structure ...")
        try:
            dom = driver.execute_script("""
                return {
                    doctype: document.doctype ? document.doctype.name : null,
                    total_elements: document.getElementsByTagName('*').length,
                    duplicate_ids: (()=>{
                        let allIds = Array.from(document.querySelectorAll('[id]')).map(n=>n.id);
                        return allIds.length!==new Set(allIds).size;
                    })()
                };
            """)
            if dom["duplicate_ids"]:
                self.record_anomaly(current,"dom_structure","Duplicate IDs found","check_dom_structure")
                print("  => Found duplicate IDs => dom_structure fail.")
        except Exception as e:
            self.record_anomaly(current,"dom_analysis_error",str(e),"check_dom_structure")

    def check_security_issues(self, driver, current):
        print(" [SECURITY] Checking CSP, mixed content ...")
        try:
            mixed = driver.execute_script("""
                return window.performance.getEntries()
                    .filter(e => e.initiatorType==='script' && e.name.startsWith('http://'));
            """)
            if mixed:
                self.record_anomaly(current,"mixed_content",{"count":len(mixed)},"check_security_issues")
                print(f"  => mixed content => {len(mixed)} scripts.")
            csp = driver.execute_script("""
                const meta = document.querySelector('meta[http-equiv="Content-Security-Policy"]');
                return meta ? meta.content : "";
            """)
            if not csp:
                self.record_anomaly(current,"csp_violation","Missing CSP","check_security_issues")
                print("  => missing CSP => csp_violation")
        except Exception as e:
            self.record_anomaly(current,"security_check_error",str(e),"check_security_issues")

    def check_accessibility(self, driver, current):
        print(" [ACCESS] Checking with axe-core ...")
        try:
            axe = axe_selenium_python.Axe(driver)
            axe.inject()
            results = axe.run()
            if results.get("violations"):
                self.record_anomaly(current,"accessibility",{
                    "violations": results["violations"],
                    "count": len(results["violations"])
                },"check_accessibility")
                print(f"  => Accessibility => {len(results['violations'])} violation(s).")
        except Exception as e:
            self.record_anomaly(current,"accessibility_error",str(e),"check_accessibility")

    def check_media_playback(self, driver, current):
        print(" [MEDIA] Checking video/audio playback ...")
        try:
            media = driver.execute_script("""
                return Array.from(document.querySelectorAll('video,audio')).map(m=>({
                    paused: m.paused,
                    error: m.error,
                    readyState: m.readyState
                }));
            """)
            for m in media:
                if m["error"] or m["readyState"]<4:
                    self.record_anomaly(current,"media_playback",m,"check_media_playback")
                    print("  => Found media playback error.")
        except Exception as e:
            self.record_anomaly(current,"media_error",str(e),"check_media_playback")

    def check_storage(self, driver, current):
        print(" [STORAGE] Checking localStorage usage ...")
        try:
            driver.execute_script("localStorage.setItem('testKey','testValue');")
            val = driver.execute_script("return localStorage.getItem('testKey');")
            if val!="testValue":
                self.record_anomaly(current,"storage_anomaly",{"expected":"testValue","got":val},"check_storage")
                print("  => Storage mismatch.")
        except Exception as e:
            self.record_anomaly(current,"storage_error",str(e),"check_storage")

    def check_event_handling(self, driver, current):
        print(" [EVENT] Checking event handling on body ...")
        try:
            time.sleep(0.5)
            body = driver.find_element(By.TAG_NAME,"body")
            driver.execute_script("arguments[0].click()", body)
            time.sleep(0.5)
            event_received = driver.execute_script("return window._eventReceived")
            if not event_received:
                self.record_anomaly(current,"event_failure","No click event on body","check_event_handling")
                print("  => No click event => event_failure.")
        except Exception as e:
            self.record_anomaly(current,"event_error",str(e),"check_event_handling")

    def check_localization(self, driver, current):
        print(" [I18N] Checking lang & dir ...")
        try:
            lang = driver.execute_script("return document.documentElement.lang")
            direction = driver.execute_script("return document.documentElement.dir")
            if not lang:
                self.record_anomaly(current,"i18n_issue","Missing lang attribute","check_localization")
                print("  => Missing lang => i18n_issue.")
            if direction not in ["ltr","rtl"]:
                self.record_anomaly(current,"i18n_issue",f"Invalid dir={direction}","check_localization")
                print(f"  => Invalid dir => {direction}")
        except Exception as e:
            self.record_anomaly(current,"localization_error",str(e),"check_localization")

    def check_performance(self, driver, current):
        print(" [PERF] Checking load time ...")
        try:
            timing = driver.execute_script("return window.performance.timing")
            load_time = timing["loadEventEnd"] - timing["navigationStart"]
            current["metrics"]["load_time"] = load_time
            if load_time>5000:
                self.record_anomaly(current,"slow_execution",f"Load time={load_time}ms","check_performance")
                print(f"  => slow_execution => {load_time}ms")
        except Exception as e:
            self.record_anomaly(current,"performance_error",str(e),"check_performance")

    def check_hardware_resources(self, driver, current):
        print(" [HW] Checking CPU/mem usage ...")
        try:
            proc = psutil.Process(driver.service.process.pid)
            mem = proc.memory_info().rss
            cpu = proc.cpu_percent(interval=1)
            current["metrics"]["max_memory"] = mem
            current["metrics"]["max_cpu"] = cpu
            if mem>2*1024*1024*1024:
                self.record_anomaly(current,"memory_exhaustion",f"{mem//(1024*1024)}MB used","check_hardware_resources")
                print(f"  => memory_exhaustion => {mem//(1024*1024)}MB.")
            if cpu>90:
                self.record_anomaly(current,"cpu_exhaustion",f"{cpu}% CPU usage","check_hardware_resources")
                print(f"  => CPU => {cpu}% usage.")
            gpu_info = driver.execute_script("return navigator.gpu||{}")
            if not gpu_info.get("hardwareAccelerated",True):
                self.record_anomaly(current,"gpu_anomaly",gpu_info,"check_hardware_resources")
                print("  => GPU acceleration disabled => gpu_anomaly.")
        except Exception as e:
            self.record_anomaly(current,"hardware_error",str(e),"check_hardware_resources")

    def check_animation_glitches(self, driver, current):
        print(" [ANIMATION] Checking frame diffs ...")
        try:
            frames = []
            for _ in range(5):
                png_bytes = driver.get_screenshot_as_png()
                frames.append(png_bytes)
                time.sleep(0.2)
            diffs = []
            from PIL import Image, ImageChops
            for i in range(1,len(frames)):
                img1 = Image.open(BytesIO(frames[i-1]))
                img2 = Image.open(BytesIO(frames[i]))
                d_img = ImageChops.difference(img1,img2)
                diffs.append(np.mean(np.array(d_img)))
            if np.std(diffs)>15:
                self.record_anomaly(current,"animation_glitch",{
                    "frame_diffs": diffs,
                    "stdDev": float(np.std(diffs))
                },"check_animation_glitches")
                print(f"  => animation_glitch => stdDev={np.std(diffs):.2f}")
        except Exception as e:
            self.record_anomaly(current,"animation_error",str(e),"check_animation_glitches")

    def check_console_errors(self, driver, current):
        print(" [CONSOLE] Checking logs for SEVERE/WARNING ...")
        try:
            logs = driver.get_log("browser")
            errs = [l for l in logs if l["level"] in ["SEVERE","WARNING"]]
            if errs:
                self.record_anomaly(current,"console_errors",{
                    "count": len(errs),
                    "messages": [l["message"] for l in errs]
                },"check_console_errors")
                print(f"  => console_errors => {len(errs)} found.")
        except Exception as e:
            self.record_anomaly(current,"console_error",str(e),"check_console_errors")

    ##########################################################################
    # ANOMALY RECORDING & REPORTS
    ##########################################################################

    def record_anomaly(self, current, anomaly_type, details, detected_by="unknown"):
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

    def get_severity(self, anomaly_type):
        mapping = {
            "memory_error":5, "crash":5, "mixed_content":4, "csp_violation":4,
            "network_error":3, "dom_structure":3, "gpu_anomaly":3, "visual_mismatch":3,
            "layout_shift":3, "media_playback":3, "storage_anomaly":3, "event_failure":3,
            "slow_execution":2, "accessibility":2, "i18n_issue":2, "animation_glitch":3,
            "execution_error":5, "hardware_error":3, "animation_error":3, "console_errors":3
        }
        return mapping.get(anomaly_type, 1)

    def append_single_test_report(self, test_name):
        test_data = self.results[test_name]
        anomalies = [f"{a['type']}({a['detected_by']})" for a in test_data["anomalies"]]
        severity = max((a["severity"] for a in test_data["anomalies"]), default=0)

        csv_path = os.path.join(OUTPUT_DIR,"reports","full_report.csv")
        import csv
        with open(csv_path,"a",newline="") as cf:
            wr = csv.writer(cf)
            wr.writerow([
                test_name,
                test_data["status"],
                len(test_data["anomalies"]),
                json.dumps(anomalies),
                severity,
                test_data["metrics"].get("duration",0),
                json.dumps(test_data["artifacts"])
            ])

        json_path = os.path.join(OUTPUT_DIR,"reports","detailed_report.json")
        with open(json_path,"r") as jf:
            existing = json.load(jf)
        if "tests" not in existing:
            existing["tests"] = {}
        existing["tests"][test_name] = test_data
        existing["metadata"]["execution_time"] = datetime.now().isoformat()
        if existing["metadata"].get("chrome_version")=="UNKNOWN":
            try:
                cver = subprocess.check_output([CHROME_BINARY_PATH,"--version"], text=True).strip()
                existing["metadata"]["chrome_version"] = cver
            except:
                pass
        with open(json_path,"w") as jf:
            json.dump(existing,jf,indent=2,default=str)
        print(f"Reports updated after {test_name}.\n")

def main():
    required = [
        (CHROME_BINARY_PATH,"Chrome binary"),
        (CHROMEDRIVER_PATH,"ChromeDriver"),
        (DEFAULT_MUTATION_DIR,"Mutation folder"),
        (BASELINE_DIR,"Baseline folder"),
        (SYMBOLIZER_PATH,"LLVM symbolizer")
    ]
    for path,desc in required:
        if not os.path.exists(path):
            print(f"Error: {desc} not found => {path}")
            sys.exit(1)

    detector = BestChromeDetector()
    detector.run_test_suite()

if __name__=="__main__":
    main()