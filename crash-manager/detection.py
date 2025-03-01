#!/usr/bin/env python3                          # Use the python3 interpreter from the environment

import os                                      # Import operating system interface for file/directory operations
import glob                                    # Import glob module to search for files using patterns
import csv                                     # Import CSV module to read/write CSV files
import json                                    # Import JSON module to handle JSON data
import time                                    # Import time module for sleep and time-related functions
import psutil                                  # Import psutil for accessing system and process information
import platform                                # Import platform to get information about the underlying system
import subprocess                              # Import subprocess to run external commands
import numpy as np                             # Import numpy for numerical operations and arrays
import argparse                                # Import argparse to parse command-line arguments
from datetime import datetime                  # Import datetime class for timestamping events
from selenium import webdriver                 # Import selenium's webdriver for browser automation
from selenium.webdriver.common.by import By    # Import By class to locate elements in the page
from selenium.webdriver.chrome.service import Service  # Import Service class for starting ChromeDriver service
from PIL import Image, ImageChops              # Import PIL (Pillow) modules for image manipulation and difference calculations
from io import BytesIO                         # Import BytesIO to treat byte streams as file-like objects
import cv2                                     # Import OpenCV (cv2) for image processing (unused in current code)
import axe_selenium_python                      # Import axe_selenium_python for accessibility testing with axe-core
from sklearn.cluster import DBSCAN             # Import DBSCAN from scikit-learn for clustering layout elements
from selenium.webdriver.support.ui import WebDriverWait  # Import WebDriverWait for waiting until conditions are met

# ----- Configuration (update these paths as required) -----
CHROME_BINARY_PATH   = "/home/dhia/chromium/src/out/asan/chrome"      # Path to the Chrome/Chromium binary to be used
CHROMEDRIVER_PATH    = "/home/dhia/chromium/src/out/asan/chromedriver"   # Path to the ChromeDriver executable
DEFAULT_MUTATION_DIR = "/home/dhia/browser-fuzzer/Dissertation/tests/testing_seeds/combined/mutation/complex"  # Default directory with mutation HTML files
BASELINE_DIR         = "/home/dhia/browser-fuzzer/Dissertation/baselines"  # Directory where baseline screenshots are stored
SYMBOLIZER_PATH      = "/usr/lib/llvm-16/bin/llvm-symbolizer"            # Path to LLVM symbolizer for ASAN trace symbolization

# Determine target mutation directory: environment variable first, then CLI, else default.
parser = argparse.ArgumentParser(description="Run detection tests on mutation files.")  # Create a new argument parser with a description
parser.add_argument("mutation_dir", nargs="?", default=os.getenv("DETECTION_TARGET_DIR", DEFAULT_MUTATION_DIR),
                    help="Directory containing mutation HTML files")               # Add an optional positional argument for mutation directory
args = parser.parse_args()                     # Parse the command-line arguments
MUTATION_DIR = args.mutation_dir               # Set MUTATION_DIR from the parsed arguments

# Determine output folder: if mutation_dir is provided by orchestrator, output goes to a sibling folder "crash_results"
if os.path.isdir(os.path.dirname(MUTATION_DIR)):  # Check if the parent directory of MUTATION_DIR exists as a directory
    OUTPUT_DIR = os.path.join(os.path.dirname(MUTATION_DIR), "crash_results")  # Set OUTPUT_DIR as a sibling folder "crash_results"
else:
    OUTPUT_DIR = "/home/dhia/browser-fuzzer/Dissertation/detection_results"    # Otherwise, use a default output directory
os.makedirs(OUTPUT_DIR, exist_ok=True)         # Ensure the OUTPUT_DIR exists (create if it doesn't)

class BestChromeDetector:
    def __init__(self):
        print("Initializing Best Chrome Detector (no ML, no coverage)...")  # Print initialization message
        self.setup_directories()             # Call method to set up required output directories and reports
        # ASAN environment configuration
        self.asan_options = {                # Dictionary for configuring ASAN options
            'detect_leaks': '1',              # Enable leak detection
            'abort_on_error': '1',            # Abort when an error is detected
            'log_path': f"{OUTPUT_DIR}/asan_logs/ASAN_%n_%p.log"  # Path pattern for ASAN logs
        }
        self.results = {}                     # Dictionary to store test results for each file
        print("Initialization complete.\n")  # Print completion message

    def setup_directories(self):
        """Ensure output directories exist and initialize CSV/JSON reports."""
        dirs = [                             # List of directories to create inside OUTPUT_DIR
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
        for d in dirs:                      # Loop over each directory in the list
            os.makedirs(d, exist_ok=True)    # Create the directory if it does not already exist
        print(f"Created/verified output directories in {OUTPUT_DIR}.")  # Print confirmation message

        # CSV report initialization
        csv_path = f"{OUTPUT_DIR}/reports/full_report.csv"  # Define the path for the CSV report file
        if not os.path.exists(csv_path):     # If the CSV report file does not exist
            with open(csv_path, "w", newline="") as csvfile:  # Open the file for writing
                writer = csv.writer(csvfile)  # Create a CSV writer object
                writer.writerow([             # Write the header row for the report
                    "Test File", "Status", "Anomaly Count", "Anomaly Types",
                    "Max Severity", "Duration", "Artifacts"
                ])
        # JSON report initialization
        json_path = f"{OUTPUT_DIR}/reports/detailed_report.json"  # Define the path for the detailed JSON report file
        if not os.path.exists(json_path):     # If the JSON report file does not exist
            with open(json_path, "w") as jf:   # Open the file for writing
                json.dump({                  # Dump initial JSON content with metadata and empty tests dictionary
                    "metadata": {
                        "system": platform.uname()._asdict(),  # System information as a dictionary
                        "execution_time": datetime.now().isoformat(),  # Current time in ISO format
                        "chrome_version": "UNKNOWN"          # Placeholder for Chrome version
                    },
                    "tests": {}                # Initialize empty tests dictionary
                }, jf, indent=2)              # Pretty-print the JSON with an indent of 2 spaces

    def init_chrome(self):
        """Initialize headless Chrome with performance logging and ASAN options."""
        print("Initializing Chrome with performance logs + ASAN settings...")  # Print initialization message for Chrome
        options = webdriver.ChromeOptions()   # Create a new instance of ChromeOptions
        options.binary_location = CHROME_BINARY_PATH  # Set the binary location for Chrome/Chromium
        options.add_argument("--headless")  # Run Chrome in headless mode
        options.add_argument("--disable-gpu") # Disable GPU usage
        options.add_argument("--no-sandbox")  # Disable the sandbox for Chrome
        options.add_argument("--enable-features=AddressSanitizer")  # Enable AddressSanitizer feature
        options.add_argument("--disable-dev-shm-usage")  # Disable /dev/shm usage to prevent shared memory issues
        options.add_argument("--auto-open-devtools-for-tabs")  # Automatically open devtools for each tab
        options.add_argument("--enable-logging")  # Enable logging in Chrome
        options.add_argument("--v=1")         # Set verbose logging level to 1
        options.add_argument("--enable-gpu-rasterization")  # Enable GPU rasterization
        options.add_argument("--force-color-profile=srgb")  # Force sRGB color profile

        # Enable performance logging.
        logging_prefs = {"performance": "ALL"}  # Set logging preferences to capture all performance logs
        options.set_capability("goog:loggingPrefs", logging_prefs)  # Set the logging preferences in Chrome options

        env = os.environ.copy()             # Copy current environment variables
        # Set ASAN options in the environment as a colon-separated string of key=value pairs
        env["ASAN_OPTIONS"] = ":".join(f"{k}={v}" for k, v in self.asan_options.items())

        service = Service(                  # Create a new Service instance for ChromeDriver
            executable_path=CHROMEDRIVER_PATH,  # Set the path to the ChromeDriver executable
            env=env,                        # Pass the modified environment
            log_output=f"{OUTPUT_DIR}/logs/chrome_driver.log"  # Set the log output file for ChromeDriver logs
        )

        driver = webdriver.Chrome(options=options, service=service)  # Initialize the Chrome WebDriver with the given options and service
       # driver.set_page_load_timeout(90)   # (Commented out) Optionally increase page load timeout
       # driver.set_script_timeout(60)        # (Commented out) Optionally increase script execution timeout

        print("Chrome browser initialized.\n")  # Print completion message for Chrome initialization
        return driver                         # Return the initialized driver

    def run_test_suite(self):
        """Run detection tests on all HTML files in MUTATION_DIR."""
        test_files = glob.glob(f"{MUTATION_DIR}/*.html")  # Find all HTML files in the mutation directory
        print(f"Found {len(test_files)} test files in {MUTATION_DIR}\n")  # Print the number of test files found
        for test_file in test_files:          # Loop over each test file
            self.execute_test(test_file)      # Execute tests on the current file
            self.append_single_test_report(os.path.basename(test_file))  # Append report for the current test file
        print("All tests completed.")         # Print completion message after all tests

    def execute_test(self, test_file):
        """Execute all detection modules for a single test file."""
        test_name = os.path.basename(test_file)  # Extract the base filename from the test file path
        print(f"Starting test for: {test_name}")  # Print message indicating the start of testing for this file
        current = {                           # Initialize a dictionary to hold test data for the current file
            "file": test_name,                # Record the test file name
            "start_time": datetime.now(),     # Record the start time of the test
            "artifacts": {},                  # Dictionary to store paths to artifacts (e.g., screenshots)
            "metrics": {},                    # Dictionary to store performance metrics
            "anomalies": [],                  # List to store any anomalies detected
            "status": "passed"                # Initial status set to "passed"
        }
        driver = None                         # Initialize driver variable
        try:
            driver = self.init_chrome()       # Initialize the Chrome browser
            if test_file.startswith("http://") or test_file.startswith("https://"):
                url = test_file              # If the test file is a URL, use it directly
            else:
                url = f"file://{os.path.abspath(test_file)}"  # Otherwise, construct a file:// URL from the absolute path
    
            print(f"Loading: {url}")         # Print the URL being loaded
            driver.get(url)                   # Instruct Chrome to load the URL

            time.sleep(2)                     # Wait 2 seconds for the page to load
          #  WebDriverWait(driver, 60).until(
          #  lambda d: d.execute_script("return document.readyState") == "complete")  # (Commented out) Wait until the page is fully loaded
            # Inject a click listener to test event handling
            driver.execute_script("""
                if (!window._eventReceived) {
                    window._eventReceived = false;
                    document.body.addEventListener('click', ()=>{ window._eventReceived = true; }, false);
                }
            """)  # Inject JavaScript to add an event listener on the body to record clicks
            # Take screenshot
            screenshot_path = f"{OUTPUT_DIR}/screenshots/{test_name}.png"  # Define the screenshot file path based on the test file name
            driver.save_screenshot(screenshot_path)  # Save a screenshot of the current page
            current["artifacts"]["screenshot"] = screenshot_path  # Record the screenshot path in the artifacts dictionary
            print(f"Screenshot => {screenshot_path}")  # Print the screenshot path

            # Run detection modules sequentially to check for various anomalies
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
        except Exception as e:              # If an exception occurs during testing
            self.record_anomaly(current, "execution_error", str(e), detected_by="execute_test")  # Record an execution error anomaly
            current["status"] = "error"      # Set the test status to error
            print(f"Error while testing {test_name}: {str(e)}")  # Print the error message
        finally:
            if driver:                      # Ensure that the browser is closed
                driver.quit()               # Quit the driver to close the browser
            current["metrics"]["duration"] = (datetime.now() - current["start_time"]).total_seconds()  # Calculate test duration
            self.results[test_name] = current  # Save the test results in the results dictionary
            print(f"Finished test: {test_name} (duration={current['metrics']['duration']:.2f}s)\n")  # Print completion message with duration
            if current["anomalies"]:
                for a in current["anomalies"]:  # Loop through anomalies if any
                    print(f"  => Found anomaly: {a['type']} by {a.get('detected_by','?')} => {a['details']}")  # Print details of each anomaly
            else:
                print(f"  => No anomalies found for {test_name}.\n")  # Indicate that no anomalies were found

    # ----- Detection Modules -----
    def check_memory_errors(self, driver, current):
        print("  Checking memory errors (ASAN logs)...")  # Print message for memory error check
        log_files = glob.glob(f"{OUTPUT_DIR}/asan_logs/*.log")  # Find all ASAN log files in the designated directory
        if log_files:
            with open(log_files[0], 'r') as f:  # Open the first ASAN log file found
                content = f.read()            # Read its content
                if "AddressSanitizer" in content:  # Check if the log contains an ASAN error message
                    self.record_anomaly(current, "memory_error", content, "check_memory_errors")  # Record a memory error anomaly
                    self.symbolize_trace(log_files[0])  # Attempt to symbolize the ASAN trace
        print("  Memory error check done.")  # Print completion message

    def check_visual_differences(self, driver, current):
        print("  Checking visual diffs vs baseline...")  # Print message for visual difference check
        screenshot_path = current["artifacts"].get("screenshot")  # Retrieve the screenshot path from artifacts
        if not screenshot_path or not os.path.exists(screenshot_path):  # If no screenshot exists
            print("  No screenshot => skipping visual diff.")  # Print skip message
            return
        try:
            from PIL import Image, ImageChops  # Import PIL modules for image difference (redundant if already imported)
            screenshot_img = Image.open(screenshot_path)  # Open the screenshot image
            baseline_path = f"{BASELINE_DIR}/{current['file']}.png"  # Construct the baseline image path using the file name
            if os.path.exists(baseline_path):  # If the baseline image exists
                baseline_img = Image.open(baseline_path)  # Open the baseline image
                diff = ImageChops.difference(screenshot_img, baseline_img)  # Compute the difference between images
                diff_score = np.sum(np.array(diff))  # Sum the pixel differences as a score
                if diff.getbbox() and diff_score > 1000:  # If differences exist and the score is high
                    self.record_anomaly(current, "visual_mismatch", {
                        "diff_score": diff_score,
                        "baseline": baseline_path
                    }, "check_visual_differences")  # Record a visual mismatch anomaly
                    print(f"  Visual mismatch => diff={diff_score}")  # Print the diff score
        except Exception as e:
            self.record_anomaly(current, "visual_analysis_error", str(e), "check_visual_differences")  # Record any error during visual analysis
        print("  Visual difference check done.")  # Print completion message

    def check_layout_anomalies(self, driver, current):
        print("  Checking layout anomalies with DBSCAN...")  # Print message for layout anomaly check
        try:
            layout = driver.execute_script("""
                let elems = Array.from(document.querySelectorAll('*'));
                return elems.map(el => {
                    let rect = el.getBoundingClientRect();
                    return {x: rect.x, y: rect.y, w: rect.width, h: rect.height};
                });
            """)  # Execute JavaScript to collect positions and sizes of all elements on the page
            if layout:
                pos = np.array([[e["x"], e["y"]] for e in layout])  # Create a numpy array of the x and y positions of elements
                if len(pos) > 0:
                    clustering = DBSCAN(eps=50, min_samples=3).fit(pos)  # Cluster the positions using DBSCAN
                    n_clusters = len(set(clustering.labels_)) - (1 if -1 in clustering.labels_ else 0)  # Count the number of clusters, ignoring noise
                    if n_clusters > 20:  # If too many clusters are detected, indicating layout shifts
                        self.record_anomaly(current, "layout_shift", {"clusters": n_clusters}, "check_layout_anomalies")  # Record a layout shift anomaly
                        print(f"  layout_shift => {n_clusters} clusters")  # Print the number of clusters
        except Exception as e:
            self.record_anomaly(current, "layout_analysis_error", str(e), "check_layout_anomalies")  # Record any error in layout analysis
        print("  Layout anomaly check done.")  # Print completion message

    def check_network_errors(self, driver, current):
        print("  Checking network logs (performance logs) ...")  # Print message for network error check
        try:
            logs = driver.get_log("performance")  # Retrieve performance logs from the browser
            net_entries = [json.loads(l['message'])['message'] for l in logs if "Network" in l['message']]  # Extract network-related log entries
            failed = [e for e in net_entries if e.get("params", {}).get("response", {}).get("status", 200) >= 400]  # Filter entries with HTTP error status
            if failed:
                self.record_anomaly(current, "network_error", {"failed_count": len(failed)}, "check_network_errors")  # Record a network error anomaly with count
                print(f"  Found {len(failed)} network errors.")  # Print the count of network errors found
        except Exception as e:
            self.record_anomaly(current, "network_analysis_error", str(e), "check_network_errors")  # Record any error during network analysis
        print("  Network check done.")  # Print completion message

    def check_dom_structure(self, driver, current):
        print("  Checking DOM structure...")  # Print message for DOM structure check
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
            """)  # Execute JavaScript to collect the doctype, total elements count, and check for duplicate IDs
            if dom["duplicate_ids"]:
                self.record_anomaly(current, "dom_structure", "Duplicate IDs found", "check_dom_structure")  # Record a DOM structure anomaly if duplicates exist
                print("  Found duplicate IDs => dom_structure fail.")  # Print message indicating duplicate IDs found
        except Exception as e:
            self.record_anomaly(current, "dom_analysis_error", str(e), "check_dom_structure")  # Record any error during DOM analysis
        print("  DOM check done.")  # Print completion message

    def check_security_issues(self, driver, current):
        print("  Checking CSP, mixed content...")  # Print message for security check
        try:
            mixed = driver.execute_script("""
                return window.performance.getEntries()
                    .filter(e => e.initiatorType==='script' && e.name.startsWith('http://'))
            """)  # Execute JavaScript to detect scripts loaded over HTTP (mixed content)
            if mixed:
                self.record_anomaly(current, "mixed_content", {"count": len(mixed)}, "check_security_issues")  # Record mixed content anomaly if any
                print(f"  Mixed content => {len(mixed)} found")  # Print the number of mixed content entries found
            csp = driver.execute_script("""
                return document.querySelector('meta[http-equiv="Content-Security-Policy"]')?.content
            """)  # Execute JavaScript to retrieve the Content-Security-Policy meta tag's content
            if not csp:
                self.record_anomaly(current, "csp_violation", "Missing CSP header", "check_security_issues")  # Record a CSP violation if missing
                print("  Missing CSP => csp_violation.")  # Print message indicating missing CSP header
        except Exception as e:
            self.record_anomaly(current, "security_check_error", str(e), "check_security_issues")  # Record any error during security check
        print("  Security check done.")  # Print completion message

    def check_accessibility(self, driver, current):
        print("  Checking accessibility with axe-core (inject + run)...")  # Print message for accessibility check
        try:
            axe = axe_selenium_python.Axe(driver)  # Initialize the axe accessibility testing object
            axe.inject()                          # Inject axe-core into the page
            results = axe.run()                   # Run the accessibility tests
            if results.get("violations"):
                self.record_anomaly(current, "accessibility", {
                    "violations": results["violations"],
                    "count": len(results["violations"])
                }, "check_accessibility")       # Record an accessibility anomaly if violations are found
                print(f"  Accessibility => {len(results['violations'])} violations.")  # Print number of accessibility violations
        except Exception as e:
            self.record_anomaly(current, "accessibility_error", str(e), "check_accessibility")  # Record any error during accessibility check
        print("  Accessibility check done.")  # Print completion message

    def check_media_playback(self, driver, current):
        print("  Checking media playback...")  # Print message for media playback check
        try:
            media = driver.execute_script("""
                return Array.from(document.querySelectorAll('video, audio')).map(m => ({
                    paused: m.paused,
                    error: m.error,
                    readyState: m.readyState
                }));
            """)  # Execute JavaScript to collect status information for all video and audio elements
            for m in media:                     # Loop through each media element
                if m['error'] or m['readyState'] < 4:  # If there is an error or the media is not sufficiently ready
                    self.record_anomaly(current, "media_playback", m, "check_media_playback")  # Record a media playback anomaly
                    print("  Found media playback error.")  # Print message indicating a media playback error was found
        except Exception as e:
            self.record_anomaly(current, "media_error", str(e), "check_media_playback")  # Record any error during media check
        print("  Media check done.")         # Print completion message

    def check_storage(self, driver, current):
        print("  Checking localStorage usage...")  # Print message for localStorage check
        try:
            driver.execute_script("localStorage.setItem('testKey','testValue')")  # Set a value in localStorage
            val = driver.execute_script("return localStorage.getItem('testKey')")  # Retrieve the value from localStorage
            if val != 'testValue':            # If the value is not what is expected
                self.record_anomaly(current, "storage_anomaly", {"expected": "testValue", "got": val}, "check_storage")  # Record a storage anomaly
                print("  Storage => mismatch.")  # Print message indicating a mismatch in localStorage value
        except Exception as e:
            self.record_anomaly(current, "storage_error", str(e), "check_storage")  # Record any error during storage check
        print("  Storage check done.")       # Print completion message

    def check_event_handling(self, driver, current):
        print("  Checking event handling on body...")  # Print message for event handling check
        try:
            time.sleep(0.5)                # Wait briefly before checking events
            body = driver.find_element(By.TAG_NAME, "body")  # Find the body element of the page
            driver.execute_script("arguments[0].click()", body)  # Simulate a click on the body element using JavaScript
            time.sleep(0.5)                # Wait briefly for the event to be processed
            event_received = driver.execute_script("return window._eventReceived")  # Check if the injected event listener recorded a click
            if not event_received:
                self.record_anomaly(current, "event_failure", "No click event on body", "check_event_handling")  # Record an event failure if no click was detected
                print("  No click event => event_failure.")  # Print message indicating failure in event handling
        except Exception as e:
            self.record_anomaly(current, "event_error", str(e), "check_event_handling")  # Record any error during event handling check
        print("  Event handling check done.")  # Print completion message

    def check_localization(self, driver, current):
        print("  Checking i18n (lang & dir)...")  # Print message for localization check
        try:
            lang = driver.execute_script("return document.documentElement.lang")  # Retrieve the language attribute of the document element
            direction = driver.execute_script("return document.documentElement.dir")  # Retrieve the text direction attribute of the document element
            if not lang:
                self.record_anomaly(current, "i18n_issue", "Missing lang attribute", "check_localization")  # Record anomaly if lang attribute is missing
                print("  i18n => missing lang.")  # Print message indicating missing language attribute
            if direction not in ["ltr", "rtl"]:
                self.record_anomaly(current, "i18n_issue", f"Invalid dir: {direction}", "check_localization")  # Record anomaly if dir attribute is invalid
                print(f"  i18n => invalid dir '{direction}'")  # Print message indicating invalid text direction
        except Exception as e:
            self.record_anomaly(current, "localization_error", str(e), "check_localization")  # Record any error during localization check
        print("  i18n check done.")         # Print completion message

    def check_performance(self, driver, current):
        print("  Checking performance metrics (load time)...")  # Print message for performance check
        try:
            timing = driver.execute_script("return window.performance.timing")  # Retrieve the performance timing object from the browser
            load_time = timing["loadEventEnd"] - timing["navigationStart"]  # Calculate the page load time
            current["metrics"]["load_time"] = load_time  # Save the load time metric
            if load_time > 5000:             # If load time exceeds 5000ms (5 seconds)
                self.record_anomaly(current, "slow_execution", f"Load time: {load_time}ms", "check_performance")  # Record a slow execution anomaly
                print(f"  Performance => load time {load_time}ms.")  # Print the load time
        except Exception as e:
            self.record_anomaly(current, "performance_error", str(e), "check_performance")  # Record any error during performance check
        print("  Performance check done.")  # Print completion message

    def check_hardware_resources(self, driver, current):
        print("  Monitoring hardware usage...")  # Print message for hardware resource check
        try:
            proc = psutil.Process(driver.service.process.pid)  # Get the process object for the ChromeDriver process
            mem = proc.memory_info().rss    # Get the resident memory usage (in bytes)
            cpu = proc.cpu_percent(interval=1)  # Get the CPU usage percentage over a 1-second interval
            current["metrics"]["max_memory"] = mem  # Save the memory usage metric
            current["metrics"]["max_cpu"] = cpu  # Save the CPU usage metric
            if mem > 2*1024*1024*1024:       # If memory usage exceeds 2GB
                self.record_anomaly(current, "memory_exhaustion", f"{mem//1024//1024}MB used", "check_hardware_resources")  # Record a memory exhaustion anomaly
                print(f"  memory_exhaustion => {mem//1024//1024}MB")  # Print the memory usage in MB
            if cpu > 90:                   # If CPU usage exceeds 90%
                self.record_anomaly(current, "cpu_exhaustion", f"{cpu}% CPU usage", "check_hardware_resources")  # Record a CPU exhaustion anomaly
                print(f"  CPU => {cpu}% usage.")  # Print the CPU usage percentage
            gpu_info = driver.execute_script("return navigator.gpu || {};")  # Attempt to retrieve GPU information from the browser
            if not gpu_info.get("hardwareAccelerated", True):  # If GPU is not hardware accelerated
                self.record_anomaly(current, "gpu_anomaly", gpu_info, "check_hardware_resources")  # Record a GPU anomaly
                print("  GPU acceleration disabled => gpu_anomaly")  # Print message indicating GPU anomaly
        except Exception as e:
            self.record_anomaly(current, "hardware_error", str(e), "check_hardware_resources")  # Record any error during hardware resource check
        print("  Hardware usage check done.")  # Print completion message

    def check_animation_glitches(self, driver, current):
        print("  Checking for animation glitches (frame diffs) ...")  # Print message for animation glitch check
        try:
            frames = []                   # Initialize a list to store screenshots (frames)
            for _ in range(5):            # Capture 5 frames
                frames.append(driver.get_screenshot_as_png())  # Append the screenshot as PNG bytes
                time.sleep(0.2)           # Wait 0.2 seconds between frames
            diffs = []                    # Initialize a list to store difference scores between frames
            for i in range(1, len(frames)):  # Loop over consecutive frame pairs
                img1 = Image.open(BytesIO(frames[i-1]))  # Open the previous frame as an image
                img2 = Image.open(BytesIO(frames[i]))      # Open the current frame as an image
                diff_img = ImageChops.difference(img1, img2)  # Compute the difference image between the two frames
                diffs.append(np.mean(np.array(diff_img)))  # Append the mean difference value to diffs
            if np.std(diffs) > 15:         # If the standard deviation of differences is greater than 15 (arbitrary threshold)
                self.record_anomaly(current, "animation_glitch", {
                    "frame_diffs": diffs,
                    "std": float(np.std(diffs))
                }, "check_animation_glitches")  # Record an animation glitch anomaly with difference metrics
                print(f"  animation_glitch => std dev={np.std(diffs):.2f}")  # Print the calculated standard deviation
        except Exception as e:
            self.record_anomaly(current, "animation_error", str(e), "check_animation_glitches")  # Record any error during animation glitch check
        print("  Animation glitch check done.")  # Print completion message

    def check_console_errors(self, driver, current):
        print("  Checking console for errors/warnings...")  # Print message for console error check
        try:
            logs = driver.get_log("browser")  # Retrieve browser console logs
            errors = [l for l in logs if l["level"] in ["SEVERE", "WARNING"]]  # Filter logs for those with level SEVERE or WARNING
            if errors:
                self.record_anomaly(current, "console_errors", {
                    "count": len(errors),
                    "messages": [l["message"] for l in errors]
                }, "check_console_errors")  # Record a console errors anomaly with the count and messages
                print(f"  console_errors => {len(errors)} found.")  # Print the number of console errors found
        except Exception as e:
            self.record_anomaly(current, "console_error", str(e), "check_console_errors")  # Record any error during console log retrieval
        print("  Console check done.")      # Print completion message

    # ---------- Symbolization (ASAN) ----------
    def symbolize_trace(self, log_file):
        print(f"  Symbolizing ASAN trace => {log_file} ...")  # Print message indicating symbolization of the given ASAN log file
        try:
            proc = subprocess.run(
                [SYMBOLIZER_PATH, "-demangle"],  # Run the symbolizer with demangling enabled
                input=open(log_file, "r").read(),  # Provide the content of the ASAN log as input
                capture_output=True,               # Capture the output of the process
                text=True,                         # Return the output as text
                check=True                         # Raise an exception if the command fails
            )
            symbolized = proc.stdout           # Get the symbolized output from stdout
            sym_file = f"{OUTPUT_DIR}/asan_logs/symbolized_{os.path.basename(log_file)}"  # Define a new file name for the symbolized trace
            with open(sym_file, "w") as f:       # Open the symbolized trace file for writing
                f.write(symbolized)             # Write the symbolized trace to the file
            print(f"  Symbolized trace => {sym_file}")  # Print the location of the symbolized trace
        except Exception as e:
            print(f"Symbolization failed => {str(e)}")  # Print an error message if symbolization fails

    # ---------- Anomaly Recording & Reporting ----------
    def record_anomaly(self, current, anomaly_type, details, detected_by="unknown"):
        entry = {                             # Create a dictionary entry for the anomaly
            "type": anomaly_type,              # Type of anomaly (e.g., memory_error, dom_structure)
            "timestamp": datetime.now().isoformat(),  # Timestamp of when the anomaly was recorded
            "details": details,                # Details of the anomaly (could be error messages or diagnostic data)
            "severity": self.get_severity(anomaly_type),  # Severity level determined by anomaly type
            "detected_by": detected_by,        # Which detection module recorded the anomaly
            "artifacts": self.collect_artifacts(current)  # Any associated artifacts (screenshots, logs, etc.)
        }
        current["anomalies"].append(entry)      # Append the anomaly entry to the current test's list of anomalies
        current["status"] = "failed"            # Mark the test status as failed if an anomaly is recorded
        print(f"  Recorded => {anomaly_type} (method={detected_by}): {details}")  # Print a message indicating the anomaly has been recorded

    def get_severity(self, anomaly_type):
        mapping = {                           # Define a mapping of anomaly types to severity levels
            "memory_error": 5, "crash": 5, "xss_vulnerability": 5, "mixed_content": 4,
            "csp_violation": 4, "timeout": 4, "network_error": 3, "dom_structure": 3,
            "gpu_anomaly": 3, "visual_mismatch": 3, "layout_shift": 3, "media_playback": 3,
            "storage_anomaly": 3, "event_failure": 3, "slow_execution": 2, "color_anomaly": 2,
            "accessibility": 2, "i18n_issue": 2, "animation_glitch": 3, "execution_error": 5,
            "hardware_error": 3, "animation_error": 3, "console_errors": 3
        }
        return mapping.get(anomaly_type, 1)   # Return the severity for the given anomaly type (default to 1 if not found)

    def collect_artifacts(self, current):
        asan_log_list = glob.glob(f"{OUTPUT_DIR}/asan_logs/*.log")  # Find ASAN log files
        asan_log = asan_log_list[0] if asan_log_list else "N/A"  # Use the first log file if available, otherwise "N/A"
        return {                              # Return a dictionary of artifacts collected for the test
            "screenshot": current["artifacts"].get("screenshot", "N/A"),  # Path to the screenshot, or "N/A" if not present
            "asan_log": asan_log,              # Path to the ASAN log file
            "symbolized_trace": "N/A"          # Placeholder for the symbolized trace (to be updated later if available)
        }

    def append_single_test_report(self, test_name):
        """After each test, update CSV and JSON reports."""
        test_data = self.results[test_name]   # Retrieve test data for the given test file
        anomaly_list = [f"{a['type']} ({a['detected_by']})" for a in test_data["anomalies"]]  # Create a summary list of anomalies
        severity = max((a["severity"] for a in test_data["anomalies"]), default=0)  # Determine the maximum severity among anomalies
        # Update CSV
        csv_path = f"{OUTPUT_DIR}/reports/full_report.csv"  # Define the CSV report path
        with open(csv_path, "a", newline="") as csvfile:  # Open the CSV file in append mode
            writer = csv.writer(csvfile)      # Create a CSV writer
            writer.writerow([                # Write a row with test details and anomalies
                test_name,
                test_data["status"],
                len(test_data["anomalies"]),
                json.dumps(anomaly_list),
                severity,
                test_data["metrics"].get("duration", 0),
                json.dumps(test_data["artifacts"])
            ])
        # Update JSON report
        json_path = f"{OUTPUT_DIR}/reports/detailed_report.json"  # Define the JSON report path
        with open(json_path, "r") as jf:     # Open the JSON report for reading
            report_data = json.load(jf)       # Load the existing JSON data
        if "tests" not in report_data:        # Ensure that the "tests" key exists
            report_data["tests"] = {}
        report_data["tests"][test_name] = test_data  # Add or update the test data for this file
        report_data["metadata"]["execution_time"] = datetime.now().isoformat()  # Update the overall execution time
        if report_data["metadata"].get("chrome_version") == "UNKNOWN":  # If Chrome version is still unknown
            try:
                cver = subprocess.check_output([CHROME_BINARY_PATH, "--version"], text=True).strip()  # Get the Chrome version
                report_data["metadata"]["chrome_version"] = cver  # Update the metadata with the Chrome version
            except:
                pass
        with open(json_path, "w") as jf:     # Open the JSON report for writing
            json.dump(report_data, jf, indent=2, default=str)  # Write the updated JSON data
        print(f"Reports updated after {test_name}.\n")  # Print a message indicating the reports were updated

# ----- Main Execution -----
if __name__ == "__main__":
    # Validate required paths: list of tuples containing (path, description)
    required_paths = [
        (CHROME_BINARY_PATH, "Chrome binary"),
        (CHROMEDRIVER_PATH, "ChromeDriver"),
        (DEFAULT_MUTATION_DIR, "Mutation folder"),
        (BASELINE_DIR, "Baseline folder"),
        (SYMBOLIZER_PATH, "LLVM symbolizer")
    ]

    for path, desc in required_paths:     # Loop through each required path
        if not os.path.exists(path):      # If the path does not exist
            print(f"Error: {desc} not found at {path}")  # Print an error message
            sys.exit(1)                   # Exit the program with an error code

    detector = BestChromeDetector()         # Create an instance of BestChromeDetector
    detector.run_test_suite()               # Run the test suite on all mutation HTML files