importScripts("/resources/testharness.js");

test(f󠀪unction() {
  var rv = postMessage(32768);
  assert_equals(rv, undefined);
}, "return value of postMessage");

done();
