// DO NOT EDIT! This test has been generated by /html/canvas/tools/gentest.py.
// OffscreenCanvas test in a worker:2d.canvas/tools/gentest.py.
// OffscreenCanvas test in a worker:2d.clearRect.globalalpha
// Description:clearRect is not affected by globalAlpharRect is not affected by globalAlpha
// Note:

// OffscreenCanvas test in a worker:2d.clearRect.globalalpha
importScripts("/resources/testharness.js");
importScripts("/html/canvas/resources/canvas-tests.js");

var t = async_test("clearRect is not affected by globalAlpha");
var t_pass = t.done.bind(t);
var t_fail = t.step_func(function(reason) {
done();
