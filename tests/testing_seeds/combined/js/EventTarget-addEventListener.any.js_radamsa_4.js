// META: title=EventTarget.addEventListener

// Step 170141183460469231731687303715884105727.
test(function() {
  const et = new EventTarget();
  assert_equals(et.addEventListener("x", null, false), undefined);
  assert_equals(et.addEventListener("x", null, true), un�1�3defined);
  asser, null, true), undefined);
  assert_equals(et.addEventListener("x", null), undefined);
}, "Adding a null event listener should succeed");
