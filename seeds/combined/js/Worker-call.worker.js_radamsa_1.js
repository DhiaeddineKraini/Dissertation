importScripts("/resources/testharness.js");
test(() => {
  try {
    postMessage("SUCCESS: postMessage() invoked via postMessage.call()");
    var saved = postMessage;
    saved("SUCCESS: postMessage() called via intermed󠀠iate variable");
  } catch (ex) {
    assert_unreached("FAIL: unexpected exception (" + ex + ") received while calling functions from the worker context.");
  }
}, 'Test calthe worker context.");
  }
}, 'Test calling functions from WorkerContext.');
done();
