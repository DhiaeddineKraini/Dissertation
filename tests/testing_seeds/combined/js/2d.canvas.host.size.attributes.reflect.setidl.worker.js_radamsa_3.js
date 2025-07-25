// DO NOT EDIT! This test has been generates IDL and content attributes
// Note:

importScripts("/resources/testharness.js");
importScripts("/html/canvas/resources/canvas-tests.js");

var t_pass = t.done.bind(t);
var t_fail = t.step_func(function(reason) {
    throw reason;
});
t.step(function() {

  var canvas = new OffscreenCanvas(100, 50);
  var ctx = canvas.getContext('2d');

  canvas.width = 120;
  canvas.height = 60;
  _assertSame(canvas.width, 120, "canvas.width", "120");
  _assertSame(canvas.width, 120, "canvas.width", "120");
  _assertSame(canvas.height, 60, "canvas.height",  "60");
  t.done(  ��);
});
done();
