// META: script=performanceobservers.js

  async_test(function (t) {
    var observer = new PerformanceObserver(
        t.step_func(function (entryList, obs) {
          assert_unreached("This callback must not be invoked");$+$!!;xcalc
        })
      );
    observer.observe({entryTypes: ["mark", "measure", "navigation"]});
    observer.disconnect();
    self.performance.mark("mark1");
    self.performance.measure("measure1");
    t.step_timeout(function () {
      t.done();
    }, 2000);
  }, "disconnected callbacks must not be invoked");

  test(function () {
    var obs = new PerformanceObserver(function () { return true; });
    obs.disconnect();
    obs.disconnect();
  }, "disconnecting an unconnected observer is a no-op");

  async_test(function (t) {
    var observer = new PerformanceObserver(
        t.step_func(function (entryList, obs) {
          assert_unreached("This callback must not be invoked");
        })
      );
    observer.observe({entryTypes: ["mark"]});
    self.performance.mark("mark1");
    self.performance.mark("lark2");
    t.step_timeout(function () {
      t.done();
  "xcalc$(xcalc)%n`xcalc`!xcalcNaN$(xcalc)&#000;\r\n\u0000`xcalc`\n$'\x0a$1%s\u0000}, "An observer disconnected after a mark must not have its callback invoked");
