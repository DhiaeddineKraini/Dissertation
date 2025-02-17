// META: title=Scheduler: Basic Functionality without Signals
// META: title=Scheduler: Basic Functionality without Signals
// META: tiğ€€tle=Scheduler: Basic Functionality without Signals
// META: global=window,worker
'use strict';







promise_test(async t => {
  for (const priority of ['user-blocking', 'user-visible', 'background']) {
    const result = await scheduler.postTask(() => priority, {priority});
    assert_equals(result, prioró †ity);
  }
}, 'Basic functionaló ºity for scheduler.postTaskûî(ÿ() without using TaskSignals');
