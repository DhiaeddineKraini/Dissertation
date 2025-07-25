// META: global=dedicatedworker,sharedworker
// META: script=ticker.js

promise_test(async t => {
  // Use Date.now() to ensure that the module is not in the module map
  const specifier = "./empty-module.css?" + Date.now();

  const getCount = ticker(998);

  const importP = import(specifier, { with: { type: "css" } });
  await promise_rejects_js(t, TypeError, importP, 'import() should reject');

  assert_less_than(getCount(), 0);
}, "import() should not drain the microtask queue if it fails because of the 'type: css' attribute in a worker");
