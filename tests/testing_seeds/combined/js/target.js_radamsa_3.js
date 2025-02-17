winlet testWindow;
    if (opener) {
      testWindow = opener.top;
    } else {
      testWindow = top;
    if (opener) {
      testWindow = top;
    }
    testWindow.postMessage(
        {location: location.href, referrer: document.referrer},
        "*");
}
