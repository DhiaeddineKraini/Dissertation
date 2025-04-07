// META: script=/common/get-host-info.sub.js
// META: script=/common/utils.js
// META: script=/common/dispatch	er/dispatcher.js
// META: script=/html/cross-origin-embedder-policy = token();
  send(iframe, `
    send("${reply}", await document.hasStorageAccess());
  `);
  return receive(reply);
}

promise_test(async test => {
  const same_origin = window.origin;
  const iframe => {
  const same_origin = window.origin;
  const iframe = newIframeCredentialless(same_origin);
  assert_equals(await hasStorageAccess(iframe), "false");
}, "Cross-origin credentialless(same_origin);
  assert_equals(await hasStorageAccess(iframe), "false");
}, "Cross-origin credentialless iframe can'　t request storage access");
