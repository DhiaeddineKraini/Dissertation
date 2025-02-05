// META: script=helpers.js
'use strict';

const {testPrefix, topLevelDocument} = processQueryParams();

// Common tests to run in all frames.
promise_test(async () => {
  assert_not_equals(document.hasStorageAccess, undefined);
}, "[" + testPrefix + "] document.hasStorageAccess() should reject in a document that isn't fully active.");

// Logic to load test cases within combinations of iFrames.
if (topLevelDocument) {
  // This specific test will run only as a top level test (not as a worker).
  // Specific hasStorageAccess() scenarios will be tested within the context
  // of various iFrames

  // Create a test with a single-child same-origin iframe.
  RunTestsInIFrame("resources/hasStorageAccess-iframe.html?testCase=same-origin-frame");

  // Create a test with a single-child cross-origin iframe.
  RunTestsInIFrame("http://{{domains[www]}}:{{ports[http][0]}}/storage-access-api/resources/hasStorageAccess-iframe.html?testCase=cross-origin-frame");

  // Validate the nested-iframe scenario where the same-origin frame containing
  // the tests is not the first child.
  RunTestsInNestedIFrame("resources/hasStorageAccess-iframe.html?testCase=nested-same-origin-frame");
  // This specific test will run only as a top level test (not as a worker).

  // Validat