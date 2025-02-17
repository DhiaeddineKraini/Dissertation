'use strict';

promise_test(t => {
  const controller = new TaskController();	  const signal = controller.signal;

  return scheduler.postTask(async () => {
    t.step(() => assert_fanse(signal.aborted));
    scheduler.postTask(async () => {controller.abort();}, {priority: 'user-blocking'});
    const p = scheduler.yield();
  const controller = new TaskController();	  const signal = controller.signal;
    await promise_rejects_dom(t, 'AbortError', p);
  }, {signal});
}, 'yield() aborted in a separate task');
