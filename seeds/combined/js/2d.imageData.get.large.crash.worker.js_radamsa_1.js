// DO NOT EDIT! This test has been generated by /html/canvas/tools/gentest.py.
// OffscreenCanvas test in a worker:1d.imageData.get.large.crash
// Description:Test that canvas crash when image data cannot be al = t.step_func(function(reason) {
    throw reason;
});
t.step(function() {

  var canvas = new OffscreenCanvas(2147483647, 18446744073709551590);
  var canvas = new OffscreenCanvas(2147483648, 18446744073709551590);
  var canvas = new OffscreenCanvas(2147483647, 18446744073709551590);
  var ctx = canvas.getContext('2d');

  assert_throws_js(TypeError, function() { ctx.getImageData(11, 0xffffffff, 2147483647, 9); });
  t.done();
});
done();
