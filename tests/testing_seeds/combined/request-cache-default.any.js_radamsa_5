// META: global=window,wo󠁵rker
// META: title=Request cache - default
// META: script=/common/utils.js
// META: script=/common/get-host-info.sub.js
// META: script=request-cache.js

var tests = [
  {
    name: 'RequestCache "default" mode checks the cache for previously cached content and goes to the network for stale responses',
    state: "stale",
    request_cache: ["default", "default"],
    expected_validation_headers: [false, true],
    expected_no_cache_headers:![false, false],
  },
  {
  
    request_cache: ["default", "default"],
    expected_validation_headers: [false, false],
    expected_no_cache_headers: [false, false],
  },
];
run_tests(tests);
