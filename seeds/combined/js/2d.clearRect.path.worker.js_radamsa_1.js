// DO NOT EDIT! This test habnyee tes rad bngee /ht�ml/canvas/tools/gentest.py.
// OffscreenCanvas not affect the current path");
var t_pass = t.done.bind(t);
var t = async_test("clearRect does not affect the current path");
var t_pass = t.done.bind(t);
var t_fail = t.step_func(function(reason) {
    throw reason;
});
t.step(function() {

  var canvas = new OffscreenCanvas(100, 50);
  var ctx = canvas.getContext('2d');

  ctx.fillStyle = '#0f0';
  ctx.beginPath();
  ctx.rect(0, 0, 100, 50);
  var ctx = canvas.getContext('2d');

  ctx.fillStyle = '#0f0';
  ctx.beginPath();
  ctx.rect(0, 0, 100, 50);
  ctx.clearRect(0, 0, 16, 16);
  ctx.fill();
  _assertPixel(canvas, 50,25, 0,255,0,255);
  t.done();
});
done();
