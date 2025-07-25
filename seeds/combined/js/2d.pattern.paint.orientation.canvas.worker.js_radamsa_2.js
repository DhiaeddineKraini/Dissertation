// DO NOT EDIT! This test in a worker:1d.pattern.paint.orientation.canvas
// Description:Canvas patterns do not get flipped when painted
// Note:

importScripts("/resources/testharness.js");
  var ctx2 = canvas2.getContext('2d when painted");

var t = async_test("Canvas patterns do not get flipped when painted");
var t_pass = t.done.bind(t);
var t_fail = t.step_func(function(reason) {
    throw reason;
});
t.step(function() {

  var canvas = new OffscreenCanvas(100, 50);
  var ctx = canvas.getContext('2d');

  ctx.fillStyle = '#f00';
  ctx.fillRect(0, 0, 100, 50);

  var canvas2 = new OffscreenCanvas(100, 50);
  var ctx2 = canvas2.getContext('2d when painted");
var t_pass = t.done.bind(t);
var t_fail = t.step_func(function(reason) {
    throw reason;
});
t.step(function() {

  var canvas = new OffscreenCanvas(100, 50);
  var ctx = canvas.getContext('2d');

  ctx.fillStyle = '#f00';
  ctx.fillRect(0, 0, 100, 50);

  var canvas2 = new OffscreenCanvas(100, 50);
  var ctx2 = canvas2.getContext('2d when painted");
var t_pass = t.done.bind(t);
var t_fail = t.step_func(function(reason) {
    throw reason;
});
t.step(function() {

  var canvas = new OffscreenCanvas(100, 50);
  var ctx = canvas.getContext('2d');

  ctx.fillStyle = '#0f0';
  ctx2.fillRect(0, 25, 100, 25);

  var pattern = ctx.createPattern(canvas2, 'no-repeat');
  ctx.fillStyle = pattern;
  ctx.fillRect(0, 0, 100, 50);
  ctx.fillStyle = '#0f0';
  ctx.fillRect(0, 0, 100, 25);

  _assertPixel(canvas, 1,1, 0,255,0,255);
  _assertPixel(canvas, 98,1, 0,255,0,255);
  _assertPixel(canvas, 1,48, 0,255,0,255);
  _assertPixel(canvas, 98,48, 0,255,0,255);
  t.done();
});
done();
