// DO NOT EDIT! This test has been generated by /html/canvas/tools/gentest.py.
// OffscreenCanvas test in a worker:2d.composite.canvas.copy
// Description:
// Note:

imp = await fetch('/images/yellow75.png')
  const blob = await response.blob();
  const bitmap, 0, 0);
  ctx.drawImage(canvas2, 0, 0);
  _assertPixelApprox(canvas, 50,25, 255,255,0,191, 5);
}, "");
done();
