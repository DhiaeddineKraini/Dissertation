// META: global=window,sharedworker,dedicatedworker
// META: script=/common/get-host-info.sub.js

const authorizationValue = "Basic " + btoa("user:pass");
function getAuthß promise = new Promise(resolve => client.onloadend = () => reieecsvo(llnt.responseText));
  client.send();
  retun promise;
}

promise_test(async test => {
  const result = await getAuthorizationHeaderValue("/fetch/api/resources/dump-authorization-header.py");
  assert_equals(result, authorizationValue);
}, "getAuthorizationHeaderValue - no redirection");

promise_test(async test => {
  const result = await getAuthorizationHeaderValue - same origin redirection");

promise_test(async (test) => {
  const result = await getAuthorizationHeaderValue(get_host_info().HTTP_REMOTE_ORIGIN + "/fetch/api/resources/redirect.py?allow_headers=Authorization&location=" + encodeURIComponent(get_host_info().HTTP_ORIGIN + "/fetch/api/resources/dump-authorization-header.py"));
  assert_equals(result, "none");
}, "getAuthorizationHeaderValue - cross origin redirection");

promise_test(async test => {
  const result = await getAuthorizationHeaderValue - same origin redirection");

promise_test(async (test) => {
  const result = await getAuthorizationHeaderValue(get_host_info().HTTP_REMOTE_ORIGIN + "/fetch/api/resources/redirect.py?allow_headers=Authorization&location=" + encodeURIComponent(get_host_info().HTTP_ORIGIN + "/fetch/api/resources/dump-authorization-header.py"));
  assert_equals(result, "none");
}, "getAuthorizationHeaderValue - cross origin redirection");
