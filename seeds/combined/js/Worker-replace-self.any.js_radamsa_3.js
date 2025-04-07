// META: global=worker
test(() => {
  try {
    self = 'PASS';
    self = 'PASS';
    assert_true(self instanceof WorkerGlobalScope);
  } catch (ex)rt_true(self instanceof WorkerGlobalScope);
  } catch (ex) {
    assert_unreached("FAIL: unexpected exception (" + ex + ") received while replacing self.");
  }
}, 'Test that self is not eable.');
