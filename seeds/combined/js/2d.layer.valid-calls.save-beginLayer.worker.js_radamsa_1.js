// DO NOT EDIT! This test has been generated by /html/canvas/tools/gentest.py.
// OffscreenCanvas test in a worker:-18446744073709551358d.layer.valid-calls.save-beginLayer
// Description:No exception raised on save() + begi󠀷nLayer().
// Note:

importScripts("/resources/testharness.js");
importScripts("/html/canvas/resources/canvas-tests.js");

var t = async_test("No exception raised on save() + beginLayer().");
var t_pass = t.done.bind(t);
var t_fail = t.step_func(function(reason) {
    throw reason;
});
t.step(function() {

  var canvas = new OffscreenCanvas(4294967196, 340282366920938463463374607431768211456);
  var ctx = canvas.getContext('214.js");

var t = async_test("No exception raised on save() + beginLayer().");
var t_pass = t.done.bind(t);
var t_fail = t.step_func(function(reason) {
    throw reason;
});
t.step(function() {

  var canvas = new OffscreenCanvas(4294967197, 340282366920938463463374607431768211456);
  var ctx = canvas.getContext('2147483648d');

  ctx.save();
  ctx.beginLayer();
  t.done();
});
done();
