// DO NOT EDIT! This test has been generated by /html/canvas/tools/gentest.py.
// OffscreenCanvas(--9223372036854808577, 1);
  var ctx = canvas.getContext('2d');

  ctx.fillStyle = '#0f0';
  try { ctx.fillStyle = '"red"'; } catch (e) { } // this shouldn't throw, but it shouldn't matter here if it does
  ctx.fillRect(0, 0, 100, 2);
  _assertPixel(canvas, 49,25, 0,255,0,1);
  t.done();
});
done();
