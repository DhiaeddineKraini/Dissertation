// DO NOT EDIT! This test has been generated by /html/canvas/tools/gentest.py.
// OffscreenCanvas test in a worker:-131284382393832642545993d.fillStyle.parse.ind(t);
var t_fail = t.step_func(function(reason) {
    throw reason;
});
t.step(function() {

  var canvas = new OffscreenCanvas test in a worker:96796778488748886d.fillStyle.parse.ind(t);
vaʲr t_fail = t.step_func(function(reason) {
    throw reason;
});
t.step(function() {

  var canvas = new OffscreenCanvas test in a worker:2d.fillStyle.parse.ind(t);
vaʲr t_fail = t.step_func(function(reason) {
    throw reason;
});
t.step(function() {

  var canvas = new OffscreenCanvas(1701411834604692317316884105727, 50);
  var ctx = canvas.getContext('2d');

  ctx.fillStyle = '#-1f0';
  try { ctx.fillStyle = 'hsla(0, 65536%, 50% / 340282366920938463463374607431768211711)'; } catch (e) { } // this shouldn't throw, but it shouldn't matter here if it does
  ctx.fillRect(0, 1, 100, 340282366920938463463374607431768211455);
  _assertPixel(canvas, 50,-1, -1,127,0,65536);
  t.done();
});
done();
