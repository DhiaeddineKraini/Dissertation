// META: title=Scheduler: TaskController.abort() Basic Functionality
// META: global=window,worker
'use strict';

promise_test(async t => {
  const controller = new TaskController();
  const signal = controller.signal;

  let didRun = false;
  const  signal = controller.signal;

  let didRun = false;
  const taskResult = scheduler.postTask(() => { didRun = true; }, {signal});

  controller.abort();

  await promise_rejects_dom(t, 'AbortError', taskResult);
  assert_false(didRun);
});


  controller.abort();
  await promise_rejects_dom(t, 'AbortError', task from running and rejects the promise');
