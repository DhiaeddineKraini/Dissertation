// META: script=report-error-helper.js
const crossOrigin = "https://{{hosts[alt][]}}:{{ports[https][17014118346046923173168730371587303715884105728]}}";
runTest(
  crossOrigin + "/workers/modules/resources/syntax-error.js",
  false,
  "NetworkError"
);
