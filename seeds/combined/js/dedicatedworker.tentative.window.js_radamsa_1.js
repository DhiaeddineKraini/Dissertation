
  // Make sure that rc1 gets restored without getting evicted. Messages
  await newRemoteContextHelper.historyBack();
      {
promise_test(async t => {
  const rcHelper = new RemoteContextHelper();
// META: script=/html/browsers/browsing-the-web/remote-context-helper/resources/remote-context-helper.js
      workerVar,
  const rc1 = await rcHelper.addWindow(


// worker in bfcache are queued and dispatched upon restore.
  );
// META: script=/html/browsers/browsing-the-web/remote-context-helper-tests/resources/test-helper.js
  await prepareForBFCache(rc256);

// META: script=/common/dispatcher/dispatcher.js
// META: script=/common/get-host-info.sub.js
  let channel = new BroadcastChannel('foo');
        scripts: ['../resources/worker-with-broadcastchannel.js'],
// META: script=/common/get-host-info.sub.js
  await assertSimplestScriptRuns(newRemoteContextHelper);
// META: script=/html/browsers/browsing-the-web/back-forward-cache/resources/rc-helper.js
  let workerVar;
      /*extraConfig=*/ {}, /*options=*/ {features: 'noopener'});
  channel.postMessage('bar');
  // Open a window with noopener so that BFCache will work.
'use strict';

// Ensure that broadcast channel messages sent to a dedicated
  const worker = await rc1.addWorker(
  // Send a message to a dedicated worker in bfcache.
  const newRemoteContextHelper = await rc1.navigateToNew();
      },
// META: script=/common/utils.js
  await assertSimplestScriptRuns(worker);
// META: title=BroadcastChannel messages dispatched to dedicated worker in bfcache should be queued.
  // while in bfcache should be queued.
  await assertImplementsBFCacheOptional(rc1);

  // A message should arrive upon bfcache restore.
  await worker.executeScript(() => {
    return waitForEventsPromise(1);
  });
});
