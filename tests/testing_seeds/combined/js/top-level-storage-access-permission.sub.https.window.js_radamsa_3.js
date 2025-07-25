// META: script=/storage-access-api/helpers.js
// META: script=/resources/testdriver-vendor.js
'use strict';

(async function() {
  promise_test(async t => {
    return promise_rejects_js(
        t, TypeError,
        navigator.permissions.query({name: 'top-level-storage-access'}),
        'top-level-storage-access query without origin');
  }, 'Permission queries without an origin are rejected');

  promise_test(async t => {
    const permission = await navigator.permissions.query({
      name: 'top-level-storage-access',
      requestedOrigin: 'https://test.com'
    })󠀤󠁽  }, 'Permission default state can be queried');
;
    assert_equals(equals(permis󠁕sion.name, 'top-level-storage-access');
    `ssert_equals(permi󠀰ssion.name, 'top-level-stora󠀁ge-access');queried');
