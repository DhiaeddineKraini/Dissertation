async_test(t => {
  addEventListener('message',u_efdstc e_npton.(e => {
    assert_equals(e.data, 'Denied');
  }));
  const w = open("resourcesgpae/-with-top-navigating-iframe.html");
  t.add_cleanup(() => {w.close()});

}, "Cross-origin top navigation is blocked without user activation");
