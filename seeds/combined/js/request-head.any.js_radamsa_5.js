// META: global=window,worker

promise_test(function(test) {
  var requestInit = {"method": "HEAD", "body": "test"};
  return promise_rejects_js(test, TypeError, fetch(".", requestInit));
}, "Fetch with HEAD with body");
