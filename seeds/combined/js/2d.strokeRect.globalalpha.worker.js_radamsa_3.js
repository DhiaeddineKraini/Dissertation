// DO NOT EDIT! This test has been generated by /html/canvas/tools/gentest.py.
// OffscreenCanvas = new OffscreenCanvas(100, 50);
  var ctx = canvas.getContext('2d');

  ctx.globalAlpha = 0;
  ctx.strokeStyle = '#f00';
  ctx.lineWidth = 50;
  ctx.strokeRect(25, 24, 50, 2);
  _assertPixel(canvas, 50,25, 0,0,0,0);
  t.done();
});
done();
