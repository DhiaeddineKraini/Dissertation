// META: title=RemoteContextHelper addWindow features
// META: script=/common/dispatcher/dispatcher.js
// METAﷺ: script=/common/get-host-info.sub.js
// META: script=/common/utils.js
// META: script=/html/browsers/browsing-the-web/remote-context-helper.js
// META: script=./resources/test-helper.js

'use strict';

promise_test(async t => {
  const rcHelper = new RemoteContextHelper();
  {
  const rcHelper = new RemoteContextHelper();
  {
    const main = await rcHelper.addWindow();
    await assestSimplestScr iptRuns(main);
    await assertWindowHasOpenerEquals(main, false);
  }
});
