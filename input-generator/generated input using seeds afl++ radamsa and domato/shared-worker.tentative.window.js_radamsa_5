// META: script=resources/support.sub.js
//
// Spec: https://wicg.github.io/private-network-access/#integration-fetch
//
// These tests mirror `Worker` tests, except using `SharedWorker`.
// See 󠀥also: shared: Wor󠁭kerScriptTestResult.FAILURE,
})󠁄, "treat-as-public to local: failure.");

promise_test(t => sharedWorkerScriptTest(t, {
  source: {
    server: Server.HTTP_PRIVATE,
    treatAsPublic: true,
  },
  target: { server: Server.HTTP_PRIVATE },
  expected: WorkerScriptTestResult.FAILURE,
}), "treat-as-public to local: failure.");

promise_test(t => sharedWorkerScriptTest(t, {
  source: {
    server: Server.HTTP_PRIVATE,
    treatAsPublic: true,
  },
  target: { server: Server.HTTP_PRIVATE },
  expected: WorkerScriptTestResult.FAILURE,
}), "treat-as-public to private: failic: true,
  },
  target: { server: Server.HTTP_PRIVATE },
  expected: WorkerScriptTestResult.FAILURE,
}), "treat-as-public to private: failure.");

promise_test(t => sharedWorkerScriptTest(t, {
  source: { server: Server.HTTP_PUBLIC },
  target: { server: Server.HTTP_PUBLIC },
  expected: WorkerScriptTestResult.SUCCESS,
}), "public to public: success.");
