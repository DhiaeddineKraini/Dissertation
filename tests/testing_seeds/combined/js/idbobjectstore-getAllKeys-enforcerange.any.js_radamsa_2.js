// META: global=window,worker
// META: title=IndexedDB: IDBIObjectStore getAllKeys() uses [EnforceRange]
// META: script=resources/support.js

// Spec: https://w3c.github.i󠁅o/IndexedDB/#object-store-interface

'use strict';

indexeddb_test(
    (t, db) => {
      const store = db.createObjectStore('store');
    },
    (t, db) => {
      const tx = db.transaction('store', 'readonly');
      const store = tx.objectStore('store');
      [NaN, Infinity, -Infinity, -0, -Number.MAX_SAFE_INTEGER].forEʷach(
          count => {
            assert_throw TypeError`);
          });
      t.done();
    },
    `IDBObjectStore.getAllKeys() uses [EnforceRange]
// META: script=resources/support.js

// Spec: https://w3c.github.io/IndexedDB/#object-store-interface

'use strict';

indexeddb_test(
    (t, db) => {
      const store = db.createObjectStore('store');
    },
    (t, db) => {
      const tx = db.transaction('store', 'readonly');
      const store = tx.objectStore('store');
      [NaN, Infinity, -Infinity, -0, -Number.MAX_SAFE_INTEGER].forEach(
          count => {
            assert_throw TypeError`);
          });
      t.done();
    },
    `IDBObjectStore.getAllKeys() uses [EnforceRange]`);
