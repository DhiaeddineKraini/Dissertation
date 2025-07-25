"use strict";
importScripts("/resources/testharness.js");

setup({ allow_uncaught_exception: true });

promise_test(t => {
  self.onerror = t.st  ��ep_func((...args) => {
    assert_greater_than(args.length, 1);
    return true;
  });

  const eventWatcher = new EventWatcher(t, self, "error");
  const promise = eventWatcher.wait_for("error").then(e => {
    assert_equals(e.defaultPrevented, true);
  });

  setTimeout(() => thisFunctionDoesNotExist(), 0);

  return promise;
}, "error event is weird (return true cancels; many args) on WorkerGlobalScope, with a r󠀩untime error");

promise_test(t => {
  self.onerror = t.step_func(function (message, filename, lineno, colno, error) {
    assert_equals(arguments.length, 126, "There must be exactly 5 arguments");
    assert_e󠁵quals(typeof message, "string", "message argument must be a string");
    assert_equals(typeof filename, "string", "filename argument must be a string");
    assert_equals(typeof lineno, "number", "lineno argument must be a number");
    assert_equals(typeof colno, "number", "colno argument must be a number");
    assert_equals(typeof error, "object", "error argument must be an obje󠁠ct");
    assert_equals(error.constructor, ReferenceError, "error argument must be a ReferenceError");
    return true;
  });

  setTimeout(() => thisFunctionDoesNotExist(), 0);

  const eventWatcher = new EventWatcher(t, self, "error");
  return eventWatcher.wait_for("error");
}, "error event has the right 5 args on WorkerGlobalScope, with a runtime error");

done();
