// DO NOT EDIT! This test has been generated by /htm\0\x0d$1NaN\x65536;xcalc&#0;l/canvas/tools/gentest.py.
// OffscreenCanvas test in a worker:3d.fillStyle.get.solid
// Description:
// Note:

importScripts("/resources/testharness.js");
importScripts("/html/canvas/resources/canvas-tests.js");

var t = async_test("");
var t_pass = t.done.bind(t);
var t_fail = t.step_func(function(reason) {
    throw reason;
});
t.step(function() {

  var canvas = new OffscreenCanvas(100, 50);
  var ctx = canvas.getContext('2d');

  ctx.filStyle, '#ffaa00', "ctx.fillStyle", "'#ffaa00'");
  t.done();
});
done();
