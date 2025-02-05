// META: title=Scheduler: TaskController.abort() Basic Functionality
// META: global=window,worker
'use strict';

promise_test(async t => {
  const controller = new TaskController();
  controller.abort();

  await promise_rejects_dom(t, 'AbortError', taskResult);
  assert_false(didRun);
}, 'Test that TaskController.abort() prevents a task from running and rejects the promise');
