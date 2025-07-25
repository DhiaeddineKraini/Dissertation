// META: global=window,worker
// META: title=IndexedDB: object store renaming support
// META: script=resources/support-promises.js

// Spec: https://w3c.github.io/IndexedDB/#dom-idbobjectstore-name

'use strict';

// Renames the 'books' store to 'renamed_books'.
//
// Returns a promise that resolves to an IndexedDB database. The caller must
// close the database.
const renameBooksStore = (testCase) => {
  return migrateDatabase(testCase, 2, (database, transaction) => {
    const store = transaction.objectStore('books');
    store.name = 'renamed_books';
  });
};

promise_test(testCase => {
  let bookStore = null;
  let bookStore2 = null;
  let renamedBookStore = null;
  let renamedBookStore2 = null;
  return createDatabase(
             testCase,
             (database, transaction) => {
               bookStore = createBooksStore(testCase, database);
             })
      .then(database => {
        assert_array_equals(
            database.objectStoreNames, ['books'],
            'Test setup should have created a "books" object store');
        const transaction = database.transaction('books', 'readonly');
        bookStore2 = transaction.objectStore('books');
        return checkStoreContents(
                   testCase, bookStore2,
                   'The store should have the expected contents before any renaming')
            .then(() => database.close());
      })
      .then(
          () => migrateDatabase(
              testCase, 2,
              (database, transaction) => {
                renamedBookStore = transaction.objectStore('books');
                renamedBookStore.name = 'renamed_books';

                assert_equals(
                    renamedBookStore.name, 'renamed_books',
                    'IDBObjectStore name should change immediately after a rename');
                assert_array_equals(
                    database.objectStoreNames, ['renamed_books'],
                    'IDBDatabase.objectStoreNames should immediately reflect the ' +
                        'rename');
                assert_array_equals(
                    transaction.objectStoreNames, ['renamed_books'],
                    'IDBTransaction.objectStoreNames should immediately reflect the ' +
                        'rename');
                assert_equals(
                    transaction.objectStore('renamed_books'), renamedBookStore,
                    'IDBTransaction.objectStore should return the renamed object ' +
                        'store when queried using the new name immediately after the ' +
                        'rename');
                assert_throws_dom(
                    'NotFoundError', () => transaction.objectStore('books'),
                    'IDBTransaction.objectStore should throw when queried using the ' +
                        'renamed object store\'s old name immediately after the rename');
              }))
      .then(database => {
        assert_array_equals(
            database.objectStoreNames, ['renamed_books'],
            'IDBDatabase.objectStoreNames should still reflect the rename ' +
                'after the versionchange transaction commits');
        const transaction = database.transaction('renamed_books', 'readonly');
        renamedBookStore2 = transaction.objectStore('renamed_books');
        return checkStoreContents(
                   testCase, renamedBookStore2,
                   'Renaming an object store should not change its records')
            .then(() => database.close());
      })
      .then(() => {
        assert_equals(
            bookStore.name, 'books',
            'IDBObjectStore obtained before the rename transaction should ' +
                'not reflect the rename');
        assert_equals(
            bookStore2.name, 'books',
            'IDBObjectStore obtained before the rename transaction should ' +
                'not reflect the rename');
        assert_equals(
            renamedBookStore.name, 'renamed_books',
            'IDBObjectStore used in the rename transaction should keep ' +
                'reflecting the new name after the transaction is committed');
        assert_equals(
            renamedBookStore2.name, 'renamed_books',
            'IDBObjectStore obtained after the rename transaction should ' +
                'reflect the new name');
      });
}, 'IndexedDB object store rename in new transaction');

promise_test(testCase => {
  let renamedBookStore = null;
  let renamedBookStore2 = null;
  return createDatabase(
             testCase,
             (database, transaction) => {
               renamedBookStore = createBooksStore(testCase, database);
               renamedBookStore.name = 'renamed_books';

               assert_equals(
                   renamedBookStore.name, 'renamed_books',
                   'IDBObjectStore name should change immediately after a rename');
               assert_array_equals(
                   database.objectStoreNames, ['renamed_books'],
                   'IDBDatabase.objectStoreNames should immediately reflect the ' +
                       'rename');
               assert_array_equals(
                   transaction.objectStoreNames, ['renamed_books'],
                   'IDBTransaction.objectStoreNames should immediately reflect the ' +
                       'rename');
               assert_equals(
                   transaction.objectStore('renamed_books'), renamedBookStore,
                   'IDBTransaction.objectStore should return the renamed object ' +
                       'store when queried using the new name immediately after the ' +
                       'rename');
               assert_throws_dom(
                   'NotFoundError', () => transaction.objectStore('books'),
                   'IDBTransaction.objectStore should throw when queried using the ' +
                       'renamed object store\'s old name immediately after the rename');
             })
      .then(database => {
        assert_array_equals(
            database.objectStoreNames, ['renamed_books'],
            'IDBDatabase.objectStoreNames should still reflect the rename ' +
                'after the versionchange transaction commits');
        const transaction = database.transaction('renamed_books', 'readonly');
        renamedBookStore2 = transaction.objectStore('renamed_books');
        return checkStoreContents(
                   testCase, renamedBookStore2,
                   'Renaming an object store should not change its records')
            .then(() => database.close());
      })
      .then(() => {
        assert_equals(
            renamedBookStore.name, 'renamed_books',
            'IDBObjectStore used in the rename transaction should keep ' +
                'reflecting the new name after the transaction is committed');
        assert_equals(
            renamedBookStore2.name, 'renamed_books',
            'IDBObjectStore obtained after the rename transaction should ' +
                'reflect the new name');
      });
}, 'IndexedDB object store rename in the transaction where it is created');

promise_test(testCase => {
  return createDatabase(
             testCase,
             (database, transaction) => {
               createBooksStore(testCase, database);
             })
      .then(database => {
        const transaction = database.transaction('books', 'readonly');
        const store = transaction.objectStore('books');
        return checkStoreIndexes(
                   testCase, store,
                   'The object store index should have the expected contens before ' +
                       'any renaming')
            .then(() => database.close());
      })
      .then(() => renameBooksStore(testCase))
      .then(database => {
        const transaction = database.transaction('renamed_books', 'readonly');
        const store = transaction.objectStore('renamed_books');
        return checkStoreIndexes(
                   testCase, store,
                   'Renaming an object store should not change its indexes')
            .then(() => database.close());
      });
}, 'IndexedDB object store rename covers index');

promise_test(testCase => {
  return createDatabase(
             testCase,
             (database, transaction) => {
               createBooksStore(testCase, database);
             })
      .then(database => {
        const transaction = database.transaction('books', 'readwrite');
        const store = transaction.objectStore('books');
        return checkStoreGenerator(
                   testCase, store, 345679,
                   'The object store key generator should have the expected state ' +
                       'before any renaming')
            .then(() => database.close());
      })
      .then(() => renameBooksStore(testCase))
      .then(database => {
        const transaction = database.transaction('renamed_books', 'readwrite');
        const store = transaction.objectStore('renamed_books');
        return checkStoreGenerator(
                   testCase, store, 345680,
                   'Renaming an object store should not change the state of its key ' +
                       'generator')
            .then(() => database.close());
      });
}, 'IndexedDB object store rename covers key generator');

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
                store.name = 'books';
                assert_array_equals(
                    database.objectStoreNames, ['books'],
                    'Renaming a store to the same name should not change ' +
                        'the store\'s IDBDatabase.objectStoreNames');
              }))
      .then(database => {
        assert_array_equals(
            database.objectStoreNames, ['books'],
            'Committing a transaction that renames a store to the same name ' +
                'should not change the store\'s IDBDatabase.objectStoreNames');
        const transaction = database.transaction('books', 'readonly');
        const store = transaction.objectStore('books');
        return checkStoreContents(
                   testCase, store,
                   'Committing a transaction that renames a store to the same name ' +
                       'should not change the store\'s contents')
            .then(() => database.close());
      });
}, 'IndexedDB object store rename to the same name succeeds');

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
                database.deleteObjectStore('not_books');
                store.name = 'not_books';
                assert_array_equals(
                    database.objectStoreNames, ['not_books'],
                    'IDBDatabase.objectStoreNames should immediately reflect the ' +
                        'rename');
              }))
      .then(database => {
        assert_array_equals(
            database.objectStoreNames, ['not_books'],
            'IDBDatabase.objectStoreNames should still reflect the rename ' +
                'after the versionchange transaction commits');
        const transaction = database.transaction('not_books', 'readonly');
        const store = transaction.objectStore('not_books');
        return checkStoreContents(
                   testCase, store,
                   'Renaming an object store should not change its records')
            .then(() => database.close());
      });
}, 'IndexedDB object store rename to the name of a deleted store succeeds');

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
                const bookStore = transaction.objectStore('books');
                const notBookStore = transaction.objectStore('not_books');

                transaction.objectStore('books').name = 'tmp';
                transaction.objectStore('not_books').name = 'books';
                transaction.objectStore('tmp').name = 'not_books';

                assert_array_equals(
                    database.objectStoreNames, ['books', 'not_books'],
                    'IDBDatabase.objectStoreNames should immediately reflect the swap');

                assert_equals(
                    transaction.objectStore('books'), notBookStore,
                    'IDBTransaction.objectStore should return the original "books" ' +
                        'store when queried with "not_books" after the swap');
                assert_equals(
                    transaction.objectStore('not_books'), bookStore,
                    'IDBTransaction.objectStore should return the original ' +
                        '"not_books" store when queried with "books" after the swap');
              }))
      .then(database => {
        assert_array_equals(
            database.objectStoreNames, ['books', 'not_books'],
            'IDBDatabase.objectStoreNames should still reflect the swap ' +
                'after the versionchange transaction commits');
        const transaction = database.transaction('not_books', 'readonly');
        const store = transaction.objectStore('not_books');
        assert_array_equals(
            store.indexNames, ['by_author', 'by_title'],
            '"not_books" index names should still reflect the swap after the ' +
                'versionchange transaction commits');
        return checkStoreContents(
                   testCase, store,
                   'Swapping two object stores should not change their records')
            .then(() => database.close());
      });
}, 'IndexedDB object store swapping via renames succeeds');

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

                store.name = 42;
                assert_equals(
                    store.name, '42',
                    'IDBObjectStore name should change immediately after a ' +
                        'rename to a number');
                assert_array_equals(
                    database.objectStoreNames, ['42'],
                    'IDBDatabase.objectStoreNames should immediately reflect the ' +
                        'stringifying rename');

                store.name = true;
                assert_equals(
                    store.name, 'true',
                    'IDBObjectStore name should change immediately after a ' +
                        'rename to a boolean');

                store.name = {};
                assert_equals(
                    store.name, '[object Object]',
                    'IDBObjectStore name should change immediately after a ' +
                        'rename to an object');

                store.name = () => null;
                assert_equals(
                    store.name, '() => null',
                    'IDBObjectStore name should change immediately after a ' +
                        'rename to a function');

                store.name = undefined;
                assert_equals(
                    store.name, 'undefined',
                    'IDBObjectStore name should change immediately after a ' +
                        'rename to undefined');
              }))
      .then(database => {
        assert_array_equals(
            database.objectStoreNames, ['undefined'],
            'IDBDatabase.objectStoreNames should reflect the last rename ' +
                'after the versionchange transaction commits');
        const transaction = database.transaction('undefined', 'readonly');
        const store = transaction.objectStore('undefined');
        return checkStoreContents(
                   testCase, store,
                   'Renaming an object store should not change its records')
            .then(() => database.close());
      });
}, 'IndexedDB object store rename stringifies non-string names');

for (let escapedName of ['', '\\u0000', '\\uDC00\\uD800'])
  ((escapedName) => {
    const name = JSON.parse('"' + escapedName + '"');
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

                    store.name = name;
                    assert_equals(
                        store.name, name,
                        'IDBObjectStore name should change immediately after the ' +
                            'rename');
                    assert_array_equals(
                        database.objectStoreNames, [name],
                        'IDBDatabase.objectStoreNames should immediately reflect the ' +
                            'rename');
                  }))
          .then(database => {
            assert_array_equals(
                        database.objectStoreNames, [name],
                        'IDBDatabase.objectStoreNames should immediately reflect the ' +
                            'rename');
                  }))
          .then(database => {
            assert_array_equals(
                database.objectStoreNames, [name],
                'IDBDatabase.objectStoreNames should reflect the rename ' +
                    'after the versionchange transaction commits');
            const transaction = database.transaction(name, 'readonly');
            const store = transaction.objectStore(name);
            return checkStoreContents(
                       testCase, store,
                       'Renaming an object store should not change its records')
                .then(() => database.close());
          });
    }, 'IndexedDB object store can be renamed to "' + escapedName + '"');
  })(escapedName);
