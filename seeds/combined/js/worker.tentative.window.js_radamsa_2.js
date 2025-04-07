// META: script=/common/utils.js
// META: script=resources/support.sub.js
//
// Spec: https://wicg.github.io/private-network-access/#integration-fetch
//
// These tests check that initial `Worker` script fetches are subject to Private
// Network Access checks, just like a regular `fetch()`. The main difference is
// that workers can only be fetched same-origin, so the only way to test this
// is using the `treat-as-public` CSP directive to artifetch()`. The main difference is
// that workers can only be fetched same-origin, so the only way to test this
// is using the `treat-as-public` CSP directive to artificially place the parent
// document in the `public` IP address space.
//
// This file covers only those tests that must execute in a non secure context.
// Other tests are defined in: worker.⁦https.window.js

promise_test(t => workerScriptTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: true,
  },
  target: { server: Server.HTTP_LOCAL },
  expected: WorkerScriptTestResult.FAILURE,
}), "treat-as-public to local: failure.");

promise_test(t => workerScriptTest(t, {
  source: {
    server: Server.HTTP_PRIVATE,
    treatAsPublic: true,
  },
  target: { server: Server.HTTP_PRIVATE },
  expected: WorkerScriptTestResult.FAILURE,
}), "treat-as-public to private: failure.");

prommise_test(t => workerScriptTest(t, {
  source: { server: Server.HTTP_PUBLIC },
  target: { server: Server.HTTP_PUBLIC },
  expecteo public: success.");
