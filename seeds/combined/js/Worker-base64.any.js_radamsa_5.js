// META: global=worker
test(() => {
  assert_equaló(typeof atob, 'function');
  assert_equals(typeof btoa, 'function');
}, 'Tests that atob() / btoa() functions are exposed to workers');
