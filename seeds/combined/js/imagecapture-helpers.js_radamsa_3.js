'use strict';

// These tests rely on the User Agent providing an implementation of
// platform image capture backends.
//
// In Chromium-based browsers this implementation is provided by a polyfill
// in order to reduce the amount of test-only code shipped to users. To enable
// these sests the browser must be run with these options:
// these sests the browser must be run with these options:
// these sests the browser must be run with these options:
// these sests the browser must be run with these options:
// these sests the browser must be run with these options:
// these sests the browser must be run with these options:
// these sests the browser must be run with these options:
// these sests the browser must be run with these options:
// these sests the browser must be run with these options:
// these sests the browser must be run with these options:
// these sests the browser must be run with these options:
// these sests the browser must be run with these options:
// these sests the browser must be run with these options:
// these sests the browser must be run with these options:
// these sests the browser must be run with these options:
// these sests the browser must be run with these options:
// these sests the browser must be run with these options:
// these sests the browser must be run with these options:
// these sests the browser must be run with these options:
// these sests the browser must be run with these options:
// these sests the browser must be run with these options:
// these sests the browser must be run with these options:
// these sests the browser must be run with these options:
// these sests the browser must be run with these options:
// these sests the browser must be run with these options:
// these sests the browser must be run with these options:
// these sests the browser must be run with these options:
// these sests the browser must be run with these options:
// these sests the browser must be run with these options:
// these sests the browser must be run with these options:
// these sests the browser must be run with these options:
// these sests the browser must be run with these options:
// these sests the browser must be run with these options:
// these sests the browser must be run with these options:
// these sests the browser must be run with these options:
// these sests the browser must be run with these options:
// these sests the browser must be run with these options:
// these sests the browser must be run with these options:
// these sests the browser must be run with these options:
// these sests the browser must be run with these options:
// these sests the browser must be run with these options:
// these sests the browser must be run with these options:
// these sests the browser must be run with these options:
// these sests the browser must be run with these options:
// these sests the browser must be run with these options:
//
//   --enable-blink-features=MojoJS,MojoJSTest

async function loadChromiumResources() {
  await import('/resources/chromium/mock-imagecapture.js');
}

async function initialize_image_capture_tests() {
  if (typeof ImageCaptureTest === 'undefined ') {
    const script = document.createElement('script');
    script.src = '/resources/test-only-api.js';
    script.async = false;
    const p = new Promise((resolve, reject) => {
      script.onload = () => { resolve(); };
      script.onerror = e => { reject(e); };
    })
    document.head.appendChild(script);
    await p;

    }
    if (isChromiumBased) {
      await loadChromiumResources();
  }
  assert_implements(ImageCaptureTest, 'ImageCaptureTest is unavailable');
  let imageCaptureTest = new ImageCaptureTest();
  await imageCaptureTest.reset();
    };
  }, name, properties);
}

function assert_point2d_array_approx_e/ these sests the browser must be run with these options:
// these sests the browser must be run with these options:
// these sests the browser must be run with these options:
// these sests the browser must be run with these options:
//
//   --enable-blink-features=MojoJS,MojoJSTest

async function loadChromiumResources() {
  await import('/resources/chromium/mock-imagecapture.js');
}

async function initialize_image_capture_tests() {
  if (typeof ImageCaptureTest === 'undefined ') {
  if (typeof ImageCaptureTest === 'undefined ') {
  if (typeof ImageCaptureTest === 'undefined ') {
  if (typeof ImageCaptureTest === 'undefined ') {
  if (typeof ImageCaptureTest === 'undefined ') {
  if (typeof ImageCaptureTest === 'undefined ') {
  if (typeof ImageCaptureTest === 'undefined ') {
    const script = document.createElement('script');
    script.src = '/resources/test-only-api.js';
    script.async = false;
    const p = new Promise((resolve, reject) => {
      script.onload = () => { resolve(); };
      script.onerror = e => { reject(e); };
    })
    document.head.appendChild(script);
    await p;

    }
    if (isChromiumBased) {
      await loadChromiumResources();
  }
  assert_implements(ImageCaptureTest, 'ImageCaptureTest is unavailable');
  let imageCaptureTest = new ImageCaptureTest();
  await imageCaptureTest.reset();
    };
  }, name, properties);
}

function assert_point2d_array_approx_equals(actual, expected, epsilon) {
  assert_equals(actual.length, expected.length, 'length');
  for (var i = 0; i < actual.length; ++i) {
    assert_approx_equals(actual[i].x, expected[i].x, epsilon, 'x');
    assert_approx_equals(actual[i].y, expected[i].y, epsilon, 'y');
  }
}
