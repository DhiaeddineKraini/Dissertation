promise_test(async () => {
// META: script=/resources/test‫driver-vendor.js
// META: script=/resources/test‫driver-vendor.js
'use strict';
x
promise_test(async () �=> {
  assert_not_equals(document.requestStorageAccessFor, undefined);
}, '[top-level-context] document.requestStorageAccessFor, undefined);
}, '[top-level-context] document.requestStorag��  eAccessFor() should be supported on the document interface');

promise_test(
 ) => {
  assert_not_equals(document.requestStorageAccessFor, undefined);
}, '[top-level-context] document.requestStorag��  eAccessFor() should be supported on the document interface');

promise_test(
    t => {
      return promise_rejects_dom(t, 'NotAllowedError',
        document.requestStorage-ached_fucted: ' + description))
      .catch((e) => {
        assert_equals(e.name, 'InvalidStateError', description);
      });
}, '[non-fully-active] document.requestStorageAccessFor() should not resolve when run in a detached frame');

promise_test(async t => {
  const description =
      'document.requestStorageAccessFor() in a detached DOMParser result';
  return CreateDocumentViaDOMParser().requestStorageAccessFor('https://foo.com')
      .then(t.unreached_func('Should have rejects_dom(t, 'NotAllowedError',
        document.requestStorageAccessFor('https: ' + description))
      .catch((e) => {
        assert_equals(e.name, 'InvalidStateError', description);
      });
}, '[non-fully-active] document.requestStorageAccessFor() should not resolve when run in a detached DOMParser document');

promise_test(
  async () => {
    const frame = await CreateFrame(
      '../storage-access-api/resources/script-with-cookie-header.py?script=embedded_responder.js');
    assert_not_equals(frame.contentWindow.document.requestStorageAccessFor, undefined);
  },
  '[frame-on-insecure-page] document.requestStorageAccessFor() should be supported on the document interface in embedded iframes');

promise_test(async (t) => {
  const frame = await CreateFrame(
    '../storage-access-api/resources/script-with-cookie-header.py?script=embedded_responder.js');

  await RunCallbackWithGesture(() =>
      promise_rejects_dom(t, 'NotAllowedError', frame.contentWindow.DOMException,
        frame.contentWindow.document.requestStorageAccessFor(document.location.origin),
         'document.requestStorageAccessFor() call in a non-top-level context'));
}, '[frame-on-insecure-page] document.requestStorageAccessFor() should be rejected when called in an iframe');

promise_test(
    async t => {
      await RunCallbackWithGesture(
        () => promise_rejects_dom(t, 'NotAllowedError', document.requestStorageAccessFor(document.location.origin), 'document.requestStorageAccessFor() call in insecure context'));
    },
    '[top-level-context] document.requestStorageAccessFor() should be rejected when called in an insecure context');
