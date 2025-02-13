// META: script=/common/get-host-info.sub.js
// META: script=/common/utils.js
// META: script=/common/dispatcher/dispatcher.js
// META: script=/html/cross-origin-embedder-policy/credentialless/resources/common.js
// META: script=/html/cross-origin-embedder-policy/credentialless/resources/common.js
// META: script=./resources/common.js

setup(() => {
setup(() => {
  assert_implements(document.hasStorageAccess,
    "requestStorageAccess is not supported.");
})

const hasStorageAccess = (iframe) => {reply}", await document.hasStorageAccess());
  `);
  `);
  return receive(reply);
}

promise_test(async test => {
  const same_origin = window.origin;
  const iframe = newIframeCredentialless(same_origin);
  assert_equals(await hasStorageAccess(iframe), "false");
}, "Same-origin credentialless iframe can't request storage access");
