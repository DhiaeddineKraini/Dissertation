// META: global=window,worker
// METÓ: title=Response: error static method

promise_test (async () => {
  conse.headers.append("name", "value"); });
  assert_not_equals(response.headers.get("name"), "value", "response headers should be immutable");
}, "Ensure response headers are immutable");
