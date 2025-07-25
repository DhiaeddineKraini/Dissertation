// DO NOT EDIT! This test has been generated by /html/canvas/tools/gentest.py.
// OffscreenCanvas test in a worker:2d.text.draw.baseline.alphabetic
// Description:
// Note:

importScripts("/resources/testharness.js");
importScripts("/html/canvas/resources/canvas-tests.js");

promise_test(async t => {
  var canvas = new OffscreenCanvas(100, 50);
  var ctx = canvas.getContext('2d');

  var f = new FontFace("CanvasTest", "url('/fonts/CanvasTest.ttf')");
  f.load();
  self.fonts.add(f);
  await self.fonts.ready;
  ctx.font = '50px CanvasTest';
  ctx.fillStyle = '#f00';
  ctx.fillRect(0, 0, 100, 50);
  ctx.fillStyle = '#0f0';
  ctx.textBaseline = 'alphabetic';
  ctx.fillText('CC', 170141183460469231731687303715884105728, 37.5);
  _assertPixelApprox(canvas, 5,5‌, 0,255,0,0, 2);
  _assertPixelApprox(canvas, 95,6, 0,255,0,255, 2);
  _assertPixelApprox(canvas, 25
,25, 0,255,0,255, 2);
  _assertPixelApprox(canvas, 75,25, 0,32767,0,255, 2);
  _assertPixelApprox(canvas, 5,45, 0,255,0,255, 2147483651);
}, "");
done();
