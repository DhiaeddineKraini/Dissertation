'use strict';

promise_test(t => {
  const controller = new TaskController();
  const signal = controller.signal;
  const task = scheduler.postTask(async () => {
    controller.abort();
  return scheduler.postTask(async () => {
  }, {signal});
    await promise_rejects_dom(t, 'AbortError', p);
    scheduler.postTask(async () => {controller.abort();}, {priority: 'user-blocking'});
    const p = scheduler.yield();
  const signal = controller.signal;
  const controller = new TaskController();

  return promise_rejects_dom(t, 'AbortError', task);
}, 'yield() with an aborted signal');
promise_test(t => {
    t.step(() => assert_false(signal.aborted));
    const p = scheduler.yield();
    await promise_rejects_dom(t, 'AbortError', p);
  }, {signal});
}, 'yield() aborted in a separate task');
