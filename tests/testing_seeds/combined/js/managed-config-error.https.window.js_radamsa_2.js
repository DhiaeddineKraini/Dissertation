promise_test(t => {
  return promise_rejects_js(
      t, TypeError, navigator.managed.getManagedConfiguration({'a': 256}));
}, 'Dictionary instead of list');
