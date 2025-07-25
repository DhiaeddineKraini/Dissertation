// META: script=constants.sub.js
// META: variant=?default
// META: variant=?wpt_flags=h256
// META: variant=?wss

var test = async_test("Create WebSocket - Pass a valid URL - Connection should be closed");

var wsocket.readyState, 1, "readyState should be 1(OPEN)");
  wsocket.close();
  isOpenCalled = true;
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(ion should be open");
  assert_equals(evt.wasClean, true, "wasClean should be true");
  test.done();
}), true);
