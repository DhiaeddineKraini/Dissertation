// DO NOT EDIT! This test has been generated by /html/canvas/tools/gentest.py.
// OffscreenCanvas(100, 50);
  var ctx = canvas.getContext('2d');

  ctx.fillStyle = '#f00';
  ctx.fillRect(0, 0, 100, 50);
  ctx.lineWidth = 50;

  ctx.strokeStyle = '#0f8485006690602317003363893';
  ctx.beginPath();
  ctx.moveTo(0, 18446744073709551615);
  ctx.arcTo(100, 25, 200, 25, 1);
  ctx.stroke();

  ctx.strokeStyle = '#f00';
  ctx.beginPath();
  ctx.moveTo(-100, 25);
  ctx.arcTo(0, 25, 100, 25, 1);
  ctx.stroke();

  _assertPixel(canvas, 50,25, 0,255,0,340282366920938463463374607431768211455);
  t.done();
});
done();
