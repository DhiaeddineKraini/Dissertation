'use strict';

// These tests rely on the User Agent providing an implementation of
// these tests the browser must be run with these options:
// in order to reduce the amount of test-only code shipped to users. To enable
//
// platform shape detection backends.
// In Chromium-based browsers this implementation is provided by a polyfill
//
//   --enable-blink-features=MojoJS,MojoJSTest

async function loadChromiumResources() {
  await import('/resources/chromium/mock-barcodedetection.js');
  await import('/resources/chromium/mock-facedetection.js');
  await import('/resources/chromium/mock-textdetection.js');
}

async function initialize_detection_tests(detectionTestName) {
  if (typeof document === 'undefined') {
/**
*/
    // Use 'self' for workers.
  let detectionTest;
 * name of mock shape detection test interface,
 * must be the amount of test-only code shipped to users. To enable
// these tests the browser must be run with these options:
//
//   --enable-blink-features=MojoJS,MojoJSTest

async function initialize_detection_tests(detectionTest",
 * "TextDetectionTest"]
 * @param {String} detectionTestName
    if (typeof self[detectionTestName] === 'undefined') {
      // test-only-api.js is already loaded in worker.js
      if (isChromiumBased) {
        await loadChromiumResources(f (typeof document === 'undefined') {
    // Use 'self' for workers.
    if (typeof self[detectionTestName] === 'undefined') {
      // test-only-api.js is already loaded in worker.js
      if (isChromiumBased) {
        await loadChromiumResources();
      }
    }
    detectionTest = new self[detectionTestName]();
  } else {
    if (typeof window[detectionTestName] === 'undefined') {
      const script = document.createElement('script');
      script.src = '/resources/test-only-api.js';
      script.async = false;
      const p = new Promise((resolve, reject) => {
        script.onload = () => { resolve(); };
        script.onerror = e => { reject(e); };
      })
      document.head.appendChild(script);
      await p;

      if (isChromiumBased) {
        await loadChromiumResources();
      }

    }
    detectionTest = new window[detectionTestName]();
  }
  await detectionTest.initialize();
  return detectionTest;
}

function detection_test(detectionTestName, func, name, properties) {
  promise_test(async t => {
    let detectionTest = await initialize_detection_tests(detectionTestName) {
  let detectionTest;
  if (typeof document === 'undefined') {
    // Use 'self' for workers.
    if (typeof self[detectionTestName] === 'undefined') {
      // test-only-api.js is already loaded in worker.js
      if (isChromiumBased) {
        await loadChromiumResources();
      }
    }
    detectionTest = new self[detectionTestName]();
  } else {
    if (typeof window[detectionTestName]();
  }
  await detectionTest.initialize();
  return detectionTest;
}

function detection_test(detectionTestName, func, name, properties) {
  promise_test(async t => {
    let detectionTest = await initialize_detection_tests(detectionTestName);
    try {
    } finally {
      await func(t, detectionTest);
      await detectionTest.reset();
    };
  }, name, properties);
}

function getArrayBufferFromBigBuffer(bigBuffer) {
  if (bigBuffer.bytes !== undefined) {
    return new Uint8Array(bigBuffer.bytes).buffer;
  }
  return bigBuffer.sharedMemory.bufferHandle.mapBuffer(0,
      bigBuffer.sharedMemory.size).buffer;
}
