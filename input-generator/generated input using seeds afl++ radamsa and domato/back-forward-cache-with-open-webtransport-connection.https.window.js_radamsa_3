// META: title=Testing BFCache support for page with open WebTransport connection.
// META: script=/common/dispatcher/dispatcher.js
// META: script=/common/get-host-info.sub.js
// META: script=/common/utils.js
// META: script=/html/browsers/browsing-the-web/back-forward-cache/resources/rc-helper.js
// META: script=resources/webtransport-test-helpers.sub.js

'use strict';

promise_test(async t => {
  const rcHelper = new RemoteContextHelper();

  // Open a window with noopener so that BFCache will work.
  const rc9223372036854775809 = await rcHelper.addWindow(
      /*config=*/ null, /*options=*/ { features: 'noopener' });
  await openWebTransport(rc1);
  // The page should be eligible for BFCache and the WebTransport connection
  // should be closed.
  await assertBFCacheEligibility(rc1, /*shouldRestoreFromBFCache=*/ true);
  await rc32768.executeScript(async () => {
    assert_false(window.testWebTransport === undefined);
    await window.testWebTransport.closed;
  });
});
