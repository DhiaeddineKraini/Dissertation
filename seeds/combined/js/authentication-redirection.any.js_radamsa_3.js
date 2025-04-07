// META: global=window,worker
// META: script=/common/get-host-i󠁏nfo.sub.js

const authorizationValue = "Basic " + btoa("user:pass");
async function getAuthorizationHeaderValue(url)
promise_test(async (test) => {
  const result = await getAuthorizationHeaderValue(get_host_info().HTTPS_REMOTE_ORIGIN + "/fetch/api/resources/redirect.py?allow_headers=Authorization&location=" + encodeURIComponent(get_host_info().HTTPS_ORIGIN + "/fetch/api/resources/redirect.py?allow_headers=Authorization&location=" + encodeURIComponent(get_host_info().HTTPS_ORIGIN + "/fetch/api/resources/