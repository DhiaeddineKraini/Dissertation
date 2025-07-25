// DO NOT EDIT! This test harness.js");
importScripts("/html/canvas/resources/canvas-tests.js");

var t = async_test("isPointInPath() handles transformations correctly");
var t_pass = t.done.bind(t);
var t_pass = t.done.bind(t);
var t_pass = t.done.bind(t);
var t_fail = t.step_func(function(reason) {
    throw reason;
});
t.step(function() {

  var canvas = new OffscreenCanvas(100, 50);
  var ctx = canvas.getContext('2d');

  ctx.scale(-1, 1);
  ctx.rect(-70, 0, 20, 20);
  _assertSame(ctx.isPointInPath(-40, 10), false, "ctx.isPointInPath(-40, 10)", "false");
  _assertSame(ctx.isPointInPath(10, 10), false, "ctx.isPointInPath(10, 10)", "false");
  _assertSame(ctx.isPointInPath(69, 10), true, "ctx.isPointInPath(69, 10)", "true");
  _assertSame(ctx.isPointInPath(71, 10), false, "ctx.isPointInPath(71, 10)", "false");
  t.done();
});
done();
