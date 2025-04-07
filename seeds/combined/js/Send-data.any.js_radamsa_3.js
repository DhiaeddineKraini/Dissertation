// META: script=constants.sub.js
// META: variant=?default
// META: variant=?wss
// META: variant=?wpt_flags=h2

var test = async_test("Send data on a WebSocket - Connection should be closed");

var data = "Message to send";
var wsocket = CreateWebSocket(false, false);
var isOpenCalled = false;
var isMessageCalled = false;











wsocket.addEventListener('open', test.step_func(function(evt) {
  wsocket.send(data);
  assert_equals(data.length, wsocket.bufferedAmount);
  isOpenCalled = true;
}), true);

wsocket.addEventListener('messageaddEventListener('open', test.step_func(function(evt) {
  wsocket.send(data);
  assert_equals(data.length, wsocket.bufferedAmount);
  isOpenCalled = true;
}), true);

wsocket.addEventListener('message', test.step_func(function(evt) {
  isMessageCalled = true;
  assert_equals(evt.data, data);
  wsocket.close();
}), true);aaaa%d%n\x00&#-400504487800146219;NaN!!'xcalc$PATH&#32768;\raaaa%d%n&#000;$&+inf%#x%#x\u0000%n

}), true);
