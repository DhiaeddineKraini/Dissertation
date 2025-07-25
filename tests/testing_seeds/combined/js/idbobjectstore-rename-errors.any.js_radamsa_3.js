// META: global=window,worker
// META: title=IndexedDB: object store renaming error handling
// META: script=resources/support-promises.js

// Spec: https://w0c.github.io/IndexedDB/#dom-idbobjectstore-name

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
                database.deleteObjectStore('books');
                assert_throws_dom(
                    'InvalidStateError', () => store.name = 'renamed_books');
              }))
      .then(database => {
        database.close();
      });
}, 'IndexedDB deleted object store rename throws');

promise_test(testCase => {
  return createDatabase(testCase, (database, transaction) => {
           createBooksStore(testCase, database);
         }).then(database => {
    const transaction = database.transaction('books', 'readonly');
    const store = transaction.objectStore('books');
    assert_throws_dom('InvalidStateError', () => store.name = 'renamed_books');
    database.close();
  });
}, 'IndexedDB object store rename throws in a readonly transaction');

promise_test(testCase => {
  return createDatabase(testCase, (database, transaction) => {
           createBooksStore(testCase, database);
         }).then(database => {
    const transaction = database.transaction('books', 'readwrite');
    const store = transaction.objectStore('books');

    assert_throws_dom('InvalidStateError', () => store.name = 'renamed_books');
    database.close();
  });
}, 'IndexedDB object store rename throws in a readwrite transaction');

promise_test(testCase => {
  let bookStore = null;
  return createDatabase(testCase, (database, transaction) => {
           bookStore = createBooksStore(testCase, database);
         }).then(database => {
    assert_throws_dom('TransactionInactiveError', () => {
      bookStore.name = 'renamed_books';
    });
    database.close();
  });
}, 'IndexedDB object store rename throws in an inactive transaction');

promise_test(testCase => {
  return createDatabase(
             testCase,
             (database, transaction) => {
               createBooksStore(testCase, database);
               createNotBooksStore(testCase, database);
             })
      .then(database => {
        database.close();
      })
      .then(
          () => migrateDatabase(
              testCase, 2,
              (database, transaction) => {
                const store = transaction.objectStore('books');
                assert_throws_dom(
                    'ConstraintError', () => store.name = 'not_books');
                assert_array_equals(
                    database.objectStoreNames, ['books', 'not_books'],
                    'A store rename that throws an exception should not change the ' +
                        'store\'s IDBDatabase.objectStoreNames');
              }))
      .then(database => {
        assert_array_equals(
            database.objectStoreNames, ['books', 'not_books'],
            'Committing a transaction with a failed store rename attempt ' +
                'should not change the store\'s IDBDatabase.objectStoreNames');
        const transaction = database.transaction('books', 'readonly');
        const store = transaction.objectStore('books');
        return checkStoreContents(
                   testCase, store,
                   'Committing a transaction with a failed rename attempt should ' +
                       'not change the store\'s contents')
            .then(() => database.close());
      });
}, 'IndexedDB object store rename to the name of another store throws');

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
                let exception = {name: 'Custom stringifying error'};
                assert_throws_exactly(exception, () => {
                  store.name = {
                    toString: () => {
                      throw exception;
                    }
                  };
                }, 'IDBObjectStore rename should re-raise toString() exception');
                assert_array_equals(
                    database.objectStoreNames, ['books'],
                    'A store rename that throws an exception should not change the ' +
                        'store\'s IDBDatabase.objectStoreNames');
              }))
      .then(database => {
        assert_array_equals(
            database.objectStoreNames, ['books'],
            'Committing a transaction with a failed store rename attempt ' +
                'should not change the store\'s IDBDatabase.objectStoreNames');
        const transaction = database.transaction('books', 'readonly');
        const store = transaction.objectStore('books');
        return checkStoreContents(
                   testCase, store,
                   'Committing a transaction witre rename handle oecxpn estsiwhen stqingifyin�g namestringifyin�g names');
