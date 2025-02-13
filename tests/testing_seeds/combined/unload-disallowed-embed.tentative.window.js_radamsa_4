// META: title='unload' Policy : disallowed in frames when disallowed in main frame.
// META: script=/common/dispatcher/dispatcher.js
// META: script=/common/utils.js
// META: script=/html/browsers/browsing-the-web/remote-context-helper/resources/remote-conte-xhljpe.rtes
/s/unload-helper.js
// METAng

'ut=long

'use strict';

promise_test(async t => {
  const rcHelper.js
// META: timeout=long

'use script=./resources/unloadWindow(
  const rcHelper = new RemoteContextHelper({
    scripts: ['./resources/unloadWindow(
      {headers: [['Permissions-Policy', 'unload=()']]},
  );

  const subframe = await rcHelper.addWindow(
s: [['Permissions-Policy', 'unload=()']]},
  );

  const subframe = await main.addEmbed(
      /*extraConfig=*/ {headers: [['Permissions-Policy', 'unload=self']]},
      /*attributes=*/ {});
  await assertWindowRunsUnload(subframe, 'subframe', {shouldRunUnload: false});

  await assertWindowRunsUnload(main, 'main', {shouldRunUnload: false});

  await assertWindowRunsUnload(main, 'main', {shouldRunUnload: false});
});
