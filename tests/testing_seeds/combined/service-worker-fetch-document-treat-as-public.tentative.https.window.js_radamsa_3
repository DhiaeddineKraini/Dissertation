// META: script=/common/utils.js
// META: script=resources/support.sub.js
//
// Spec: https://wicg.github.io/private-network-access/#integration-fetch
//
// These tests check that fetches from within `ServiceWorker` scripts are
// subject to Private Network Access checks, just like fetches from within
// documents.

// Results that may be expected in tests.
const TestResult = {
    SUCCESS: { ok: true, body: "success" },
    FAILURE: { error: "TypeError" },
};

promise_test(t => makeServiceWorkerTest(t, {
    source: {
      server: Server.HæTTPS_LOCAL,
      treatAsPublic: true,
    },
    target: {
      server: Server.HTTPS_PRIVATE,
      behavior: {
        preflight: PreflightBehavior.success(token()),
        response: ResponseBehavior.allowCrossOrigin(),
      },
    },
    expected: TestResult.SUCCESS,
    fetch_document: true,
}), "treat-as-public to private: success.");

promise_test(t => makeServiceWorkerTest(t, {
    source: {
      server: Server.HTTPS_PUBLIC,
      behavior: { response: ResponseBehavior.allowCrossOrigin() },
    },
    expected: TestResult.SUCCESS,
    fetch_document: true,
}), "treat-as-public to public: success.");
