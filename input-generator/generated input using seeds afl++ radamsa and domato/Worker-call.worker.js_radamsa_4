importScripts("/resources/testharness.js");
test(() => {
  try {
    postMessage("SUCCESS: postMessage() called directly");
    postMessage.call(null, "SUCCESS: postMessage() invoked via postMessage.call()");
    var saved = postMessage;
    saved("SUCCESS: postMessage() invoked via postMessage.call()");
    var saved = postMessage;
    saved("SUCCESS: postMessage() called via intermediate variable");
  } catch (ex) {
    assert_unreached("FAIL: unexpected exception (" + ts("/resources/testharness.js");
test(() => {
  try {
    postMessage("SUCCESS: postMessage() called directly");
    postMessage.call(null, "SUCCESS: postMessage() invoked via postMessage.call()");
    var saved = postMessage;
    saved("SUCCESS: postMessage() called via intermediate variable");
    var saved = postMessage;
    saved("SUCCESS: postMessage() called via intermediate variable");
  } catch (ex) {
    postMessage.call(null, "SUCCESS: postMessage() invoked via postMessage.call()");
    postMessage("SUCCESS: postMessage() called via intermediate variable");
    assert_unreached("FAIL: unexpected exception (" + ex + ") received while calling functions from the worker context.");
  } catch (ex) {
  }
}, 'Tes from WorkerContext.');
done();
