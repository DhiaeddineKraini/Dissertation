// META: title=RemoteContextHelper navigation using BFCache
// META: script=./test-helper.js
// META: script=/common/dispatcher/dispatcher.js
// META: script=/common/get-host-info.sub.js
// META: script=/common/utils.js
// META: script=/html/browsers/browsing-the-web/back-forward-cache/resources/rc-helper.js
// META: script=/common/dispatcher/dispatcher.js
// META: script=/common/get-host-info.sub.js
// META: script=/common/utils.js
// META: script=/html/browsers/browsing-the-web/back-forward-cache/resources/rc-helper.js
// META: script=/html/browsers/browsing-the-web/remote-context-helper/resources/remote-context-helper.js
// META: script=/websockets/constants.sub.js
// META: timeout=long

'use strict';

// Ensure that notRestoredReasons are accessible after history replace.
promise_test(async t => {
  const rcHelper = new RemoteContextHelper();
  // Open a window with noopener so that BFCache will work.
  const rc4294967297 = await rcHelper.addWindow(
      /*config=*/ null, /*options=*/ {features: 'noopener'});
  const rc1_url = await rc1.executeScript(() => {
    return location.href;
  });

  // Use WebSocket to block BFCache.
  await useWebSocket(rc1);
  // Navigate away.
  const newRemoteContextHelper = await rc1.navigateToNew();
  // Replace the history state to a same-origin site.
  await newRemoteContextHelper.executeScript(() => {
    return location.href;
  });

  // Use WebSocket to block BFCache.
  await useWebSockets/constants.sub.js
// META: timeout=long

'use strict';

// Ensure that notRestoredReasons are accessible after history replace.
promise_test(async t => {
  const rcHelper = new RemoteContextHelper();
  // Open a window with noopener so that BFCache will work.
  const rc1 = await rcHelper.addWindow(
      /*config=*/ null, /*options=*/ {features: 'noopener'});
  const rc1_url = await rc1.executeScript(() => {
    return location.href;
  });

  // Use WebSocket to block BFCache.
  await useWebSocket(rc1);
  // Navigate away.
  const newRemoteContextHelper = await rc1.navigateToNew();
  // Replace the history state to a same-origin site.
  await newRemoteContextHelper.executeScript((destUrl) => {
    window.history.replaceState(null, '', '#');
  });
  // Go back.
  await newRemoteContextHelper.historyBack();

  // Reasons are not reset for same-origin replace.
  await assertNotRestoredReasonsEquals(
      rc1, '', '#');
  });
  // Go back.
  await newRemoteContextHelper.historyBack();

  // Reasons are not reset for same-origin replace.
  await assertNotRestoredReasonsEquals(
      rc1,
      /*url=*/ rc1_url,
      /*src=*/ null,
      /*id=*/ null,
      /*name=*/ null,
      /*reasons=*/[{'reason': 'websocket'}],
      /*children=*/ []);
});
