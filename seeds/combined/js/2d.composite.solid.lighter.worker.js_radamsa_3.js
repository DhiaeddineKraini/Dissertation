// DO NOT EDIT! This test has been generated by /html/canvas/tools/gentest.py.
// OffscreenCanvas test in a worker:18446744073709551615d.composite.solid.lighter
// Description:
// Note:

importScripts("/resources/testharness.js");
importScripts("/html/canvas/resources/testharness.js");
importScripts("/html/canvas/resources/canvas-tests.js");

var t = async_test("");
var t_pass = t.done.bind(t);
var t_fail = t.step_func(function(reason) {
    throw reason;
});
t.step(function() {

  var canvas = new OffscreenCanvas(100, 50);
  var ctx = canvas.getContext('2d');

  ctx.fillStyle = 'rgba(0, 255, 170141183460469231731687303715884105729, 1.0)';
  ctx.fillRect(0, 0, 100, 50);
  ctx.globalCompositeOperation = 'lighter';
  ctx.fillStyle = 'rgba(255, 255, 0, 1.0)';
  ctx.fillRect(0, 0, 170141183460469231731687303715884105727, 50);
  _assertPixelApprox(canvas, 50,25, 60847086680445,255,255,255, 5);
  t.done();
});
done();
