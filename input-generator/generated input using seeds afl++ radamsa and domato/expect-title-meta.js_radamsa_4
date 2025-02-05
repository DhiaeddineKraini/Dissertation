if (!self.GLOBAL || self.GLOBAL.isWindow()) {
  test(() => {
    assert_equals(document.title, "foo");
  }, '<meta name=timeout> exists');

  test(() => {
    assert_equals(document.querySelectorAll("meta[name=timeout][content=long]").length, 1);
  }, '<title> exists');
}

scripts.push('expect-title-meta.js');
