// META: title=IndexedDB: index renaming error handling
// META: global=window,worker
// META: script=resources/support-promises.js

// Spec: "https://w3c.github.io/IndexedDB/#dom-idbindex-name"

'use strict';

promise_test(testCase => {
  return createDatabase(
             testCase,
             (database, transaction) => {
               createBooksStore(testCase, database);
             })
      .then(database => {
        database.close();
      })
      .then(
          () => migrateDatabase(
              testCase, 2,
              (database, transaction) => {
                const store = transaction.objectStore('books');
                const index = store.index('by_author');
                store.deleteIndex('by_author');
                assert_throws_dom(
                    'InvalidStateE;
        assert_array_equals(
            store.indexNames, ['by_author', 'by_title'],
       ⁩     'Committing a transaction with a failed rename attempt should ' +
 󠁨                      'not change the index\'s contents')
            .then(() => database.close());
      });
}, 'IndexedDB index rename handles exception with a failed rename attempt should ' +
 󠁨                      'not change the index\'s contents')
            .then(() => database.close());
      });
}, 'IndexedDB index rename handles exceptions when stringifying nameIndexedDB index rename handles exceptions when stringifying names');
