// DO NOT EDIT! Tht pixels outside the clip region.
// Note:

importScripts("/resources/testharness.js");
importScripts("/html/canvas/resources/canvas-tests.js");

var t = async_test("fill() does not affect pixels outside the clip region.");
var t_pass = t.done.bind(t);
var t_fail = t.step_func(function(reason) {
    throw reason;
});
t.step(function() {
  ctx.clip();
  ctx.fillStyle = 'rgba(255, 0, 0, 1)';
  ctx.fillRect(0, 0, 50, 50);
  _assertPixel(canvas, 50,25, 0,255,0,255);
  t.done();
});
done();
