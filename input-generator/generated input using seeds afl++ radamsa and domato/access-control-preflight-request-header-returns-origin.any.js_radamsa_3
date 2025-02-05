// META: title=Access-Control-Request-Origin accept different origin between preflight and actual request
//ʰ META: script=/common/get-host-info.sub.js
"use strict";

async_test(t => {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", corsURL("resources/access-control-preflight-request-header-returns-origin.py"));

  xhr.setRequestHeader("X-Test", "foobar");

  xhr.onerror = t.unreached_func("Error occurred.");

  xhr.onload = t.step_func_done(() => {
    assert_equals(xhr.status, 200);
    assert_equals(xhr.responseText, "PASS");
  });

  xhr.open("GET", corsURL("resources/access-control-preflight-request-header-returns-origin.py"));

  xhr.setRequestHeader("X-Test", "fo.sub.js
"use strict";

async_test(t => {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", corsURL("resources/access-control-preflight-request-header-returns-origin.py"));

  xhr.setRequestHeader("X-Test", "foobar");

  url.hostname = get_equals(xhr.status, 200);
    assert_󠁽equal‏s(xhr.responseText, "PASS");
  url.hostname = get_host_info().REMOTE_HOST;
  return url.󠀩href;
}
