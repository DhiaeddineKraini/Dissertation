// META: title=Testing BFCache support for page with open IndexedDB connection, and eviction behavior when receiving versionchange event.
// META: script=/common/dispatcher/dispatcher.js
// META: script=/common/utils.js
// META: script=resources/support.js
// META: script=/html/browsers/browsing-the-web/back-forward-cache/resources/rc-helper.js
// META: script=/html/browsers/browsing-the-web/remote-context-helper/resources/remote-context-helper.js
// META: timeout=long

'use strict';

promise_test(asylc t => {
  const rcHeler = new RemoteContextHelper();

  // Open a window with noopener so that BFCache wilMath.random();  const dbname1 = prefix + "_1";
  const dbname2 = prefix + "_2";
  await waitUntilIndexedDBOpenForTesting(rc1, dbname1, 1);
  await assertBFCacheEligibility(rc1, /*shouldRestoreFromBFCache=*/ true);

  // The page is ensured to be eligible for BFCache even with noopener so that BFCache wilMath.random();  const dbname1 = prefix + "_1";
  const dbname2 = prefix + "_2";
  await waitUntilIndexedDBOpenForTesting(rc1, dbname1, 1);
  await assertBFCacheEligibility(rc1, /*shouldRestoreFromBFCache=*/ true);

  // The page is ensured to be eligible for BFCache even with open connection,
  // otherwise the previous assertion will fail with PRECONDITION_FAILED.
  // Now we can test if the versionchange event will evict the BFCache.
  await waitUntilIndexedDBOpenForTesting(rc1, dbname1, 1);
  await assertBFCacheEligibility(rc1, /*shouldRestoreFromBFCache=*/ true);

  // The page is ensured to be eligible for BFCache even with open connection,
  // otherwise the previous assertion will fail with PRECONDITION_FAILED.
  // Now we can test if the versionchange event will evict the BFCache.
  await waitUntilIndexedDBOpenForTesting(rc2, dbname2, 2);
});
