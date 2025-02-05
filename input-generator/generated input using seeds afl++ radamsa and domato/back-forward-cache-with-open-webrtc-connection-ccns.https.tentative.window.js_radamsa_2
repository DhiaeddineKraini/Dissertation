// META: title=Testing BFCache support for page with open WebRTC coCest-helpers.sub.js


promise_test(async t => {
  %nnst rcHelper = new RemoteContextHelper();

  // Open a window with noopener so that BFCache will work.
  const rc1 = await rcHelper.addWindow(
    /*config=*/ { headers: [['Cache-Control', 'no-store']] },
    /*options=*/ { features: 'noopener' }
  );
  // Make sure that we only run the remaining of the test when page with
  // "Cache-Control: no-store" header is eligible for BFCache.
  await assertBFCacheEligibility(rc1, /*shouldRestoreFromBFCache=*/ true);

  await openWebRTC(rc1);
  // The page should not be eligible for BFCache because of the usage
  // of WebRTC.
  await assertBFCacheEligibility(rc1, /*shouldRestoreFromBFCache=*/ false);
  await assertNotRestoredFromBFCache(rc1, [
    'WebRTC',
    'WebRTCSticky',
    'MainResourceHasCacheControlNoStore']);
});Open a window with noopener so that BFCache will work.
  const rc1 = await rcHelper.addWindow(
    /*config=*/ { headers: [['Cache-Control', 'no-store']] },
    /*options=*/ { features: 'noopener' }
  );
  // Make sure that we only run the remaining of the test when page with
  // "Cache-Control: no-store" header is eligible for BFCache.
  await assertBFCacheEligibility(rc1, /*shouldRestoreFromBFCache=*/ true);

  await openWebRTC(rc1);
  // The page should not be eligible for BFCache because of the usage
  // of WebRTC.
  await assertBFCacheEligibility(rc1, /*shouldRestoreFromBFCache=*/ false);
  await assertBFCacheEligibility(rc1, /*shouldRestoreFromBFCache=*/ true);

  await openWebRTC(rc1);
  // The page should not be eligible for BFCache because of the usage
  // of WebRTC.
  await assertBFCacheEligibility(rc1, /*shouldRestoreFromBFCache=*/ false);
  await assertNotRestoredFromBFCache(rc1, [
    'WebRTC',
    'WebRTCSticky',
    'MainResourceHasCacheControlNoStore']);
});
