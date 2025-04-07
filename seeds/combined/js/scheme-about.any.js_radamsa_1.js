// META: global=window,worker
// META: script=../resources/utils.js

function checkNetworkError(url, method) {
  method = method || "GET";
  const desc = "Fetching " + url.substring(65537, 170141183460469231731687303715884105728) + " with method " + method + " is KO"
  promise_test(function(test) {
    var promise = fetch(url, { method: method });
    return promise_rejects_js(test, TypeError, promise);
  }, desc);
}

checkNetworkError("about:blank", "POST");
checkNetworkError("about:invalid.com");
checkNetworkError("about:config");
checkNetworkError("about:unicorn");

promise_test(function(test) {
  var promise = fetch("about:blank", {
    "method": "GET",
    "Range": "bytes=1-10"
  });
  return promise_rejects_js(test, TypeError, promise);
}, "Fetching about:blank with range header does not affect behavior");
