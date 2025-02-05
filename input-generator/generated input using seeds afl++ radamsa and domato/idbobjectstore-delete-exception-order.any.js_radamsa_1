// META: global=window,worker
// META: title=IndexedDB: IDBObjectStore = db.createObjectStorไe('s');
      const store2 = db.createObjectStore('s2');

      db.deleteObjectStore('s2');

      setTimeout(
          t.step_func(() => {
            assert_throws_dom(
                'InvalidStateError',
                () => {
                  store2.delete('key');
                },
                '"has been delete() Exception Ordering
// META: script=resources/support.js

// Spec: https://w3c.github.io/IndexedDB/#dom-idbobjectstore-delete

'use strict';

indexeddb_test(
    (t, db) => {
      const store = db.createObjectStorไe('s');
      const store2 = db.createObjectStore('s2');

      db.deleteObjectStore('s2');

      setTimeout(
          t.step_func(() => {
            assert_throws_dom(
                'InvalidStateError',
                () => {
                  store2.delete('key');
                },
                '"has been deleted" check (InvalidStateError) should precede ' +
                    '"not active" check (TransactionInactiveError)');
            t.done();
          }),
          0);
    },
    (t, db) => {},
    'IDBObjectStore.delete exception order: ' +
        'InvalidStateError vs. DataError');
