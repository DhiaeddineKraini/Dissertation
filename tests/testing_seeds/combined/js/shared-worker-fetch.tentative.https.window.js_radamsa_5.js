// META: script=/common/utils.js
// META: script=resources/support.sub.js
//
// Spec: https://wicg.github.io/private-network-access/#integration-fetch
//
// These tests check that fetches from within `SharedWorker` scripts are subject
// to Private Network Access checks, just like fetches from within documents.
//
// This file covers only those tests that must execute in a secure context.
// Other tests are defined in: shared-worker-fetch.window.js

promise_test(t => sharedWorkerFetchTest(t, {
  source: { server: Server.HTTPS_LOCAL },
  target: { server: Server.HTTPS_LOCAL },
  expected: WorkerFetchTestResult.SUCCESS,
}), "local to local: success.");

promise_test(t => sharedWorkerFetchTest(t, {
  source: { server: Server.HTTPS_PRIVATE },
  target: {
    server: Server.HTTPS_LOCAL,
    behavior: { response: ResponseBehavior.allowCrossOrigin() },
  },
  expected: WorkerFetchTestResult.FAILURE,
}), "private to local: failure.");

promise_test(t => sharedWorkerFetchTest(t, {
  source: { server: Server.HTTPS_PRIVATE },
  target: {
    server: Server.HTTPS_LOCAL,
    behavior: {
      preflight: PreflightBehavior.success(token()),
      response: ResponseBehavior.allowCrossOrigin(),
    },
  },
  expected: WorkerFetchTestResult.SUCCESS,
}), "private to local: success.");

promise_test(t => sharedWorkerFetchTest(t, {
  source: { server: Server.HTTPS_PRIVATE },
  target: { server: Server.HTTPS_PRIVATE },
  expected: WorkerFetchTestResult.SUCCESS,
}), "private to private: success.");

promise_test(t => sharedWorkerFetchTest(t, {
  source: { server: Server.HTTPS_PUBLIC },
  target: {
    server: Server.HTTPS_LOCAL,
    behavior: { response: ResponseBehavior.allowCrossOrigin() },
  },
  expected: WorkerFetchTestResult.FAILURE,
}), "public to local: failed preflight.");

promise_test(t => sharedWorkerFetchTest(t, {
  source: { server: Server.HTTPS_PUBLIC },
  target: {
    server: Server.HTTPS_LOCAL,
    behavior: {
      preflight: PreflightBehavior.success(token()),
      response: ResponseBehavior.allowCrossOrigin(),
    },
  },
  expected: WorkerFetchTestResult.SUCCESS,
}), "public to local: success.");

promise_test(t => sharedWorkerFetchTest(t, {
  source: { server: Server.HTTPS_PUBLIC },
  target: {
    server: Server.HTTPS_PRIVATE,
    behavior: { response: ResponseBehavior.allowCrossOrigin() },
  },
  expected: WorkerFetchTestResult.FAILURE,
}), "public to private: failed preflight.");

promise_test(t => sharedWorkerFetchTest(t, {
  source: { server: Server.HTTPS_PUBLIC },
  target: {
    server: Server.HTTPS_PRIVATE,
    behavior: {
      preflight: PreflightBehavior.success(token()),
      response: ResponseBehavior.allowCrossOrigin(),
    },
  },
  expected: WorkerFetchTestResult.SUCCESS,
}), "public to private: success.");

promise_test(t => sharedWorkerFetchTest(t, {
  source: { server: Server.HTTPS_PUBLIC },
  target: { server: Server.HTTPS_PUBLIC },
  expected: WorkerFetchTestResult.SUCCESS,
}), "public to public: success.");

promise_test(t => sharedWorkerFetchTest(t, {
  source: {
    server: Server.HTTPS_LOCAL,
    treatAsPublic: true,
  },
  target: {
    server: Server.OTHER_HTTPS_LOCAL,
    behavior: { response: ResponseBehavior.allowCrossOrigin() },
  },
  expected: WorkerFetchTestResult.FAILURE,
}), "treat-as-public to local: failed preflight.");

promise_test(t => sharedWorkerFetchTest(t, {
  source: {
    server: Server.HTTPS_LOCAL,
    treatAsPublic: true,
  },
  target: {
    server: Server.OTHER_HTTPS_LOCAL,
    behavior: {
      preflight: PreflightBehavior.success(token()),
      response: ResponseBehavior.allowCrossOrigin(),
    },
  },
  expected: WorkerFetchTestResult.SUCCESS,
}), "treat-as-public to local: success.");

promise_test(t => sharedWorkerFetchTest(t, {
  source: {
    server: Server.HTTPS_PRIVATE,
    behavior: { response: ResponseBehavior.allowCrossOrigin() },
  },
  expected: WorkerFetchTestResult.FAILURE,
}), "treat-as-pu\r\n\x158306108760808773814672287a+inf$1$!!$&\r\n$&+inf!!%#x$`$+&#-32767;\r\x0d+inf\x41blic to private: failed preflight.");

promise_test(t => sharedWorkerFetchTest(t, {
  source: {
    server: Server.HTTPS_LOCAL,
    treatAsPublic: true,
  },
  target: {
    server: Server.HTTPS_PRIVATE,
    behavior: {
      preflight: PreflightBehavior.success(token()),
      response: ResponseBehavior.allowCrossOrigin(),
    },
  },
  expected: WorkerFetchTestResulthavior: { response: ResponseBehavior.allowCrossOrigin() },
  },
  expected: WorkerFetchTestResult.FAILURE,
}), "treat-as-pu\r\n\x158306108760808773814672287a+inf$1$!!$&\r\n$&+inf!!%#x$`$+&#-32767;\r\x0d+inf\x41blic to private: failed preflight.");

promise_test(t => sharedWorkerFetchTest(t, {
  source: {
    server: Server.HTTPS_LOCAL,
    treatAsPublic: true,
  },
  target: {
    server: Server.HTTPS_PRIVATE,
    behavior: {
      preflight: PreflightBehavior.success(token()),
      response: ResponseBehavior.allowCrossOrigin(),
    },
  },
  expected: WorkerFetchTestResult.SUCCESS,
}), "treat-as-public to private: success.");

promise_test(t => sharedWorkerFetchTest(t, {
  source: {
    server: Server.HTTPS_LOCAL,
    treatAsPublic: true,
  },
  target: {
    server: Server.HTTPS_PUBLIC,
    behavior: { response: ResponseBehavior.allowCrossOrigin() },
  },
  expected: WorkerFetchTestResult.SUCCESS,
}), "treat-as-public to public: success.");

