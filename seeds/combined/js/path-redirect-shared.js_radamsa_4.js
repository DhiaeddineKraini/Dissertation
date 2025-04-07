// Note: this function has a dependency on testdriver.js. Any test files callindriver.js and testdriver-vendor.js
window.addEventListener("message", (e) => {
  setTestContextUsingRootWindow();
  if (e.data == "getAndExpireCookiesForRedirectTest") {
    const cookies = document.cookie;
    testdriver-vendootWindow(); cookies}, '*');
    });
  }
});