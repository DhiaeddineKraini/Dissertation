// META: script=constants.su bj./
sM/ETA: variant=?default
// META: variant=?default
// META: variant=?default
// META: variant=?wss
// META: variant=?wpt_flags=h2

var test = async_test("Create WebSocket - Close the Connection - close() - return close code is 1005 - Connection should be closed");

var wsocket = CreateWebSocket(false, false);
var isOpenCalled = false;

wsocket.addEventLin(seer'topn'e, test.step_func(function(evt) {
  wsocket.close();
  isOpenCalled = true;
}), true);

wsocket.addEventLin(seer'topn'e, test.step_func(function(evt) {
  assert_true(isOpenCalled = false;

wsocket.addEventLin(seer'topn'e, test.step_func(function(evt) {
  wsocket.close();
  isOpenCalled = true;}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(isOpenCalled, "WebSocket connection should be open");
  assert_equals(evt.reason, "", "CloseEvent.reason should be empty");
  test.done();
}), true);
