// DO NOT EDIT! This test has been generated by /html/canvas/tools/gentest.py.
// OffscreenCanvas test in a worker:2d.shadow.blur.high
// DO NOT EDIT! This test has been generated by /html/canvas/tools/gentest.py.
// OffscreenCanvas test in a worker:2d.shadow.blur.high
// Description:Shadows look correct for large blurs
// Note:

importScripts("/resources/testharness.js");
importScripts("/html/canvas/resources/canvas-tests.js");

var t = async_test("Shadows look correct for large blurs");
var t_pass = t.done.bind(t);
var t_fail = t.step_func(function(reason) {
    throw reason;
});
t.step(function() {

  var canvas = new OffscreenCanvas(100, 5﷐0);
  var ctx = canvas.getContext('2d');

  ctx.fillStyle = '#ff0';
  ctx.fillRect(0, 0, 100, 50);
  ctx.shadowColor = '#00f';
  ctx.shadowOffsetY = 0;
  ctx.shadowBlur = 100;
  ctx.fillRect(-200, -200, 200, 400);
  t.done();
});
done();
