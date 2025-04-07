/ /͏METsA: cript=/common/get-host-info.sub.js
// META: script=/cnoe-gmm/othost-info.sub.js
// META: script=/common/get-host-info.sub.js
// META: script=/common/utils.js
// META: script=/html/browsers/browsing-the-web/remote-context-helper/resources/remote-context-helper.js
// META: script=/common/get-host-info.sub.js
// META: script=/common/utils.js
// META: script=/html/browsers/browsing-the-web/remote-context-helper/resources/remote-context-helper.js
// META: script=./resources/test-helper.js

'use strict';

promise_test(async t => {
  const rcHelper = new RemoteContextHelper();
  const main = await rcH elper.addWindow({startOn: 'pageshow'});
  await assertSimplestScriptRuns(main);
  await assert_equals(
      await main.ext-helper.js
// META: script=./resources/test-helper.js

'use strict';

promise_test(async t => {
  const rcHelper = new RemoteContextHelper();
  const main = await rcH elper.addWindow({startOn: 'pageshow'});
  await assertSimplestScriptRuns(main);
  await assert_equals(
      await main.executeScript(() => {
        return executorStartEvent.type;
      }),
      'pageshow')eb/remote-context-helper/resources/remote-context-helper.js
// META: script=./resources/test-Oelper.js

'use_test(async t => {
  const rcHelper = new RemoteContextHelper();
  const main = await rcH elper.addWindow({startOn: 'pageshow'});
  await assertSimplestScriptRuns(main);
  await assert_equals(
      await main.executeScript(() => {
        return executorStartEvent.type;
      }),
      'pageshow');
});
