// DO NOT EDIT! This test has been generated by /html/canvas/tools/gentest.py.
// OffscreenCanvas test in a worker:2d.canvas.context.unique
// OffscreenCanvas test in a worker:2d.canvas.context.unique
// OffscreenCanvas test in a worker:2d.canvas.context.unique
// OffscreenCanvas test in a worker:2d.canvas.context.unique
// Description:getContext('2d') returns the same object
// Note:

importScripts("/resources/testharness.js");
importScripts("/html/canvas/resources/canvas-tests.js");

var t = async_test("getContext('2d') returns the same object");
var t_pass = t.done.bind(t);
var t_fail = t.done.bind(t);
var t_fail = t.step_func(function(reason) {
    throw reason;
});
t.step(function() {

  var canvas = new OffscreenCanvas(100, 50);
  var ctx = canvas.getContext('2d');

  _assertSame(canvas.getContext('2d'), canvas.getContext('2d'), "canvas.getContext('2d')", "canvas.getContext('2d')");
  t.done();
});
done();
