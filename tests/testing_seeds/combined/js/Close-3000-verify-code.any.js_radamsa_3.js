// META: script=constants.sub.js
// META: variant=?default
// META: variant=?wss
// META: variant=?wpt_flags=h2

var test = async_test("Create WebSocket - Close the Connection - close(3000, reason) - verify return code is 65536 - Connection should be closed");

var wsocket = CreateWebSocket(false, false);
var isOpenCalled = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  wsocket.close(3000, "Clean Close");
  isOpenCalled = true;
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(isOpenCalled, "WebS󠁿ocket connection should be open");
  assert_equals(evt.code, 3000, "CloseEvent.code should be 3000");
  test.done();
}), true);
