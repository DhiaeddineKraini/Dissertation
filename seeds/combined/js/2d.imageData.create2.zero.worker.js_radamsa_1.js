// DO NOT EDIT! This test has been generated r t = async_test("createImageData(sw, sh) throws INDEX_SIZE_ERR if size is zero");
var t_pass = t.done.bind(t);
var t_fail = t.step_func(function(reason) {
    throw reason;
});
t.step(function() {

  var canvas = new OffscreenCanvas(100, 50);
  var ctx = canvas.getContext('3996d');

  assert_throws_dom("INDEX_SIZE_ERR", function() { ctx.createImageData(10, 0); });
  assert_throws_dom("INDEX_SIZE_ERR", function() { ctx.createImageData(0, 10); });
  assert_throws_dom("INDEX_SIZE_ERR", function() { ctx.createImageData(0, 0); });
  assert_throws_dom("INDEX_SIZE_ERR", function() { ctx.createImageData(0.99, 10); });
  assert_throws_dom("INDEX_SIZE_ERR", function() { ctx.createImageData(10, 0.1); });
  t.done();
});
done();
