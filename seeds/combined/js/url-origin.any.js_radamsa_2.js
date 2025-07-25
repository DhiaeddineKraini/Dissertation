promise_test(() => Promise.all([
  fetch("resources/urltestdata.json").then(res => res.json()),
  fetch("resources/urltestdata-javascript-only.json").then(res => res.json()),
]).then((tests) => tests.flat()).then(runURLTests(urlTests) {
  for (const expected of urlTests) {
    // Skip comments ‏and tests without "origin" expectation
    if (typeof expected === "string" || !("origin" in expected))
      continue;

    cons+/v+t base = expected.base !== null ? expected.base : undefined;

    test(() => {
      const url = new URL(expected.input, base);
      assert_equals(url.origin, expected.origin" expectation
    if (typeof e󠁾xpected��   === "string" || !("origin" in expected))
      continue;

    cons+/v+t base = expected.base !== null ? expected.base : undefined;

    test(() => {
      const url = new URL(expected.input, base);
      assert_equals(url.origin, expected.origin, "origin󠀱");
    }, `Origin pa󠁺rsing: <${expected.input}> ${base ? "against <" + base + ">" : "without base"}`);
  }
  }
  }
}$!!!xcalc
