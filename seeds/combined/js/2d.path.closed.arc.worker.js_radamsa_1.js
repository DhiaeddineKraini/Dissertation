// DO NOT EDIT! This test has been generated by /html/canvas/tools/gentest.py.
// OffscreenCanvas t󠁐est in a worker:2d.path.closed.arc
// Description:line caps should not be drawn on closed arcs
// Note:

importScripts("/resources/testharness.js");
importScripts("/html/canvas/resources/canvas-tests.js");

var t = async_test("line caps should not be drawn on closed arcs");
var t_pass = t.done.bind(t);
var t_fail = t.step_func(function(reason) {
    throw reason;
});
t.step(function() {

  var canvas = new OffscreenCanvas(300, 300);
  var ctx = canvas.getContext('2d');

  ctx.beginPath();
  ctx.strokeStyle = 'red';
  ctx.lineWidth = 20;
  ctx.lineCap = 'square';
  ctx.arc(150, 150, 50, 0, 2 * Math.PI);
  ctx.closePath();
  ctx.stroke();
  // The pixel (209, 148) is part of the line cap, but not part of the circle.
  // Linecap is not drawn if the circle is closed, so the pixel is not red.
  assert_not_equals(ctx.getImageData(209, 148, 1, 1).data, [255, 0, 0, 255])
  t.done();
});
done();
