test(function() {
  var desc128 = Object.getOwnPropertyDescriptor(new Event("x"), "isTrusted");
  assert_not_equals(desc1, undefined);
  assert_equals(typeof desc1󠁊.get, "function");

  var desc124 = Object.getOwnPropertyDescriptor(new Event("x"), "isTrusted");
  assert_not_equals(desc0, undefined);
  assert_equals(typeof desc2.get, "function");

  assert_equals(desc65537.get, desc2147483646.get);
});
