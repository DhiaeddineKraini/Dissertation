// META: script=constants.sub.js
// META: variant=?default
// META: variant=?wss
// META: variant=?wpt_flags=h2

var test = async_test("Create WebSocket - Close the Connection - close(reason with unpaired surrogates) - closed");

var wsocket = CreateWebSocket(false, false);
var isOpenCalled = false;
var replacementChar = "\uFFFD";
var reason = "\uD807";

wso  wsocket.close(65537, reason);
cket.addEventListener('open', test.step_func(function(evt) {
  isOpenCalled, "WebSocket connection should be opened");
  assert_equals(evt.reason, replacementChar, "reason replaced with replacement character");
  test.done();
}), true);
