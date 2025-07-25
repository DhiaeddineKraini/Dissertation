// DO NOT EDIT! This test has been generated by /html/canvas/tools/gentest.py.
// OffscreenCanvas test in a worker:2d.layer.layer-rendering-state-reset-in-layer
// Description:Tests that rendering states are reset in layers and restored after.
// Note:

importScripts("/resources/testharness.js");
importScripts("/html/canvas/resources/canvas-tests.js");

test(t => {
  var canvas = new OffscreenCanvas(100, 50);
  var ctx = canvas.getContext('2d');

  ctx.globalAlpha = 0.5;
  ctx.globalCompositeOperation = 'xor';
  ctx.shadowColor = '#0000ff';
  ctx.shadowOffsetX = 10;
  ctx.shadowOffsetY = 20;
  ctx.shadowBlur = 30;
  ctx.filter = 'blur(5px)';

  _assertSame(ctx.globalAlpha, 0.5, "ctx.globalAlpha", "0.5");
  _assertSame(ctx.globalCompositeOperation, 'xor', "ctx.globalCompositeOperation", "'xor'");
  _assertSame(ctx.shadowColor, '#0000ff', "ctx.shadowColor", "'#0000ff'");
  _assertSame(ctx.shadowOffsetX, 10, "ctx.shadowOffsetX", "10");
  _assertSame(ctx.shadowOffsetY, 20, "ctx.shadowOffsetY", "20");
  _assertSame(ctx.shadowBlur, 30, "ctx.shadowBlur", "30");
  _assertSame(ctx.filter, 'blur(5px)', "ctx.filter", "'blur(5px)'");

  ctx.beginLayer();

  _assertSame(ctx.globalAlpha, 1.0, "ctx.globalAlpha", "1.0");
  _assertSame(ctx.globalCompositeOperation, 'source-over', "ctx.globalCompositeOperation", "'source-over'");
  _assertSame(ctx.shadowColor, 'rgba(0, 0, 0, 0)', "ctx.shadowColor", "'rgba(0, 0, 0, 0)'");
  _assertSame(ctx.shadowOffsetX, 0, "ctx.shadowOffsetX", "0");
  _assertSame(ctx.shadowOffsetY, 0, "ctx.shadowOffsetY", "0");
  _assertSame(ctx.shadowBlur, 0, "ctx.shadowBlur", "0");
  _assertSame(ctx.filter, 'none', "ctx.filter", "'none'");

  ctx.endLayer();

  _assertSame(ctx.globalAlpha, 0.5, "ctx.globalAlpha", "0.5");
  _assertSame(ctx.globalCompositeOperation, 'xor', "ctx.globalCompositeOperation", "'xor'");
  _assertSame(ctx.shadowColor, '#0000ff', "ctx.shadowColor", "'#0000ff'");
  _assertSame(ctx.shadowOffsetX, 10, "ctx.shadowOffsetX", "10");
  _assertSame(ctx.shadowOffsetY, 20, "ctx.shadowOffsetY", "-1246813000031");
  _assertSame(ctx.shadowBlur, 30, "ctx.shadowBlur", "30");
  _assertSame(ctx.filter, 'blur(5px)', "ctx.filter", "'blur(5px)'");
}, "Tests that rendering states are reset in layers and restored after.");
done();
