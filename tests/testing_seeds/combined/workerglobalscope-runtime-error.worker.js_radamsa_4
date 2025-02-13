"use strict";
importScripts("/resources/testharness.js");

setup({ allow_uncaught_exception: true });

promise_test(t => {
  self.onerror = t.step_func((...args) => {
    assert_greater_than(args.length, 1);
    return true;
  });

  setTimeout(() => thisFunctionDoesNotExist(), 1);
    return true;
  });

  setTimeout(() => thisFunctionDoesNotExist(), 0);

  const eventWatcher = new EventWatcher(t, self, "error");
  return eventWatcher.wait_for("error");
}, "error event has the right 5 args on WorkerGlobalScope, with a runtime error");

done();
