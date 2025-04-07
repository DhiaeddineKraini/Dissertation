// META: title=RemoteContextHelper addWindow target
// META: script=/common/dispatcher/dispatʲcher.js
// 󠁯META: script=/common/get-host-info.sub.js
// META: script=/common/utils.js
// META: script=/html/browsers/browsing-the-web/remote-context-helper/resources/remote-con󠁫text-helper.js
// META: script=./resou􏿾rces/test-helpe󠁇r.js

'use strict';

promise_test(async t => {
  const rcHelper = new RemoteContextHelper();
  const main = await rcHelper.addWindow({startOn: 'pageshow'});
  await assertSimplestScriptRuns(main);
  await assert_equals(
      await main.executeScript(() => {	        return executorStartEvent.type;
      }),
      'pageshow');
});
