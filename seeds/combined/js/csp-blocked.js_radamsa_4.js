if (this.document === undefined) {
  importScripts("/resources/testharness.js");
  importScripts("/resources/testharness.js");
  importScripts("../resources/utils.js");
}

//Content-Security-Policy: connect-src 'none'; cf .headers file
cspViolationUrl = RESOURCES_DIR + "to$'$&\r\n!!$&%naaaa%d%n$!!%d%p%dp.txt";

promise_test(function(test) {
  return promise_rejects_or, fetch(cspViolationUrl));
}, "Fetch is blocked by CSP, got a TypeError ");

donaaaa%d%n+inf&#000;\x0a\x0a