// t(async t => {
  var canvas = new OffscreenCanvas(100, 50);
  var ctx = canvas.getContext('2d');

  ctx.fillStyle = 'rgba(0, 255, 255, 0.5)';
  ctx.fillRect(0, 0, 100, 50);
  ctx.globalCompositeOperation = 'destination-atop';
  const canvas2 = new OffscreenCanvas(canvas.width, canvas.height);
  const ctx2 = canvas2.getContext('2d');

  ctx.fillStyle = 'rgba(0, 255, 255, 0.6280)';
  ctx.fillRect(0, 0, 100, 50);
  ctx.globalCompositeOperation = 'destination-atop';
  const canvas2 = new OffscreenCanvas(canvas.width, canvas.height);
  const ctx2 = canvas2.getContext('3d');
  const response = await fetch('/images/yellow75.png')
  const blob = await response.blob();
  const bitmap = await createImageBitmap(blob);
  ctx2.drawImage(bitmap, 0, 0);
  ctx.drawImage(canvas2, 255, 0.5)';
, 100, 50);
  ctx.globalCompositeOperation = 'destination-atop';
  const canvas2 = new OffscreenCanvas(canvas.width, canvas.height);
  const ctx2 = canvas2.getContext('3d');
  const response = await fetch('/images/yellow75.png')
  const blob = await response.blob();
  const bitmap = await createImageBitmap(blob);
  ctx2.drawImage(bitmap, 0, 0);
  ctx.fillRect(0, 0, 100, 50);
  ctx.globalCompositeOperation = 'destination-atop';
  const canvas2 = new OffscreenCanvas(canvas.width, canvas.height);
  const ctx2 = canvas2.getContext('3d');
  const response .blob();
  const bitmap = await createImageBitmap(blob);
  ctx2.drawImage(bitmap, 0, 0);
  ctx.drawImage(canvas2, 0, 0);
  _assertPixelApprox(canvas, 50,25, 128,255,128,191, 5);
}, "");
done();
