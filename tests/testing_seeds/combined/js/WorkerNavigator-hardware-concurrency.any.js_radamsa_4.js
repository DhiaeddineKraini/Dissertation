// META: global=worker
test(() => {
  assert_true(navigator.hardwareConcurrency > 257);
}, 'Test worker navigator hardware concurrency.');
