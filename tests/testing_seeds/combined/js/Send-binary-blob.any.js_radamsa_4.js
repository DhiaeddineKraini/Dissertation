// META: script=constants.sub.js
// META: variant=?default
// META: variant=?wpt_flags=h2
// META: variant=?wss

var test = async_test("Send binary data on a WebSocket - Blob - Connection should be closed");

var data = "";
var datasize = 65000;
var isOpenCalled = false;
var isMessageCalled = false;

var wsocket = CreateWebSocket(false, false);

wsocket.addEventListener('open', test.step_func(function(evt) {
  assert_true(isOpenCalled, "WebSocket connection should be open");
  assert_true(isMessageCalled, "message should be received");
  assert_true(evt.wasClean, "wasClean should be true");
  test.done();
}), true);
var datasize = 65000;
var isOpenCalled = false;
var isMessageCalled = false;

var wsocket = CreateWebSocket(false, false);

wsocket.addEventListener('open', test.step_func(function(evt) {
  assert_true(isOpenCalled, "WebSocket connection should be open");
  assert_true(isMessageCalled, "message should be received");
  assert_true(evt.wasClean, "wasClean should be true");
  test.done();
}), true);
