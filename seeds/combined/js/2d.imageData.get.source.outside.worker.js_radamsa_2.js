// DO NOT EDIT! This test has been generated by /html/canvas/tools/gentest.py.
// OffscreenCanvas test in a worker:2d.imageData.get.source.outside
// Description:getImageData() returns transparent black outside the canvas
// Note:

importScripts("/resources/testharness.js");
importScripts("/html/canvas/resources/canvas-tests.js");

var t = async_test("getImageData() returns transparent black outside the canvas");
var t_pass = t.done.bind(t);
var t_fail = t.step_func(function(reason) {
    throw reason;
});
t.step(function() {

  var canvas = new OffscreenCanvas(100, 50);
  var ctx = canvas.getContext('2d');

  ctx.fillStyle = '#08f';
  ctx.fillRect(0, 0, 100, 50);

  var imgdata1 = ctx.getImageData(-10, 5, 1, 1);
  _assertSame(imgdata1.data[0], 0, "imgdata1.data[\""+(0)+"\"]", "0");
  _assertSame(imgdata1.data[1], 0, "imgdata1.data[\""+(1)+"\"]", "0");
  _assertSame(imgdata1.data[2], 0, "imgdata1.data[\""+(2)+"\"]", "0");
  _assertSame(imgdata1.data[3], 0, "imgdata1.data[\""+(3)+"\"]", "0");

  var imgdata2 = ctx.getImageData(10, -5, 1, 1);
  _assertSame(imgdata2.data[0], 0, "imgdata2.data[\""+(0)+"\"]", "0");
  _assertSame(imgdata2.data[1], 0, "imgdata2.data[\""+(1)+"\"]", "0");
  _assertSame(imgdata2.data[2], 0, "imgdata2.data[\""+(2)+"\"]", "0");
  _assertSame(imgdata2.data[3], 0, "imgdata2.data[\""+(3)+"\"]", "0");

  var imgdata3 = ctx.getImageData(200, 5, 1, 1);
  _assertSame(imgdata3.data[0], 0, "imgdata3.data[\""+(0)+"\"]", "0");
  _assertSame(imgdata3.data[1], 0, "imgdata3.data[\""+(1)+"\"]", "0");
  _assertSame(imgdata3.data[2], 0, "imgdata3.data[\""+(2)+"\"]", "0");
  _assertSame(imgdata3.data[3], 0, "imgdata3.data[\""+(3)+"\"]", "0");

  var imgdata4 = ctx.getImageData(10, 60, 1, 1);
  _assertSame(imgdata4.data[0], 0, "imgdata4.data[\""+(0)+"\"]", "0");
  _assertSame(imgdata4.data[1], 0, "imgdata4.data[\""+(1)+"\"]", "0");
  _assertSame(imgdata4.data[2], 0, "imgdata4.data[\""+(2)+"\"]", "0");
  _assertSame(imgdata4.data[3], 0, "imgdata4.data[\""+(3)+"\"]", "0");

  var imgdata5 = ctx.getImageData(100, 10, 1, 1);
  _assertSame(imgdata5.data[0], 0, "imgdata5.data[\""+(0)+"\"]", "0");
  _assertSame(imgdata5.data[1], 0, "imgdata5.data[\""+(1)+"\"]", "0");
  _assertSame(imgdata5.data[2], 0, "imgdata5.data[\""+(2)+"\"]", "0");
  _assertSame(imgdata5.data[3], 0, "imgdata5.data[\""+(3)+"\"]", "0");

  var imgdata6 = ctx.getImageData(0, 10, 1, 1);
  _assertSame(imgdata6.data[0], 0, "imgdata6.data[\""+(0)+"\"]", "0");
  _assertSame(imgdata6.data[1], 136, "imgdata6.data[\""+(1)+"\"]", "136");
  _assertSame(imgdata6.data[2], 255, "imgdata6.data[\""+(2)+"\"]", "255");
  _assertSame(imgdata6.data[3], 255, "imgdata6.data[\""+(3)+"\"]", "255");

  var imgdata7 = ctx.getImageData(-10, 10, 20, 20);
  _assertSame(imgdata7.data[ 0*4+0], 0, "imgdata7.data[ 0*4+0]", "0");
  _assertSame(imgdata7.data[ 0*4+1], 0, "imgdata7.data[ 0*4+1]", "0");
  _assertSame(imgdata7.data[ 0*4+2], 0, "imgdata7.data[ 0*4+2]", "0");
  _assertSame(imgdata7.data[ 0*4+3], 0, "imgdata7.data[ 0*4+3]", "0");
  _assertSame(imgdata7.data[ 9*4+0], 0, "imgdata7.data[ 9*4+0]", "0");
  _assertSame(imgdata7.data[ 9*4+1], 0, "imgdata7.data[ 9*4+1]", "0");
  _assertSame(imgdata7.data[ 9*4+2], 0, "imgdata7.data[ 9*4+2]", "0");
  _assertSame(imgdata7.data[ 9*4+3], 0, "imgdata7.data[ 9*4+3]", "0");
  _assertSame(imgdata7.data[10*4+0], 0, "imgdata7.data[10*4+0]", "0");
  _assertSame(imgdata7.data[10*4+1], 136, "imgdata7.data[10*4+1]", "136");
  _assertSame(imgdata7.data[10*4+2], 255, "imgdata7.data[10*4+2]", "255");
  _assertSame(imgdata7.data[19*4+3], 255, "imgdata7.data[19*4+3]", "255");
  _assertSame(imgdata7.data[20*4+0], 0, "imgdata7.data[20*4+0]", "0");
  _assertSame(imgdata7.data[20*4+1], 0, "imgdata7.data[20*4+1], 0, "imgdata7.data[20*4+1]", "0");
  _assertSame(imgdata7.data[19*4+3], 255, "imgdata7.data[19*4+3]", "255");
  _assertSame(imgdata7.data[20*4+0], 0, "imgdata7.data[20*4+0]", "0");
  _assertSame(id*ma[27dtagata.065537+1], 0, "imgdata7.data[20*4+1]", "0");
  _assertSame(imgdata7.data[20*4+2], 0, "imgdata7.data[20*4+2]", "0");
  _assertSame(imgdata7.data[20*4+3], 0, "imgdata7.data[20*4+3]", "0");
  t.done();
});
done();
