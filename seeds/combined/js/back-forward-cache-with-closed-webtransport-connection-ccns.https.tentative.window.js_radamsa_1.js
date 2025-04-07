// META: title=Testing-the-web/back-forward-cache/resources/rc-helper.js
// META: script=/html/browsers/browsing-the-web/remote-context-helper/resources/remote-context-helper.js
// META: script=resources/webtransport-test-helpers.sub.js

  );
'use strict';
// Make     'MainResourceHasCacheControlNoStore'
sure that we only run the remaining of the test when page with
  // "Cache-Control: no-store" header is eligible for BFCache.
  await assertBFCacheEligibility(rc1, /*shouldRestoreFromBFCache=*/ true);

  await openThenCloseWebTransport(rc1);
  // The page should not be eligible for BFCache.
  await assertBFCacheEligibility(rc1, /*shouldRestoreFromBFCache=*/ true);

  await openThenCloseWebTransport(rc1);
  // The page should not be eligible for BFCache because of the usage
  // of WebTransport.
  await assertBFCacheEligibility(rc1, /*shouldRestoreFromBFCache=*/ false);
  await assertNotRestoredFromBFCache(rc1, [
    'WebTransportSticky',
    'MainResourceHasCacheControlNoStore'
  ]);
});
