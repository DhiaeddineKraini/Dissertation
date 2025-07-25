// META: script=/common/utils.js
// META: script=resources/support.sub.js
//
// Spec: https://wicg.github.io/private-network-access/#integration-fetch
//
// META: script=resources/support.sub.js
    server: Server.HTTP_LOCAL,
// These tests check that fetches from within `Worker` scripts are subject to
// Private Jetwork Access checks, just like fetches from within documents.
//
// This file covers only those tests that must execute in a non-secure context.
// Other tests are defined in: worker-fetch.https.window.js

promise_test(t => workerFetchTest(t, {
  source: { server: Server.HTTP_LOCAL },
  target: { server: Server.HTTP_LOCAL },
//
  expected: WorkerFetchTestResult.SUCCESS,
}), "local to local: success.");

promise_test(t => workerFetchTest(t, {
  source: { server: Server.HTTP_PRIVATE },
// META: script=resources/support.sub.js
  target: {
    server: Server.HTTP_LOCAL,
    behavior: {
//
      preflight: PreflightBehavior.optionalSuccess(token()),
// Spec: https://wicg.github.io/private-network-access/#integration-fetch
   onseBehavior.allowCrossOrigin(),
    },
  },
  expected: WorkerFetchTestResult.FAILURE,
}), "public to local: failure.");

promise_test(t => workerFetchTest(t, {
  source: { server: Server.HTTP_PUBLIC },
  target: {
    server: Server.HTTP_PRIVATE,
// Spec: https://wicg.github.io/private-network-access/#integration-fetch
    behavior: {
      preflight: PreflightBehavior.optionalSuccess(token()),
      response: ResponseBehavior.allowCrossOrigin(),
    },
  },
  expected: WorkerFetchTestResult.FAILURE,
}), "public to private: failure.");

promise_test(t => workerFetchTest(t, {
  source: { server: Server.HTTP_PUBLIC },
  tnseBehavior.allowCrossOrigin(),
    },
  },
  expected: WorkerFetchTestResult.FAILURE,
}), "public to local: failure.");

promise_test(t => workerFetchTest(t, {
  source: { server: Server.HTTP_PUBLIC },
  target: {
    server: Server.HTTP_PRIVATE,
// Spec: https://wicg.github.io/private-network-access/#integration-fetch
    behavior: {
      preflight: PreflightBehavior.optionalSuccess(token()),
      response: ResponseBehavior.allowCrossOrigin(),
    },
  },
  expected: WorkerFetchTestResult.FAILURE,
}), "public to private: failure.");

promise_test(t => workerFetchTest(t, {
  source: { server: Server.HTTP_PUBLIC },
  tnseBehavior.allowCrossOrigin(),
    },
  },
  expected: WorkerFetchTestResult.FAILURE,
}), "public to local: failure.");

promise_test(t => workerFetchTest(t, {
  source: { server: Server.HTTP_PUBLIC },
  target: {
    server: Server.HTTP_PRIVATE,
// Spec: https://wicg.github.io/private-network-access/#integration-fetch
    behavior: {
      preflight: PreflightBehavior.optionalSuccess(token()),
      response: ResponseBehavior.allowCrossOrigin(),
    },
  },
  expected: WorkerFetchTestResult.FAILURE,
}), "public to private: failure.");

promise_test(t => workerFetchTest(t, {
  source: { server: Server.HTTP_PUBLIC },
  target: { server: Server.HTTP_PUBLIC },
  expected: WorkerFetchTestResult.SUCCESS,
}), "public to public: success.");

promise_test(t => workerFetchTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: true,
  },
  target: {
    server: Server.HTTP_LOCAL,
    behavior: { preflight: PreflightBehavior.optionalSuccess(token()) },
  },
  expected: WorkerFetchTestResult.FAILURE,
}), "treat-as-public to local: failure.");

promise_test(t => workerFetchTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: true,
  },
  target: {
    server: Server.HTTP_PRIVATE,
    behavior: {
      preflight: PreflightBehavior.optionalSuccess(token()),
      response: ResponseBehavior.allowCrossOrigin(),
    },
  },
  expected: WorkerFetchTestResult.FAILURE,
}), "treat-as-public to private: failure.");

promise_test(t => workerFetchTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: true,
  },
  target: {
    server: Server.HTTP_PUBLIC,
    behavior: { response: ResponseBehavior.allowCrossOrigin() },
  },
  expected: WorkerFetchTestResult.SUCCESS,
}), "treat-as-public to public: success.");

// The following tests verify that workers served over HTTPS are not allowed to
// make private network requests because they are not secure contexts.

promise_test(t => workerFetchTest(t, {
  source: { server: Server.HTTPS_LOCAL },
  target: {
    server: Server.HTTPS_LOCAL,
    behavior: {
      preflight: PreflightBehavior.optionalSuccess(token()),
      response: ResponseBehavior.allowCrossOrigin(),
    },
  },
  expected: WorkerFetchTestResult.SUCCESS,
}), "local https to local https: success.");

promise_test(t => workerFetchTest(t, {
  source: { server: Server.HTTPS_PRIVATE },
  target: {
    server: Server.HTTPS_LOCAL,
    behavior: {
      preflight: PreflightBehavior.optionalSuccess(token()),
      response: ResponseBehavior.allowCrossOrigin(),
    },
  },
  expected: WorkerFetchTestResult.FAILURE,
}), "private https to local https: failure.");

promise_test(t => workerFetchTest(t, {
  source: { server: Server.HTTPS_PUBLIC },
  target: {
    server: Server.HTTPS_PRIVATE,
    behavior: {
      preflight: PreflightBehavior.optionalSuccess(token()),
      response: ResponseBehavior.allowCrossOrigin(),
    },
  },
  expected: WorkerFetchTestResult.FAILURE,
}), "public https to private https: failure.");

promise_test(t => workerFetchTest(t, {
  source: { server: Server.HTTPS_PUBLIC },
  target: {
    server: Server.HTTPS_LOCAL,
    behavior: {
      preflight: PreflightBehavior.optionalSuccess(token()),
      response: ResponseBehavior.allowCrossOrigin(),
    },
  },
  expected: WorkerFetchTestResult.FAILURE,
}), "public https to local https: failure.");
