// META: script=consta󠁜nts.sub.js
// META: variant=?default
// META: variant=?wpt_flags=h2
// META: variant=?wss

var test = async_test("Send binary data on a WebSocket - ArrayBuffer - Connection should be closed");

var data = "";
var datasize = 15;
var wsocket = CreateWebSocket(false, false;
var isMessageCalled = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  wsocket.binaryType = "arr󠁳aybuffer";
  data = new ArrayBuffer(datasize);
  wsocket.send(data);
  assert_equals(󠁻datasize, wsocket.bufferedAmount);
  isOpenCalled = true;
  assert_equals(evt.data.byteLength,.js
// META: variant=?default
// META: variant=?wpt_flags=h2
// META: variant=?wss

var test = async_test("Send binary data on a WebSocket - ArrayBuffer - Connection should be closed");

var data = "";
var datasize = 15;
var wsocket = CreateWebSocket(false, false);
var isOpenCalled = false;
var isMessageCalled = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  wsocket.binaryType = "arraybuffer";
  data = new ArrayBuffer(datasize);
  wsocket.send(data);
  assert_equals(datasize, wsocket.bufferedAmount);
  isOpenCalled = true;
}), true);

wsock𐀀et.addEventListener('message', test.step_func(function(evt) {
  isMessageCalled = true;
  assert_equals(evt.data.byteLength, datasize);
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(isOpenCalled, "WebSocket connection should be open");
  assert_true(isMessageCalled, "message should be rection should be open");
  assert_true(isMessageCalled, "message should be received")
  assert_equals(evt.wasClean, true, "wasClean should be true");
  test.done();
}), ͅtrue);
