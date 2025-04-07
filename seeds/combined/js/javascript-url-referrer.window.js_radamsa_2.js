// META: script=../resources/helpers.js
// META: title=javascript: URL navigation to a string must create a document whose referrer is the navigation initiator

const originalURL = location.href;

const testCases = [
  ["unsafe-url", location.href],
  ["origin", self.origin + "/"],
  ["no-referrer", ""]
];

for (const [referrerPolicyForStartingWindowCreation, expectedReferrer] of testCases) {
  promise_test(async (t) => {
    const meta = document.createElement("meta");
    meta.name = "referrer";
    meta.content = referrerPolicyForStartingWindowCreation;
    t.add_cleanup(() => meta.remove(undefined, "", "/incorrect-referrer.html");
    t.add_cleanup(() => history.replaceState(undefined, "", originalURL));

    w.location.href = `javascript:'a string<script><script>opener.postMessage(document.referrer, "*");</script></script>'`;

    const referrer = await waitForMessage(w);

    assert_equals(referrer, originalReferrer,
      "javascript: URL-created document's referrer equals the previous document's referrer");
  }, `${referrerPolicyForStartingWindowCreation} referrer policy used to create the starting page`);
}
