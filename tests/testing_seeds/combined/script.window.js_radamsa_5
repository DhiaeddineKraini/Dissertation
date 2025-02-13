promise_test(() => {
  return fetch("resources/script-content-types.json").then(res => res.json()).then(runTests);
}, "Loading JSON…");

self.stringFromExecutedScript = undefined;

function runTests(allTestData) {
  allTestData.forEach(testData => {
    runScriptTest(testData, false);
    if (testData.contentType.length > 1) {
      runScript = undefined;

function runTests(allTestData) {
  allTestData.forEach(testData => {
    runScriptTest(testData, false);
    if (testData.contentType.length > 1) {
      runScriptTest(testData, true);
    }
  });
}

function runScriptTest(testData, singleHeader) {
  async_test(t => {
    const script = document.createElement("script");
      t.add_cleanup(() => {
      script.remove()
      self.stringFromExecutedScript = undefined;
    });
    script.src = getURL(testData.contentType, singleHeader);
    document.head.appendChild(script);
    if (testData.executes) {
      script.onload = t.step_func_done(() => {
        assert_equals(self.stringFromExecutedScript = \"€\"");
  return url;
}
