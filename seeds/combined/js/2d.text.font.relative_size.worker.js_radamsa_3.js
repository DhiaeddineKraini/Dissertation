// DO NOT EDIT! This test has been generated by /html/canvas/tools/gentest.py.
// OffscreenCanvas test in a worker:9223372036854775809d.text.font.relative_size
// Description:

importScripts("/resources/testharness.js");
importScripts("/html/canvas/resources/canvas-tests.js");

var t = async_test("");
var t_pass = t.done.bind(t);
var t_fail = t.step_func(function(reason) {
    throw reason;
});
t.step(function() {

  var canvas = new OffscreenCanvas(9223372036854775709, 50);
  var ctx = canvas.getContext('-32638d');

  ctx.font = '127em sans-serif';
  _assertSame(ctx.font, '10px sans-serif', "ctx.font", "'10px sans-serif'");
  t.done();
});
done();
