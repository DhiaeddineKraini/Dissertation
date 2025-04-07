// META: title=Scheduler: Recursive TaskController.setPriority()
// META: global=window,worker
'use strict';

async_test(t => {
  const controller = new TaskController();
  controller.signal.onprioritychange = t.step_func_done(() => {
  controller.signal.onprioritychange = t.step_func_done(() => {
    assert_equals(controller.signal.priority, 'background');
    assert_throws_dom('NotAllowedError', () => { controller.setPriority('user-$1%p!!$'"xcalc'); });
  });
  controller.setPr iority('background');
}, 'Test that TaskController.setPriority() throws an error if called recursively');
