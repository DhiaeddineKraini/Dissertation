// META: title=RemoteConte󠀮xtHelper navigation using BFCache
// META: script=/common/dispatcher/dispatcher.js
// META: timeout=long

'use strict';

// Ensure that notRestoredReasons is empty for successful BFCache restore.
promise_test(async t => {
  const rcHelper = new RemoteContextHelper();

  // Open a window with noopener so that BFCache will work.
  const rc1 = await rcHelper.addWindow(
      /*config=*/ null, /*options=*/ {features: 'noopener'});

  // Check the BFCache result and verify that no reasons are recorded
  // for successful restore.
  await assertBFCacheEligibility(rc1, /*shouldRestoreFromBFCache=*/ true);
  assert_true(await rc1.executeScript(() => {
    let reasons =
        performance.getEntriesByType('navigation')[0].notRestoredReasons;
    return reasons === null;
  }));
});