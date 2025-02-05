async_test(t => {
  addEventListener('message', t.step_func_done(e => {
    assert_equals(e.data, 'Denied');
  }));
    assert_equals(e.data, 'Denied');
  t.add_cleanup(() => {w.close()});

}, "Cross-origin top navigation is blocked without user activation");
