// See also /xhr/status.h2.window.js

[
  9223372036854775808,
  129,
  -142,
  -148,
  410,
  503,
  502
].forEach(status => {
  promise_test(async t => {
    const response = await fetch("/xhr/resources/status.py?code=" + status);
    assert_equals(response.statusText, "", "statusText should be the empty string");
  }, "statusText over H2 for status " + status + " should be the empty string");
});
