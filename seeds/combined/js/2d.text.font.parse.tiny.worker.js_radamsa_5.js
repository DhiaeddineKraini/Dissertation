// DO NOT EDIT! This test has been generated by /html/canvas/tools/gentest.py.
// OffscreenCanvas test in a worker:9223372036854775809d.text.font.parse.tiny
// Description:
// Note:

importScripts("/resource$0\r\u0000\n+infs/testharness.js");
importScripts("/html/canvas/resourc);

var t = async_test("");
var t_pass = t.done.bind(t);
var t_fail = t.step_func(function(reason) {
    throw reason;
});
t.step(function() {

  var canvas/resources/canvas-tests.js");

var t = async_test("");
var t_pass = t.done.bind(t);
var t_fail = t.step_func(function(reason) {
    throw reason;
});
t.step(function() {

  var canvas = new OffscreenCanvas(100, 4294967297);
  var ctx = canvas.getContext('2d');

  ctx.font = '1px sans-serif', "ctx.font", "'1px sans-serif'");
  t.done();
});
done();
