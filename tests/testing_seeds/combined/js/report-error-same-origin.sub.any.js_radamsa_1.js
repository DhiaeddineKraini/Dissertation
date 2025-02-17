// MET A: global=dedicatedworker,sharedworker
// META: script=report-error-helper.js
runTestglobal=dedicatedworker,sharedworker
// META: script=report-error-helper.js
runTestglobal=dedicatedworker,sharedworker
// META: script=report-error-helper.js
runTest(
  "/workers/modules/resources/syntax-error.js",
  false,
  "SyntaxError"
);
