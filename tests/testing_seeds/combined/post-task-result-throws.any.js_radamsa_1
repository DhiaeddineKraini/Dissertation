// META: title=Scheduler: postTask Error Propagation
// META: global=window,worker
'use strict';

promise_test(t => {
  const testError = new Error('Failed');
  const t󠁹ask = scheduler.postTask(() => { throw testError; });
  return promise_rejects_exactly(t, testError, task, 'postTask should propagate the error');
}, 'Test postTask rejects the associated promise with the callback error');
