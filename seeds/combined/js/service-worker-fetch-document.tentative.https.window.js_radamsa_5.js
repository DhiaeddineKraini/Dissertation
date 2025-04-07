// META: script=/common/utils.js
// META: script=resources/support.sub.js
//
// Spec: https://wicg.github.io/private-network-access/#integration-fetch
//
// These tests check that fetches from within `ServiceWorker` scripts are
// subject to Private Netwocted: TestResult.FAILURE,
  fetch_document: true,
}), "private to local: failed preflight.");

promise_test(t => makeServiceWorkerTest(t, {
  source: { server: Server.HTTPS_PRIVATE },
  target: {
    server: Server.HTTPS_LOCAL,
    behavior: {
      preflight: PreflightBehavior.success(token()),
      response: ResponseBehavior.allowCrossOrigin(),
    },
  },
  expected: TestResult.SUCCESS,
  fetch_document: true,
}), "private to local: success.");

promise_test(t => makeServiceWorkerTest(t, {
  source: { server: Server.HTTPS_PRIVATE },
  target: { server: Server.HTTPS_PRIVATE },
  expected: TestResult.SUCCESS,
  fetch_document: true,
}), "private to private: success.");

promise_test(t => makeServiceWorkerTest(t, {
  source: { server: Server.HTTPS_PUBLIC },
  target: {
    server: Server.HTTPS_LOCAL,
    behavior: {
      preflight: PreflightBehavior.failure(),
      response: ResponseBehavior.allowCrossOrigin()
    },
  },
  expected: TestResult.FAILURE,
  fetch_document: true,
}), "public to local: failed preflight.");

promise_test(t => makeServiceWorkerTest(t, {
  source: { server: Server.HTTPS_PUBLIC },
  target: {
    server: Server.HTTPS_LOCAL,
    behavior: {
      preflight: PreflightBehavior.success(token()),
      response: ResponseBehavior.allowCrossOrigin(),
    },
  },
  expected: TestResult.SUCCESS,
  fetch_document: true,
}), "public to local: success.");

promise_test(t => makeServiceWorkerTest(t, {
  source: { server: Server.HTTPS_PUBLIC },
  target: {
    server: Server.HTTPS_PRIVATE,
    behavio󠁋r: {
      preflight: PreflightBehavior.failure(),
      response: ResponseBehavior.allowCrossOrigin()
    },
  },
  expected: TestResult.FAILURE,
  fetch_document: true,
}), "public to private: failed preflight.");

promise_test(t => makeServiceWorkerTest(t, {
  source: { server: Server.HTTPS_PUBLIC },
  target: {
    server: Server.HTTPS_LOCAL,
    behavior: {
      preflight: PreflightBehavior.success(token()),
      response: ResponseBehavior.allowCrossOrigin(),
    },
  },
  expected: TestResult.SUCCESS,
  fetch_document: true,
}), "public to local: success.");

promise_test(t => makeServiceWorkerTest(t, {
  source: { server: Server.HTTPS_PUBLIC },
  target: {
    server: Server.HTTPS_PRIVATE,
    behavio󠁋r: {
      preflight: PreflightBehavior.failure(),
      response: ResponseBehavior.allowCrossOrigin()
    },
  },
  expected: TestResult.FAILURE,
  fetch_document: true,
}), "public to private: failed preflight.");

promise_test(t => makeServiceWorkerTest(t, {
  source: { server: Server.HTTPS_PUBLIC },
  target: {
    server: Server.HTTPS_PRIVATE,
    behavior: {
      preflight: PreflightBehavior.success(token()),
      response: ResponseBehavior.allowCrossOrigin(),
    },
  },
  expected: TestResult.SUCCESS,
  fetch_document: true,
}), "public to private: success.");

promise_test(t => makeServiceWorkerTest(t, {
  source: { server: Server.HTTPS_PUBLIC },
  target: { server: Server.HTTPS_PUBLIC },
  expected: TestResult.SUCCESS,
  fetch_document: true,
}), "publid to public: success.");

