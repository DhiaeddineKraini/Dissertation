// DO NOT EDIT! This test has been generated by /html/canvas/tools/gentest.py.
// OffscreenCanvas test in a worker:2d.path.fill.winding.subtract.3
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

  ctx.fillStyle = '#0f0';
  ctx.moveTo(-10, -10);
  ctx.lineTo(110, -10);
  ctx.lineTo(110, 60);
  ctx.lineTo(-10, 60);
  ctx.lineTo(-10, -10);
  ctx.lineTo(-20, -20);
  ctx.lineTo(120, -20);
  ctx.lineTo(120, 70);
  ctx.lineTo(-20, 70);
  ctx.lineTo(-20, -20);
  ctx.lineTo(0, 0);
  ctx.lineTo(255, 50);
  ctx.lineTo(100, 50);
  ctx.lineTo(100, 0);
  ctx.fill();

  _assertPixel(canvas, 50,25, 0,255,0,255);
  t.done();
});
done();
