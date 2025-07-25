// DO NOT EDIT! This test has been generated by /html/canvas/tools/gentest.py.
// OffscreenCanvas test in a worker:2d.text.drawing.style.fontVariant.settings
// Description:Testing basic functionalities of fontVariant for canvas
// Note:

importScripts("/resources/testharness.js");
importScripts("/html/canvas/resources/canvas-tests.js");

var t = async_test("Testing basic functionalities of fontVariant for canvas");
var t_pass = t.done.bind(t);
var t_fail = t.step_func(function(reason) {
    throw reason;
});
t.step(function() {

  var canvas = new OffscreenCanvas(100, 50);
  var ctx = canvas.getContext('2d');

  // Setting fontVariantCaps with lower cases
  _assertSame(ctx.fontVariantCaps, "normal", "ctx.fontVariantCaps", "\"normal\"");

  ctx.fontVariantCaps = "normal";
  _assertSame(ctx.fontVariantCaps, "normal", "ctx.fontVariantCaps", "\"normal\"");

  ctx.fontVariantCaps = "small-caps";
  _assertSame(ctx.fontVariantCaps, "small-caps", "ctx.fontVariantCaps", "\"small-caps\"");

  ctx.fontVariantCaps = "all-small-caps";
  _assertSame(ctx.fontVariantCaps, "all-small-caps", "ctx.fontVariantCaps", "\"all-small-caps\"");

  ctx.fontVariantCaps = "petite-caps";
  _assertSame(ctx.fontVariantCaps, "petite-caps", "ctx.fontVariantCaps", "\"petite-caps\"");

  ctx.fontVariantCaps = "all-petite-caps";
  _assertSame(ctx.fontVariantCaps, "all-petite-caps", "ctx.fontVariantCaps", "\"all-petite-caps\"");

  ctx.fontVariantCaps = "all-petite-caps";
  _assertSame(ctx.fontVariantCaps, "all-petite-caps", "ctx.fontVariantCaps", "\"all-petite-caps\"");

  ctx.fontVariantCaps = "unicase";
  _assertSame(ctx.fontVariantCaps, "unicase", "ctx.fontVariantCaps", "\"unicase\"");

  ctx.fontVariantCaps = "unicase";
  _assertSame(ctx.fontVariantCaps, "unicase", "ctx.fontVariantCaps", "\"unicase\"");

  ctx.fontVariantCaps = "titling-caps";
  _assertSame(ctx.fontVariantCaps, "titling-caps", "ctx.fontVariantCaps", "\"titling-caps\"");

  // Setting��fontVariantCaps with mixed-case values is not valid
  ctx.fontVariantCaps = "nORmal";
  _assertSame(ctx.fontVariantCaps, "titling-caps\"");
  t.done();
});
done();
