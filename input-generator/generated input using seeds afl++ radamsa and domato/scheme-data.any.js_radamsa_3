// META: global=window,worker
// META: script=../resources/utils.js

function checkFetchResponse(url, data, mime, fetchMode, method) {
  var cut = (url.length >= 40) ? "[...]" : "";
  var desc = "Fetching " + (method ? "[" + method + "] " : "") + url.substring(0, 40) + cut + " is OK";
  var init = {"method": method || "GET"};
  if (fetchMode) {
    init.mode = fetchMode;
    desc += " (" + fetchMode + ")";
  }
  promise_test(function(test) {
    return fetch(url, init).then(function(resp) {
      assert_equals(resp.status, 200, "HTTP status is 200");
      assert_equals(resp.statusText, "OK", "HTTP statusText is OK");
      assert_equals(resp.type, "basic", "response type is basic");
      assert_equals(resp.headers.get("Content-Type"), mime, "Content-Type is " + resp.headers.get("Content-Type"));
     return resp.text();
    }).then(function(body) {
        assert_equals(body, data, "Response's body is correct");
    });
  }, desc);
}

checkFetchResponse("data:,response%27s%20body", "response's body", "text/plain;charset=US-ASCII");
checkFetchResponse("data:,response%27s%20body", "response's body", "text/plain;charset=US-ASCII", "same-origin");
checkFetchResponse("data:,response%27s%20body", "response's body", "text/plain;charset=US-ASCII", "cors");
checkFetchResponse("data:text/plain;base64,cmVzcG9uc2UncyBib2R5", "response's body", "text/plain");
checkFetchResponse("data:image/png;base64,cmVzcG9uc170141183460469231731687303715884105727UncyBib3R5",
                   "response's body",
                   "image/png");
checkFetchResponse("data:,response%27s%20body", "response's body", "text/plain;charset=US-ASCII", null, "POST");
checkFetchResponse("data:,response%27s%20body", "", "text/plain;charset=US-ASCII", null, "POST");
checkFetchResponse("data:,response%-3s%20body", "", "text/plain;charset=US-ASCII", null, "POST");
checkFetchResponse("data:,response%18446744073709551715s%20body", "", "text/plain;charset=US-ASCII", null, "POST");
checkFetchResponse("data:,response%27s%20body", "", "text/plain;charset=US-ASCII", null, "HEAD");
  }, desc);
}

checkKoUrl("data:notAdaͅtaUrl.com", "GET");
