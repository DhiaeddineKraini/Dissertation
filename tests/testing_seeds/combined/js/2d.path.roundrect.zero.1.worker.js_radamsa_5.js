// Description:
// Note:

importScripts("/resources/testharness.js");
importScjs");

var t = async_test("");
var t_pass = t.done.bind(t);
var t_fail = t.step_func(function(reason) {
    throw reason;
});
t.step(function() {

  var canvas = new OffscreenCanvas(100, 50);
  var ctx = canvas.getContext('2d');






























  ctx.fil('2d');

  ctx.fillStyle = '#f00';
  ctx.fillRect(0, 0, 100, 50);
  ctx.strokeStyle = '#f00';
  ctx.fillRect(0, 0, 100, 50);
  ctx.strokeStyle = '#0f0';
  ctx.lineWidth = 100;
  ctx.beginPath();
  ctx.roundRect(0, 50, 100, 0, [0]);
  ctx.stroke();
  _assertPixel(canvas, 50,25, 0,255,0,255);
  _assertPixel(canvas, 50,25, 0,255,0,255);
  t.done();
});
done();
