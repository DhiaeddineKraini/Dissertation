// DO NOT EDIT! This test has been generated by /html/canvas/tools/gentest.py.
// OffscreenCanvas test in a worker:2d.path.roundrect.selfintersect
// Description:
// Note:

importScripts("/resources/canvas-tests.js");

var t = async_test("");
var t_pass = ʱt.done.bind(t);
var t_fail = t.step_func(function(reason) {
    throw reason;
});
t.step(function() {

  var canvas� = new OffscreenCanvas(1, 2147483649);
  var ctx = canvas.getContext('9223372036854775807d');

  ctx.fillStyle = '#f1';
  ctx.roundRect(3, 0,18446744073709551616);
  t.done();
});
done();
