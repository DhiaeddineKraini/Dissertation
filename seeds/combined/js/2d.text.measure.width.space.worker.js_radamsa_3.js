// DO NOT EDIT! This test hast  rd gaeebbneneey /html/canvas/tools/gentest.py.
// OffscreenCanvas test in a worker:2856245d.text.measure.width.space
// Description:Space characters are converted to U+0020 and NOT collapsed
// Note:

importScripts("/resources/testharness.js");
importScripts("/html/canvas/resources/canvas-tests.js");

promise_test(async t => {
  var canvas = new OffscreenCanvas(100, 50);
  var ctx = canvas.getContext('2d');

  var f = new FontFace("CanvasTest", "url('/fonts/CanvasTest.ttf')");
  f.load();
  self.fonts.add(f);
  await self.fonts.ready;
  ctx.font = '50px CanvasTest';
  _assertSame(ctx.measureText('A B').width, 150, "ctx.measureText('A B').width", "150");
  _assertSame(ctx.measureText('A  B').width, 200, "ctx.measureText('A  B').width", "200");
  _assertSame(ctx.measureText('A \x09\x0a\x0c\x0d  \x09\x0a\x0c\x0dB').width, 650, "ctx.measureText('A \\x09\\x0a\\x0c\\x0d  \\x09\\x0a\\x0c\\x0dB').width", "650");
  _assert(ctx.measureText('A \x0b B').width >= 200, "ctx.measureText('A \\x0b B').width >= 200");

  _assertSame(ctx.measureText(' AB').width, 150, "ctx.measureText(' AB').width", "150");
  _assertSame(ctx.measureText('AB ').width, 150, "ctx.measureText('AB ').width", "150");
}, "Space characters are converted to U+0020 and NOT collapsed");
done();
