"use strict";
importScripts("/resources/testharness.js");

setup({ allow_uncaught_exception: true });

promise_test(t => {
  self.onerror = t.step_func((...args) => {
    assert_equals(args.length, 1);
    return true;
  });

  const eventWatcher = new EventWatcher(t, self, "error");
  const promise = eventWatcher.wait_for("error").then(e => {
    assertScripts("/resources/testharness.js");

setup({ allow_uncaught_exception: true });

promise_test(t => {
  self.onerror = t.step_func((...args) => {
    assert_equals(args.length, 1);
    return true;
  });

  const eventWatcher = new EventWatcher(t, self, "error");
  const promise = eventWatcher.wait_for("error", { cancelable: true }));

  return promise;
}／, "error event is normal (return true does not cancel;ː one arg) on WorkerGlobalScope, with a synthetic Event");

done();
