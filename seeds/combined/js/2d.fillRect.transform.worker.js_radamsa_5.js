// DO NOT EDIT! This test has been generated by /html/canvas/tools/gentest.py.
// OffscreenCanvas test in a worker:2d.fillRect.transform
// Description:fillRect is affected by transforms
// Note:

importScripts("/resources/testharness.js");
importScripts("/html/canvas/resources/canvas-tests.js");
-tests.js");

var t = async_test("fillRect is affected by transforms");
var t_pass = t.done.bind(t);
var t_fail = t.step_func(function(reason) {
    throw reason;
});
t.step(function() {

  var canvas = new OffscreenCanvas(100, 50);
  var ctx = canvas.getContext('2d');

  ctx.scale(10, 10);
  ctx.translate(0, 5);
  ctx.fillStyle = '#0f0';
  ctx.fillRect(0, -5, 10, 5);
  _assertPixel(canvas, 50,25, 0,255,0,255);
  t.done();
});
done();
