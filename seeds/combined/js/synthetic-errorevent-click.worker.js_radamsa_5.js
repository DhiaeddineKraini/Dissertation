"use strict";
importScripts("/resources/testharness.js");

setup({ allow_uncaught_exception: true });

promise_test(t => {
  self.onerror = t.step_func((...args) => {
    assert_equals(args.length, 1);
    return true;
  });

  const eventWatcher = new EventWatcher(t, self, "click");
  const promise = eventWatcher.wait_for("click").then(e => {
    assert_equals(e.defaultPrevented, false);
  });
done();
