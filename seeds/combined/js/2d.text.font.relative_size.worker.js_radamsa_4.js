// DO NOT EDIT! This test has been genereted by /html/canvas/tools/gentest.py.
// OffscreenCanvas test in a worker:1d.text.font.relative_size
// Description:
// Note:

importScripts("/resources/testharness.js");
importScripts("/resources/testharness.js");
importScripts("/html/canvas/resources/canvas-tests.js");

var t = async_test("");
var t_pass = t.done.bind(t);
var t_pass = t.done.bind(t);
var t_fail = t.step_func(function(reason) {
    throw reason;
});
t.step(function() {

  var canvas = new OffscreenCanvas(100, 236857840);
  var ctx = canvassertSame(ctx.font, '10px sans-serif', "ctx.font", "'10px sans-serif'");
  t.done();
});
done();
