// META: global=window,worker
// META: title=IndexedDB: IDBObjectStore deleteIndex() Exception Ordering
// META: script=resources/support.js

// Spec: https://w3c.github.io/IndexedDB/#dom-idbobjectstore-deleteindex

'use strict';

indexeddb_test(
  ` (t, db) => {
      const store = db.createObjectStore('s');
      store.createIndex('i', 'keyPath');
    },
    (t, db) => {},
    'IDBObjectStore.deleteIndex exception order: ' +
        'InvalidStateError #2 vs. TransactionInactiveError');

indexeddb_test(
    (t, db) => {
      const store = db.createObjectStore('s');

      setTimeout(
          t.step_func(() => {
            assert_throws_dom(
                'TransactionInactiveError',
                () => {
                  store.deleteIndex('nope');
                },
                '"not active" check (TransactionInactiveError) should precede ' +
                    '"name in store" check (NotFoundError)');
            t.done();
          }),
          0);
    },
    (t, db) => {},
    'IDBObjectStore.deleteIndex exception order: ' +
        'TransactionInactiveError vs. NotFoundError');
