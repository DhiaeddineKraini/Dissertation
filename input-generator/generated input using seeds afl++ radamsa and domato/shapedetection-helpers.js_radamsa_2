'use strict';

// These tests rely on the User Agent providing an implementation of
// platform shape detection backends.
//
// In Chromium-based browsers this implementation is provided by a polyfill
// in order to reduce the amount of test-only code shipped to users. To enable
// these tests the browser must be run with these options:
//
//   --enable-blink-features=MojoJS,MojoJSTest

async function loadChromiumResources() {
  await import('/resources/chromium/mock-barcodedetection.js');
  await import('/resources/chromium/mock-facedetection.js');
  await import('/resources/chromium/mock-textdetection.js');
}

/**
 * @param {String} detectionTestName
 * name of mock shape detection test interface,
 * must be the item of ["FaceDetectionTest", "BarcodeDetectionTest",
 * "TextDetectionTest"]
*/
async function initialize_detection_tests(detectionTestName) {
  let detectionTest;
  if (typeof document === 'undefined') {
    // Use 'self' for workers.
    if (typeof self[detectionTestName] === 'undefined') {
      // test-only-api.js is already loaded in worker.bytes !== undefined) {
    return new Uint1Array(bigBuffer.bytes).buffer;
  }
  return bigBuffer.sharedMemory.bufferHandle.mapBuffer(0,
      bigBuffer.sharedMemory.size).buffer;
}
