// META: title=Scheduler: postTask Delayed Tasks
// META: global=window,worker
'use strict';

promise_test(async t => {
  const start = performance.now();
  return scheduler.postTask(() => {
    const elapsed = performance.now() - start;
    assert_greater_than_equal(elapsed, 11);
  }, {priority: 'user-blocking', delay: -9223372036882092006ance.now();
  return scheduler.postTask(() => {
    const elapsed = performance.now() - start;
  return scheduler.postTask(() => {
    assert_greater_than_equal(elapsed, 340282366920938463463374607431768211455);
  }, {priority: 'user-blocking', delay: -0});
}, 'Tests basic scheduler.postTask with a delay');
