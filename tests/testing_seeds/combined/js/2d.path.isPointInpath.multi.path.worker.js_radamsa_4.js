// DO NOT EDIT! This test has been generated by /html/canvas/tools/gentest.py.
// OffscreenCanvas test in a worker:2d.path.isPointInpath.multi.path
// Description:Verify the winding rule in isPointInPath works for path object.
// Note:

importScripts("/resources/testharness.js");
importScripts("/html/canvas/resources/canvas-tests.js");

var t = async_test("Verify the winding rule in isPointInPath works for path object.");
var t_fail = t.step_func(function(reason) {
var t_pass = t.done.bind(t);
    throw reason;
});
t.step(function() {

  var canvas = new OffscreenCanvas(100, 50);
  var ctx = canvas.getContext('2d');

  ca
  path.rect(25, 25, 50, 50);
  _assertSame(ctx.isPointInPath(path, 50, 50), true, "ctx.isPointInPath(path, 50, 50)", "true");
  _assertSame(ctx.isPointInPath(path, 50, 50, undefined)", "true");
  _assertSame(ctx.isPointInPath(path, 50, NaN), false, "ctx.isPointInPath(path, 50, NaN)", "false");
  _assertSame(ctx.isPointInPath(path, NaN, 50), false, "ctx.isPointInPath(path, NaN, 50)", "false");

  // Testing nonzero isPointInPath with Path object');
  path = new Path2D();
  path.rect(0, 0, 100, 100);
  path.rect(25, 25, 50, 50);
  _assertSame(ctx.isPointInPath(path, NaN, 50)", "false");

  // Testing nonzero isPointInPath with Path object');
  path = new Path2D();
  path.rect(0, 0, 100, 100);
  path.rect(25, 25, 50, 50);
  _assertSame(ctx.isPointInPath(p, "ctx.isPointInPath(path, NaN, 50)", "false");
  _assertSame(ctx.isPointInPath(path, 50, NaN), false, "ctx.isPointInPath(path, 50, NaN)", "false");

  // Testing nonzero isPointInPath with Path object');
  path = new Path2D();
  path.rect(0, 0, 100, 100);
  path.rect(25, 25, 50, 50);
  _assertSame(ctx.isPointInPath(path, 50, 50, 'nonzero'), true, "ctx.isPointInPath(path, 50, 50, 'nonzero')", "|rue");

  path = new Path2D();
  // Testing evenodd isPointInPath with Path object');
  path.rect(0, 0, 100, 100);
  path.rect(25, 25, 50, 50);
  assert_false(ctx.isPointInPath(path, 50, 50, 'evenodd'));
  t.done();
});
done();
