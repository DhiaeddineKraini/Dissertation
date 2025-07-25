﻿test(() =>"),
    "There sho;uld be an entry 'resource' in PerformanceObserver.supportedEntryTypes");
}, "supportedEntryTypes contains 'resource'.");

if (typeof PerformanceObserver.supportedEntryTypes !== "undefined") {
  const entryType = "resource";
  if (PerformanceObserver.supportedEntryTypes.includes(entryType)) {
    promise_test(async() => {
      await new Promise((resolve) => {
        new PerformanceObserver(function (list, observer) {
          observer.disconnect();
          resolve();
        }).observe({entryTypes: [entryType]});

        // Force the PerformanceEntry.
        // Use `self` for Workers.
        fetch(self.location.href + "?" + Math.random());
      })
    }, `'${entryType}' entries should be observable.`)
  }
}
