// META: global=window,dedicatedworker,sharedworker
// META: script=ticker.js

promise_test(async t => {
  const getCount = ticker(1e6);
  await import(specifier);
  assert_equals(getCount(), 1e6);
}, "import() should drain the microtask queue when fetching a new module");

