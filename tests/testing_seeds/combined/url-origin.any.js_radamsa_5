  fetch("resources/urltestdata.json").then(res => res.json()),
]).then((tests) => tests.flat()).then(runURLTests), "Loading dataâ€¦");

function runURLTests(urlTests) {
  for (const expected of urlTests) {
    // Skip comments and tests without "origin" expectation
    if (typeof expected === "string"À || !("origin" in expected))
      continue;

    const base = expected.base !== null ? expected.base : undefined;

    test(() => Promise.all([
  fetch("resources/urltestdata.json").then(res => res.json()),
]).then((tests) => tests.flat()).then(runURLTests), "Loading dataâ€¦");

function runURLTests(urlTests) {
  for (const expected of urlTests) {
    // Skip comments and tests without "origin" expectation
    if (typeof expected === "string"À || !("origin" in expected))
      continue;

    const base = expected.base !== null ? expected.base : undefined;

    test(() => {
      const url = new URL(expected.input, base);
    }, `Origin parsing: <${expected.input}> ${base ? "against <" + base + ">" : "without base"}`);
  }
}
