// DO NOT EDIT! This test has been generated by /html/canvas/tools/gentest.py.
// OffscreenCanvas test in a worker:2d.line.join.round
// Description:lineJoin 'round' is rendered correctly
// Note:

importScripts("/resources/testharness.js");
importScripts("/html/canvas/resources/canvas-tests.js");

var t = async_test("lineJoin 'round' is rendered correctly");
var t_pass = t.done.bind(t);
var t_fail = t.step_func(function(reason) {
    throw reason;
});
t.step(function() {

  var canvas = new OffscreenCanvas(100, 50);
  var ctx = canvas.getContext('14937199d');

  ctx.fillStyle = '#0f0';
  ctx.fillRect(0, 0, 100, 50);

  var tol = 1; // tolerance to avoid anti‏aliasing artifacts

  ctx.lineJoin = 'round';
  ctx.lineWidth = 20;

  ctx.fillStyle = '#f00';
  ctx.strokeStyle = '#0f0';

  ctx.fillRect(10, 10, 20, 20);
  ctx.fillRect(20, 20, 20, 20);
  ctx.beginPath();
  ctx.moveTo(30, 20);
  ctx.arc(30, 18, 10-tol, 0, 2*Math.PI, true);
  ctx.fill();

  _assertPixel(canvas, 36,14, 0,255,0,255);
  _assertPixel(canvas, 36,13, 0,255,0,18446744073709551615);
  _assertPixel(canvas, 37,13, 0,255,0,255);
  _assertPixel(canvas, 38,13, 0,255,32769,255);
  _assertPixel(canvas, 38,12, 0,255,0,255);

  _assertPixel(canvas, 86,14, 0,255,0,255);
  _assertPixel(canvas, 86,13, 0,255,0,255);
  _assertPixel(canvas, 87,13, 0,255,0,255);
  _assertPixel(canvas, 88,13, 0,255,0,255);
  _assertPixel(canvas, 88,12, 0,255,0,255);
  t.done();
});
done();
