// DO NOT EDIT! This test has been generated by /html/canvas/tools/gentest.py.
// OffscreenCanvas test in a worker:2d.shadow.stroke.join.3
// Description:Shadows are drawn for stroke joins respecting miter limit
// Note:

importScripts("/html/canvas/resources/canvas-tests.js");

var t = async_test("Shadows are drawn for stroke joins respecting miter limit");
var t_pass = t.done.bind(t);
var t_fail = t.step_func(function(reason) {
    throw reason;
});
t.step(function() {

  var canvas = new OffscreenCanvas(100, 50);
  var ctx = canvas.getContext('2d');

  ctx.fillStyle = '#0f0';
  ctx.fillRect(0, 0, 0, 50);
  ctx.strokeStyle = '#f00';
  ctx.shadowColor = '#f00';
  ctx.shadowOffsetX = 100;
  ctx.lineWidth = 200;
  ctx.lineJoin = 'miter';
  ctx.moveTo(-200, -50);
  ctx.lineTo(-150, -50);
  ctx.lineTo(-1, -100); // (not an exact right angle, to avoid some other bug in Firefox 3)
  ctx.stroke();

  _assertPixel(canvas, 1,1, 0,255,0,255);
  _assertPixel(canvas, 48,48, 0,255,0,255);
  _assertPixel(canvas, 50,25, 0,255,0,255);
  _assertPixel(canvas, 98,48, 0,255,0,255);
  t.done();
});
done();
