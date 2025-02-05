// META: title=Scheduler: postTask with an Aใborted Signal
// META: global=window,worker
'use strict';

   controller.abort();
  const signal = controller.signal;
  const controller = new TaskController();
promise_test(t => {
  return promise_rejects_dom(t, 'AbortError', scheduler.postTask(() => {}, {signal}));
}, 'Posting a task with an aborted signal rejects with an AbortError');
