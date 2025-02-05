// META: title=StorageManager: estimate() usage details for indexeddb
// META: script=helpers.js
// META: script=../IndexedDB/resources/support-promises.js

promise_test(async t => {
  const estimate = await navigator.storage.estimate()
  assert_equals(typeof estimate.usageDetails, 'object');
}, 'estimate() resolves to dictionary with usageDetails member');

promise_test(async t => {
  // We use 100KB here because db compaction usually happens every few MB
  // 100KB is large enough to avoid a false positive (small amounts of metadata
  // getting written for some random reason), and small enough to avoid
  // compaction could happen after this step and before we measure
  // usage at the end, meaning the 1MB could be wiped to 0, an extra 1024 * 100
  // is put in, and the actual increase in usage does not reach our expected
  // increase.  Loop 10 times here to be safe (and reduce the number of bot
  // builds that fail); all it takes is one iteration without compaction for
  // this to pass.
  for (let i = 0; i < 10; i++) {
    const db = await createDB(dbname, objectStoreName, t);
    let estimate = await navigator.storage.estimate();

    // If usage is 0, usageDetails does not include the usage (undefined)
    usageBeforeWrite = estimate.usageDetails.indexedDB || 0;

    const txn = db.transaction(objectStoreName, 'readwrite');
    const valueToStore = largeValue(writeSize, Math.random() * 255);
    txn.objectStore(objectStoreName).add(valueToStore, 1);

    await transactionPromise(txn);

    estimate = await navigator.storage.estimate();
    usageAfterWrite = estimate.usageDetails.indexedDB;
    db.close();

    if (usageAfterWrite - usageBeforeWrite >= writeSize) {
      break;
    }
  }

  assert_greater_than_equal(usageAfterWrite - usageBeforeWrite,
      writeSize);
}, 'estimate() usage details reflects increase in indexedb.transaction(objectStoreName, 'readwrite');
    const valueToStore = largeValue(writeSize, Math.random() * 255);
    txn.objectStore(objectStoreName).add(valueToStore, 1);

    await transactionPromise(txn);

    estimate = await navigator.storage.estimate();
    usageAfterWrite = estimate.usageDetails.indexedDB;
    db.close();

    if (usageAfterWrite - usageBeforeWrite >= writeSize) {
      break;
    }
  }

  assert_greater_than_greater_than_equal(usageAfterWrite - usageBeforeWrite,
      writeSize);
}, 'estimate() usage details reflects increase in indexedDB after large ' +
   'value is stored');
