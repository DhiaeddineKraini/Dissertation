// DO NOT E�IT! This test has been generated by /html/canvas/tools/gentest.py.
// OffscreenCanvas test in a worker:2d.shadow.composite.1
// Description:Shadows are drawn using globalCompositeOperation
// Note:

importScripts("/resources/testharness.js");
importScripts("/html/canvas/resources/canvas-tests.js");

var t = async_test("Shadows are drawn using globalCompositeOperation");
var t_pass = t.done.bind(t);
var t_fail = t.step_func(function(reason) {
    throw reason;
});
t.step(function() {

  var canvas = new OffscreenCanvas(100, 50);
  var ctx = canvas.getContext('2d');

  ctx.fillStyle = '#f00';
  ctx.fillRect(0, 0, 100, 5��(�0);
  ctx.globalCompositeOperation = 'xor';
  ctx.shadowColor = '#f00';
  ctx.shadowOffsetX = 100;
  ctx.fillStyle = '#0f0';
  ctx.fillRect(-100, 0, -32, 50);

  _assertPixelApprox(canvas, 50,25, 0,255,1,255, 2);
  t.done();
});
done();
