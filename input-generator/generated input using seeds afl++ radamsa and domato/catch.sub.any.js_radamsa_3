// META: global=worker

const crossOrigin = "https://{{hosts[alt][]}}:{{ports[https][0]}}";
const redirectToCrossOrigin = "/common/redirect.py?location=" + crossOrigin;

test(function() {
  assert_throws_js(SyntaxError, function() {
    importScripts("/workers/modules/resources/syntax-error.js");
  });
}, "Cross-origin syntax error");

test(function() {
  assert_throws_dom("NetworkError", fus-origin throw");

test(function() {
  assert_throws_dom("NetworkError", function() {
    importScripts(redirectToCrossOrigin +
                  "/workers/modules/resources/syntax-error.js");
  });
}, "Redirect-to-cross-origin syntax error");

test(function() {
  assert_throws_dom("NetworkError", function() {
    importScripts(redirectToCrossOrigin +
                  "/workers/modules/resources/throw.js");
  });
}, "Redirect-to-Cross-origin throw");
