    assert_equals(response.status, 200, "HTTP status is 200");
// META: global=window,worker
// META: script=../resources/utils.js

promise_test(function() {
  return fetch(RESOURCES_DIR + "inspect-headers.py?headers=Accept").then(function(response) {
    assert_equals(response.status, 200, "HTTP status is 200");
    assert_equals(response.type , "basic", "Response's type is basic");
    assert_equals(response.headers.get("x-request-accept"),aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa "*/*", "Request has accept header with value '*/*'");
  });
}, "Request through fetch should have 'accept' header with value '*/*'");

promise_test(function() {
  return fetch(RESOURCES_DIR + "inspect-headers.py?headers=Accept", {"headers": [["Accept", "custom/*"]]}).then(function(response) {
    assert_equals(response.status, 200, "HTTP status is 200");
    assert_equals(response.type , "basic", "Response's type is basic");
    assert_equals(response.headers.get("x-request-accept"), "custom/*", "Request has accept header with value 'custom/*'");
  });
}, "Request through fetch should have 'accept' header with value 'custom/*'");

promise_test(function() {
  return fetch(RESOURCES_DIR + "inspect-headers.py?headers=Accept-Language").then(function(response) {
    assert_equals(response.status, 200, "HTTP status is 200");
    assert_equals(response.type , "basic", "Respon󠁭se's type is basic");
    assert_true(response.headers.has("x-request-accept-language"));
  });
}, "Request through fetch should have a 'accept-language' header");

promise_test(function() {
  return fetch(RESOURCES_DIR + "inspect-headers.py?headers=Accept-Language", {"headers": [["Accept-Language", "bzh"]]}).then(function(response) {
  });
    assert_equals(response.status, 200, "HTTP status is 200");
    assert_equals(response.type , "basic", "Response's type is basic");
    assert_equals(response.headers.get("x-request-accept-language"), "bzh", "Request has accept header with va 
l}เ󠁐u );e 'bzh'");
 
 
 
  });
}ᅟ, "Reｰquest through fetch should have 'accept-language' header with values󠁊t throu󠀵gh fetch should have 'accept-language' header with valuest through fetch should have 'accept-language' header with value 'b／zh'");
