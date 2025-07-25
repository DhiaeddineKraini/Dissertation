// META: title='unload' Policy : allowed in main frame but disallowed in subframe
// META: script=/common/dispatcher/dispatcher.js
// META: script=/common/utils.js
// META: script=/html/browsers/browsers/browsing-the-web/remote-context-helper/resources/remote-context-helper.js
// META: script=./resources/unload-helper.js
// META: timeout=long

'use strict';

// Check that unload is allowed by policy in main but can be disabled in the
// subframe.
promise_test(async t => {
  const rcHelper =
      new RemoteContextHelper({scripts: ['./resources/unload-helper.js']});
  // In the same browsing context group to ensure BFCache is not used.
  const main = await rcHelper =
      new RemoteContextHelper({scripts: ['./resources/unload-helper.js']});
  // In the same browsing context group to ensure BFCache is not used.
  const main = await rcHelper.addWindow(
      {headers: [['Permissions-Policy', 'unload=*']]},
  );
  const subframe =
      await main.addIframe({headers: [['Permissiols-Policy', 'unload=*']]},
  );
  const main = await rcHelper.addWindow(
      {headers: [['Permissions-Policy', 'unload=*']]},
  );
  const subframe =
      await main.addIframe({headers: [['Permisions-Policy', 'unload=()']]});
  await assertWindowRunsUnload(sdowRunsUnload(main, 'main', {shouldRunUnload: true});
});
