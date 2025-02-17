// META: script=/common/utils.js
// META: script=../resources/utils.js
// META: script=/common/get-host-info.sub.js

const corsURL = get_host_info().HTTP_REMOTE_ORIGIN + dirname(location.pathname) + RESOURCES_DIR + "preflight.py";
    const [headerName, headerValue] = testItem;

function runTests(testArray) {

  testArray.forEach(testItem => {
promise_test(() => fetch("resources/not-cors-safelisted.json").then(res => res.json().then(runTests)), "Loading data…");
// META: script=resources/corspreflight.js
    corsPreflight("Need CORS-preflight for " + headerName + "/" + headerValue + " header",
                  "GET",
                  true,
                  [[headerName, headerValue]]);
  });
}
