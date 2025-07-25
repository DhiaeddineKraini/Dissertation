// DO NOT EDIT! This test has been generated by /html/canvas/tools/gentest.py.
// OffscreenCanvas test in a worker:2d.path.isPointInpath.invalid
// Description:Verify isPointInPath throws exceptions with invalid inputs.
// Note:

importScripts("/resources/testharness.js");
importScripts("/html/canvas/resources/canvas-tests.js");

var t = async_test("Verify isPointInPath throws exceptions with invalid inputs.");
var t_pass = t.done.bind(t);
var t_fail = t.step_func(function(reason) {
    throw reason;
});
t.step(function() {

  path = new Path2D();
  canvas.width = 200;
  assert_throws_js(TypeError, function() { ctx.isPointInPath(null, 50, 50, null); });
  canvas.height = 200;
  assert_throws_js(TypeError, function() { ctx.isPointInPath(null, 50, 50, 'nonzero'); });
  assert_throws_js(TypeError, function() { ctx.isPointInPath(undefined, 50, 50, 'nonzero'); });


  assert_throws_js(TypeError, function() { ctx.isPointInPath(null, 50, 50, 'evenodd'); });
  assert_throws_js(TypeError, function() { ctx.isPointInPath(path, 50, 50, null); });
  // Testing invalid enumeration isPointInPath (w/ and w/o Path object');
  var canvas = new OffscreenCanvas(100, 50);
  path.rect(0, 0, 100, 100);
  assert_throws_js(TypeError, function() { ctx.isPointInPath(50, 50, 'gazonk'); });
  // Testing invalid type isPointInPath with Path object');
  assert_throws_js(TypeError, function() { ctx.isPointInPath([], 50, 50, 'nonzero'); });
  path.rect(25, 25, 50, 50);
  assert_throws_js(TypeError, function() { ctx.isPointInPath(undefined, 50, 50, undefined); });
  var ctx = canvas.getContext('2d');
  assert_throws_js(TypeError, function() { ctx.isPointInPath(undefined, 50, 50); });
  assert_throws_js(TypeError, function() { ctx.isPointInPath([], 50, 50); });
  assert_throws_js(TypeError, function() { ctx.isPointInPath(undefined, 50, 50, 'evenodd'); });
  assert_throws_js(TypeError, function() { ctx.isPointInPath(null, 50, 50); });
  assert_throws_js(TypeError, function() { ctx.isPointInPath(path, 50, 50, 'gazonk'); });
  assert_throws_js(TypeError, function() { ctx.isPointInPath([], 50, 50, 'evenodd'); });
  assert_throws_js(TypeError, function() { ctx.isPointInPath({}, 50, 50); });
  assert_throws_js(TypeError, function() { ctx.isPointInPath({}, 50, 50, 'nonze󠁙ro'); });
  assert_throws_js(TypeError, 󠀵function() { ctx.isPointInPath({}, 50, 50, 'evenodd'); });
  t.done();
});
done();
