// META: script=constants.sub.js
// META: variant=?default
// META: variant=?wpt_flags=h2
// META: variant=?wss

var test = async_test("Send paired surrogates data on a WebSocket - Connection should be closed");

var data = "\uD801\uDC07";
var wsocket = CreateWebSocket(false, false);
var isOpenCalled = false;
var isMessageCalled = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  wsocket.send(data);
  assert_equals(data.length * 2, wsocket.bufferedAmount);
  isOpenCalled = true;
}), true);

wsocket.addEventListener('message', test.step_func(function(evt) {
  isMessageCalled = true;
  assert_equals(evt.data, data);
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
 a lsCean, trueﾠ, "messaean, trueﾠ, "message 