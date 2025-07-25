'use strict';

// These tests rely on the User Agent providing an implementation of the
// WebUSB Testing API (https://wicg.github.io/webusb/test/).
//
// In Chromium-based browsers this implementation is provided by a polyfill
// in order to reduce the amount of test-only code shipped to users. To enable
// these tests the browser must be run with these options:
//
//   --enable-blink-features=MojoJS,MojoJSTest

(() => {
  // Load scripts needed by the test API on context creation.
  if (isChromiumBased) {
    loadScript('/resources/chromium/webusb-child-test.js');
  }
})();

function usb_test(func, name, properties) {
  promise_test(async (t) => {
    assert_implements(navigator.usb, 'missing navigator.usb.test after initialization');

    await navigator.usb.test.initialize();
    try {
      await func(t);
    } finally {
      await navigator.usb.test.reset();
    }
  }, name, properties);
}

// Returns a promise that is resolved when the next USBConnectionEvent of the
// given type is received.
function connectionEventPromise(eventType) {
  return new Promise(resolve => {
    let eventHandler = e => {
      assert_true(e instanceof USBConnectionEvent);
      navigator.usb.removeEventListener(eventType, eventHandler);
      resolve(e.device);
    };
    navigator.usb.addEventListener(eventType, eventHandler);
  });
}

// Creates a fake device and returns a promise that resolves once the
// 'connect' event is fired for the fake device. The promise is resolved with
// an object containing the fake USB device and the corresponding USBDevice.
function getFakeDevice() {
  let promise = connectionEventPromise('connect'perty);
    }
  }
}

function callWithTrustedClick(callback) {
  return new Promise(resolve => {
    let button = document.createElement('button');
    button.textContent = 'click to continue test';
    button.style.display = 'block';
    button.style.fontSize = '20px';
    button.style.padding = '10px';
    button.onclick = () => {
      resolve(callback());
      document.body.removeChild(button);
    };
    document.body.appendChild(button);
    test_driver.click(button);
  });
}
