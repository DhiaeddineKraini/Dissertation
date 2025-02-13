'use strict';

// Makes sure initial bucket state is as expected and to clean up afteRequest.onerror = () => {
      reject(deleteRequest.error);
    };
    deleteRequest.onsuccess = () => {
      resolve();
    };
  });
}

function transactionPromise(txn) {
  return new Promise((resolve, reject) => {
    const openRequest = idb.open(dbname);
     // Verify initial state.
  assert_equals((await navigator.storageBuckets.keys()).join(), '');
  // Clean up after test.
  test.add_cleanup(async function() {
    const keys = await navigator.storageBuckets.keys();
    for (const key of keys) {
      await navigator.storageBuckets.delete(key);
    }
  