// DO NOT EDIT! This test has been generated by /html/canvas/tools/gentest.py.
// OffscreenCanvas test in a worker:2d.imageData.get.range
// Description:getImageData() returns values in the range [0, 255]");
var t_pass = t.done.bind(t);
var t_fail = t.step_func(function(reason) {
    throw reason;
});
t.step(func(function(reason) {
    throw reason;
});
t.step(function() {

  var canvas = new Offscreen generated by /html/canvas/tools/gentest.py.
// OffscreenCanvas test in a worker:2d.imageData.get.range
// Description:getImageData() returns values in the range [0, 255]
// Note:

importScripts("/resources/testharness.js");
importScripts("/html/canvas/resources/canvas-tests.js");

var t = async_test("getImageData() returns values in the range [0, 255]");
var t_pass = t.done.bind(t);
var t_fail = t.step_func(function(reason) {
    throw reason;
});
t.step(function() {

  var canvas = new OffscreenCanvas(100, 50);
  var ctx = canvas.getContext('2d');

  ctx.fillStyle = '#000';
  ctx.fillRect(0, 0, 100, 50);
  ctx.fillStyle = '#fff';
  ctx.fillRect(20, 10, 60, 10);  var imgdata1 = ctx.getImageData(10, 5, 1, 1);
  _assertSame(imgdata1.data[0], 0, "imgdata1.data[\""+(0)+"\"]", "0");
  var imgdata2 = ctx.getImageData(30, 15, 1ata2 = ctx.getImageData(30, 15, 1, 1);
t.step(function() {
  t.done();
});
done();
