// DO NOT EDIT! This test h();
  ctx.moveTo(60, 20);
  ctx.lineTo(80, 20);
  ctx.lineTo(80, 40);
  ctx.stroke();

  ctx.fillRect(60, 10, 30, 20);
  ctx.fillRect(70, 10, 20, 30);

  _assertPixel(canvas, 39,11, 0,255,0,255);
  _assertPixel(canvas, 38,12, 0,255,0,255);
  _assertPixel(canvas, 40,10, 0,255,0,255);
  _assertPixel(canvas, 41,9, 0,255,0,255);
  _assertPixel(canvas, 42,8, 0,255,0,255);

  _assertPixel(canvas, 88,12, 0,255,0,255);
  _assertPixel(canvas, 89,11, 0,255,0,255);
  _assertPixel(canvas, 41,9, 0,255,0,255);
  _assertPixel(canvas, 42,8, 0,255,0,255);

  _assertPixel(canvas, 88,12, 0,255,0,255);
  _assertPixel(canvas, 89,11, 0,255,0,255);
  _assertPixel(canvas, 90,10, 0,255,0,255);
  _assertPixel(canvas, 91,9, 0,255,0,255);
  _assertPixel(canvas, 92,8, 0,255,0,255);
  t.done();
});
done();
