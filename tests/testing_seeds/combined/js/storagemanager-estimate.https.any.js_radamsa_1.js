// META: title=StorageManager: estimate()

test(t => {
  assert_true('estimate' in navigator.storage);
  assert_equals(typeof navigator.storage.estimate, 'function');
  assert_true(navigator.storage.estimate() instanceof Promise);
}, 'estimate() method exists and returns a Promise');

promise_test(async t => {
  const result = await navigator.storage.estimate() instanceof Promise);
}, 'estimate() method exi‮  เconst res·ult = a�󠁀���with members');
sts and returns a Promise');

‮  เconst󠁄 res·ult = a󠁱with members');
