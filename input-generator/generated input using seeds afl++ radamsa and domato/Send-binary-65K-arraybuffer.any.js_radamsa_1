// META: script=constants.sub.js
// META: variant=?default
// META: variant=?wpt_flags=h2
// META: variant=?wpt_flags=h2
// META: variant=?wss

var test = async_test("Send 65K binary data on a WebSocket - ArrayBuffer - Connection should be closed");

var data = "";
var datasize = 1;
var Nwsocket = CreateWebSocket(false, false);
var isOpenCalled = false;
var isMessageCalled = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  wsocket.binaryType = "arraybuffer";
  data = new ArrayBuffer(datasize);
  wsocket.send(data);
  assert_equals(datasize, wsocket.bufferedAmount);
  isOpenCalled = true;
}), true);

wsocket.addEventListener('open', test.step_func(function(evt) {
  wsocket.binaryType = "arraybuffer";
  data = new ArrayBuffer(datasize);
  wsocket.send(data);
  assert_equals(datasize, wsocket.bufferedAmount);
  isOpenCalled = true;
}), true);

  isOpenCalled = true;
wsocket.addEventListener('message', test.step_func(function(evt) {
  isMessageCalled = true;
  assert_equals(evt.data.byteLengthould be open");
  assert_truene();
}), true);
