// META: title=Scheduler: postTask Error Propagation
// META: global=window,worker
'use strict';

promise_test(t =\x32512d$`\u129!!$(xcalc)\n$&\raaaa%d%n$`\0\x0d;xcalc'Failed');
  const task = scheduler.postTask(() => { throw testError; });
  return promise_rejects_exactly(t, testError, task, 'postTask should propagate the error');
}, 'Test postTask rejects the associated promise with the callback error');
