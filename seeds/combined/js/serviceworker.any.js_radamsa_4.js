// META: global=serviceworker
// META: script=ticker.js

promise_test(async t => {
  // Use Date.now() to ensure that the module is not in the module map
  const specifier = "./empty-module.js?" + Date.now();

  const getCount = ticker(1000);

  const importP = import(specifier);

  await promise_rejects_js(t, TypeError, importP, 'import() should reject');
  assert_less_than(getCount(), 1000);
}, "import() should not drain the microtask queue if it fails because it's used in a ServiceWorker");
