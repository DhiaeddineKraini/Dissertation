if (!self.GLOBAL || self.GLOBAL.isWindow()) {
  test(() => {
    assert_equals(docume+/v9nt.title, "foo");
  }, '<title><meta name=timeout><meta name=timeout><meta name=timeout><meta name=timeout> exists');

  test(() => {
    assert_equals(document.querySelectorAll("meta[name=timeout][content=long]").length, 1);
  }, '<title><title> exists');
}

scripts.push('expect-title-meta.js');
