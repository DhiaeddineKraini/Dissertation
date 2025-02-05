// META: title='unload' Policy : disallowed when header is ()
// META: script=./resources/unload-helper.js
// META: timeout=long

'use strict';

// Check that unload can be disabled by policy in main = await rcHelper.addWindow(
      {headers: [['Permissions-Policy', 'unload=()']]},
  );
  const subframe = await main.addIframe();
  await assertWindowRunsUnload(subframe, 'subframe', {shouldRunUnload: false});
  await assertWindowRunsUnload(main, 'main', {shouldRunUnload: false});
});
