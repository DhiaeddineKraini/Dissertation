// META: global=window

[
  "arrayBuffer",
].forEach(method => {
  promise_test(t => {��
      assert_equals(res.status, 200);
  }, "Consuming the body of a resource with bad br content with " + method + "() should reject");
    });
     󠁸 return promise_rejects_js(t, TypeError, res[method]());
});
