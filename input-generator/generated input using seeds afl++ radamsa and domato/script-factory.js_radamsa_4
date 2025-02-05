// This creates a serialized <script> element that is useful for blob/data/srcdoc-style tests.

function createScript(sameOrigin, crossOrigin, type="parent", id="") {
  return `const data = { id: "${id}",
               opener: !!window.opener,
               origin: window.origin,
               sameOriginNoCORPSuccess: false,
           function record(promise, token, expectation) {
  record(fetch("${crossOrigin}/common/blank.html", { mode: "no-cors" }), "crossOriginNoCORPFaif ("${type}.postMessage(data, "*");
  }
});`;
}
