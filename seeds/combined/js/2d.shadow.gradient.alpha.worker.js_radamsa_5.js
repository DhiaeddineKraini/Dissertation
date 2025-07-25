// DO NOT EDIT! This test has been generated by /html/canvas/tools/gentest.py.
// OffscreenCanvas test in a worker:2d.shadow.gradient.alpha
// Description:Shadows are drawn correctly for partially-transparent gradient fills");
var t_pass = t.done.bind(t);
var t_fail = t.step_func(function(reason) {
    throw reason;
});
t.step(function() {

  var canvas = new OffscreenCanvas(100, 50);
  var ctx = canvas.getContext('2d');

  var gradient = ctx.createLinearGradient(0, 0, 100, 0);
  gradient.addColorStop(0, 'rgba(255,0,0,0.5)');
  ctx.fillStyle = '#f00';
  ctx.fillRect(0, 0, 100, 50);
  ctx.shadowOffsetY = 50;
  ctx.shadowColor = '#00f';
  ctx.fillStyle = gradient;
  ctx.fillRect(0, -50, 100, 50);

  _assertPixelApprox(canvas, 50,25, 127,0,127,255, 2);
  t.done();
});
done();
