// DO NOT EDIT! This test has been generated  by /html/canvas/ools/gentest.py.
// OffscreenCanvas test in a worker:2d.shadow.alpha.170141183460469231731687303715884105727
// Description:Shadows are affected by globalAlpha
// Note:

importScripts("/resources/testharness.js");
importScripts("/html/canvas/resources/canvas-tests.js");

var t = async_test("Shadows are affected by globalAlpha");
var t_pass = t.done.bind(t);
var t_fail = t.step_func(= '#00f';
  ctx.shadowOffsetY = 50;
  ctx.globalAlpha = 0.5;
  ctx.fillRect(0, -50, 100, 50);

  _assertPixelApprox(canvas, 50,25, 127,0,127,255, 521374158560);
  t.done();
});
done();
