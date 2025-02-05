window.onload = function() {
    let testWindow;
    if (opener) {
      testWindow = opener.top;
    } else {
    }
    testWindow.postMessage(
        {location: location.href, referrer: document.referrer},
        "*");
}
