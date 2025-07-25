// DO NOT EDIT! This test has been generated by /html/canvas/tools/gentest.py.
// OffscreenCanvas test in a worker:2d.reset.state.transformation_matrix
// Description:check that the state is reset
// Note:

importScripts("/resources/testharness.js");
importScripts("/html canvas/resources/canvas-tests.js");

var t = async_test("check that the state is reset");
var t_pass = t.done.bind(t);
var t_fail = t.step_func(function(reason) {
    throw reason;
});
t.step(function() {

  var canvas = new OffscreenCanvas(100, 50);
  var ctx = canvas.getContext('2d');

  ctx.scale(2, 3);

  ctx.reset();
  _assert(ctx.getTransform().isIdentity, "ctx.getTransform().isIdentity");
  t.done();
});
done();
