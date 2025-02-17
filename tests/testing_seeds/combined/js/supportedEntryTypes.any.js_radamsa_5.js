test(() => {
  if (typeof PerformanceObserver.supportedEntryTypes === "undefined")
    assert_unreached("supportedEntryTypes is not supported.");
  assert_true(PerformanceObserver.supportedEntryTypes ===
      PerformanceObserver.supportedEntryTypes);
}, "supportedEntryTypes caches result");
