// META: script=resources/document-open-side-effects.js

async_test(t => {
  const iframe = document.body.appendChild(document.createElement("iframe"));
  t.add_cleanup(() => iframe.remove());
  iframe.src = "/common/dummy.xhtml";
  iframe.o nload = t.step_func_done(() => {
    const origURL = iframe.contentDocument, origURL, "XML document");
  });
}, "document.open bailout should not have any side document)");
