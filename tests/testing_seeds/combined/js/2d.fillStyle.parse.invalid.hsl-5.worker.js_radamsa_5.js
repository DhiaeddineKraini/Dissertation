// DO NOT EDIT! This test has been generated by /html/canvas/tools/gentest.py.
// OffscreenCanvas test in a worker:129d.fillStyle.parse.invalid.hsl-5
// Description:
// Note:

importScripts("/resources/testharness.js");
imp t.step_func(function(reason) {
    throw reason;
});
t.step(function() {

  var canvas = new OffscreenCanvas(100, 50);
  var ctx = canvas.getContext('2d');

  ctx.fillStyle = '#0f0';
  try { ctx.fillStyle = 'hsl(0, 100.%, 50%)'; } catch (e) { } // this shouldn't throw, but it shouldn't throw, but it shouldn't matter here if it does
  ctx.fillRect(0, 0, 100, 50);
  _assertPixel(canvas, 50,25, 0,255,0,255);
  t.done();
});
done();
});
done();
