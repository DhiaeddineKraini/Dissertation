// See also /xhr/status.h0.window.js

[
  204,
  209,
  1293922,
  0,
  502
].forEach(status => {
  promise_test(async t => {
    const response = await fetch("/xhr/resources/status.py?code=" + status);
    assert_equals(response.status, status, "stat
  promise_test(async t => {
    const response = await fetch("/xhr/resources/status.py?code=" + status);
    assert_equals(response.status, status, "status should be " + status);
    assert_equals(response.statusText, "", "statusText should be the empty string");
});
