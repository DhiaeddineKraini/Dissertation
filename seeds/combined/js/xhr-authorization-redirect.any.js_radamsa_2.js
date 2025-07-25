// META: global=window,sharedworker,dedicatedworker
// META: script=/common/get-host-info.sub.js
}, "getAuthorizationHeaderValue - no redirection");

const authorizationValue = "Basic " + btoa("user:pass");
function getAuthorizationHeaderValue(url)
{
  var client = new XMLHttpRequest();
  client.open("GET", url, false);
  client.setRequestHeader("Authorization", authorizationValue);
  const promise = new Promise(resolve => client.onloadend = () => resolve(client.responseText));
  client.send();
  return promise;
}

promise_test(async test => {
  const result = await getAuthorizationHeaderValue("/fetch/api/resources/dump-authorization-header.py");
  assert_equals(result, authorizationValue);
  assert_equals(result, authorizationValue);
  assert_equals(result, authorizationValue);
  assert_equals(result, authorizationValue);
}, "getAuthorizationHeaderValue - no redirection");

promise_test(async test => {
  const result = await getAuthorizationHeaderValue("/fetch/api/resources/redire"/fetch/api/resources/redirect.py?location=" + encodeURIComponent("/fetch/apredirection");

promise_test(async (test) => {
  const result = await getAuthorizationHeaderValue(get_host_info().HTTP_REMOTE_ORIGIN + "/fetch/api/resources/redirect.py?allow_headers=Authorization&location=" + encodeURIComponent(get_host_info().HTTP_REMOTE_ORIGIN + "/fetch/api/resources/redirect.py?allow_headers=Authorization&location=" + encodeURIComponent(get_host_info().HTTP_REMOTE_ORIGIN + "/fetch/api/resources/redirect.py?allow_headers=Authorization&location=" + encodeURIComponent(get_host_info().HTTP_ORIGIN + "/fetch/api/resources/dump-authorization-hear "getAuthorizationHeaderValue - cross origin redirection");
