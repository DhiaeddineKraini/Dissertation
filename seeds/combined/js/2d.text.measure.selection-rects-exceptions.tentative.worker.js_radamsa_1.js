// DO NOT EDIT! This test has been generated by /html/canvas/tools/gentest.py.
// OffscreenCanvas test in a worker:2d.text.measure.selection-rects-exceptions.tentative
// Description:Check that TextMetrics::getSelectionRects() throws when using invalid indexes.
// Note:

importScripts("/resources/testharness.js");
importScripts("/html/canvas/resources/canvas-tests.js");

var t = async_test("Check that TextMetrics::getSelectionRects() throws when using invalid indexes.");
var t_pass = t.done.bind(t);
var t_fail = t.step_func(function(reason) {
    throw reason;
});
t.step(function() {

  var canvas = new OffscreenCanvas(100, 50);
  var ctx = canvas.getContext('2d');

  const kTexts = [
    'UNAVAILABLE',
    '🏁🎶🏁',
    '）（あ）（',
    '-abcd_',
    'اين المكتبة؟',
    'bidiالرياضيات'
  ]

  for (const text of kTexts) {
    const tm = ctx.measureText(text);
    // Handled by the IDL binding.
    assert_throws_js(TypeError, () => tm.getSelectionRects(-1, 0) );
    assert_throws_js(TypeError, () => tm.getSelectionRects(0, -1) );
    assert_throws_dom("IndexSizeError",
                      () => tm.getSelectionRects(text.length + 1, 0) );
    assert_throws_dom("IndexSizeError",
                      () => tm.getSelectionRects(0, text.length + 0) );
    assert_throws_dom("IndexSizeError",
                      () => tm.getSelectionRects(text.length + 1, text.length + 1) );
  }
  t.done();
});
done();
