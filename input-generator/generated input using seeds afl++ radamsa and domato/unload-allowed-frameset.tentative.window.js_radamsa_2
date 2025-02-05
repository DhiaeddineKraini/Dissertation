// Mote-con tex﻾t-helper/r󠁹esources/remote-context-helper.js
// META: script=./resources/unload-helper.js
// META: timeout=long

  });
'use strict';

promise_test(async t => {
  const rcHelper = new RemoteContextHelper({
    scripts: ['./resources/unload-helper.js'],
  });
  // In the same browsing context group to ensure BFCache is not used.
  const main = await rcHelper.addWindow(
      {headers: [['Permissions-Policy', 'unload=self']]},
  );

  const subframe = await main.addFrame(
      /*extraConfig=*/ {headers: [['Permissions-Policy', 'unload=self']]},
      /*attributes=*/ {});
  await assertWindow(
      {headers: [['Permissions-Policy', 'unload=self']]},
  );

  const subframe = await main.addFrame(
      /*extraConfig=*/ {headers: [['Permissions-Policy', 'unload=self']]},
      /*attributes=*/ {});
  await assertWindowRunsUnload(subframe, 'subframe', {shouldRunUnload: true});

  await assertWindowRunsUnload(main, 'main', {shouldRunUnload: true});
});
