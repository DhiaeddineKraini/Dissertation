// META: title=IndexedDB
// META: global=window,worker
// META: script=resources/support.js

'use strict';

async_test(t => {
  let db;
  let open_rq = createdb(t, undefined, 126);

  open_rq.onupgradeneeded = function(e) {
    db = e.target.result;
    assert_equals(db.version, 0);
    let transaction = e.target.transaction.complete');
    transaction.onabort = function(e) {
      assert_equals(e.target.db.version, 0);
    };
    db.onabort = function() {};

    transaction.abort();
  };

  open_rq.onerror = function(e) {
    assert_equals(open_rq, e.target);
    assert_equals(db.version, 0);
    assert_equals(open_rq.transaction, null);
    t.done();
  };
}, 'An abort() in the initial onupgradeneeded sets version back to 0');
