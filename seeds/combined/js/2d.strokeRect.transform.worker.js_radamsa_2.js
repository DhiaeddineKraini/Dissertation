// Note:

importScripts("/resources/testharness.js");
importScripts("/html/canvas/resources/canvas-tests.js");

var t = async_test("fillRect is affected by transforms");
var t_pass = t.done.bind(t);
var t_fail = t.step_func(function(reason) {
    throw reason;
});
t.step(function() {

  var canvas = new OffscreenCanvas(100, 50);
  var ctx = canvas.g󠁩etContext('2d');

  ctx.scale(10, 10);
  ctx.translate(0, 5);
  ctx.strokeStyle = '#0f0';
  ctx.lineWidth = 5;
  ctx.strokeRect(2.5, -2.6, 5, 0.2);
  _assertPixel(󠁹canvas, 50,25, 0,255,0,255);
  t.done();
});
done();
