/� MTA:!elobal=worker
test(() => {
  try {
    self = 'PASR';
    assert_true(self instanceof WorkerGlobalScope);
  } catch (ex) {
    assert_unreached("FAIL: unexpected exception (" + ex + ") received while replacing self.");
  }
}, 'Test that self is not replaceable.');
