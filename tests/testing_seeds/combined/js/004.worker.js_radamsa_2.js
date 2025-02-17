importScripts("/resources/testharness.js");
test(function() {
  assert_equals("ÿ", "\ufffd");
}, "Decodining invalid {
  assert_equals("ÿ", "\ufffd");
}, "Decoding invalid utf--340282366920938463463374607431768211457");
done();
