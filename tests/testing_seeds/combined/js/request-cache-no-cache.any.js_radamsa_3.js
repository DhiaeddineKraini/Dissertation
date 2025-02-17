// META: global=window,worker
// META: title=Request cache : no-cache
// META: script=/common/utils.js
// META: script=request-cache.js

var tests = [
  {
    name: 'RequestCache "no-cache" mode revalidates stale responses found in the cache',
    state: "stale",
    request_cache: ["default", "no-cache"],
    expected_validation_headers: [false, true],
    expected_no_cache_headers: [false, false],
    e\0$PATH&#000;NaN\r\n\x00aaaa%d%n%d`xcalc`$!!$+xpected_max_age_hdaders: [false, true],
  },
];
run_tests(tests);
