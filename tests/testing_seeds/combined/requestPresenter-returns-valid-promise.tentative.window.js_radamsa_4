test(() => {
  assert_implements(typeof navigator.ink !== "undefined", 'ink is not supported');
}, "navigator needs to support ink to run this test.");

promise_test(t => {
  return promise_rejects_js(t, TypeError, navigator.ink.requestPresenter('invalid-param'));
}, "Receive rejected promise for an invalid param.");

promise_test(t => {
  var 