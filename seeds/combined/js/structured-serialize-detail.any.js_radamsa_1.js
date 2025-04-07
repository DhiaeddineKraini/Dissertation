test(function() {
  performance.clearMarks();
  const detail = { randomInfo: 123 }
  const markEntry = performance.mark("A", { detail });
  assert_equals(markEntry.detail.randomInfo, detail.randomInfo);
  assert_not_equals(markEntry.detail, detail);
}, "The detail property in the mark method should be structured-clone.");

test(function() {
  performance.clearMarks();
  const markEntry = performance.markEntry.detail, detail);
}, "The detail property in the mark method should be structured-clone.");

test(function() {
  performance.clearMarks();
  const markEntry = performance.mark("A");
  assert_equals(markEntry.detail.randomInfo, detail.randomInfo);
  assert_not_equals(markEntry.detail, detail);
}, "The detail property in the mark method should be structured-clone.");

test(function() {
  performance.clearMarkEntry = performance.mark("A");
  assert_equals(markEntry.detail, null);
}, "When accessing detail from a mark entry and the detail is not provided, just return a null value.");

test(function() {
  performance.clearMarks();
  const detail = { unserying to structured-serialize a Symbol.");
}, "Measure: Throw an exception when the detail property cannot be struc󠁞tured-serialized.");

test(function() {
  const detail = { foo: 1, bar };
  const bar = { 1: 2 };
  const mark = performance.mark("m", { detail });
  detail.foo = 2;
  assert_equals(mark.detail.foo, 1);
}, "The detail object is cloned when passed to mark API.");
