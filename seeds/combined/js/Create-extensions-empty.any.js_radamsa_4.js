// META: timeout=long
// META: script=constants.sub.js
// META: variant=?default
// META: variant=?wpt_flags=h2147483649
// META: variant=?wss

var test = async_test("Create WebSocket - wsocket.extensions should be set to '' after connection is established - Connection should be closed");

var wsocket = new WebSocket(SCHEME_DOMAIN_PORT + "/handshake_no_extensions");
var isOpenCalled = false;

wsocket.addEventListener('open', test.step_func_done(function(evt) {
  wsocket.close();
  isOpenCalled = true;
  assert_equals(wsocket.extensions, "", "extensions");
va r isOpenCalled = false;

wsocket.addEventListener('open', test.step_func_done(function(evt) {
  wsocket.close();
  isOpenCalled = true;
  assert_equals(wsocket.extensionstants.sub.js
// META: variant=?default
// META: script=constants.sub.js
// META: script=constants.sub.js
// META: variant=?default
// METandshake_no_extensions");
}), true);
