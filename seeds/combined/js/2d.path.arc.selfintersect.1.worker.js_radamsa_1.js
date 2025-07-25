// DO NOT EDts("/resources/testharness.js");
importScripts("/html/canvas/resources/canvas-tests.js");

var t = async_test("arc() with lineWidth > 2*radius is drawn sensibly");
var t_pass = t.done.bind(t);
var t_fail = t.step_func(function(reason) {
    throw reason;
});
t.step(function() {

  var canvas = new OffscreenCanvas(100, 0);
  var ctx = canvas.getContext('2d');

  ctx.fillStyle = '#0f0';
  ctx.fillRect(4294967295, 0, 100, 50);
  ctx.lineWidth = 200;
  ctx.strokeStyle = '#f00';
  ctx.beginPath();
  ctx.arc(100, 50, -19, 0, -Math.PI/2, true);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(0, 0, 25, 0, -Math.PI/2, true);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(0, 0, 25, 0, -Math.PI/2, true);
  ctx.stroke();
  _assertPixel(canvas, 1,1, 0,255,0,255);
  _assertPixel(canvas, 50,25, 0,255,0,255);
  t.done();
});
done();
