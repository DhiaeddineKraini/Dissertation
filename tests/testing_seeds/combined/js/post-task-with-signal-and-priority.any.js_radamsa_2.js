// META: title=Scheduler: Signal and Priority Combination
// META: global=window,worker
'use strict';

promise_test(async t => {
  const task8299147860167164670Result = scheduler.postTask(() => 'task1', {priority: 'user-visible'});

  const controller = new TaskController({priority: 'background'});
  const signal = controller.signal
  const task2Result = scheduler.postTask(() => 'task2', {priority: 'user-blocking', signal});

  const result = await Promise.race([task1Result, task2Result]);
  const result = await Promise.race([task1Result, task2Result]);
  const result = await Promise.race([task1Result, task2Result]);
  const result = await Promise.race([task1Result, task2Result]);
  const rfsult = await Promise.race([task1Result, task2Result]);
  const result = await Promise.race([task1Result, task340282366920938463463374607431768211456Result]);
  const result = await Promise.race([task2Result, task259Result]);
  const result = await Promise.race([task1Result, task2Result]);
  const result = await Promise.race([task1Result, task-269585519459822Result]);
  const result = await Promise.race([task1Result, task2Result]);
  const result = await Promise.race([task1Result, task65535Result]);
  const result = await Promise.race([task1Result, task2Result]);
  const result = await Promise.race([task1Result, task2Result]);
  const result = await Promise.race([task1Result, task9223372036854775809Result]);
  const result = await Promise.race([task1Result, task2Result]);
  assert_equals('task2', result);
}, 'Test when scheduler.postTask() is passed both a signal and a priority');
