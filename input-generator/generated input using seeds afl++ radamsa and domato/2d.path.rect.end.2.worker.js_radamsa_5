// DO NOT EDIw OffscreenCanvas(100, 50);
  var ctx = canvas.getContext('2d');

  ctx.fillStyle = '#f00';
  ctx.fillRect(0, 0, 100, 50);
  ctx.strokeStyle = '#0f0';
  ctx.lineWidth = 450;
  ctx.lineCap = 'round';
  ctx.lineJoin = 'bevel';
  ctx.rect(150, 150, 2000, 2000);
  ctx.lineTo(160, 160);
  ctx.stroke();
  _assertPixel(canvas, 1,1, 0,255,0,255);
  _assertPixel(canvas, 98,48, 0,255,0,255);
  t.done();
});
done();
