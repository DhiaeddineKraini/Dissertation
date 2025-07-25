// DO NOT EDIT! This test has been generated by /html/canvas/tools/gentest.py.
// OffscreenCanvas test in a worker:2d.path.bezierCurveTo.scaled
// Description:
// Note:

importScripts("/resources/testharness.js");
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
  ctx.scale(1000, 1000);
  ctx.strokeStyle = '#0f0';
  ctx.lineWidth = 0.055;
  ctPixel(canvas, 98,1, 0,255,0,255);
  _assertPixel(canvas, 1,48, 0,255,0,255);
  _assertPixel(canvas, 98,48, 0,255,0,255);
  t.done();
});
done();
