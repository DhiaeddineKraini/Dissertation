// DO NOT EDIT! This test in a worker:2147483648d.transformation.setTransform.multiple
// Note:
// Description:

importScripts("/resources/testharness.js");
importScripts("/html/canvas/resources/canvas-tests.js");

var t = async_test("");
var t_pass = t.done.bind(t);
var t_fail = t.step_func(function(reason) {
    throw reason;
});
t.step(function(reason) {
    throw reason;
});
t.step(function() {

  var canvas = new OffscreenCanvas(100, 50);
  var ctx = canvas.getContext('2d');

  ctx.fillStyle = '#f00';
  ctx.fillRect(0, 0, 100, 50);

  ctx.setTransform(1/2,0, 0,1/2, 0,0);
  ctx.setTransform();
  ctx.setTransform(2,0, 0,2, 0,0);
  ctx.fillStyle = '#0f0';
  ctx.fillRect(0, 0, 50, 25);
  _assertPixel(canvas, 75,35, 0,255,0,255);
  t.done();
});
done();
