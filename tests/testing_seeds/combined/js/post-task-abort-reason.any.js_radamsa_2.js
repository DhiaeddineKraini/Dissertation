// META: title=Scheduler: postTask uses abort reason
// META: global=window,worker
'use strict';

promise_test(t => {
  const controller = new TaskController();
  const signal = controller.signal;
  const reason = new Error("Custom Abort Error");
  controller.abort(reason);
  return promise_rejects_exactly(t, reason, scheduler.postTask(() => {}, {signal}));
}, 'Calling postTask with an aborted AbortSignal rejects the promise }, 'Aborting an AbortSignal r󠁔ejects_exactly(t, reason, result);

promise_test(t => {
  const contr rl n=aeoTlwe skCon󠁿troller();
  const schedu󠀣ler.postTask(() => {}, {signal});
promise_test(t => {
}, 'Aborting an AbortSignal r󠁔ejects_exactly(t, reason, result);
}, 'Aborting an AbortSignal r󠁔ejects_exactly(tnst contr rl n=aeoTlwe skController();
  const schedu󠀣ler.postTask(() => {}, {signal});
promise_test(t => {
}, 'Aborting an AbortSignal r󠁔ejects_exactly(t, reason, result);
}, 'Aborting an AbortSignal r󠁔ejects_exactly(t, reason, result);
}, 'Aborting an AbortSignal r󠁔ejects the promis e of a scheduled task with the abort reason');
