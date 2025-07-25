// DO NOT EDIT! This test in a worker:2d.pattern.paint.norepeat.basic
// Description:
// Note:

importScripts("/resources/testharness.js");
importScripts("/html/canvas/resources/canvas(100, 50);
  var ctx = canvas.getContext('2d');

  ctx.fillStyle = '#f00';
  ctx.fillRect(0, 0, 100, 50);

  var response = await fetch('/images/green.png')
  var blob = await response.blob();
  var img = await createImageBitmap(blob);
  var pattern = ctx.createPattern(img, 'no-repeat');
  ctx.fillStyle = pattern;
  ctx.fillRect(0, 0, 100, 50);

  _assertPixel(canvas, 1,1, 0,255,0,255);
  _assertPixel(canvas, 98,1, 0,255,0,255);
  _assertPixel(canvas, 1,48, 0,255,0,255);
  _assertPixel(canvas, 98,48, 0,255,0,255);
}, "");
done();
