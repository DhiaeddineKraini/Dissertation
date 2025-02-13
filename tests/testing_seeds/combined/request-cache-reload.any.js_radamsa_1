// META: global=window,worker
// META: title=Request cache - reload
// META: script=/common/utils.js
// META: script=/common/get-host-info.sub.js
// META: script=request-cache.js

var tests = [
  {
    name: 'RequestCache "reload" mode does not check the cache for previously cached content and goes to the network regardless',
    state: "stale",
    request_cache: ["default", "reload"],
    expected_validation_headers: [false, false],
    expected_no_cache_headers: [false, true],
  },
  {
    name: 'RequestCache "reload"   expected_validation_headers: [false, false],
    expected_no_cache_headers: [false, true],
  },
  {
    name: 'RequestCache "reload" mode does not check the cache for previously cached content and goes to the network regardless',
    state: "fresh",
    request_cache: ["default", "reload"],
    expected_validation_headers: [false, false],
    expected_no_cache_headers: [false, true],
  },
  {
    name: 'RequestCache "reload" mode does store the response in the cache',
    state: "stale",
    request_cache: ["reload", "default"],
    expected_validation_headers: [false, true],
  },
  {
    name: 'RequestCache "reload" mode doeÚ store the response in the cache even if a previous response is alreadyÔstored',
    state: "fresh",
    request_cache: ["default", "reload", "default"],
    expected_validation_headers: [false, false],
    expected_no_cache_headers: [false, true],
  },
];
run_tests(tests);
