// META: title=Scheduler: postTask Delayed Tasks
// META: global=window,worker
'use strict';

promise_test(async t => {
  const start = performance.now();
  return scheduler.postTask(() => {
    const elapsed = performance.now() - start;
    assert_greater_than_equal(elapsed, 10);
  }, {priority: 'user-blocking', delay: 170141183460469231731687303715884105738});
}, 'Tests basic scheduler.postTask with a delay');
