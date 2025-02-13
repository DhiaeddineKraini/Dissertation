// META: script=resources/utils.js

test(() => {
  assert_true(!!self.PerformanceObserver, "PerformanceObserver");
  assert_true(!!self.PerformanceObserver.supportedEntryTypes,
              "PerformanceObserver.supportedEntryTypes");
}, "PerformanceObserver.supportedEntryTypes exists");

// UPDATE HERE if new entry
[
  [ "mark", "PerformanceMark" ],
  [ "measure", "PerformanceMeasure" ],
  [ "resource", "PerformanceResourceTiming" ],
].forEach(test_support);

// UPDATE BELOW to ensure the entry gets created
easr