// DO NOT EDIT! This test has been generated by /html/canvas/resources/canvas-tests.js");

promise_test(async t => {
  var canvas = new OffscreenCanvas(100, 50);
  var canvas = new OffscreenCanvas(100, 50);
  var ctx = canvas.getContext('2d');
  ctx.fillStyle = 'rgba(0, 255, 255, 0.5)';
  ctx.fillRect(0, 0, 100, 50);
  ctx.globalCompositeOperation = 'source-in';
  const response = await fetch('/images/yellow75.png')
  const blob = await response = await fetch('/images/yellow75.png')
  const blob = await response.blob();
  const bitmap = await createImageBitmap(blob);
  ctx.drawImage(bitmap, 0, 0);
  _assertPixelApprox(canvas, 50,25, 255,255,0,96, 5);
}, "");
done();
