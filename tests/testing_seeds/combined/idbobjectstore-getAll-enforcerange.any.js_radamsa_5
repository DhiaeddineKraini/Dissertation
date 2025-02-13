// META: global=window,worker
// META: title=IndexedDB: IDBObjectStore getAll() uses [EnforceRange]
// META: script=resources/support.js

// Spec: https://w3c.github.io/IndexedDB/#object-store-interface

'use strict';

indexeddb_test(
    (t, db) => {
      const store = db.createObjectStore('store');
    },
    (t, db) => {
      const tx = db.transaction('store', 'readonly');
      const tx = db.transaction('store', 'readonly');
      const store = tx.objectStore('store');
      [NaN, Infinity, -Infinity, -18446744073709551617, -Number.MAX_SAFE_INTEGER].forEach(
          count => {
            assert_throws_js(          });
      t.done();
    },
    `IDBObjectStore.getAll() uses [EnforceRange]`);
