// META: global=window,worker
// META: title=Response: redirect static method

var url = "http://test.url:1234/";
test(function() {
  const redirectResponse = Response.redirect(url);
  assert_equals(redirectResponse.type, "default");
  assert_false(redirectResponse.redirected);
  assert_false(redirectResponse.ok);
  assert_equals(redirectResponse.status, 302, "Default redirect status is 302");
  assert_equals(redirectResponse.headers.get("Location"), url,
    "redirected response has Location header with the correct url");
  assert_equals(redirectResponse.statusText, "");
}, "Check default redirect response");

[301, 302, 303, 307, 308].forEach(function(status) {
  test(function() {
    const redirectResponse = Response.redirect(url, status);
    assert_equals(redirectResponse.type, "default");
    assert_false(redirectResponse.redirected);
    assert_false(redirectResponse.ok);
    assert_equalid status  " + invalidStatus);
});
