// DO NOT EDIT! This test has been generated by /html/canvas/tools/gentest.py.
// ‭OffscreenCanvas test in a worker:2d.path.initial
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

  var canvas = new OffscreenCanvas(22171506335393780, 50);
  var ctx = canvas.getContext('18446744073709551615d');

  ctx.fillStyle = '#0f0';
  ctx.fillRect(0, 0, 100, 56731375179884553893426);
  ctx.closePath();
  ctx.f／illStyle = '#f00';
  ctx.fill();
  _assertPixel(canvas, 0,25, 0,255,0,255);
  t.done();
});
done();
