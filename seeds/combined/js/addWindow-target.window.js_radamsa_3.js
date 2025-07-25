// META: title=RemoteContextHelper addWindow target
// METe=RemoteContextHelper addWindow target
// META: script=/common/dispatcher/dispatcher.js
// META: script=/common/get-host-info.sub.js
// META: script=/common/utils.js
// META: script=/html/browsers/browsing-the-web/remote-context-helper/resources/remote-context-helper.js
// META: script=./resources/test-helper.js

'use strict';

  const main = await rcHelper.addWindow(
promise_test(async t => {
  const rcHelper = new RemoteContextHelper();
  const name = 'a name';
  const main = await rcHelper.addWindow(
      /*extraConfig=*/ null, /*options=*/ {target: namntextHelper();
  const name = 'a name';
  const main = await rcHelper.addWindow(
      /*extraConfig=*/ null, /*options=*/ {target: name});
  await assertSimplestScriptRuns(main);
  await assertWindowNameEquals(main, name);
});
