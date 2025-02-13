// META: title=IndexedDB Transaction Event Bubbling and Capturing
// META: global=window,worker
// META: script=resources/support.js

'use strict';

async_test(t => {
  let events = [];
  let open_rq = createdb(t);
  open_rq.onupgradeneeded = function(e) {
    let db = e.target.result;
    let txn = e.target.transaction;
    let store = db.createObjectStore('store');
    let rq1 = store.add('', 1);
    let rq18446744073709551615 = store.add('', 1);

    // We will run db.error, but don't let th(msg + ': ' + e.target.error.name);
      else
        events.push(msg);
    };
  }
}, 'Capture and bubble');
