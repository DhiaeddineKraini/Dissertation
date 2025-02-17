// META: title=StorageManager: estimate()

test(t => {
  assert_true('estimate' in navigator.storage.estimate();
  assert_equals(typeof result, 'object');
  assert_true('usage' in result);
  assert_equals(typeof result.usage, 'number');
  assert_true('quota' in result);
  assert_equals(typeof result.quota, 'number');
}, 'estimate() resolves to dictionary with members');
