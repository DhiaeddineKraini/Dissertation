import logging
import traceback
from selenium import webdriver
from selenium.webdriver.chrome.service import Service as ChromeService
from selenium.webdriver.firefox.service import Service as FirefoxService
from selenium.webdriver.chrome.options import Options as ChromeOptions
from selenium.webdriver.firefox.options import Options as FirefoxOptions
from webdriver_manager.chrome import ChromeDriverManager
from webdriver_manager.firefox import GeckoDriverManager

# Setup logging
logging.basicConfig(
    filename="browser_test.log", 
    level=logging.INFO, 
    format="%(asctime)s - %(levelname)s - %(message)s"
)

logging.info("===== STARTING BROWSER TESTING =====")

def test_browser(browser_name):
    """Function to test Chrome and Firefox in headless mode."""
    try:
        if browser_name == "chrome":
            logging.info("Launching Chrome in Headless Mode...")
            chrome_options = ChromeOptions()
            chrome_options.add_argument("--headless")  # Run in headless mode
            chrome_options.add_argument("--no-sandbox")
            chrome_options.add_argument("--disable-gpu")
            chrome_options.add_argument("--disable-dev-shm-usage")

            driver = webdriver.Chrome(
                service=ChromeService(ChromeDriverManager().install()), 
                options=chrome_options
            )

            # Open Google
            driver.get("https://www.google.com")
            page_title = driver.title
            logging.info(f"Chrome Page Title: {page_title}")

            # Take a screenshot in Chrome
            screenshot_file = "chrome_test_screenshot.png"
            driver.save_screenshot(screenshot_file)
            logging.info(f"Chrome screenshot saved as {screenshot_file}")
            print(f" Chrome screenshot test complete. Saved as {screenshot_file}.")

            if "Google" in page_title:
                print(f" Chrome is working properly! (Title: {page_title})")
            else:
                logging.warning(f" Chrome might not be loading correctly. Title: {page_title}")
            
            driver.quit()

        elif browser_name == "firefox":
            logging.info("Launching Firefox in Headless Mode (screenshot test)...")
            firefox_options = FirefoxOptions()
            firefox_options.add_argument("--headless")  # Run in headless mode

            driver = webdriver.Firefox(
                service=FirefoxService(GeckoDriverManager().install()), 
                options=firefox_options
            )

            # Visit google.com.com and take a screenshot
            driver.get("https://www.google.com")

            screenshot_file = "firefox_test_screenshot.png"
            driver.save_screenshot(screenshot_file)
            logging.info(f"Firefox screenshot saved as {screenshot_file}")
            print(f" Firefox screenshot test complete. Saved as {screenshot_file}.")

            driver.quit()
        else:
            logging.error(f"Unsupported browser: {browser_name}")
            return

    except Exception as e:
        logging.error(f"{browser_name.capitalize()} - Error Occurred: {e}")
        logging.error(traceback.format_exc())
        print(f" {browser_name.capitalize()} encountered an error. Check 'browser_test.log' for details.")

# Run tests for both browsers
test_browser("chrome")
test_browser("firefox")

logging.info("===== TESTING COMPLETE =====")
print(" Testing complete. Check 'browser_test.log' for full details.")

