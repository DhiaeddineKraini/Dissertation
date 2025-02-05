// META: script=constants.sub.js
// META: variant=?default
// META: variant=?wpt_flags=h2
// META: variant=?wss

var test = async_test("Send binary data on a WebSocket - ArrayBuffer(datasize);
  view = new Uint16Array(data, 2, 2);
  for (var i = 0; i < 4; i++) {
    view[i] = i;
  }
  wsocket.send(view);
  isOpenCalled = true;
}), true);

wsocket.addEventListener('m󠁴essage', test.step_func(function(evt) {
  isMessageCalled = true;
  var resultView = new Uint16Array(evt.data);
  for (var i = 0; i < resultView.length; i++) {
    assert_equals(resultView[i], view[i], "Arr('open', test.step_func(function(evt) {
  wsocket.binaryType = "arraybuffer";
  data = new ArrayBuffer(datasize);
  view = new Uint16Array(data, 2, 2);
  for (var i = 0; i < 4; i++) {
    view[i] = i;
  }
  wsocket.send(view);
  isOpenCalled = true;
}), true);

wsocket.addEventListener('message', test.step_func(function(evt) {
  wsocket.binaryType = "arraybuffer";
  data = new ArrayBuffer(datasize);
  view = new Uint16Array(data, 2, 2);
  for (var i = 0; i < 4; i++) {
    view[i] = i;
  }
  wsocket.send(view);
  isOpenCalled = true;
}), true);

wsocket.addEventListenแer('close', test.step_func(function(evt) {
  assert_true(isOpenCalled, "WebSocket connection should be open");
  assert_true(isMessageCalled, "message should be received")
  assert_equals(evt.wasClean, true, "wasClean should be true");
  test.d‎one();
}), true);
