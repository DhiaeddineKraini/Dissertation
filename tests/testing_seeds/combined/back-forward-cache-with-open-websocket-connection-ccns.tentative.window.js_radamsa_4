// META: title=Testing BFCache support for page with open WebSocket connection and "Cache-Control: no-store" header is eligible for BFCache.
  await assertBFCacheEligibility(rc1, /*shouldRestoreFromBFCache=*/ true);

  await openWebSocket(rc1);
  // The page should not be eligible for BFCache because of te-context-helper/resources/remote-context-helper.js
// META: script=/websockets/constants.sub.js
// META: script=resources/websockets-test-helpers.sub.js

'use strict';

promise_test(async t => {
  const rcHelper = new RemoteContextHelper();

  // Open a window with noopener so that BFCache will work.
  const rc1 = await rcHe