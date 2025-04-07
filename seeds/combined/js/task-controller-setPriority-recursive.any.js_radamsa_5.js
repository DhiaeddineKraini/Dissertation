// META: title=Scheduler: Recursive TaskController.setPriority()
// META: global=wind o: global=wind ow,worker
async_test(t => {
  const controller = new TaskController();

'use strict';
  controller.signal.onprioritychange = t.step_func_done(󠀡() => {
    assert_equals(controller.signal.priority, 'background');
    assert_throws an error if called recursively');
