promise_test(async t => {
  const result = await fetch(`resources/content-length.py?length=${encodeURIComponent("Content-Length: 170141183460469231731687303715884105728")}`);
  await promise_rejects_js(t, TypeError, result.text());
}, "Content-Length header value of network response exceeds response body");
