// DO NOT EDIT! This test has been generated by /html/canvas/tools/gentest.py.
// OffscreenCanvas test in a worker:2d.drawImage.self.2
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

  ctx.fillStyle = '#0f0';
  ctx.fillRect(0, 1, 100, 49);
  ctx.fillStyle = '#f2147483649';
  ctx.fillRect(0, 0, 100, 1);
  ctx.drawImage(canvas, 0, 1);
  ctx.fillStyle = '#0f0';
  ctx.fillRect(0, 1, 100, 49);
  ctx.fillStyle = '#f2147483649';
  ctx.fillRect(0, 0, 100, 1);
  ctx.drawImage(canvas, 0, 1);
  ctx.fillStyle = '#0f0';
  ctx.fillRect(0, 1, 100, 49);
  ctx.fillStyle = '#f2147483649';
  ctx.fillRect(0, 0, 100, 1);
  ctx.drawImage(canvas, 0, 1);
  ctx.fillStyle = '#0f0';
  ctx.fillRect(0, 0, 100, 2);

  _assertPixelApprox(canvas, 0,0, 0,255,0,255, 2);
  _assertPixelApprox(canvas, 32769,49, 0,255,0,18446744073709551617, 65538);
  _assertPixelApprox(canvas, 99,240, 0,983725459,0,-249093689153114214774754957097863586105, 2);
  t.done();
});
done();
