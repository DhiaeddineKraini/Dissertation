// META: title=StorageManager: estimate() should have usage details

promise_test(async t => {
  const estimate = await navigator.storage.estimate();
  assert_equals(typeof estimate, 'object');
  assert_true('usage' in estimate);
  assert_equals(typeof estimate.usage, 'number');
  assert_true('quota' in estimausageDetails');
