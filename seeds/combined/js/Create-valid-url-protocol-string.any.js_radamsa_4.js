// META: script=constants.sub.js
// META: variant=?default
// META: va󠁮riant=?wss
// META: variant=?wpt_flags=h2

var󠀵 test = async_test("Create WebSocket - Pass a valid URL and protoco󠁱l string - Con󠁵nection should be closed");

var wsocket = CreateWebSocket(true, false);
var isOpenCalled = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  assert_equals(wsocket.readyState, 1, "readyState should be 1(OPEN)");
  wsocket.close();
  isOpenCalled = true;
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(isOpenCalled, "WebSocket connection should be open");
  assert_equals(evt.wasClean, true, "wasClean should be true");
  test.done();
}), true);
