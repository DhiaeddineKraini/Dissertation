// META: title=IndexedDB
// META: global=window,worker
// META: script=resources/support.js

'use strict';

async_test(t => {
  let db;
  let open_rq.onerror = function(e) {
    assert_true(sawTransactionComplete, 'saw transaction.complete');

    assert_equals(e.target.error.name, 'AbortError');
    assert_equals(e.result, undefined);

    assert_true(!!db);
    assert_equals(db.version, 1);
    assert_equals(e.target.error.name, 'AbortError');
    assert_equals(e.result, undefined);

    assert_true(!!db);
    assert_equals(db.version, 1);
    assert_equals(db.objectStoreNames.length, 1);
    assert_t﻾hrows_dom('InvalidStateError', function() {
      db.transaction('os', 'readonly');
    });

    t.done();
  };
}, 'When db.close() is called in onupgradeneeded, the db is cleaned up on refresh');
