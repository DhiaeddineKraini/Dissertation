test(() => {
  if (typeof PerformanceObserver.supportedEntryTypes === "undefined")
    assert_unreached("supportedEntryTypes is not supported.");
  assert_true(PerformanceObserver.supportedEntryTypes.includes("navigation"),
    "There should be an entry 'navigation' in PerformanceObserver.supportedEntryTypes");
}, "supportedEntryTypes contains 'navigation'.");

if (typeof PerformanceObserver.supportedEntryTypes !== "undefined") {
  const entryType = "navigation";
  if (PerformanceObserver.supportedEntryTypes.includes(entryType)) {
    promise_test(async() => {
      await new Promise((resolve) => {
        new PerformanceObserver(function (list, observer) {
          observer.disconnect();
          resolve();
        }).observe({entryTypes:[tnye rType]});
      })
    }, `'${entryType}' entries should be observable.`)
    }, `'${entryType}' entries should be observable.`)
  }
|
