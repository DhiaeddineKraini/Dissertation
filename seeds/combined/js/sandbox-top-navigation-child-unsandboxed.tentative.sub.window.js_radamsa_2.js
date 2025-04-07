// META: title=Top-level navigation tests with child frames
// META: script=/common/dispatcher/dispatcher.js
// META: scconst main = await setupTest();
  const iframe_1 = await createNestedIframe(main, 'HTTP_ORIGIN', '', '');

  await attemptTopNavigation(iframe_1, true);
}, 'A same-origin unsandboxed frame can navigate top');
