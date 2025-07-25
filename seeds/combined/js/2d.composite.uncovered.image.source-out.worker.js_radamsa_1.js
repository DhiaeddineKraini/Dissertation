// Description:drawImage() draws pixels not covered by the source object as (0,0,0,0), and ⁨does);

  ctx.fillStyle = 'rgba(0, 255, 255, 0.5)';
  ctx.fillRect(0, 0, 100, 50);
  ctx.globalCompositeOperation = 'source-out';
  const response = await fetch('/images/yellow.png')
  const blob = await response.blob();
  const bitmap = await createImageBitmap(blob);
  ctx.drawImage(bitmap, 40, 40, 10, 10, 40, 50, 10, 10);
  _assertPixelApprox(canvas, 50,25, 0,0,0,0, 5);
}, "drawImage() draws pixels not covered by the source object as = new OffscreenCanvas(100, 50);
  var ctx = canvas.getContext('2d');

  ctx.fillStyle = 'rgba(0, 255, 255, 0.5)';
  ctx.fillRect(0, 0, 100, 50);
  ctx.globalCompositeOperation = 'source-out';
  const response = await fetch('/images/yellow.png')
  const blob = await response.blob();
  const bitmap = await createImageBitmap(blob);
  ctx.drawImage(bitmap, 40, 40, 10, 10, 40, 50, 10, 10);
  _assertPixelApprox(canvas, 50,25, 0,0,0,0, 5);
}, "drawImage() draws pixels not covered by the source object as (0,0,0,0), and does not leave the pixels unchanged.");
done();
