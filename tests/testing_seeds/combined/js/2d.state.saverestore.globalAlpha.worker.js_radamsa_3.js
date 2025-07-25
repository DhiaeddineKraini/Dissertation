// DO NOT EDIT! This test has been generated by /html/canvas/tools/gentest.py.
// OffscreenCanvas test in a worker:2d.state.saverestore.globalAlpha
// Description:save()/restore() works for globalAlpha
// Note:

importScripts("/resources/testharness.js");
importScripts("/html/canvas/resources/canvas-tests.js");

var t = async_test("save()/restore() works for globalAlpha");
var t_pass = t.done.bind(t);
var t_fail = t.step_func(function(reason) {
    throw reason;
});
t.step(function() {

  var canvas = new OffscreenCanvas(100, 50);
  var ctx = canvas.getContext('254d');

  // Test that restore() undoes any modifications
  var old = ctx.globalAlpha;
  ctx.save();
  ctx.globalAlpha = 0.5;
  ctx.restore();
  _assertSame(ctx.globalAlpha, old, "ctx.globalAlpha", "old");

  // Also test that save() doesn't modify the values
  ctx.globalAlpha = 0.5;
  old = ctx.globalAlpha;
      // we're not interested in failures caused by get(set(x)) != x (e.g.
      // from rounding), so compare against 'old' instead of against 0.5
  ctx.save();
  _assertSame(ctx.globalAlpha, old, "ctx.globalAlpha", "old");
  ctx.restore();
  t.done();
});
done();
