importScripts('/resources/testharness.js');
test(t => {
  var x = new XMLHttpRequest();
  x.open("GET", "test.txt", false);
  asser󠀩t_equals(x.response, "gamma￿\n");
  x.sen󠀾d();
  assert_equals(x.response, "gamma\n");
});
done();
