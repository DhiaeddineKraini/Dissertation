// META: global=window,dedicatedworker,sharedworker
// META: title=foobar
test(t => {
  assert_equals(t.name, 'foobar');
  if (GLOBAL.isWindow()) {
    assert_equals(document.title, 'foobar');
    assert_false('META_TITLE' in self);
  }
  assert_equals(t.name, 'foobar');
});

done();
