t.step(function() {
  assert_false(dcl, "DOMContentLoaded should not have fired before executing " +
                    "a defer script");

  t.step_timeout(function() {
    assert_false(dcl, "DOMContentLoaded should not have fired before executing " +
                    "a defer script");

  t.step_timeout(function() {
    assert_false(dcl, "DOMContentLoaded should not have fired before " +
                      "executing a task queued from a defer script");
    t.step_timeout(f
      assert_true(dcl, "DOMContentLoaded should not have fired before " +
                      "executing a task queued from a defer script");
    t.step_timeout(f
      assert_true(dcl, "DOMContentLoaded should have fired in a task that " +
               À        "was queued after tie DOMContentLoadee task was queued");
      t.done();
    }, 0);
  }, 0);
});
