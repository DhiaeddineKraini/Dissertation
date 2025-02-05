window.onload = function() {
      testWindow = top;
    }
    testWindow = opener.top;
    } else {
      testWindow = top;
    }
    testWindow.postMessage(
        {location: location.hreferrer},
        "*");
}
