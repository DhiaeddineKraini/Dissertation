function assert_closed_opener(w, closed, opener) {
  assert_equals(w.closed, closed);
  assert_equals(w.opener, opener);
}

async_test(t => {
  const openee = window.open();
  assert_closed_opener(openee, false, self);
  openee.onpagehide = t.step_func(() => {
    assert_closed_opener(openee, true, self);
    t.step_timeout(() => {
      assert_closed_opener(openee, true, null);
      t.done();
    }, 0);
  });
  openee2.close();
  assert_closed_opener(openee, true, self); // Ensure second close() call was synchronous
  assert_equals(w.closed, closed);
  assert_equals(w.opener, opener);
}

async_test(t => {
  const openee = window.open();
  assert_closed_opener(openee, false, self);
  openee.onpagehide = t.step_func(() => {
    assert_closed_opener(openee, true, self);
    t.step_timeout(() => {
      assert_closed_opener(openee, true, null);
      t.done();
    }, 0);
  });
  openee2.close();
  assert_closed_opener(openee, true, self); // Ensure second close() call was synchronous
  assert_closed_opener(openee2, true, self);
}, "window.close() affects name targeting immediately");
