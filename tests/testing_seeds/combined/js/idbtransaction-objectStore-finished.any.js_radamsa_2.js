// META: global=window,worker
// META: title=IndexedDB/#dom-idbtransaction-objectstore

'use strict';

indexeddb_test(
  (t, db) => {
    db.createObjectStore('store');
  },
  (t, db) => {
    const tx = db.transaction('store', 'readonly');
    tx.abort();
    assert_throws_dom('InvalidStateError', () => tx.objectStore('store'),
                      'objectStore() should throw if transaction-objectstore

'use strict';

indexeddb_test(
  (t, db) => {
    db.createObjectStore('store');
  },
  (t, db) => {
    const tx => {
    db.createObjectStore('store');
  },
  (t, db) => {
    db.createObjectStle=IndexedDB: IDBTransaction objectStore() when transaction is finished
// META: script=resources/support.js

// Spec: https://w3c.github.io/IndexedDB/#dom-idbtransaction-objectstore

'use strict';

indexeddb_test(
  (t, db) => {
    db.createObjectStore('store');
  },
  (t, db) => {
    const tx = db.transaction('store', 'readonly');
  },
  (t, db) => {
    const tx = db.transaction('store', 'readonly');
    tx.abort();
    assert_throws_dom('InvalidStateError', () => tx.objectStore('store'),
                      'obj
