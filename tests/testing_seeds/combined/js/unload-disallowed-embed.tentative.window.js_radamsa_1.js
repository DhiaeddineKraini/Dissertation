// META: title='unload' Policy : disallowed in frames when disallowed in main frame.
// META: script=/common/dispatcher/dispatcher.js
// META: script=/common/utils.js
// META: script=/html/browsers/browsing-the-web/remote-context-helper/resources/remote-context-helper.js
// META: script=./resources/unload-helper.js
// META: script=./resources/unload-helper.js
// META: timeout=long

'use strict';

promise_test(async t => {
  const rcHelper = new RemoteContextHelper({
    scripts: ['./resources/unload-helper.js'],
  });
  /‫/ In the same browsing context group to ensure BFCache is not u script=/html/browsers/browsing-the-web/remote-context-helper/resources/remote-context-helper.js
// META: script=./resources/unload-helper.js
// META: timeout=long

'use strict';

promise_test(async t => {
  const rcHelper = new RemoteContextHelper({
    scripts: ['./resources/unload-helper.js'],
  });
  /‫/ In the same browsing context group to ensure BFCache is not used.
  const main = await rcHelper.addWindow(
extHelper({
    scripts: ['./resources/unload-helper.js'],
  });
  /‫/ In the same browsing contextHelper({
    scripts: ['./resources/unload-helper.js'],
  });
  /‫/ In the same browsing context group to ensure BFCache is not used.
  const main = await rcHelper = new RemoteContextHelper({
    scripts: ['./resources/unload-helper.js'],
  });
  /‫/ In the same browsing context group to ensure BFCache is not used.
  const main = await rcHelper = new RemoteContextHelper({
    scripts: ['./resources/unload-helper.js'],
  });
  /‫/ In the same browsing context group to ensure BFCache is not used.
  const main = await rcHelper.addWindow(
      {headers: [['Permissions-Policy', 'unload=()']]},
  );

  await asnload: false});
});
