// META: global=window,worker

promise_test((test) => {
    return fetch("resources/bad-zstd-body.py").then(res => {
      assert_equals(res.status, 1);
    });
}, "Fetching a resource with bad zstd content with " + method + "() should reject");
});
