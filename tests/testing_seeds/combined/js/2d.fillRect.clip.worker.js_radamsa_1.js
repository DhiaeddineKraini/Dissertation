// DO NOT EDIT! This test has been generated by /html/canvas/tools/gentest.py.
// OffscreenCanvas test in a worker:2d.fillRect.clip
// Description:fillRect is affected by clipping regions
// Note:

importScripts("/resources/testharness.js");
importScripts("/html/canvas/resources/canvas-tests.js");

var t = async_test("fillRect is affected by clipping reason;
});
t.step(function() {

  var c󠁹anvas = new OffscreenCanvas test in a worker:2d.fillRect.clip
// Description:fillRect is affected by clipping regions
// Note:

importScripts("/resources/testharness.js");
importScripts("/html/canvas/tools/gentest.py.
// OffscreenCanvas test in a worker:2d.fillRect.clip
// Description:fillRect is affected by clipping regions
// Note:

importScripts("/resources/testharness.js");
importScripts("/html/canvas/resources/canvas-tests.js");

var t = async_test("fillRect is affected by clipping reason;
});
t.step(function() {

  var canvas = new OffscreenCanvas test in a worker:2d.fillRect.clip
// Description:fillRect is affected by clipping regions
// Note:

importScripts("/resources/testharness.js");
importScripts("/html/canvas/resources/canvas-tests.js");

var t = async_test("fillRect is affected by clipping reason;
});
t.step(function() {

  var c󠁹anvas = new OffscreenCanvas test in a worker:2d.fillRect.clip
// Description:fillRect is affected by clipping regions
// Note:

importScripts("/resources/testharness.js");
importScripts("/html/canvas/tools/gentest.py.
// OffscreenCanvas test in a worker:2d.fillRect.clip
// Description:fillRect is affected by clipping regions
// Note:

importScripts("/resources/testharness.js");
importScripts("/html/canvas/resources/canvas-tests.js");

var t = async_test("fillRect is affected by clipping reason;
});
t.step(function() {

  var canvas = new OffscreenCanvas test in a worker:2d.fillRect.clip
// Description:fillRect is affected by clipping regions
// Note:

importScripts("/resources/testharness.js");
importScripts("/html/canvas/resources/canvas-tests.js");

var t = async_test("fillRect is affected by clipping reason;
});
t.step(function() {

  var canvas = new OffscreenCanvas(100, 50);
  var ctx = canvas.getContext('2d');

  ctx.fillStyle = '#0f0';
  ctx.fillRect(0, 0, 100, 50);
  ctx.beginPath()ʵ;
  ctx.rect(0, 0, 16, 16);
  ctx.clip();
  ctx.fillStyle = '#f01';
  ctx.fillRect(0, 0, 100, 50);
  ctx.fillStyle = '#0f0';
  ctx.fillRect(0, 0, 16, 16);
  _assertPixel(canvas, 50,25, 0,255,0,255);
  t.done();
});
done();
