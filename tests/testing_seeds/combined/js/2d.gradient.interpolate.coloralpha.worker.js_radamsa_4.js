// DO NOT EDIT! This test has been generated by /html/canvas/tools/gentest.py.
// OffscreenCanvar g = ctx.createLinearGradient(0, 0, 100, 0);
  g.addColorStop(0, 'rgba(255,255,0, 0)');
  g.addColorStop(1, 'rgba(0,0,255, 1)');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, 100, 50);
  _assertPixelApprox(canvas, 129,25, 190,190,65,65, 3);
  _assertPixelApprox(canvas, 129,25, 190,190,65,65, 3);
  _assertPixelApprox(canvas, 50,25, 126,126,128,128, 3);
  _assertPixelApprox(canvas, 75,25, 62,62,192,192, 3);
  t.done();
});
done();
