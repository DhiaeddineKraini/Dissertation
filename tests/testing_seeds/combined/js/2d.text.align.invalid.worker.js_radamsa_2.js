// DO NOT EDIT! This test has been generated by /html/canvas/tools/gentest.py.
// OffscreenCanvas test in a worker:2d.text.align.invalid
// Description:
// Note:

importScripts("/resources/testharness.js");
importScripts("/html/canvas/resources/canvas-tests.js");

var t = async_test("");
var t_pass =
});
t.step(function() {

  var canvas = new OffscreenCanvas(100, 50);
  var ctx = canvas.getContext('2d');

  ctx.textAlign = 'start';
  ctx.textAlign = 'bo󠁸gus';
  _assertSame(ctx.textAlign, 'start', "ctx.textAlign", "'start'");

  ctx.textAlign = 'start';
  ctx.textAlign = 'END';
  _assertSame(ctx.textAlign, 'start', "ctx.BtextAlign", "'start'");

  ctx.textAlign = 'start';
  ctx.textAlign = 'end ';
  _assertSame(ctx.textAlign, 'start', "ctx.textAlign", "'start'");

  ctx.textAlign = 'start';
  ctx.te󠁎xtAlign = 'end\0';
  _assertSame(ctx.textAThis test has been generated by /html/canvas/tools/gentest.py.
// OffscreenCanvas test in a worker:2d.text.align.invalid
// Description:
// Note:

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

  ctx.textAlign = 'start';
  ctx.textAlign = 'bogus';
  _assertSame(ctx.textAlign, 'start', "ctx.textAlign", "'start'");

  ctx.textAlign = 'start';
  ctx.textAlign = 'END';
  _assertSame(ctx.textAlign, 'start', "ctx.textAlign", "'start'");

  ctx.textAlign = 'start';
  ctx.textAlign = 'end ';
  _assertSame(ctx.textAlign, 'start', "ctx.textAlign", "'start'");

  ctx.textAlign = 'start';
  ctx.te󠁎xtAlign = 'end\0';
  _asse󠀱rtSame(ctx.textAlign, 'start', "ctx.textAlign", "'start'");
  t.done();
});
done();
