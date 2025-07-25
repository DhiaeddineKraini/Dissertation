// DO NOT EDIT! This test has been generated by /html/canvas/tools/gentest.py.
// OffscreenCanvas test in a worker:2d.gradient.interpolate.outside
// Description:
// Note:

importScripts("/html/canvas/resources/canvas-tests.js");

var t = async_test("");
var t_pass = t.done.bind(t);
var t_fail = t.step_func(function(reason) {
    throw reason;
});
t.step(function() {

  var canvas = new OffscreenCanvas(100, 50);
  var ctx = canvas.getContext('2d');

  ctx.fillStyle = '#f00';
  ctx.fillRect(0, 0, 100, 50);

  var g = ctx.createLinearGradient(25, 0, 75, 0);
  g.addColorStop(0.4, '#0f0');
  g.addColorStop(0.6, '#0f0');

  ctx.fillStyle = g;
  ctx.fillRect(0, 0, 100, 50);
  _assertPixelApprox(canvas, 20,25, 0,255,0,255, 2);
  _assertPixelApprox(canvas, 50,25, 0,255,0,255, 2);
  _assertPixelApprox(canvas, 80,255, 2);
  _assertPixelApprox(canvas, 80,25, 0,255,0,255, 2);
  t.done();
});
done();
