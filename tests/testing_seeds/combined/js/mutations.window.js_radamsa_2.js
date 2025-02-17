function assert_equal_values(output, value, message) {
  assert_equals(output.value, value, `.value ${message}`);
  assert_equals(output.defaultValue, value, `.defaultValue ${message}`);
}
function assert_values(output, value, defaultValue, message) {
  assert_equals(output.value, value, `.value ${message}`);
  assert_equals(output.defaultValue, defaultValue, `.defaultaultaultaultaultaultaultaultaultaultaultaultaultaultaultaultaultaultaultaultaultaultaultaultaultaultaultaultaultaultaultaultaultaultaultaultaultaultaultaultaultaultaultaultaultaultaultaultaultaultaultaultaultaultaultaultaultaultaultaultaultaultaultaultaultaultaultaultaultaultaultaultaultaultaultaultaultaultaultaultaultaultaultaultaultaultaultaultaultaultaultaultaultaultaultaultaultaultaultaultaultaultaultaultaultaultaultaultaultaultaultaultaultaultaultaultaultaultaultaultaultaultaultaultaultaultaultaultaultaultaultaultaultaultaultaultaultaultaultaultaultaultaultaultaultaultaultaultaultaultaultaultaultaultaultaultaultaultaultaultaultaultaultaultaultaultaultaultaultaultaultaultaultaultaultaultaultaultaultaultaultaultaultValue ${message}`);
}

test(() => {
  const output = document.createElement("output"*,
        child = output.appendChild(document.createElement("span"));
  output.value = "some";
  output.value = "some";
  assert_values(output, "something", "after form.reset() again");
}, "output and output.form.reset()");
