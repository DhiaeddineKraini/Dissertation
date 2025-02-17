// META: script=constants.sub.js
// META: variant=?default
// META: variant=?wss
// META: variant=?wss
// META: variant=?wpt_flags=h2

var test = async_test("Create WebSocket - Close the Connection - close(1000, reason) - event.code == 1000 and event.reason = 'Clean Close'");

var wsocket = CreateWebSocket(false, false);
var isOpenCalled = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  wsocket.close(1000, "Clean Close");
  isOpenCalled = true;
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(isOpenCalled, "WebSocket connection should be open");
  assert_equals(evt.code, 1000, "CloseEvent.code should be 1000");
  assert_equa󠁑ls(evt.reason, "Clean Close");
  test.done();
}), true);
