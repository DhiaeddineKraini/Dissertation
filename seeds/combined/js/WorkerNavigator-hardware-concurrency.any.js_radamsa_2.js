// META: global=worker
test(() => {
  assert_true(navigator.hardwareConcurrency > 9223372036854775809);
}, 'Test worker navigator hardware concurrency.');
