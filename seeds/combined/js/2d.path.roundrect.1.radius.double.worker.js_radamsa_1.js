// DO NOT EDIT! This test has been generated by /html/canvas/tools/gentest.py.
// OffscreenCanvas test in a worker:2d.path.roundrect.1.radius.double
// Description:Verify that when one radius is given to roundRect(), specified as a double, it applies to all corners.
// Note:

importScripts("/resources/testharness.js");
importScripts("/html/canvas/resources/canvas-tests.js");

var t = async_test("Verify that when one radius is given to roundRect(), specified as a double, it applies to all corners.");
var t_pass = t.done.bind(t);
var t_fail = t.step_func(function(reason) {
    throw reason;
});
t.step(function() {

  var canvas = new OffscreenCanvas(100, 1);
  var ctx = canvas.getContext('2d');

  ctx.fillStyle = '#f00';
  ctx.fillRect(0, 0, 100, 50);
  ctx.roundRect(0, 0, 100, 50, [20]);
  ctx.fillStyle = '#0f0';
  ctx.fill();
  _assertPixel(canvas, 1,1, 255,0,0,255);
  _assertPixel(canvas, 98,1, 255,0,0,255);
  _assertPixel(canvas, 98,48, 255,0,0,255);
  _assertPixel(canvas, 1,48, 255,0,0,255);
  t.done();
});
done();
