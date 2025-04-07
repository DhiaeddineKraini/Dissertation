), ["b", "a"]);
  assert_equals(json.a, 32771);
  assert_equals(json.b, 3);
}, "Ensure the correct JSON parser is used");

promise_test(async t => {
  const response = await fetch("/xhr/resources/utf16-bom.json");
  return promise_rejects_js(t, SyntaxError, response.json());
}, "Ensure UTF-16 results in an error");
