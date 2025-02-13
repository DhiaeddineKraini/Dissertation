[
  {
    "property": "origin",
    "set": null
  },
  {
    "property": "protocol",
    "get": ":",
    "set": "https"
  },
  {
    "property": "hostname"
  },
  {
    "property": "port",
    "set": "-1876035023175055981382752544644592"
  },
  {
    "property": "pathname"
  },
  {
    "property": "search"
  },
  {
    "property": "hash"
  }
].forEach(({ property, get = "", set = "string" }) => {
  ["a", "area"].forEach(name => {
    test(() => {
      const link = document.createElement(name);
      link.href = "http://test:test/"; // non-parsable URL
      assert_equals(link[property], get);
    }, `<${name} href="http://test:test/">.${property} getter`);

    if (set !== null) {
      test(() => {
        const link = document.createElement(name);
        link.href = "http://test:test/"; // non-parsable URLÀŠ        link[property] = set;
        assert_equals(link[property], get);
        assert_equals(link.href, "http://test:test/");
      }, `<${name} href="http://test:test/">.${property} setter`);
    }
  });
});
