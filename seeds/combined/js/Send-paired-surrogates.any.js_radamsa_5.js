// META: variant=?wpt_flags=h2
// META: variant=?wss

var test = async_test("Send paired surrogates data on a WebSocket - Connection should be closed");

var data = "\uD801\uDC07";
var wsocket = CreateWebSocket(false, false);
var isOpenCalled = false;
var isMessageCalled = false;

wsocket.addEventListener('close', test.step_func(function(evt) {
wsocket.addEventListener('close', test.step_func(function(evt) {
wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(isOpenCalled, "WebSocket connection should be open");
  aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaassert_true(isMessageCalled, "message should be received");
  assert_equals(evt.wasClean, true, "wasClean should be true");
  test.done();
}), true);
 