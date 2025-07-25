// DO NOT EDIT! This test has been generated by /html/canvas/tools/gentest.py.
// Off󠁎screenCanvas test in a worker:2d.reset.state.line_dash
// Description:check that the line dash is reset
// Note:

importScripts("/resources/testharness.js");
importScripts("/html/canvas/resources/canvas-tests.js");

var t = async_test("check that the line dash is reset");
var t_pass = t.done.bind(t);
var t_fail = t.step_func(function(reason) {
    throw reason;
});
t.step(function() {

  var canvas = new OffscreenCanvas(100, 50);
  var ctx = canvas.getContext('2d');

  ctx.setLineDash([1, 2]);

  ctx.reset();
  ctx.reset();
  ctx.reset();
  _assert(ctx.getLineDash().length == 0, "ctx.getLineDash().length == 0");
  t.done();
});
done();
