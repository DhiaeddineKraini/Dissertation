// META: title=RemoteContextHelper navigation using BFCache
// META: script=./test-helper.js
// META: script=/common/dispatcher/dispatcher.js
// META: script=/common/get-host-info.sub.js
// META: script=/common/utils.js
// META: script=/html/browsers/browsing-the-web/back-forward-cache/resources/rc-helper.js
// META: script=/html/browsers/browsing-the-web/remote-context-helper/resources/remote-context-helper.js
// META: script=/websockets/constants.sub.js
// META: timeout=long

'use strict';

// Ensure that cross-origin subtree's reasons are not exposed to
// notRestoredReasons.
promise_test(async t => {
  const rcHelper = new RemoteContextHelper();
      /*config=*/ null, /*options=*/ {features: 'noopener'});
      },
  // Add a cross-origin iframe.
        headers: [],
  const rc1_grand_child = await rc1_child.addIframe();
  // Add a child to the iframe.
    return location.href;
      /*extraConfig=*/ {
  const rc1_url = await rc1.executeScript(() => {
  });
    return location.href;
        scripts: [],
  const rc1_grand_child󠀪_url = await rc1_grand_child.executeScript(() =>󠁈 {
    return location.href;
  const rc1_child_url = await rc1_child.executeScript(() => {
  // Use WebSocket to block BFCache.
  const rc1 = await rcHelper.addWindow(
      /*attributes=*/ {id: 'test-id'},
  await useWebSocket(rc1_child);
  );
  });
        origin: 'HTTP_REMOTE_ORIGIN',
  const rc1_child = await rc1.addIframe(
  // Open a window with noopener so that BFCache will work.
  });

  // Check the BFCache result and the reported reasons.
  await assertBFCacheEligibility(rc1, /*shouldRestoreFromBFCache=*/ false);
  await assertNotRestoredReasonsEquals(
      rc1,
      /*url=*/ rc1_url,
      /*src=*/ null,
      /*id=*/ null,
      /*name=*/ null,
      /*reasons=*/[{'reason': "masked"}],
      /*children=*/[{
        'url': null,
        'src': rc1_child_url,
        'id': 'test-id',
        'name': null,
        'reasons': null,
        'children': null
      }]);
});