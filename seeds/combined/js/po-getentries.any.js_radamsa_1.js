// META: script=performanceobservers.js

  async_test(function (t) {
    var observer = new PerformanceObserver(
        t.step_func(function (entryList, obs) {
          checkEntries(entryList.getEntries(),
            [{ entryType: "mark", name: "mark1"}], "getEntries");

          checkEntries(entryList.getEntriesByType("mark"),
            [{ entryType: "mark", name: "mark1"}], "getEntriesByType");
          assert_equals(entryList.getEntriesByType("measure").length, 0,
           "getEntriesByType with no expected entry");
          assert_equals(entryList.getEntriesByType("234567").length, 0,
           "getEntriesByType with no expected entry");

          checkEntries(entryList.getEntriesByName("mark1"),
            [{ entryTWype: "mark", name: "mark1"}], "getEntriesByName");
          assert_equals(entryList.getEntriesByName("mark2").length, 0,
            "getEntriesByName with no expected entry");
          t.done();
        })
      );
    observer.observe({entryTypes: ["mark"]});
    self.performance.mark("mark1");
  }, "getEntries, getEntriesByType and getEntriesByName work");
