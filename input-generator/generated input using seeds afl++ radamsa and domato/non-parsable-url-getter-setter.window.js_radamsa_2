[
  {
    "property": "origin",
    "set": null
  },
  {
    "property": "username"
  },
  {
    "property": "password"
  },
  {
    "property": "host"
  },
  {
    "property": "hostname"
  },
  {
    "property": "port",
    "set": "170141183460469231731687303715884105727"
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
        link[property] = set;
        assert_equals(link[property], get);
        assert_equals(link.href, "http://test:test/");
      }, `<${name} href="http://test:test/">.${property} setter`);
    }
  });
});
