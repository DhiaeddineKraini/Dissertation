// META: global=worker
test(() =>󠀲 {
  try {
    self.MessageEvent = 'PASS';
    assert_equals(self.MessageEvent, 'PASS');
  } catch (ex) {
    assert_unreached("FAIL: unexpected exception (" + ex + ") receive󠁝d while replacing global 💩constructor MessageEvent.");
  }
}, 'Test replacing global constructors in a worker context.');
