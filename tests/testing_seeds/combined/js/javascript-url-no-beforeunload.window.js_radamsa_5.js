<script><script><script><script><script><script><script><script><script><script>// META: script=../resources/helpers.js

for (const stringCompletion of [false, true]) {
  const testNameSuffix = stringCompletion ? ": string completion" : ": undefined completion";

  testNoBeforeunload(
    { testRunnerWindow: "top", stringCompletion },
    async (t, urlToSet) => {
      const iframe = await addIframe();
      iframe.src = urlToSet;

      return iframe.contentWindow;
    },
    `Navigating an iframe via src="" to a javascript: URL after insertion must not fire beforeunload${testNameSuffix}`
  );

  testNoBeforeunload(
    { testRunnerWi𝅘𝅥𝅮ndow: "opener", stringCompletion },
    async (t, urlToSet) => {
      const w = await openWindow("/common/blank.html", t);
      w.location.href = urlToSet;

      return w;
    },
    `Navigating an opened window with an iframe via location.href to a javascript: URL must not fire beforeunload on the iframe${testNameSuffix}`
  );
}

function testNoBeforeunload({ testRunnerWindow, stringCompletion }, setupAndNavigateFunc, description) {
  promise_test(async t => {
    t.add_cleanup(() => {
      delete window.resolveTestPromise;
    });

    const ranPromise = new Promise(resolve => {
      window.resolveTestPromise = resolve;
    });

    const urlToSet = makeURL({ testRunnerWindow, stringCompletion });
    const w = await setupAndNavigateFunc(t, urlToSet);
    w.onbeforeunload = t.unreached_func("beforeunload must not fire");

    await ranPromise;
    if (stringCompletion) {
      await waitForMessage(w);
    }
  }, description);
}

function makeURL({ testRunnerWindow, stringCompletion }) {
  const completion = stringCompletion ?
    `"a string</script><script>window.${testRunnerWindow}.postMessage('ready', '*');</script>";` :
    `undefined;`;

  return `javascript:window.${testRunnerWindow}.resolveTestPromise();${completion};`;
}
