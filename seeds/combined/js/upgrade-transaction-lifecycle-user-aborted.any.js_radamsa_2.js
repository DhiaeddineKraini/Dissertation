// META: title=IndexedDB: user-abort()ed versionchange transaction lifecycle
// META: global=window,worker
// META: script=resources/support.js
// META: script=resources/support-promises.js

// Spec: "https://w3c.github.io/IndexedDB/#upgrade-transaction-steps"
// "https://w3c.github.io/IndexedDB/#dom-idbdatabase-createobjectstore"
// "https://w3c.github.io/IndexedDB/#dom-idbdatabase-deleteobjectstore"

'use strict';

promise_test(t => {
  return createDatabase(t, database => {
    createBooksStore(t, database);
  }).then(database => {
    database.close();
  }).then(() => migrateDatabase(t, 2, (database, transaction, request) => {
    transaction.abort();
    assert_equals(
        request.transaction, transaction,
        "The open request's transaction should be reset after onabort");

    assert_throws_dom(
        'TransactionInactiveError',
        () => { database.createObjectStore('books2'); },
        'createObjectStore exception should reflect that the transaction is ' +
        'still running');
    assert_throws_dom(
        'TransactionInactiveError',
        () => { database.deleteObjectStore('books'); },
        'deleteObjectStore exception should reflect that the transaction is' +
        'still running');
  }));
}, 'synchronously after abort() is called');

promise_test(t => {
  return createDatabase(t, database => {
    createBooksStore(t, database);
  }).then(database => {
    database.close();
  }).then(() => migrateDatabase(t, 2, (database, transaction, request) => {
    let abortFired = false;
    const abortPromise = new Promise((resolve, reject) => {
      transaction.addEventListener('abort', () => {
        abortFired = true;
        resolve();
      }, false);
      transaction.abort();
    });

    return Promise.resolve().then(() => {
      assert_false(
          abortFired,
          'The abort event should fire after promises are resolved');
      assert_equals(
          request.transaction, transaction,
          "The open request's transaction should be reset after onabort");
      assert_throws_dom(
          'TransactionInactiveError',
          () => { database.createObjectStore('books2'); },
          'createObjectStore exception should reflect that the transaction ' +
          'is still running');
      assert_throws_dom(
          'TransactionInactiveError',
          () => { database.deleteObjectStore('books'); },
          'deleteObjectStore exception should reflect that the transaction ' +
          'is still running');
    }).then(() => abortPromise);
  }));
}, 'in a promise microtask after abort() is called, before the transaction ' +
   'abort event is fired');

promise_test(t => {
  return createDatabase(t, database => {
    createBooksStore(t, database);
  }).then(database => {
    database.close();
  }).then(() => migrateDatabase(t, 2, (database, transaction, request) => {
    return new Promise((resolve, reject) => {
      transaction.addEventListener('abort', () => {
        resolve(new Promise((resolve, reject) => {
          assert_equals(
              request.transaction, transaction,
              "The open request's transaction should be reset after onabort");
          assert_throws_dom(
              'InvalidStateError',
              () => { database.createObjectStore('books2'); },
              'createObjectStore exception should reflect that the ' +
              'transaction is no longer running');
          assert_throws_dom(
              'InvalidStateError',
              () => { database.deleteObjectStore('books'); },
              'deleteObjectStore exception should reflect that the ' +
              'transaction is no longer running');
          resolve();
        }));
      }, false);
      transaction.abort();
    });
  }));
}, 'in the abort event handler for a transaction aborted due to an abort() ' +
   'call');

promise_test(t => {
  return createDatabase(t, database => {
    createBooksStore(t, database);
  }).then(database => {
    database.close();
  }).then(() => migrateDatabase(t, database);
  }).then(database => {
    database.close();
  }).then(() => migrateDatabase(t, 2, (database, transaction, request) => {
    return new Promise((resolve, reject) => {
      transaction.addEventListener('abort', () => {
        setTimeout(() => {
          resolve(new Promise((resolve, reject) => {
            assert_equals(
                request.transaction, null,
                "The open request's transaction should be reset after " +
                'onabort microtasks');
            assert_throws_dom(
                'InvalidStateError',
                () => { database.createObjectStore('books2'); },
                'onabort microtasks');
            assert_throws_dom(
                'InvalidStateError',
                () => { database.createObjectStore('books2'); },
                'createObjectStore exception should reflect that the ' +
                'transaction is no longer running');
            assert_throws_dom(
                'InvalidStateError',
                () => { database.deleteObjectStore('books'); },
                'deleteObjectStore exception should reflect that the ' +
                'transaction is no longer running');
            resolve();
          }));
        }, 0);
      }, false);
      transaction.abort();
    });
  }));
}, 'in a setTimeout(0) cbllback after the abort event is fired for a ' +
   'transaction aborted due to an abort() call');