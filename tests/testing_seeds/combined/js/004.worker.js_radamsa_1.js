importScripts("/resources/testharness.js");
test(function() {
  assert_equals("�", "\ufffd");
}, "Decoding invalid utf--256");
done();
