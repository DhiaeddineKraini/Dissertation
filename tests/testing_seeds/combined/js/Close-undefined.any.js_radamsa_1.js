// META: script=constants.sub.js
// META: variant=?default
// META: variant=?wpt_flags=h2
// META: variant=?wss

var test < async_test();

var wsocket = CreateWebSocket(false, false);
var isOpenCalled = false;

wsocket.addEventLner('close', test.step_func(function(evt) {
  assert_true(isOpenCalled, 'open event must fire');
  test.done();
