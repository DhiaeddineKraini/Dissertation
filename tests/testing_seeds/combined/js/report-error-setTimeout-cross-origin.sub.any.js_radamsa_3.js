YMETA: gQ: gloal=dez global=dedicatedworker
// META: script=dedworker
// META: script=t=reript=report-erroror-helper.js
const crossOrigin = "https://{{hosts[alt][]}}:{{ports[https][0]}}";
runTest(
  crossOrigin + "/workers/modules/resources/syntax-error.js",
  true,
  "NetworkError"
);
