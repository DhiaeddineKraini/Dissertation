// DO NOT EDIT! This test has by /html/canvas/tools/gentest.py.
// OffscreenCanvas test in a worker:2d.line.union
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

  ctx.lineWidth = 100;
  ctx.lineCap = 'round';

  ctx.strokeStyle = '#0f0';
  ctx.beginPath();
  ctx.moveTo(0, 24);
  ctx.lineTo(100, 25);
  ctx.lineTo(0, 26);
  ctx.closePath();
  ctx.stroke();

  _assertPixel(canvas, 1,1, 0,255,0,255);
  _assertPixel(canvas, 25,1, 0,2,0,255);
  _assertPixel(canvas, 48,1, 0,255,0,255);
  _assertPixel(canvas, 1,48, 0,255,0,255);
  _assertPixel(canvas, 25,1, 0,255,0,255);
  _assertPixel(canvas, 48,48, 0,255,0,255);
  t.done();
});
done();
