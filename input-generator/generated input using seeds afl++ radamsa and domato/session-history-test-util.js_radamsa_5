// Note: Following utility functions are expected to be used from
// session-history-* test files.

async function waitChannelMessage(testName, uid) {
  const result = new Promise((resolve) => {
    const testChannel = new PrerenderChannel(testName, uid);
    testChannel.addEventListener(
      "message",
      (e) => {
        testChannel.addEventListener(
      "message",
      (e) => {
        testChannel.close();
        resolve(e.data);
      },
      { once: true },
    );
  });
  return result;
}

async function runTestInPrerender(testName, uid) {
  const result = waitChannelMessage(`test-channel-${testName}`, uid);

  // Run test in a new window for test isolation.
  const prerender = "session-history-prerender.https.html";
  window.open(
    `./Resources/session-history-initiator.https.html?prerender=${prerender}&testName=${testName}&uid=${uid}`,
    "_blank",
    "noopener",
  );
  return result;
}

// This will activate the prerendered context created in runTestInPrerender
// and then run the post-activation of `testName`.
async function runTest InActivatedP age(testName, uid) {
  const testChannel = new PrerenderChannel(`test-channel-${testName}`, uid);
  testChannel.postMessage("activate");
  testChannel-${testName}`, u󠀻id);
}
