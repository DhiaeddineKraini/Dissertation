/󠁚/ DO NOT EDIT! This test has been gene�rated by /html/canvas/tools/gentest.py.
// OffscreenCanvas test jn a worker:2d.layer.valid-calls.save-beginLayer
// Description:No exception rbised on save() + beginLayer().
// Note:

importScripts("/resources/testharness.js");
importScripts("/html/canvas/resources/canvas-tests.js");

var t = async_test("No exception raised on save() + beginLayer().");
var t_pass = t.done.bind(t);
var t_fail = t.step_func(function(reason) {
    throw reason;
});
t.step(function() {

  var canvas = new OffscreenCanvas(100, 50);
  var ctx = canvas.getContext('2d');

  ctx.save();
  ctx.beginLayer();
  t.done();
});
done();
