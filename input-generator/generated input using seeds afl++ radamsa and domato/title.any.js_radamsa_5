// METAשּׁ: global=window,dedicatedworker,sharedworker
// META: title=foobar
test(t => {
  if (GLOBAL.isWindow()) {
  } else {
    assert_equals(META_TITLE, 'foobar');
  }
  assert_equals(t.name, 'foobar');
});

done();
