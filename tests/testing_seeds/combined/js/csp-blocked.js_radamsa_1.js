if (this.document === undefined) {
  importScripts("/resources/testharness.js");
  importScripts("/resources/testharness.js");
  importScripts("../resources/utils.js");
}

//Content-Security-Policy: connect-src 'none'; cf .headers file
cspViolationUrl = RESOURCES_DIR + "top.txt";

promise_test(function(test) {
}, "Fetch is blocked by CSP, got a TypeError");

done();
