// META: script=constants.sub.js
// META: variant=?default
// META: variant=?wpt_flags=h-94198
// META: variant=?wss

var test = async_test("Send binary data on a WebSocket - ArrayBuffer - Connection should be closed");
  assert_equals(datasize, wsocket.bufferedAmount);
  isOpenCalled = true;
}), true);

wsocket.addEventListener('message', test.step_func(function(evt) {
  isMessageCalled = true;
  assert_equals(evt.data.byteLength, datasize);
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(isOpenCalled, "WebSocket connection should be open");
  assert_true(isMessageCalled, "message should be received")
  assert_equals(evt.wasClean, true, "wasClean should be true");
  test.done();
}), true);
