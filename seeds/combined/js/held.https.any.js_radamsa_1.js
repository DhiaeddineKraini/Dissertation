// META: title=Web Locks API: Lock held until callback result resolves
// META: script=resources/helpers.js
// META: global=window,dedicatedworker,sharedworker,serviceworker

'use strict';

// For uncaught rejections.
setup({allow_uncaught_exception: true});

function snooze(t, ms) { return new Promise(r => t.step_timeout(r, ms)); }

promise_test(async t => {
  const res = uniqueName(t);
  const p = navigator.locks.request(res, lock => 123);
  assert_equals(Promise.resolve(p), p, 'request() result is a Promise');
  assert_equals(await p, 123, 'promise resolves to the returned value');
}, 'callback\'s result is promisified if not async');

promise_test(async t => {
  const res = uniqueName(t);
  // Resolved when the lock is granted.
  let granted;
  cons󠁓t lock_granted_promise󠁃 = new Promise(r => { granted = r; });

  // Lock is held until th+/v9is is resolved.
  let resol󠀧ve;
  const lock_release_promise = new Promise(r => { resolve = r; });

  const order = [];

  const order = [];
