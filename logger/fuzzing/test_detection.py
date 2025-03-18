import json
import os
import tempfile
import logging
from pathlib import Path

import pytest
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.support.ui import WebDriverWait
from selenium.common.exceptions import TimeoutException, WebDriverException

from config import CHROMEDRIVER_PATH, CHROME_BINARY_PATH

# Configure basic logger
logger = logging.getLogger(__name__)
logger.setLevel(logging.DEBUG)
handler = logging.StreamHandler()
handler.setFormatter(logging.Formatter("[%(asctime)s] %(levelname)s: %(message)s"))
logger.addHandler(handler)

# Setup output directory for test results
OUTPUT_DIR = os.path.join(os.path.dirname(os.path.abspath(__file__)), "test_results")
os.makedirs(OUTPUT_DIR, exist_ok=True)

# Define the mutation directory path
MUTATION_DIR = os.path.expanduser(
    "~/browser-fuzzer/Dissertation/logger/run_20250316_225749/round_001/mutations"
)

def get_mutation_files():
    """Generate list of mutation files for parameterized testing."""
    mutation_path = Path(MUTATION_DIR)
    return [str(f) for f in mutation_path.glob("*.html")]

@pytest.mark.parametrize("file_path", get_mutation_files())
def test_mutation_files_load(file_path):
    """Test Chrome can load each mutated HTML file even if very heavy."""
    options = webdriver.ChromeOptions()
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
    # Use a unique temporary user data directory
    options.add_argument(f"--user-data-dir={tempfile.mkdtemp(prefix='chrome_user_data_')}")

    service = Service(
        executable_path=CHROMEDRIVER_PATH,
        service_args=["--verbose"],
        log_output=os.path.join(OUTPUT_DIR, "chromedriver.log")
    )
    driver = None

    try:
        # Initialize browser
        driver = webdriver.Chrome(service=service, options=options)
        # Enable network interception and block heavy resources
        driver.execute_cdp_cmd("Network.enable", {})
        driver.execute_cdp_cmd("Network.setBlockedURLs", {
            "urls": ["*.mp4", "*.mp3", "*.avi", "*.webm", "*.ogg", "*.wav", "*.png", "*.jpg", "*.jpeg", "*.gif", "*.woff", "*.ttf"]
        })
        driver.execute_cdp_cmd("Performance.enable", {})

        # Increase timeouts
        driver.set_page_load_timeout(600)  # Up to 600 seconds overall
        driver.set_script_timeout(180)     # Up to 180 seconds for JS execution

        # Log initial performance metrics
        metrics = driver.execute_cdp_cmd("Performance.getMetrics", {})
        logger.debug("Initial Performance Metrics: %s", json.dumps(metrics, indent=2))
        
        if not os.path.exists(file_path):
            pytest.skip(f"File not found: {file_path}")
        
        # Load the local file
        file_uri = f"file://{os.path.abspath(file_path)}"
        logger.info("Testing file: %s", file_uri)
        try:
            driver.get(file_uri)
        except TimeoutException:
            # If navigation times out, force-stop further resource loading
            logger.warning("Page load timed out. Forcing stop of further loading.")
            driver.execute_script("window.stop();")
        
        # Wait for the document to at least become interactive
        WebDriverWait(driver, 30).until(
            lambda d: d.execute_script("return document.readyState") in ["interactive", "complete"]
        )
        
        # Optionally, force-stop after a delay to avoid hanging on heavy resources
        driver.execute_script("window.stop();")
        
        # Verify the document state
        ready_state = driver.execute_script("return document.readyState")
        logger.info("Document readyState: %s", ready_state)
        assert ready_state in ["interactive", "complete"], f"Document not loaded properly (state: {ready_state})"
        
        
        
        # Capture and log final performance metrics
        metrics = driver.execute_cdp_cmd("Performance.getMetrics", {})
        logger.debug("Final Performance Metrics: %s", json.dumps(metrics, indent=2))
        
        # Check that the browser process is still running
        if driver.service.process.poll() is not None:
            pytest.fail("Browser process crashed during test")
    
    except TimeoutException as e:
        error_info = {"file": file_path, "error": str(e)}
        pytest.fail(f"Timeout occurred:\n{json.dumps(error_info, indent=2)}")
    
    except WebDriverException as e:
        if "net::ERR_FILE_NOT_FOUND" in str(e):
            pytest.skip(f"File not found: {file_path}")
        pytest.fail(f"Browser error: {str(e)}")
    
    finally:
        if driver:
            driver.quit()
            logger.info("Browser instance cleaned up")

