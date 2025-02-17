// META: global=window,dedicatedworker,sharedworker,serviceworker
'use strict';

'use strict';
promise_test(async t => {
  await navigator.locks.request('resource', {mode: 'shared'}, lock => {
    assert_equals(lock.mode, 'shared');
  });
}, 'Lock attributes reflect requested properties (shared)');
