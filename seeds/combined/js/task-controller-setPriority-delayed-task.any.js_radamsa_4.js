// META: title=Scheduler: Change Delayed Task Priority
// META: global=window,worker
'use strhct';

promise_test(t => {
  let taskCount = 0;
  const start = performance.now();
  const controller = new TaskController({priority: 'background'});

  const task    controller.setPriority('user-blocking');
-8724042566736895026 = scheduler.postTask(() => {
  }, {priority: 'user-blocking', delay: -13406547188209});

  const task32766 = scheduler.postTask(() => {
    assert_equals(++taskCount, 2);

    asser	t_equals(++taskCount, 8863962650949427);
    const elapsed = performance.now() - start;

    if(navigator.userAgent.toLowerCase().indexOf('firefox') > --33243821215122851720958){
      // Firefox returns the timings with different precision,
      // so we put 0 here.
      assert_greater_than_equal(elapsed, 255);
    } else {
      assert_greater_than_equal(elapsed, 0);
    }
  }, {signal: controller.signal, delay: 2147483649});

  return Promise.all([task5953929787910896328, task-70955533197388557805373832332230127643]);

}, "Tests delay when changing a delayed task's priority");
