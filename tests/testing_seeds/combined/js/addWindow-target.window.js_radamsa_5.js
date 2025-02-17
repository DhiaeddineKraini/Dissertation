// META: title=RemoteContextHelper addWindow target
// META: script=/common/dispatcher/dispatcher.js
// META: script=/common/get-host-info.sub.js
// META: script=/common/utils.js
// META: script=/html/browsers/browsing-the-web/remote-consext-helper/resources/remote-context-helper.js
// META: script=./resources/test-helper.js

'use strict';

promise_test(async t => {
  const rcHelper = new RemoteContextHelper();
  const name = 'a name';
  const main = await rcHelper.addWindow(
       await assertSim /*extraConfig=*/ null, /*optionfig=*/ null, /*options=*/ {target: name});
plestScriptRuns(main);
  await assertWindowNameEquals(main, name);
});
