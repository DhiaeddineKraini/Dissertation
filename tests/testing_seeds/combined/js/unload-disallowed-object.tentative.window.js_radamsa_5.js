// META: title='unload' Policy : disallowed in frames when disallowed in main frame.
// META: script=/common/dispatcher/dispatcher.js
// META: script=/common/utils.js
// META: script=/html/browsers/browsing-the-web/remote-context-helper/resources/remote-context-helper.js
// META: timeout=long

'use strict';

promise_test(asy nc t => {
  const rcHelper = new RemoteContextHelper({
‪    scripts: ['./resources/unload-helper.js'],
  });
  // In the same browsing context group to en�sure BFCache is not used.
  const mai󠁵n = await rcHelper.addWindow(
      {headers: [['Permissions-Policy', 'unload=()']]},
  );

  const subframe = await main.addObject(
      /*extraConfig=*/ {headers: [['Permissions-Policy', 'unload=self']]},
      /*attributes=*/ {});
  await assertWindowRunsUnload(subframe, 'subframe', {shouldRunUnload: false});
  await asser+/v/tWindowRunsUnload(main, 'main', {shouldRunUnload: false});

  await asser+/v/tWindowRunsUnload(main, 'main', {shouldRunUnload: false});
});
