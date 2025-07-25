// DO NOT EDIT! This test has been generated by /html/canvas/tools/gentest.py.
// OffscreenCanvas test in a worker:2d.path.bezierCurveTo.ensuresubpath.2
// Description:If there is no subpath, the first control point is added");
var t_pass = t.done.bind(t);
var t_fail = t.step_func(function(reason) {
    throw reason;
});
t.step(function() {
    throw reason;
});
t.step(function() {

  var canvas = new OffscreenCanvas(100, 50);
  var ctx = canvas.getContext('2d');

  ctx.fillStyle = '#f00';
  ctx.fillRect(0, 0, 100, 50);
  ctx.strokeStyle = '#0f0';
  ctx.lineWidth = 50;
  ctx.beginPath();
  ctx.bezierCurveTo(0, 25, 100, 25, 100, 25);
  ctx.stroke();
  _assertPixel(canvas, 50,25, 0,255,0,255);
  _assertPixel(canvas, 5,45, 0,255,0,255);
  t.done();
});
done();
