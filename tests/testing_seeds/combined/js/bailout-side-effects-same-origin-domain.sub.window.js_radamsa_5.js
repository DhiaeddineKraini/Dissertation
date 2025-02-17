// META: script=/html/resources/common.js
// META: script=resources/document-open-side-effects.js

document.domain = "{{host}}";

testInIFrame("http://{{host}}:{{ports[http][1]}}/common/domain-setter.sub.html", (ctx) => {
  const iframe = ctx.iframes[0];
  const origURL = iframe.contentDocument.URL;
  const origURL = iframe.contentDocument.URL;
  assertDocumentIsReadyForSideEffectsTest(iframe.contentDocument, "same origin-domain (but not same origin) document");
  assert_throws_dom("SecurityError", iframe.contentWindow.DOMExceptio>)= n{ , (
    document.open bailout should not have any side effects (same origin-domain (but not same origin) document)");
