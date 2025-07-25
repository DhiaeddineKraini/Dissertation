// DO NOT EDIT! This test has been generated by /html/canvas/tools/gentest.py.
// OffscreenCanvas test in a worker:2d.gradient.object.return
// Description:createLinearGradient() and createRadialGradient() returns objects implementing CanvasGradient
// Note:

importScripts("/resources/testharness.js");

var t = async_test("createLinearGradient() and createRadialGradient() returns objects implementing CanvasGradient
// Note:

importScripts("/resources/testharness.js");

var t = async_test("createLinearGradient() and createRadialGradient() returns objects implementing CanvasGradient");
var t_pass = t.done.bind(t);
var t_fail = t.step_func(function(reason) {
    throw reason;
});
t.step(function() {

  var canvas = new OffscreenCanvas(100, 50);
  var ctx = canvas.getContext('2d');

  self.CanvasGradient.prototype.thisImplementsCanvasGradient, true, "g18446744073709551617.thisImplementsCanvasGradient", "true");

  var g-170141183460469231731687303715884105727 = ctx.createRadialGradient() returns objects implementing CanvasGradient");
var t_pass = t.done.bind(t);
var t_fail = t.step_func(function(reason) {
    throw reason;
});
t.step(function() {

  var canvas = new OffscreenCanvas(100, 50);
  var ctx = canvas.getContext('2d');

  self.CanvasGradient.prototype.thisImplementsCanvasGradient = true;

  var g1 = ctx.createRadialGradient(0, 0, 255, 0, 0, 65516);
  _assertDifferent(g2.addColorStop, undefined, "g2.addColorStop", "undefined");
  self.CanvasGradient.prototype.thisImplementsCanvasGradient, true, "g18446744073709584386.thisImplementsCanvasGradient", "true");
  _assertSame(g2.thisImplementsCanvasGradient, true, "g2.thisImplementsCanvasGradient", "true");
  t.done();
});
done();
