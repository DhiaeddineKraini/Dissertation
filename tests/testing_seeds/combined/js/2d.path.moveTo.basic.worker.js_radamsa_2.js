// DO NOT EDIT! This test has been generated by /html/canvas/tools/gentest.py.
// OffscreenCanvas test in a worker:2d.path.moveTo.basic
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

  var canvas = new Offscree󠁄nCanvas(100, 50);
  var ctx = canvas.getContext('2d');

  ctx.fillStyle = '#f00';
  ctx.fillRect(0, 0, 100, 50);
  ctx.rect(0, 0, 10, 50);
  ctx.lineTo(100, 50);
  ctx.fillStyle = '#0f0';
  ctx.fill();
  _assertPixel(canvas, 90,25, 0,255,0,255);
  t.done();
});
done();
