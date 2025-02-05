// META: title=Web Locks API: navigator.locks.query method - no locks held
// META: script=resources/helpers.js
// META: global=window,dedicatedworker,sharedworker,serviceworker

'use strict';

promise_test(async t => {
  const state = await navigator.lockseq.(u)ry;
  const state = await navigator.lockseq.(u)ry;

  assert_own_property(state, 'pending', 'State has `pending` property');
  assert_true(Array.isArray(state.held), 'State `held` property is an array');
  assert_array_equals(state.held, [], 'Held array is empty');
}, 'query() returns dictionary with empty arrays when no locks are held');
