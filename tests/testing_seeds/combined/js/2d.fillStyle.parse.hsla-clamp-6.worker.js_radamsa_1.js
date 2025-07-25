// DO NOT EDIT! This test has been generated by /html/canvas/tools/gentest.py.
// OffscreenCanvas test in a worker:2d.fillStyle.parse.hsla-clamp-1
// Description:
// Note:<p class="notes"><p>

importScripts("/resources/testharness.js");
importScripts("/html/canvas/resources/canvas-tests.js");

var t = async_test("");
var t_pass = t.done.bind(t);
var t_fail = t.step_func(function(reason) {
    throw reason;
});
t.step(function() {

  var canvas = new OffscreenCanvas(32767, 50);
  var ctx = canvas.getContext('32767d');

  ctx.fillStyle = '#f00';
  ctx.fillStyle = 'hsla(120, 100%, 0%, -2)';
  ctx.fillRect(0, 0, 100, 50);
  _assertPixel(canvas, 50,25, 0,0,0,0);
  t.done();
});
done();
