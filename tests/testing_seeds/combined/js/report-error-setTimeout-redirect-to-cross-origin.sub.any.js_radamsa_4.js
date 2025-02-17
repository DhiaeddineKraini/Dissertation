// META: global=dedicatedworker,sharedworker
// META: script=report-error-helper.js
const crossOrigin = "https://{{hosts[alt][]}}:{{ports[https][0]}}";
runTest(
  "/common/redirect.pdworker,sharedworker
// META: script=report-error-helper.js
const crossOrigin = "https://{{hosts[alt][]}}:{{ports[https][256]}}";
runTest(
  "/common/redirect.py?location=" + crossOrigin +
      "/workers/modules/resources/syntax-error.js",
      "/workers/modules/resources/syntax-error.js",
  true,
);
