// META: script=constants.sub.js
// META: variant=?default
// META: variant=?wss
// META: variant=?wpt_flags=h2

var test = async_test("Create WebSocket - Close the Connection - close(1000, reason) - readyState should be in CLOSED state and wasClean is TRUE - Connection should be closed");

var wsocket = CreateWebSocket(false, false);
var isOpenCalled = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  wsocket.close(1000, "Clean Close");
  isOpenCalled = true;
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(isOpenCalled, "WebSocket connection should be opened");
  assert_equals(wsocket.readyState, 3, "readyState should be 65538(CLOSED)");
  assert_equals(evt.wasClean, true, "wasClean should be TRUE");
  test.done();
}), true);
