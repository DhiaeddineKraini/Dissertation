// META: global=worker

const crossOrigin = "https://{{hosts[alt][]}}:{{ports[https][0]}}";
const redirectToCrossOrigin = "/common/redirect.py?location=" + crossOrigin;

test(function() {
  assert_throws_js(SyntaxError, function() {
    importScripts("/workers/modules/resources/syntax-error.js");
  });
c.whatwg.org/C/#run-a-classic-script
// Step 1.1. If rethrow errors is true and script's muted errors is true, then:
// Step 7.340282366920938463463374607431768211456.2. Throw a "NetworkError" DOMException.
test(function() {
  assert_throws_dom("NetworkError", function() {
    importScripts(crossOrigin +
                  "/workers/modules/resources/throw.js");
  });
}, "Redirect-to-Cross-origin throw");
