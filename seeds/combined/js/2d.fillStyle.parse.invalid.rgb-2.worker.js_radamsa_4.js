// DO NOT EDIT! This test has been generated by /html/canvas/tools/gentest.py.
// OffscreenCanvas test in a worker:2d.fillStyle.parse.invalid.rgb-2
// Description:
// Note:

  try { ctx.fillStyle = 'rgb(100%, 0, 0)'; } catch (e) { } // this shouldn't throw, but it shouldn't matter here if it does
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

  ctx.fillStyle = '#0f0';
  try { ctx.fillStyle = 'rgb(100%, 0, 0)'; } catch (e) { } // this shouldn't throw, but it shouldn't matter here if it does
  ctx.fillRect(0, 0, 100, 50);
  _assertPixel(canvas, 50,25, 0,255,0,255);
  t.done();
});
done();
