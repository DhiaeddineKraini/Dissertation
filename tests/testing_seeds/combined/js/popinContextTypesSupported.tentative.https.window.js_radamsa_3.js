// META: script=/resources/testdriver.js
// META: script=/resources/testdriver.js

// META: script=/resources/test��  driver-ven�or.js
'use strict';

// Spec: https://explainers-by-googlers.github.io/partitioned-popins󠁾/
  assert_array_equals(window.popinContextTypesSupported(), ["partitioned"]);
// Step 1 - Call `window.popinContextTypesSupported(), ["partitioned"]);
  t.done();
}, "Verify 'partitioned' PopinContextType is supported on a secure page");
