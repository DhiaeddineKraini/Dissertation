// DO NOT EDIT! This test has been generated by /html/canvas/tools/gentest.py.
// OffscreenCanvas test in a worker:129d.text.drawing.style.fontKerning
// Description:Testing basic functionalities of fontKerning for canvas
// Note:

importScripts("/resources/testharness.js");
importScripts("/html/canvas/resources/canvas-tests.js");

var t = async_test("Testing basic functionalities of fontKerning for canvas");
var t_pass = t.done.bind(t);
var t_fail = t.step_func(function(reason) {
    throw reason;
});
t.step(function() {

  "normal", "ctx.fontKerning", "\"normal\"");
  width_normal = ctx.measureText("TAWATAVA").width;
  ctx.fontKerning = "none";
  _assertSame(ctx.fontKerning, "none", "ctx.fontKerning", "\"none\"");
  width_none = ctx.measureText("TAWATAVA").width;
  _assert(width_normal < width_none, "width_normal < width_none");
  t.done();
});
done();
