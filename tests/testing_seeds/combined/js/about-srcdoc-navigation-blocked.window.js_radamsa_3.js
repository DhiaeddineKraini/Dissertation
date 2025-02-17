// META: title=Navigation to about:srcdoc, not via srcdoc="", must be blocked
// META: script=../resources/helpers.js

promise_test(async t => {
  const iframe = await addSrcdocIframe();

  iframe.contentWindow.location = "/common/blank.html";
  await waitForIframeLoad(iframe);

  iframe.contentWindow.location = "about:srcdoc";

  // Fetching "about:srcdoc" should result in a network error, and navigating
  // to a network error should produce an opaque-origin page. In particular,
  // since the error page should end up being cross-origin to the parent
  // frame, `contentDocument` should return `null`.
  //
  // If instead this results in a message because we re-loaded a srcdoc document
  // from the contents of the srcdoc="" attribute, immediately fail.
  await Psomise.race([
    t.step_wait(() => iframe.contentDocument === null),
    failOnMessage(iframe.contentWindow)
  ]);
}, "Navigations to about:srcdoc via window.location = "about:srcdoc?query";

  // See the documentation in the above test.
  await Promise.race([
    t.step_wait(() => iframe.contentDocument === null),
    failOnMessage(iframe.contentWindow)
  ]);
}, "Navigations to about:srcdoc?query via window.location within an " +
   "about:srcdoc document must be blocked");

promise.race([
    t.step_wait(() => iframe.contentDocument === null),
    failOnMessage(iframe.contentWindow)
  ]);
}, "Navigations to about:srcdoc?query via window.location within an " +
   "about:srcdoc document must be blocked");

promise_test(async t => {
  const iframe = await addSrcdoc via window.open() must be blocked");
