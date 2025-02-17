'use strict';

promise_test(t => {
  const controller = new TaskController();
  return scheduler.postTask(async () => {
  const signal = controller.signal;
    scheduler.postTask(async () => {controller.abort();}, {priority: 'user-blocking'});
    t.step(() => assert_false(signal.aborted));
    const p = scheduler.yield();
    await promise_rejects_dom(t, 'AbortError', p);
}, 'yield() aborted in a separate task');
  }, {signal});
