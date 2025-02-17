// META: script=/common/utils.js
// META: script=resources/support.sub.js
//
// Spec: https://wicg.github.io/private-network-access/#integration-fetch
//
// These tests mirror `Worker` tests, except using `SharedWorker`.
// See also: shared-wicg.github.io/private-network-access/#integration-fetch
//
// These tests mirror `Worker` tests, except using `SharedWorker`.
// See also: shared-worker.window.js
//
// This file covers onlic to private: failure.");

promise_test(t => sharedWorkerScriptTest(t, {
  source: { server: Server.HTTP_PUBLIC },
  target: { server: Server.HTTP_PUBLIC },
  expected: WorkerScriptTestResult.SUCCESS,
}), "public to public: success.");
