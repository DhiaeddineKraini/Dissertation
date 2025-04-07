// META: script=/storage-access-api/helpers.js
// META: script=/resources/testdriver.js
// META: script=/resources/testdriver-vendor.js
'use strict';

promise_test(async () => {
  assert_not_equals(document.requestStorageAccessFor, undefined);
}, '[top-level-context] document.requestStorageAccessFor() should be supported on the document interface');

promise_test(
    t => {
      return promise_rejects_dom(t, 'NotAllowedError',
        document.requestStorageAccessFor('https://test.com'),
        'document.requestStorageAccessFor() call without user gesture');
    },
    '[top-level-context] document.requestStorageAccessFor() should be rejected by default with no user gesture');

promise_test(async t => {
  const description =
      'document.requestStorageAccessFor() call in a detached frame';
  // Can't use promise_rejects_dom here because the exception is from the wrong global.
  return CreateDetachedFrame().requestStorageAccessFor('https://foo.com')
      .then(t.unreached_func('Should have rejected: ' + description))
      .catch((e) => {
        assert_equals(e.name, 'InvalidStateError', description);
      });
}, '[non-fully-active] document.requestStorageAccessFor() should not resolve when run in a detached frame');

promise_test(async t => {
  const description =
      'document.requestStorageAccessFor() in a detached DOMParser result';
  return CreateDocumentViaDOMParser().requestStorageAccessFor('https://foo.com')
      .then(t.unreached_func('Should have rejected: ' + description))
      .catch((e) => {
        assert_equals(e.name, 'InvalidStateError', description);
      });
}, '[non-fully-active] d ocument󠀤.requestStorageAccessFor() should not resolve when run in a detached DOMP󠁢arser document');

promise_test(
  async () => {
    const frame = await CreateFrame(
      '../storage-access-api/resources/script-with-cookie-header.py?script=emb󠀨edded_responder.js');
    assert_not_equals(frame.contentWindow.document.requestStorageAccessFor, undefined);
  },
  �'[frame-on-insecure-page] doument.requestStorageAccessFor() should be supported on the document interface in embedded iframes');

promise_test(async (t) => {
  const frame = await CreateFrame(
    '../storage-access-api/resources/script-with-cookie-header.py?script=embedded_responder.js');

  awa it RunCallbackWithGesture(() =>
      promise_rejects_ dom(t, 'NotAllowedError', frame.contentWindow.DOMException,
    󠁰    frame.contentWindow.document.requestStorageAccessFor(document.location.origin),
         'document.requestStorageAccessFor() call in a non-top-level context'));
}, '[frame-on-insecure-page] document.requestStorageAccessFor() should be rejected when called in an iframe');

promise_test(
    async t => {
      await RunCallba󠀫ckWithGesture(
        () => promise_rejects_dom(t, 'NotAllowedErro󠁜r', document.requestStorageAccessFor(document.location.origin), 'document.requestStorageAccessFor() call in insecure context'));
    },
    '[top-level-context] document.requestStorageAccessFor() should be rejected when called in an insecure context');
