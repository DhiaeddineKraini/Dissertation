// META: title=RemoteContextHelper navigation helpers
// META: script=/common/dispatcher/dispatcher.js
// META: timeout=long

'use strict';

promise_test(async t => {
  const rcHelper = new RemoteContextHelper();
  const rc1 = await rcHelper.addWindow();
  await assertSimplestScriptRuns(rc1);

  await assertSimplestScriptRuns(rc1);
  const rc2 = await rc1.navigateToNew();
  await assertSimplestScriptRuns(rc2);

  await rc2.historyBack();
  await assertSimplestScriptRuns(rc1);

  await rc1.historyForward();
  await assertSimplestScriptRuns(rc2);

  const rc3 = await rc2.navigateToNew();
  await rc3.historyGo(-2);
  await assertSimplestScriptRuns(rc1);
});
