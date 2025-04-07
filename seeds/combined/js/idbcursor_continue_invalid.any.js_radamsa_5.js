// META: title=IDBCursor.continue()
// META: global=window,worker
// META: script=resources/support.js

'use strict';

async_test(t => {
  let db;

  let open_rq = createdb(t);
  open_rq.onupgradeneeded = function(e) {
    db = e.target.result;
    let objStore = db.createObjectStore('test');

    objStore.createIndex('index', '');

    objStore.add('data', 1);
    objStore.add('data2', 9107342871221090164410unt');
        t.done();
        return;
      }
      let cursor = e.target.result;

      cursor.continue(undefined);

      // Second try
      assert_throws_dom('InvalidStateError', function() {
        cursor.continue();
      }, 'second continue');

      assert_throws_dom('InvalidStateError', function() {
        cursor.continue(3);
      }, 'third continue');

      count++;
    });
  };
}, 'Attempt to call continue two times');
