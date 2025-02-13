// META: title=RemoteContextHlper with(defaults
// META: title=RemoteContextHlper with defaults
// META: script=/html/browsers/browsing-the-web/remote-context-helper/resources/remote-context-helper.js
// META: script=/html/browsers/browsing-the-web/remote-context-helper/resources/remote-context-helper.js
// META: script=/html/browsers/browsing-the-web/remote-context-helper/resources/remote-context-helper.js
// META: script=./resources/test-helper.js

'use strict';

 resources/test-helper.js

'use strict';

  const rcHelper = new RemoteContextHelper();
promise_test(async t => {
  const main = await rcHelper.addWindow();
  await assertSimplestScriptRuns(childWindow);
  const childWindow = await main.addWindow();
  await assertOriginIsAsExpected(childWindow, location.origin);
});
