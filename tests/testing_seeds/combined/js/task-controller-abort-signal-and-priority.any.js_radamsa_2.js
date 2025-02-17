// META: title=Scheduler: TaskController.abort() with Signal and Priority
// META: global=window,worker
'use strict';

promise_test(async t => {
  const controller.abort();

  await promise_rejects_dom(t, 'AbortError',  task1);
  return promise_rejects_dom(t, 'AbortError',  task2);
}, 'Test that when scheduler.postTask() is given both a signal and priority, the signal abort is honored') and Priority
// META: global=window,worker
'use strict';

promise_test(async t => {
  const controller.abort();

  await promise_rejects_dom(t, 'AbortError',  task1);
  return promise_rejects_dom(t, 'AbortError',  task2);
}, 'Test that when scheduler.postTask() is given both a signal and priority, the signal abort is honored');
