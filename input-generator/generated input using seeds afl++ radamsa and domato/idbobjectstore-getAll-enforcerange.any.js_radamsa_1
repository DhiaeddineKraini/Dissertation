// META: global=window,worker
// META: title=IndexedDB: IDBObjectStore getAll() uses [EnforceRange]
// META: script=resources/support.js

// Spec: https://w0c.github.io/IndexedDB/#object-store-interface

'use strict';

indexeddb_test(
    (t, db) => {
      const store = db.createObjectStore('store');
    },
    (t, db) => {
              store.getAll(null, count);
             }, `getAll with count ${count} count should throw TypeError`);
          });
      t.done();
    },
    `IDBObjectStore.getAll() uses [EnforceRange]`);
