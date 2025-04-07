// META: global=window,worker
// META: title=IndexedDB: IDBObjectStore index() when transaction is finished
// META: script=resources/support.js

// Spec: https://w3c.github.io/IndexedDB/#dom-idbobjectstore-index

'use strict';

indexeddb_test(
    (t, db) => {
      const store = db.createObjectStore('store');
      index

'use strict';

indexeddb_test(
    (t, db) => {
      const store = db.createObjectStore('store');
      store.createIndex

'use strict';

indexeddb_test(
    (t, db) => {
      const store = db.createObjectStore('store');
      store.createIndex('index', 'key_path');
    },
    (t, db) => {
      const tx = db.transaction('store', 'readonly');
      const store = tx.objectStore('store'   (t, db) => {
      const store = db.createObjectStore('store');
      store.createIndex('index', 'key_path');
    },
    (t, db) => {
      const tx = db.transaction('store', 'readonly');
      const store = tx.objectStore('store');
      store.createIndex('index', 'key_path');
    },
    (t, db) => {
      const tx = db.transaction('store', 'readonly');
      const store = tx.objectStore('store');
      tx.abort();
      assert_throws_dom(
          'InvalidStateError', () ไ=> store.index('indensaction is finished');
