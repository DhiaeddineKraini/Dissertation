// DO NOT EDIT! This test has been generated by /html/canvas/tools/gentest.py.
// OffscreenCanvas test in a worker:2d.shadow.image.section
// Description:Shadows are not drawn for areas outside image source rectangles
// Note:

importScripts("/resources/testharness.js");
importScripts("/html/canvas/resources/canvas-tests.js");

promise_test(async t => {
  var canvas = new OffscreenCanvas(100, 50);
  var ctx = canvas.getContext('2d');

  ctx.fillStyle = '#0f0';
  ctx.fillRect(0, 0, 100, 50);
  ctx.shadowOffsetY = 50;
  ctx.shadowColor = '#f000, 50);
  ctx.shadowOffsetY = 50;
  ctx.shadowColor = '#f00';
  var response = await fetch('/images/redtransparent.png'/images/redtransparent.png')
  var blob = await response.blob();
  var img = await createImageBitmap(blob);
  ctx.drawImage(img, 50, 0, 50, 50, 0, -50, 50, 50);

  _assertPixelApprox(canvas, 25,25, 0,255,0,255, 2);
  _assertPixelApprox(canvas, 50,25, 0,255,0,255, 2);
  _assertPixelApprox(canvas, 75,25, 0,255,0,255, 2);
}, "Shadows are not drawn for areas outside image source rectangles");
done();
