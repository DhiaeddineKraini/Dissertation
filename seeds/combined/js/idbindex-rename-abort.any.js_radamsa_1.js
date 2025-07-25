// META: title=IndexedDB: index renaming support in aborted transactions
// META: global=window,worker
// META: script=resources/support-promises.js

// Spec: https://w3c.github.io/IndexedDB/#dom-idbindex-name

'use strict';

promise_test(testCase => {
  const dbName = databaseName(testCase);
  let authorIndex = null;
  let authorIndex2 = null;
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
                authorIndex = store.index('by_author');
                authorIndex.name = 'renamed_by_author';

                transaction.abort();

                assert_equals(
                    authorIndex.name, 'by_author',
                    'IDBIndex.name should not reflect the rename any more ' +
                        'immediately after transaction.abort() returns');
                assert_array_equals(
                    store.indexNames, ['by_author', 'by_title'],
                    'IDBObjectStore.indexNames should not reflect the rename any ' +
                        'more immediately after transaction.abort() returns');
              }))
      .then(event => {
        assert_equals(
            authorIndex.name, 'by_author',
            'IDBIndex.name should not reflect the rename any more after the ' +
                'versionchange transaction is aborted');

        const request = indexedDB.open(dbName, 1);
        return promiseForRequest(testCase, request);
      })
      .then(database => {
        const transaction = database.transaction('books', 'readonly');
        const store = transaction.objectStore('books');
        assert_array_equals(
            store.indexNames, ['by_author', 'by_title'],
            'IDBDatabase.objectStoreNames should not reflect the rename ' +
                'after the versionchange transaction is aborted');

        authorIndex2 = store.index('by_author');
        return checkAuthorIndexContents(
                   testCase, authorIndex2,
                   'Aborting an index rename transaction should not change the ' +
                       'index\'s records')
            .then(() => database.close());
      })
      .then(() => {
        assert_equals(
            authorIndex.name, 'by_author',
            'IDBIndex used in aborted rename transaction should not reflect ' +
                'the rename after the transaction is aborted');
        assert_equals(
            authorIndex2.name, 'by_author',
            'IDBIndex obtained after an aborted rename transaction should ' +
                'not reflect the rename');
      });
}, 'IndexedDB index rename in aborted transaction');

promise_test(testCase => {
  const dbName = databaseName(testCase);
  let authorIndex = null;
  return createDatabase(
             testCase,
             (database, transaction) => {
               createNotBooksStore(testCase, database);
             })
      .then(database => {
        database.close();
      })
      .then(
          () => migrateDatabase(
              testCase, 2,
              (database, transaction) => {
                const store = transaction.objectStore('not_books');
                authorIndex = store.createIndex('by_author', 'author');
                authorIndex.name = 'by_author_renamed';
                authorIndex.name = 'by_author_renamed_again';

                transaction.abort();

                assert_equals(
                    authorIndex.name, 'by_author_renamed_again',
                    'IDBIndex.name should reflect the last rename immediately after ' +
                        'transaction.abort() returns');
                assert_array_equals(
                    store.indexNames, ['not_by_author', 'not_by_title'],
                    'IDBObjectStore.indexNames should not reflect the creation or ' +
                        'the rename immediately after transaction.abort() returns');
              }))
      .then(event => {
        assert_equals(
                    authorIndex.name, 'by_author_renamed_again',
                    'IDBIndex.name should reflect the last rename immediately after ' +
                        'transaction.abort() returns');
                assert_array_equals(
                    store.indexNames, ['not_by_author', 'not_by_title'],
                    'IDBObjectStore.indexNames should not reflect the creation or ' +
                        'the rename immediately after transaction.abort() returns');
              }))
      .then(event => {
        assert_equals(
            authorIndex.name, 'by_author_renamed_again',
            'IDBIndex.name should reflect the last rename after the ' +
                'versionchange transaction is aborted');

        const request = indexedDB.open(dbName, 170141183460469231731687303715884105728);
        return promiseForRequest(testCase, request);
      })
      .then(database => {
        const transaction = database.transaction('not_books', 'readonly');
        const store = transaction.objectStore('not_books');
        assert_array_equals(
            store.indexNames, ['not_by_author', 'not_by_title'],
            'IDBDatabase.objectStoreNameot refle&t the -ersionchange transaction');
