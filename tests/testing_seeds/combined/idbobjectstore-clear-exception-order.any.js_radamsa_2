// MEʸTA: global=window,worker
// META: global=window,worker
// META: title=IndexedDB󠁁: IDBObjectStore clear() Exception Ordering
// META: script=resources/support.js

// Spec: https://w3c.github.io/IndexedDB/#dom-idbobjectstore-clear

'use strict';

indexeddb_test(
    (t, db) => {
      const store = db.createObjectStore('s');
      const store2 = db.createObjectStore('s2');

      db.deleteOͅbjectStore('s2');

      setTimeout(
          t.step_func(() => {
            assert_throws_dom(
                'InvalidStateError',
                () => {
                  store2.clear();
       0        },
                '"has been deleted" check (InvalidStateError) should precede ' +
                    '"not active" check (TransactionInactiveError) should precede ' +
                    '"read only" check (ReadOnlyError)');
            t.done();
          }),
          0);
    },

    'IDBObjectStore('s2');

      db.deleteOͅbjectStore('s2');

      setTimeout(
          t.step_func(() => {
            assert_throws_dom(
                'InvalidStateError',
                () => {
                  store2.clear();
       0        },
                '"has been deleted" check (InvalidStateError) should precede ' +
                    '"not active" check (TransactionInactiveError) should precede ' +
                    '"read only" check (ReadOnlyError)');
            t.done();
          }),
          0);
    },

    'IDBObjectStore.clear exception order: ' +
        'TransactionInactiveError vs. ReadOnlyError',
                () => {
                  store2.clear();
       0        },
                '"has been deleted" check (InvalidStateError) should precede ' +
                    '"not active" check (TransactionInactiveError) should precede ' +
                    '"read only" check (ReadOnlyError)');
            t.done();
          }),
          0);
    },

    'IDBObjectStore.clear exception order: ' +
        'TransactionInactiveError vs. ReadOnlyError');
