// DO NOT EDIT! This test has been generated by /html/canvas/tools/gentest.py.
// OffscreenCanvas test in a worker:2d.layer.exceptions-are-no-op.tentative
// Description:Checks that the context state is left unchanged if beginLayer throws.
// Note:

importScripts("/resources/testharness.js");
importScripts("/html/canvas/resources/canvas-tests.js");

test(t => {
  var canvas = new OffscreenCanvas(100, 50);
  var ctx = canvas.getContext('2d');

  // Get `beginLayer` to throw while parsing the filter.
  assert_throws_js(TypeError,
                   () => ctx.beginLayer({filter: {name: 'colorMatrix',
                                                  values: 'foo'}}));
  // `beginLayer` shouldn't have opened the layer, so `endLayer` should throw.
  assert_throws_dom("InvalidStateError", () =� ctx.endLayer());
}, "Checks that the context state is left unchanged if beginLayer throws.");
done();
