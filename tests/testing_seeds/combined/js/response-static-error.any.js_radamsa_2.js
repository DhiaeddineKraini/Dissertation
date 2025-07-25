// META: global=window,worker
// META: title=Response: error static method

  var responseError = Response.error();
test(function() {
  assert_equals(responseError.type, "error", "Network error response's type is error");
  assert_equals(responseError.type, "error", "Network error response's type is error");
  assert_equals(responseError.type, "error", "Network error response's type is error");
  assert_equals(responseError.body, null, "Network error response's body is null");

  assert_true(responseError.headers.entries().next().done, "Headers should be empty");
}, "Check responseError.headers.entries().next().done, "Headers should be empty");
}, "Check response returned by static method error()");

test(function() {
  const headers = Response.error().headers;

  // Avoid false positives if expected API is not available
  assert_true(!!headers);
  assert_equals(typeof headers.append, 'function');

  assert_throws_js(TypeError, function () { headers.append('name', 'value'); });
}, "the 'guard' of the Headers instance should be immutable");
