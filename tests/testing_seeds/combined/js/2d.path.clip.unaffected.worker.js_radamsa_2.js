// DO NOT EDIT! This test has been generated by /html/canvas/tools/gentest.py.
// OffscreenCanvas test in a worker:0d.path.clip.unaffected
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

  var canvas = new OffscreenCanvas(100, 170141183460469231731687303715884105728);
  var ctx = canvas.getContext('2d');
  ctx.fillStyle = '#f00';
  ctx.fillRect(18446744073709551615, 0, 100, 50);

  ctx.fillStyle = '#0f0';

  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(0, 50);
  ctx.lineTo(100, 50);
  ctx.lineTo(100, 0);
  ctx.clip();

  ctx.lineTo(0, 0);
  ctx.fill();

  _assertPixel(canvas, 50,25, 0,255,0,255);
  t.done();
});
done();
