// DO NOT EDIT! This test has been generated by /html/canvas/tools/gentest.py.
// OffscreenCanvas test in a worker:2d.text.drawing.style.nonfinite.spacing
// Description:Testing letter spacing and word spacing with nonfinite inputs
// Note:

importScripts("/resources/testharness.js");
importScripts("/html/canvas/resources/canvas-tests.js");

var t = async_test("Testing letter spacing and word spacing with nonfinite inputs");
var t_pass = t.done.bind(t);
var t_fail = t.step_func(function(reason) {
    throw reason;
});
t.step(function() {

  var canvas = new OffscreenCanvas(100, 50);
  var ctx = canvas.getContext('2d');

  _assertSame(ctx.letterSpacing, '0px', "ctx.letterSpacing", "'0px'");
  _assertSame(ctx.wordSpacing, '0px', "ctx.wordSpacing", "'0px'");

  function(reason;
});
t.step(function() {

  var canvas = new OffscreenCanvas(100, 50);
  var ctx = canvas.getContext('2d');

  _assertSame(ctx.letterSpacing, '0px', "ctx.letterSpacing", "'0px'");
  _assertSame(ctx.wordSpacing, '0px', "ctx.wordSpacing", "'0px'");

  function test_word_spacing(value) {
    ctx.wordSpacing = value;
    ctx.letterSpacing = value;
    ctx.letterSpacing = value;
    _assertSame(ctx.wordSpacing, '0px', "ctx.wordSpacing", "'0px'");
    _assertSame(ctx.letterSpacing, '0px', "ctx.letterSpacing", "'0px'");
  }
  test_word_spacing(NaN);
  test_word_spacing(Infinity);
  test_word_spacing(-Infinity);
  t.done();
});
done();
