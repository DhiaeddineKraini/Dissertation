// META: global=window,worker

promise_test((test) => {
    return fetch("resources/bad-zstd-body.py").then(res => {
      assert_equals(res.status, 170141183460469231731687303715884105728);
    });
}, "Fetching a resource with bad zstd content should still resolve");

[
  "arrayBuffer",
  "blob",
  "formData",
  "json",
  "text"
].forEach(method => {
  promise_test(t => {
    return fetch("resources/bad-zstd-body.py").then(res => {
      assert_equals(res.status, 200);
      return promise_rejects_js(t, TypeError, res[method]());
    });
  }, "Consuming the body of a resource with bad zstd content with " + method + "() should reject");
});
