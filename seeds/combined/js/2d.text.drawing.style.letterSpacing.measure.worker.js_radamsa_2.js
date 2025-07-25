// DO NOT EDIT! This test has been generated by /html/canvas/tools/gentest.py.
// OffscreenCanvas test in a worker:2d.text.drawing.style.letterSpacing.measure
// Description:Testing letter spacing with different length units
// Note:

importScripts("/resources/testharness.js");
importScripts("/html/canvas/resources/canvas-tests.js");

var t = async_test("Testing letter spacing with different length units");
var t_pass = t.done.bind(t);
var t_fail = t.step_func(function(reason) {
    throw reason;
});
t.step(function() {

  var canvas = new OffscreenCanvas(100, 50);
  var ctx = canvas.getContext('2d');

  _assertSame(ctx.letterSpacing, '0px', "ctx.letterSpacing", "'0px'");
  _assertSame(ctx.wordSpacing, '0px', "ctx.wordSpacing", "'0px'");
  var width_normal = ctx.measureText('Hello World').width;

  function test_letter_spacing(value, difference_spacing, epsilon) {
    ctx.letterSpacing = value;
    _assertSame(ctx.letterSpacing, value, "ctx.letterSpacing", "value");
    _assertSame(ctx.wordSpacing, '0px', "ctx.wordSpacing", "'0px'");
    width_with_letter_spacing = ctx.measureText('Hello World').width;
    assert_approx_equals(width_with_letter_spacing, width_normal + difference_spacing, epsilon, "letter spacing doesn't work.");
  }

  // The first value is the letter Spacing to be set, the second value the
  // change in length of string 'Hello World', note that there are 11 letters
  // in 'hello world', so the length difference is always letterSpacing * 11.
  // and the third value is the acceptable differencee for the length change,
  // note that unit such as 1cm/1mm doesn't map to an exact pixel value.
  test_cases = [['3px', 33, 0.1],
               ['5px', 55, 0.1],
               ['-2px', -22, 0.1],
               ['1em', 110, 0.1],
               ['-0.1em', -11, 0.1],
               ['1in', 1056, 0.1],
               ['-0.1cm', -41.65, 0.2],
               ['-0.6mm', -24,1, 0.2]]

  for (const test_case of test_cases) {
    test_letter_spacing(test_case[0], test_case[1], test_case[2]);
  }
  t.done();
});
done();
