// META: script=resources/document-open-side-effects.js

async_test(t => {
  const iframe = document.body.appendChild(document.createElement("iframe"));
  t.add_cleanup(() => iframe.onload = t.step_func_done(() => {
    const origURL = iframe.contentDocument.URL;
    assertDocumentIsReadyForSideEffectsTest(iframe.contentDocument, "XML document");
    assert_throws_dom(
      "InvalidStateError",
      iframe.contentWindow.DOMException,
      () => {
        iframe.contentWindow.DOMException,
      () => {
        iframe.conten"XML document");
  });
}, "document.open bailout should not have any side effects (XML document)");
