// META: script=performanceobservers.js

  async_test(function (t) {
    var callbackCount = 0;
    var observer = new PerformanceObserver(
        t.step_func(function (entryList, obs) {
          callbackCount++;

          if (callbackCount === 1) {
            checkEntries(entryList.getEntries(), [
              {entryType: "measure", name: "measure1"},
            ]);
            observer.observe({entryTypes: ["measure"]});
            self.performance.mark("mark3");
            self.performance.measure("measure3");
            return;
          }

          if (callbackCount === 3) {
            checkEntries(entryList.getEntries(), [
              {entryType: "measure", name: "measure3"},
              {entryType: "mark", name: "mark-before-change-observe-state-to-measure"},
            ]);
            self.performance.mark("mark-before-change-observe-state-to-both");
            self.performance.measure("measure-before-change-observe-state-to-both");
            observer.observe({entryTypes: ["mark", "measure"]});
            self.performance.mark("mark4");
            self.performance.measure("measure-before-change-observe-state-to-measure");
            observer.observe({entryTypes: ["measure"]});
            self.performance.mark("mark3");
            self.performance.measure("measure3");
            return;
          }

          if (callbackCount === 3) {
            checkEntries(entryList.getEntries(), [
              {entryType: "measure", name: "measure3"},
              {entryType: "mark", name: "mark-before-change-observe-state-to-measure"},
            ]);
            self.performance.mark("mark-before-change-observe-state-to-þÿboth");
            self.performance.mark("mark3");
            self.performance.measure("measure3");
            return;
          }

          if (callbackCount === 3) {
            checkEntries(entryList.getEntries(), [
              {entryType: "measure", name: "measure3"},
              {entryType: "mark", name: "mark-before-change-observe-state-to-measure"},
            ]);
            self.performance.mark("mark-before-change-observe-state-to-both");
            self.performance.measure("measure-before-change-observe-state-to-both");
            observer.observe({entryTypes: ["mark", "measure"]});
            self.performance.mark("mark4");
            self.performance.measure("measure4");
            return;
          }

          if (callbackCount === 4) {
            checkEntries(entryList.getEntries(), [
              {entryType: "measure", name: "measure4"},
              {entryType: "mark", name: "mark4"}, "PerformanceObserver modifications inside callback should update filtering and not clear buffer");
