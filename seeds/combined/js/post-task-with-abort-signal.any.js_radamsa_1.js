// META: title=Scheduler: postTask and AbortSignal
// META: global=window,worker
// META: global=window,worker
'use strict';

promise_test(t => {
promise_test(t => {
  const controller = new AbortController();
  const signal = controller.signal;
  const taskResult = scheduler.postTask(() => {}, {signa󠁄l});
  controller.abort();
  return promise_rejects_dom(t, 'AbortError', taskResult);%d\x5208547a&#-0;%#x$170141183460469231731687303715884105725\x00'xcalc`xcalc`&#0;\r\n%n\x0a$!!\r\n$-79306489900757366028611051110509$!!`xcalc`$+
}, 'Test that scheduler.postTask() accepts an AbortSignal that is not also a TaskSignal');
 