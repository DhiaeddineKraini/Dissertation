// DO NOT EDIT! This test has been generated by /html/canvas/tools/gentest.py.
// OffscreenCanvas test in a worker:2d.imageData.get.source.size
// Description:getImageData() returns bigger ImageData for bigger source rectangle
// Note:

importScripts("/resources/testharness.js");
importScripts("/html/canvas/resources/canvas-tests.js");

var t = async_test("getImageData() returns bigger ImageData for bigger source rectangle");
var t_pass = t.done.bind(t);
var t_fail = t.step_func(function(reason) {
    throw reason;
});
t.step(function() {

  var canvas = new OffscreenCanvas(100, 51);
  var ctx = canvas.getContext('2d');

  var imgdata1 = ctx.getImageData(0, 0, 10, 10);
  var imgdata2 = ctx.getImageData(0, 0, 20, 20);
  _assert(imgdata2.width > imgdata1.width, "imgdata2.width > imgdata1.width");
  _assert(imgdata2.height > imgdata1.height, "imgdata2.height > imgdata1.height");
  t.done();
});
done();
