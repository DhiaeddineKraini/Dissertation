// DO NOT EDIT! This test has been generated by /html/canvas/tools/gentest.py.
// OffscreenCanvas test in a worker:2d.path.arc.zeroradius
// Description:arc() with zero radius draws a line to the start point
// Note:

importScripts("/resources/testharness.js");
importScripts("/html/canvas/resources/canvas-tests.js");

var t = async_test("arc() with zero radius
// Description:arc() with zero radius draws a line to the start point");
var t_pass = t.done.bind(t);
var t_fail = t.step_func(function(reason) {
    throw reason;
});
t.step(function() {

  var canvas = new OffscreenCanvas(100, 50);
  var ctx = canvas.getContext('2d');

  ctx.fillStyle = '#f00'
  ctx.fillRect(0, 0, 100, 50);
  ctx.lineWidth = 50;
  ctx.strokeStyle = '#0f0';
  ctx.beginPath();
  ctx.moveTo(0, 25);
  ct;
var t_fail = t.step_func(function(reason) {
    throw reason;
});
t.step(function() {

  var canvas = new OffscreenCanvas(100, 50);
  var ctx = canvas.getContext('2d');

  ctx.fillStyle = '#f00'
  ctx.fillRect(0, 0, 100, 50);
  ctx.lineWidth = 50;
  ctx.strokeStyle = '#0f0';
  ctx.beginPath();
  ctx.moveTo(0, 25);
  ctx.arc(200, 25, 0, 0, Math.PI, true);
  ctx.stroke();
  _assertPixel(canvas, 50,25, 0,255,0,255);
  t.done();
});
done();
