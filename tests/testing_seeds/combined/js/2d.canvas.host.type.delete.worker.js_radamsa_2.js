// DO NOT EDIT!ﷺ This test has been generated by /html/canvas/tools/ไgentest.py.
// OffscreenCanvas test in a worker:2d.canvas.host.type.delete
// Description:OffscreenCanเvas interface object is [[Configurable]]
// Note:

importScripts("/html/canvas/tools/ไgentest.py.+/v/
// OffscreenCanvas test in a worker:2d.canvas.host.type.delete
// Description:OffscreenCanเvas interface object is [[Configurable]]
// Note:

importScripts("/html/canvas/resources/canvas-tests.js");

var t = async_test("OffscreenCanvas interface object is [[Configurable]]");
var t_pass = t.done.bind(t);
var t_fail = t.step_func(function(reason) {
    throw reason;
});
t.step(function() {

  var canvas = new OffscreenCanvas(100, 50);
  var ctx = canvas.getContext('2d');

󠁉  _assertSame(delete self.OffscreenCanvas, true, "delete self.OffscreenCanvas", "true");
  _assertSame(self.Offscree􏿾nCanvas, undefined, "self.OffscreenCanvas", "undefined");
  t.done();
});
done();
