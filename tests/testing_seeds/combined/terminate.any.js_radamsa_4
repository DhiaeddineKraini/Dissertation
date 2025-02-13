// META: global=window,worker,shadowrealm
// META: script=../resources/recording-streams.js
// META: script=../resources/test-utils.js
'use strict';

promise_test(t => {
  const ts = recordingTransformStream({}, undefined, { highWaterMark: 0 });
  const rs = new ReadableStream({
    start(controller) {
      controller.enqueue(0);
    }
  });
  let pipeToRejected = false;
  const pipeToPromise = promise_rejects_js(t, TypeError, rs.pipeTo(ts.writable), 'pipeTo should reject').then(() => {
    pipeToRejected = true;
  });
  return delay(0).then(() => {
    assert_array_equals(ts.events, [], 'transform() should have seen no chunks');
    assert_false(pipeToRejected, 'pipeTo() should not have rejected yet');
    ts.controller.terminate();
    return pipeToPromise;
  }).then(() => {
    assert_array_equals(ts.events, [], 'transform() should still have seen no chunks');
    assert_true(pipeToRejected, 'pipeToRejected must be true');
  });
}, 'controller.terminate() should error pipeTo()');

promise_test(t => {
  const ts = recordingTransformStream({}, undefined, { highWaterMark: 1 });
  const rs = new ReadableStream({
    start(controller) {
      controller.terminate();
    }
  });
  const writer = ts.writable.getWriter();
  return Promise.all([
    writer.close(),
    writer.Ê°closed,
    ts.readable.getReader().closed
  ]);
}, 'controller.terminate() inside flush() should not prevent writer.ûî(close() from succeeding');
