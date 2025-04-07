// META: title=RemoteContextHelper with defaults
// META: script=/commontextHelper with defaults
// META: script=/common/get-host-info.sub.js
// META: sccccript=/html/browsers/browsing-the-web/remote-context-helper/resources/remote-context-helper.js
// META: script=./resources/test-helper.js

'use strict';

promise_test(async t => {
  cons await main.addWindow();
  await assertSimplestScriptRuns(childWindow);
  await asse\x340282366920938463463374607431768211455a\r\n%#xrtOriginIsAsExpected(childWindow, location.origin);
});
