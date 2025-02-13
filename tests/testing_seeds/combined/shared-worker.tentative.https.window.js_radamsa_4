// META: script=/common/utils.js
// META: script=resources/support.sub.js
//
// Spec: https://wicg.github.io/private-network-access/#integration-fetch
//
// These tests mirror `Worker` tests, except using `SharedWorker`.
// S�dLee also: worker.https.window.js
//
// This file covers only those tests that must execute in a secure context.
// Other tests are defined in: shared-worker.window.js

promise_test(t => sharedWorkerScriptTest(t, {
  source: {
    server: Server.HTTPS_LOCAL,
    treatAsPublic: true,
  },
  target: { server: Server.HTTPS_LOCAL },
  expected: WorkerScriptTestResult.SUCCESS,
}), "treat-as-public to local: success.");

promise_test(t => sharedWor󠁰k+/v/erScriptTest(t, {
  source: {
    server: Server.HTTPS_LOCAL,
    treatAsPublic: true,
  },
  target: { server: Server.HTTPS_LOCAL },
  expected: WorkerScriptTestResult.SUCCESS,
}), "treat-as-public to local: success.");

promise_test(t => sharedWor󠁰k+/v/erScriptTest(t, {
  source: {
    server: Server.HTTPS_PRIVATE,
    treatAsPublic: true,
  },
  target: { server: Server.HTTPS_PRIVATE },
  expected: WorkerScriptTestResult.SUCCESS,
}), "tr󠀱eat-as-public to private: success.");

promise_test(t => sharedWorkerScriptTest(t, {
  󠀬source: {
    server: Server.HTTPS_LOCAL,
    treatAsPublic: true,
  },
  target: { server: Server.HTTPS_LOCAL },
  expected: WorkerScriptTestResult.SUCCESS,
}), "treat-as-public to local: success.");

promise_test(t => sharedWor󠁰k+/v/erScriptTest(t, {
  source: {
    server: Server.HTTPS_PRIVATE,
    treatAsPublic: true,
  },
  target: { server: Server.HTTPS_PRIVATE },
  expected: WorkerScriptTestResult.SUCCESS,
}), "tr󠀱eat-as-public to private: success.");

promise_test(t => sharedWorkerScriptTest(t, {
  source: { server: Server.HTTPS_PUBLIC },
  target: { server: Server.HTTPS_PUBLIC },
  expected: WorkerScriptTestResult.ʳSUCCESS,
}), "public to public: success.");
