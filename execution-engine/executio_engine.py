#!/usr/bin/env python3

import os
import time
import logging
import traceback
import subprocess  # optional, if needed
from selenium import webdriver
from selenium.webdriver.chrome.service import Service as ChromeService
from selenium.webdriver.firefox.service import Service as FirefoxService
from selenium.webdriver.chrome.options import Options as ChromeOptions
from selenium.webdriver.firefox.options import Options as FirefoxOptions
from webdriver_manager.chrome import ChromeDriverManager
from webdriver_manager.firefox import GeckoDriverManager
from selenium.common.exceptions import TimeoutException

###############################################################################
# CONFIGURATION
###############################################################################

# Directory containing all fuzzed test files (HTML/JS/CSS)
CORPUS_DIR = "/home/dhia/browser-fuzzer/Dissertation/tests/testing_seeds/combined"

# Paths to your ASan-enabled browsers:
CHROME_BINARY_PATH = "/home/dhia/chrome-asan/chrome-asan/chrome"
FIREFOX_BINARY_PATH = "/home/dhia/gecko-dev/firefox-asan/firefox"

# Logging: main log + anomaly log
MAIN_LOG_FILE = "phase3_execution.log"
ANOMALIES_LOG_FILE = "phase3_anomalies.log"

# Time to wait for a page to load before we declare a timeout
PAGE_LOAD_TIMEOUT = 15

# ---------------------------------------------------------------------------
# GITHUB TOKEN (to avoid 'API rate limit exceeded' in webdriver_manager)
# ---------------------------------------------------------------------------
GH_TOKEN = "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"  # or os.getenv("GH_TOKEN")
if GH_TOKEN:
    os.environ["GH_TOKEN"] = GH_TOKEN

# ---------------------------------------------------------------------------
# ASAN LOG CONFIG
# ---------------------------------------------------------------------------
# We'll store separate logs in /home/dhia/browser-fuzzer/Dissertation/execution-engine/asan_logs
# 'log_path=...' means ASan writes logs to asan_log.* with appended PID or thread ID.
# 'symbolize=1' means we'll see function names if we have debug info.
# 'detect_leaks=1' also checks for memory leaks on process exit.
# 'abort_on_error=1' stops the process immediately after first detected error.
# 'handle_abort=1,handle_segv=1,handle_sigbus=1,etc.' ensures these signals get sanitized.
ASAN_LOG_DIR = "/home/dhia/browser-fuzzer/Dissertation/execution-engine/asan_logs"
os.makedirs(ASAN_LOG_DIR, exist_ok=True)

# Compose a detailed ASAN_OPTIONS environment variable
ASAN_OPTIONS = [
    f"log_path={ASAN_LOG_DIR}/asan_log",
    "symbolize=1",
    "detect_leaks=1",
    "abort_on_error=1",
    "handle_segv=1",
    "handle_sigbus=1",
    "handle_abort=1",
    "handle_sigill=1",
    # For completeness, you can also add 'fast_unwind_on_malloc=0' or others if you need deeper unwinding
]
os.environ["ASAN_OPTIONS"] = ":".join(ASAN_OPTIONS)

# Also ensure we have a suitable symbolizer (optional)
# E.g. os.environ["LLVM_SYMBOLIZER_PATH"] = "/usr/bin/llvm-symbolizer-14"

###############################################################################
# SET UP PYTHON LOGGING
###############################################################################
logging.basicConfig(
    filename=MAIN_LOG_FILE,
    filemode="a",
    level=logging.INFO,
    format="%(asctime)s - %(levelname)s - %(message)s"
)

logging.info("===== PHASE 3 (ASAN) EXECUTION ENGINE STARTED =====")

###############################################################################
# CREATE WEBDRIVER INSTANCES
###############################################################################
def create_webdriver(browser_name="chrome"):
    """
    Creates and returns a Selenium WebDriver instance (headless),
    pointing to ASan-enabled Chrome or Firefox if specified.
    """
    browser = browser_name.lower()

    if browser == "chrome":
        chrome_options = ChromeOptions()
        if CHROME_BINARY_PATH:
            chrome_options.binary_location = CHROME_BINARY_PATH
        chrome_options.add_argument("--headless")
        chrome_options.add_argument("--disable-gpu")
        chrome_options.add_argument("--no-sandbox")
        chrome_options.add_argument("--disable-dev-shm-usage")
        
        driver = webdriver.Chrome(
            service=ChromeService(
                ChromeDriverManager().install()
            ),
            options=chrome_options
        )
        return driver

    elif browser == "firefox":
        firefox_options = FirefoxOptions()
        if FIREFOX_BINARY_PATH:
            firefox_options.binary_location = FIREFOX_BINARY_PATH
        firefox_options.add_argument("--headless")
        
        driver = webdriver.Firefox(
            service=FirefoxService(
                GeckoDriverManager().install()
            ),
            options=firefox_options
        )
        return driver

    else:
        raise ValueError(f"Unsupported browser: {browser_name}")

###############################################################################
# RUN A SINGLE TEST
###############################################################################
def run_test(browser_name, test_file):
    """
    Loads a single test file in the specified browser (headless + ASan-enabled).
    Returns:
      - dict with browser, test_file, status ("OK", "TIMEOUT", "ERROR"), error_msg
    We also print messages to console and log anomalies in a separate file.
    """
    outcome = {
        "browser": browser_name,
        "test_file": test_file,
        "status": "OK",
        "error_msg": None
    }
    
    file_url = f"file://{os.path.abspath(test_file)}"
    driver = None

    print(f"\n[INFO] Testing '{test_file}' in {browser_name.capitalize()}...")

    try:
        driver = create_webdriver(browser_name)
        driver.set_page_load_timeout(PAGE_LOAD_TIMEOUT)

        logging.info(f"[{browser_name}] Loading: {file_url}")
        driver.get(file_url)

        time.sleep(2)  # let the page run JS briefly

        if browser_name.lower() == "chrome":
            try:
                browser_logs = driver.get_log("browser")
                for entry in browser_logs:
                    log_lvl = entry.get("level", "UNKNOWN")
                    log_msg = entry.get("message", "")
                    logging.info(f"[Chrome Console] {log_lvl}: {log_msg}")
            except Exception as log_err:
                logging.warning(f"[Chrome] Could not retrieve console logs: {log_err}")

    except TimeoutException:
        outcome["status"] = "TIMEOUT"
        outcome["error_msg"] = f"Timeout after {PAGE_LOAD_TIMEOUT}s"
        logging.warning(f"[{browser_name}] TIMEOUT for {test_file}")
        print(f" [ALERT] TIMEOUT in {browser_name} for {test_file}!")
        with open(ANOMALIES_LOG_FILE, "a") as anom_f:
            anom_f.write(
                f"TIMEOUT | Browser: {browser_name} | File: {test_file} | "
                f"Timeout after {PAGE_LOAD_TIMEOUT}s\n"
            )

    except Exception as e:
        outcome["status"] = "ERROR"
        outcome["error_msg"] = str(e)
        logging.error(f"[{browser_name}] ERROR: {e}")
        logging.error(traceback.format_exc())
        print(f" [ALERT] ERROR/CRASH in {browser_name.capitalize()} for {test_file}!")
        print(f"         {e}")
        with open(ANOMALIES_LOG_FILE, "a") as anom_f:
            anom_f.write(
                f"ERROR   | Browser: {browser_name} | File: {test_file} | "
                f"Message: {e}\n"
            )

    finally:
        if driver:
            try:
                driver.quit()
            except Exception as quit_err:
                logging.error(f"[{browser_name}] Error quitting browser: {quit_err}")
    
    return outcome

###############################################################################
# MAIN ORCHESTRATION
###############################################################################
def main():
    logging.info("===== BEGIN EXECUTION PHASE 3 (ASAN) =====")

    if not os.path.isdir(CORPUS_DIR):
        logging.error(f"Corpus directory not found: {CORPUS_DIR}")
        print(f"[ERROR] CORPUS_DIR not found: {CORPUS_DIR}")
        return

    # Collect test files
    test_files = []
    for fname in os.listdir(CORPUS_DIR):
        lf = fname.lower()
        if lf.endswith((".html", ".htm", ".js", ".css")):
            test_files.append(os.path.join(CORPUS_DIR, fname))

    print(f"[INFO] Found {len(test_files)} test file(s) in '{CORPUS_DIR}'.")
    logging.info(f"Found {len(test_files)} test files in {CORPUS_DIR}.")

    for test_file in test_files:
        # Chrome
        chrome_res = run_test("chrome", test_file)
        if chrome_res["status"] != "OK":
            print(f" [NOTE] Chrome outcome: {chrome_res['status']} -> {test_file}")

        # Firefox
        ff_res = run_test("firefox", test_file)
        if ff_res["status"] != "OK":
            print(f" [NOTE] Firefox outcome: {ff_res['status']} -> {test_file}")

    logging.info("===== PHASE 3 (ASAN) EXECUTION COMPLETE =====")
    print("\n[INFO] ASan Phase 3 finished. Check logs + asan_logs for crashes:")
    print(f"       Main log: {MAIN_LOG_FILE}")
    print(f"       Anomalies: {ANOMALIES_LOG_FILE}")
    print(f"       ASan logs in: {ASAN_LOG_DIR}/asan_log.*")


if __name__ == "__main__":
    main()

