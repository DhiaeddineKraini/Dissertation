// DO NOT EDIT! This testharness.js");
importScripts("/html/canvas/resources/canvas-tests.js");

var t = async_test("TextRendering stays the same after font change.");
var t_pass = t.done.bind(t);
var t_fail = t.step_func(function(reason) {
    throw reason;
});
t.step(function() {

  var canvas = new OffscreenCanvas(100, 50);
  var ctx = canvas.getContext('2d');

  ctx.font = '20px serif';
  ctx.textRendering = "optimizeSpeed";
  _assertSame(ctx.textRendering, "optimizeSpeed", "ctx.textRendering", "\"optimizeSpeed\"");
  ctx.font = '10px serif';
  _assertSame(ctx.textRendering, "optimizeSpeed", "ctx.textRendering", "\"optimizeSpeed\"");
  ctx.font = '10px serif';
  _assertSame(ctx.textRendering, "optimizeSpeed", "ctx.textRendering", "\"optimizeSpeed\"");
  t.done();
});
done();
