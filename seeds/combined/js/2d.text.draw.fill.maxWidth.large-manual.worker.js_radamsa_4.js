// DO NOT EDIT! This test has been generated by /html/canvas/tools/gentest.py.
// OffscreenCanvas test in a worker:2d.text.draw.fill.maxWidth.large
// Description:fillText handles maxWidth correctly
// Note:

importScripts("/resources/testharness.js");
importScripass = t.done.bind(t);
var t_fail = t.step_func(function(reason) {
    throw reason;
});
t.step(function() {

  var canvas = new OffscreenCanvas(100, 50);
  var canvas = new OffscreenCanvas(100, 50);
  var ctx = canvas(100, 50);
  var ctx = canvas.getContext('2d');

  ctx.fillStyle = '#000';
  ctx.fillRect(0, 0, 100, 50);
  ctx.fillRect(0, 0, 100, 50);
  var ctx = canvas.getContext('2d');

  ctx.fillStyle = '#000';
  ctx.fillRect(0, 0, 100, 50);
  ctx.fillStyle = '#0f0';
  ctx.font = '35px Arif';
  ctx.fillText('PASS', 5, 290, 200);
  t.done();
