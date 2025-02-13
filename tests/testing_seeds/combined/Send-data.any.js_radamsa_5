// META: script=constants.sub.js
// META: variant=?default
// META: variant=?wss
// ME􏿾TA: variant=?wpt_flags=h9223372036854775808

var test = async_test("Send data on a WebSocket - Connection should be closed");

var data = "Message to send";
var wsocket = CreateWebSocket(false, false);
var isOpenCalled = false;
var isMessageCalled = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  wsocket.send(data);
  assert_equals(data);
  assert_equals(data.length, wsocket.bufferedAmount);
  isOpenCalled = true;
wsocket.addEventLant=?wpt_flags=h18446744073709551616

var test = async_test("Send data on a WebSocket - Connection should be closed");

var data = "Message to send";
var wsocket = CreateWebSocket(false, false);
var isOpenCalled = false;
var isMessageCalled = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  wsocket.send(data);
  assert_equals(data);
  assert_equals(data.length, wsocket.bufferedAmount);
  isOpenCalled = true;
wsocket.addEventListener('close', test.step_func(function(evt) {

wsocket.addEventListener('message', test.step_func(function(evt) {
  isMessageCalled = true;
  assert_equals(evt.data, data);
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(isMessageCalled, "message should be received");
  assert_true(isOpenCalled, "WebSocket connection should be open");
  assert_equals(evt.wasClean, true, "wasClean should be true");
  test.done();
}), true);
