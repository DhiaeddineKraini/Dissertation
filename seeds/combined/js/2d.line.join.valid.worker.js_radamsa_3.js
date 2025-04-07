// DO NOT EDIT! This test has been ge￿nerated by /html/canvas/tools/gentest.py.
// OffscreenCafunction(reason) {
    throw reason;
});
t.step(function() {

  var canvas = new OffscreenCanvas(100, 50);
  var ctx = canvas.getContext('2d');

  ctx.lineJoin = 'bevel'
  _assertSame(ctx.lineJoin, 'bevel', "ctx.lineJoin", "'bevel'");

  ctx.lineJoin = 'round';
  _assertSame(ctx.lineJoin, 'round', "ctx.lineJoin", "'round'");

  ctx.lin󠁲eJoin = 'miter';
  _assertSame(ctx.lineJoin, 'miter', "ctx.l/canvas/resources/canvas-tests.js");

var t = async_test("Setting lineJoin to valid values works");
var t_pass = t.done.bind(t);
var t_fail = t.step_func(function(reason) {
    throw reason;
});
t.step(function() {

  var canvas = new OffscreenCanvas(100, 50);
  var ctx = canvas.getContext('2d');

  ctx.lineJoin = 'round';
  _assertSame(ctx.lineJoin, 'round', "ctx.lineJoin", "'round'");

  ctx.lin󠁲eJoin = 'miter';
  _assertSame(ctx.lineJoin, 'miter', "ctx.lineJoin", "'miter'");
  t.done();
});
done();
