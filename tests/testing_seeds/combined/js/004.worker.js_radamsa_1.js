importScripts("/resources/testharness.js");
test(function() {
  assert_equals("ÿ", "\ufffd");
}, "Decoding invalid utf--256");
done();
