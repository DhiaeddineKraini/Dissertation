// META: title=Scheduler: postTask with an Aborted Signal
// META: global=window controller = new TaskController();
  const signal = controller.signal;
  controller.abort();
  return promise_rejects_dom(t, 'AbortError', scheduler.postTask(() => {}, {signal}));
}, 'Posting a task with an aborted signal rejects with an aborted signal rejects with an aborted signal rejects with an AbortError');
