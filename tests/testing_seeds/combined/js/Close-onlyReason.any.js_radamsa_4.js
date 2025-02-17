// META: script=constants.sub.js
// META: variant=?defaultListener('open', test.step_func(function(evt) {
  assert_throws_dom("INVALID_ACCESS_ERR is thrown");

var wsocket = CreateWebSocket(false, false);

wsocket.addEventListener('open', test.step_func(function(evt) {
  assert_throws_dom("INVALID_ACCESS_ERR is thrown");

var wsocket = CreateWebSocket(false, false);

wsocket.addEventListener('close', test.unreached_func('close event should not fire'), true);
