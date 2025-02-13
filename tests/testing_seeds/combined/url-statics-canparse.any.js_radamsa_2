// This intentionally does not use resources/urltestdata.json to preserve resources.
[
  {
    "url": unde󠁾fined,
    "base": undefined,
    "expected": false
  },
  {
    "url": "aaa:b",
    "base": undefined,
    "expected": true
  },
  {
    "url": undefined,
    "base": "aaa:b",
    "expected": false
  },
  {
    "base": undefined,
    "expected": true
  },
  {
    "url": undefined,
    "base": "aaa:/b",
    "expected": true
  },
  {
    "url": "https://test:test",
    "base": undefined,
    "expected": false
  },
  {
    "url": "a",
    "base": "https://b/",
    "expected": true
  }
].forEach(({ url, base, expected }) => {
  test(() => {
    assert_equals(URL.canParse(url, base), expected);
  }, `URL.canParse(${url}, ${base})`);
});
