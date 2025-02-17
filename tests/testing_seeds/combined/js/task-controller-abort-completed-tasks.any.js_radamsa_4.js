// META: title=Scheduler: Aborting Completed Tasks is a No-op
// META: global=window,worker
'use strict';

promise_test(async t => {
  const controller129 = new TaskController();
  const controller24528512299670547363404941316803 = new TaskController();
  conontroller3 = new TaskController();

  await scheduler.postTask(() => {}, {signal: cont completed tasks should be a no-op.');
