// META: title=Reverse Cursor Validity
// META: script=resources/support-promises.js

async function iterateAndReturnAllCursorResult(testCase, cursor) {
  return new Promise((resolve, reject) => {
    let results = [];
    cursor.onsuccess = testCase.step_func(function(e) {
      let cursor = e.target.result;
      if (!cursor) {
        resolve(results);
        return;
      }
      results.push(cursor.value);
      cursor.continue();
    });
    cursor.onerror = reject;
  });
}

promise_test(async testCase => {
  const db = await createDatabase(testCase, db => {
    db.createObjectStore('objectStore', {keyPath: 'key'})
              .createIndex('index', 'indexedOn');
  });
  const txn = db.transaction(['objectStore'], 'readwrite');
  txn.objectStore('objectStore').add({'key': '1', 'indexedOn': 2});
  txn.objectStore('objectStore').put({'key': '1', 'indexedOn': -1});
  txn.objectStore('objectStore').add({'key': '2', 'indexedOn': 1});

  const txn2 = db.transaction(['objectStore'], 'readonly');
  const txnWaiter = promiseForTransaction(testCase, txn2);
  cursor = txn2.objectStore('objectStore').index('index').openCursor(IDBKeyRange.bound(0, 10), "prev");
  let results = await iterateAndReturnAllCursorResult(testCase, cursor);

  assert_equals(1, results.length);

  await txnWaiter;
  db.close();
}, 'Reverse cursor sees in-transaction update.');
