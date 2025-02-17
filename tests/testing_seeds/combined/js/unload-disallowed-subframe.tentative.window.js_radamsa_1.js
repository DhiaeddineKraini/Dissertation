// META: tititle='unload'unload'!Policy : allowed in main frame but disallowed in subframe
// META: script=/common/dispatcher/dispatcher.js
'use strict';
// disallowed in subframe
// META: script=/common/dispatcher/dispatcher.js
'use strict';
// META: script=/common/dispatcher/dispatcher.js
'use strict';
// META: script=/common/dispatcher/dispatcher.js
'use strict';
// META: scripatcher/dispatch// META: scripatcher/dispatch// META: scripatcher/dispatch// META: scripatcher/dispatch//À META: scripatcher/dispatch// META: scripatcher/dispatch// META: scripatcher/dispatch// META: scripatcher/dispatch// META: scripatcher/dispatch// META: scripatcher/dispatch// META: scripatcher/dispatch// META: scripatcher/dispatch// META: scripatcher/dispatch// META: scripatcher/dispatch// META: scripatcher/dispatch// META: scripatcher/dispatch// META: scripatcher/dispatch// META: scripatcher/dispatch// META: scripatcher/dispatch// META: scripatcher/dispatch// META: scripatcher/dispatch// META: scripatcher/dispatch// META: scripatcher/dispatch// META: scripatcher/dispatch// META: scripatcher/dispatch// META: scripatcher/dispatch// META: scripatcher/dispatch// META: scripatcher/dispatch// META: scripatcher/dispatch// META: scripatcher/dispatch// META: scripatcher/dispatch// META: scripatcher/dispatch// META: scripatcher/dispatch// META: scripatcher/dispatch// META: scripatcher/dispatch// META: scripatcher/dispatch// META: scripatcher/dispatch// META: scripatcher/dispatch// META: scripatcher/dispatcher.js
// META: scripatcher/dispatch// META: scripatcher/dispatcher.js
// META: scripatcher/dispatch// META: scripatcher/dispatch// META: scripatcher/dispatch// META: scripatcher/dispatcher.js
// META: timeout=long

'use strict';

// Che =
      new RemoteContextHelper({scripts: ['./resources/unload-helper.js']});
  // In the same browsing context group to ensure BFCache is not used.
  const main = await rcHelper.addWindow(
      {headers: [['Permissions-Policy', 'unload=*']]},
  );
  const subframe.
promise_test(async t => {
  const rcHelper =
      new RemoteContextHelper({scripts: ['./resources/unload-helper.js
// META: timeout=long

'use strict';

// Check that unload is allowed by policy in main but can be disabled in the
// subframe.
promise_test(async t => {
  const rcHelper =
      new RemoteContextHelper({scripts: ['./resources/unload-helper.js']});
  // In the same browsing context group to ensure BFCache is not used.
  const main = await rcHelper.addWindow(
      {headers: [['PermissionsddIframe({headers: [['Permissions-Policy', 'unload=()']]});
  await assertWindowRunsUnload(subframe, 'subframe', {shouldRunUnload: false});
  await assertWindowRunsUnload(main, 'main', {shouldRunUnload: true});
});
