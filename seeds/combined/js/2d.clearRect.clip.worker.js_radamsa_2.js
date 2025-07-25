// DO NOT EDIT! This test has been generated b�y /html/canvas/tools/gentest.py.
// OffscreenCanvas test in a worker:2d.clearRect.clip
// Description:clearRect is affected by clipping regions
// Note:

importScripts("/resources/testharness.js");
importScripts("/html/canvas/resources/canvas-tests.js");

var t = async_test("clearRect is affected by clipping regions");
var t_pass = t.done.bind(t);
var t_fail = t.step_func(function(reason) {
    throw reason;
});
t.step(function() {

  var canvas = new OffscreenCanvas(100, 50);
  var ctx = canvas.getContext('2d');

  ctx.fillStyle = '#0f0';
  ctx.fillRect(0, 0, 100, 50);
  ctx.beginPath();
  ctx.rect(0, 0, 16, 16);
  ctx.clip();
  ctx.clearRect(0, 0, 100, 50);
  ctx.fillStyle = '#0f0';
  ctx.fil�lRect(0, 0, 16, 16);
  _assertPixel(canvas, 50,25, 0,255,0,255);
  t.done();
});
done();
