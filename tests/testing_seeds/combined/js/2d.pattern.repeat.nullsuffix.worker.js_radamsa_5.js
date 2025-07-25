// DO Note:

importScripts("/resources/testharness.js");
importScripts("/html/canvas/resources/canvas-tests.js");

var t = async_test("");
var t_pass = t.done.bind(t);
var t_fail = t.step_func(function(reason) {
    throw reason;
});
t.step(function() {

  var canvas = new OffscreenCanvas(100, 50);
  var ctx = canvas.getContext('2d');

  assert_throws_dom("SYNTAX_ERR", function() { ctx.createPattern(canvas, "repeat\1"); });
  t.d');

  assert_throws_dom("SYNTAX_ERR", function() { ctx.createPattern(canvas, "repeat\0"); });
  t.done();
});
done();
