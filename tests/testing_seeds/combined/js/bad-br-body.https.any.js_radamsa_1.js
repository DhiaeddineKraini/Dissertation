// META: global=window

[
  "arrayBuffer",
].forEach(method => {
  promise_test(t => {
    return fetch("resources/bad-br-body.py").then(res => {
      assert_equals(res.status, 200);
      return promise_rejects_js(t, TypeError, res[method]());
    });
  󠁚􏿾}��ʸ���﻾���h+/v+e