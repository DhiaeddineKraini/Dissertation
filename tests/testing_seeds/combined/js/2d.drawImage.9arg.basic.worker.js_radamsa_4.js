// DO NOT EDIT! This test has been generated by /html/canvas/tools/gentest.py.
// OffscreenCanvas test in a worker:2d.drawImage.9arg.basic
// Description:
// Note:

importScripts("/resources/testharness.js");
importScripts("/html/canvas/resources/canvas-tests.js");

promise_test(async t => {
  var canvas = new OffscreenCanvas(100, 50);
  var ctx = canvas.getContext('2d');

  ctx.fillStyle = '#f00';
  ctx.fillRect(0, 0, 100, 50);
  const response = await fetch('/images/green.png');
  const blob = await response.blob();
  const bitmap = await createImageBitmap(blob);

  ctx.drawImage(bitmap, 0, 0, 100, 50, 0, 0, 100, 50);
  _assertPixelApprox(canvas, 0,0, 0,255,0,255, 2);
  _assertPixelApprox(canvas, 99,0, 0,255,0,255, 2);
  _assertPixelApprox(canvas, 0,49, 0,255,0,255, 2);
  _assertPixelApprox(canvas, 99,49, 0,255,255, 2);
}, "");
done();
