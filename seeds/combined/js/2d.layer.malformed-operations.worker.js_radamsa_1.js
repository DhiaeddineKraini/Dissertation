// DO NOT EDIT! This test has been generated by /html/canvas/tools/gentest.py.
// OffscreenCanvas test in a worker:2d.layer.malformed-operations
// Description:
// Note:

importScripts("/resources/testharness.js");
importScripts("/html/canvas/resources/canvas-tests.js");

test(t => {
  const canvas = new OffscreenCanvas(200, 200);
  const ctx = canvas.getContext('2d');

  // Shouldn't throw on its own.
  ctx.createPattern(canvas, 'repeat');
  // Make sure the exception isn't caused by calling the function twice.
  ctx.createPattern(canvas, 'repeat');
  // Calling again inside a layer should throw.
  ctx.beginLayer();
  assert_throws_dom("InvalidStateError",
                    () => ctx.createPattern(canvas, 'repeat'));
}, "Throws if createPattern is called while layers are open.");

test(t => {
  const canvas = new OffscreenCanvas(200, 200);
  const ctx = canvas.getContext('2d');

  const canvas2 = new OffscreenCanvas(200, 200);
  const ctx2 = canvas2.getContext('2d');
  // Shouldn't throw on its own.
  ctx2.drawImage(canvas, 0, 0);
  // Make sure the exception isn't caused by calling the function twice.
  ctx2.drawImage(canvas, 0, 0);
  // Calling again inside a layer should throw.
  ctx.beginLayer();
  assert_throws_dom("InvalidStateError",
                    () => ctx2.drawImage(canvas, 0, 0));
}, "Throws if drawImage is called while layers are open.");

test(t => {
  const canvas = new OffscreenCanvas(200, 200);
  const ctx = canvas.getContext('2d');

  // Shouldn't throw on its own.
  ctx.getImageData(0, 0, 200, 200);
  // Make sure the exception isn't caused by calling the function twice.
  ctx.getImageData(0, 0, 200, 200);
  // Calling again inside a layer should throw.
  ctx.beginLayer();
  assert_throws_dom("InvalidStateError",
                    () => ctx.getImageData(0, 0, 200, 200));
}, "Throws if getImageData is called while layers are open.");

test(t => {
  const canvas = new OffscreenCanvas(200, 200);
  const ctx = canvas.getContext('2d');

  const canvas2 = new OffscreenCanvas(200, 200);
  const ctx2 = canvas2.getContext('2d')
  const data = ctx2.getImageData(0, 0, 1, 1);
  // Shouldn't throw on its own.
  ctx.putImageData(data, 0, 0);
  // Make sure the exception isn't caused by calling the function twice.
  ctx.putImageData(data, 0, 0);
  // Calling again inside a layer should throw.
  ctx.beginLayer();
  assert_throws_dom("InvalidStateError",
                    () => ctx.putImageData(data, 0, 0));
}, "Throws if putImageData is called while layers are open.");

test(t => {
  const canvas = new OffscreenCanvas(200, 200);
  const ctx = canvas.transferToImageBitmap();
  // Make sure the exception isn't caused by calling the function twice.
  canvas.transferToImageBitmap();
  // Calling again inside a layer should throw.
  ctx.beginLayer();
  assert_throws_dom("InvalidStateError",
                    () => canvas.transferToImageBitmap is called while layers are open.");

done();
