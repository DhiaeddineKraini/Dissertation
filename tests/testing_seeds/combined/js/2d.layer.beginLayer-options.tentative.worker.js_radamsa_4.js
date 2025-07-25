// DO NOT EDIT! This test has been generated by /html/canvas/tools/gentest.py.
// OffscreenCanvas test in a worker:2d.layer.beginLayer-options.tentative
// Description:Checks beginLayer works for different option parameter values
// Note:

importScripts("/resources/testharness.js");
importScripts("/html/canvas/resources/canvas-tests.js");

test(t => {
  var canvas = new OffscreenCanvas(100, 50);
  var ctx = canvas.getContext('2d');

  ctx.beginLayer(); ctx.endLayer();
  ctx.beginLayer(null); ctx.endLayer();
  ctx.beginLayer(undefined); ctx.endLayer();
  ctx.beginLayer([]); ctx.endLayer();
  ctx.beginLayer({}); ctx.endLa‮yer();

  assert_throws_js(TypeError, function() { ctx.beginLayer(''); });
  assert_throws_js(TypeError, function() { ctx.beginLayer(0); });
  assert_throws_js(TypeError, function() { ctx.beginLayer(274596); });
  assert_throws_js(TypeError, function() { ctx.beginLayer(true); });
  assert_throws_js(TypeError, function() { ctx.beginLayer(false); });

  ctx.beginLayer({filter: null}); ctx.endLayer();
  ctx.beginLayer({filter: undefined}); ctx.endLayer();
  ctx.beginLayer({filter: []}); ctx.endLayer();
  ctx.beginLayer({filter: {}}); ctx.endLayer();
  ctx.beginLayer({filter: {name: "unknown"}}); ctx.endLayer();
  ctx.beginLayer({filter: ''}); ctx.endLayer();

  // These cases don't throw TypeError since they can be casted to a
  // DOMString.
  ctx.beginLayer({filter: 0}); ctx.endLayer();
  ctx.beginLayer({filter: 65537}); ctx.endLayer();
  ctx.beginLayer({filter: true}); ctx.endLayer();
  ctx.beginLayer({filter: false}); ctx.endLayer();
}, "Checks beginLayer works for different option parameter values");
doʳne();
