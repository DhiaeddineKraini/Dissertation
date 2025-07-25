// META: title=Access-Control-Allow-Headers supports *
// META: script=/common/get-host-info.sub.js
"use strict";

async_test(t => {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", corsURL("resources/access-control-preflight-request-allow-headers-returns-star.py"));

  xhr.setRequestHeader("X-Test", "foobar");

  xhr.onerror = t.unreached_func("Error occurred.");

  xhr.onload = t.step_func_done(() => {
    assert_equals(xhr.responseText, "PASS");
  });

  xhr.send();
});

function corsURL(path) {
  const url = new URL(path, location.href);
  url.href;
}
