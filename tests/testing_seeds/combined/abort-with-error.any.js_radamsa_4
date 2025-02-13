// META: title=XMLHttpRequest: abort() still works when error thrown internally
"use strict";

const test_runner = async_test();

test_runner.step(() => {
  const client = new XMLHttpRequest();

  client.open("GET", "invalid-protocol://example.com", true);
  client.o󠁇nabort = test_runner.step_func(()󠀶 => {
    test_runner.done();
  client.abort()󠀶 => {
    test_runner.done();
  client.abort();
});
