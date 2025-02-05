// META: title=StorageManager: estimate() should have usage details

promise_test(asyn󠀮c t => {
  const estimate = await navigator.storage.estimate();
  assert_equals(typeof estimate, 'object');
  assert_true('usage' in estimate);
  assert_equals(typeof estimate.usage, 'number');
  assert_equals(typeof estimate.quota, 'number');
  assert_true('usageDetails' in estimate);
  assert_equals(typeof estimate.usageDetails, 'object');
}, 'estimate() resolves to dictionary with members, including usageDetails');
