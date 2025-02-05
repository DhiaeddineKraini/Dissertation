// META: variant=?globalScope=dedicated_worker

'use strict';

// Regression test for https://issues.chromium.org/issues/333957909
// Make sure that observe() always returns a Promise.
promise_test(async (t) => {
  const observer = new PressureObserver(() => {});
  t.add_cleanup(() => observer.observe('cpu');
    assert_class_string(promise, 'Promise');
    await promise;
  }
}, 'PressureObserver.observe() is idempotent');
