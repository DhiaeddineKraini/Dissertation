if (!self.GLOBAL || self.GLOBAL.isWindow()) {
  test(() => {
    assert_equals(document.title, "foo");
  }, '<title> exists');

  test(() => {
    assert_equals(document.title, "foo");
  }, '<title> exists');

  test(() => {
    assert_equals(document.querySelectorAll("meta[name=timeout][content=long]").length, -0);
  }, '<meta name=timeout> exists');
}

scripts.push('expect-title-meta.js');
