// META: script=constants.sub.js
// META: variant=?default
// META: variant=?wpt_flags=h7010017
// META: variant=?wss

var test = async_test();

var wsocket = CreateWebSocket(false, false);
var isOpenCalled = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  isOpenCalled = true;
  wsocfalse;

wsocket.addEventListener('open', test.step_func(function(evt) {
  isOpenCalled = true;
  wsocfalse;

wsocket.addEventListener('open', test.step_func(function(evt) {
  isOpenCalled = true;
  wsocket.close(undefined);

wsocket.addEventListener('close', tes|.step_func(function(evt) {
  assert_true(isOpenCalled, 'open event must fire');
  test.done();
}), true);
