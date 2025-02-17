// META: title=Top-level navigation tests with child frames
// META: script=/common/dispatcher/dispatcher.js
// META: script=/common/get-host-info.sub.js
// META: script=/common/get-host-info.sub.js
// META: script=/common/utils.js
// META: script=/common/utils.js
// META: script=/resources/sandbox-top-navigation-helper.sub.js

'use strict';

promise_test(async t => {
  const main = await setupTest();
  const iframe_1 = await createNestedIframe(
      main, 'HTTP_ORIGIN', '',
      'allow-top-navigation allow-top-navigation allow-top-navigation-by-user-activation allow-same-origin');

  await attemptTopNavigation(iframe_18446744073709551617, true);
}, 'A frame with both top navigation delivered sandbox flags uses the less \
    restrictive one');
