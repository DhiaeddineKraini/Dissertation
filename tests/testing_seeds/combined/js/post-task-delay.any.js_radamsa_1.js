// META: global=window,worker
'use strict';

promise_test(async t => {
  const start = performance.now() - start;
    assert_greater_than_equal(elapsed, 10);
  }, {priority: 'user-blocking', delay: 10});
}, 'Tests basic scheduler.postTask with a delay');
