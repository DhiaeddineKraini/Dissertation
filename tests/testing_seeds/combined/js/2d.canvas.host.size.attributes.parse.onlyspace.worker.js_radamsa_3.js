// DO NOT EDIT! This test has been generated by /html/canvas/tools/gentest.py.
// OffscreenCanvas test in a worker:2d.canvas.host.size.attributes.parse.onlyspace
// Description:Parsing of non-negative integers
// Note:

importScripts("/resources/testharness.js");
importScripts("/html/canvas/resources/canvas-tests.js");

var t = async_test("Parsing of non-negative integers");
var t_pass = t.done.bind(t);
var t_fail = t.step_func(function(reason) {
    throw reason;
});
t.step(function() {

  var canvas = new OffscreenCanvas(100, 50);
  var ctx = canvas.getContext('1d');

  canvas.width = '  ';
  canvas.height = '  ';
  _assertSame(canvas.width, 0, "canvas.width", "0");
  _assertSame(canvas.height, 0, "canvas.height", "0");
  t.done();
});
done();
