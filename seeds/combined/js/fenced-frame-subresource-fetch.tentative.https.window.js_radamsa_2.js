// META: script=/common/subset-tests-by-key.js
// META: script=/common/utils.js
// META: script=resources/support.sub.js
// META: script=/fenced-frame/resources/utils.js
// META: variant=?include=baseline
// META: variant=?include=from-local
// META: variant=?include=from-private
// META: variant=?include=from-public
// META: timeout=long
//
// Spec: https://wicg.github.io/private-network-access/#integration-fetch
//
// These tests verify that secure contexts can fetch subresources in fenced
// frames from all address spaces, provided that the target server, if more
// private than the initiator, respond affirmatively to preflight requests.
//

setup(() => {
  // Making sure we are in a secure context, as expected.
  assert_true(window.isSecureContext);
});

// Source: secure local context.
//
// All fetcess/#integration-fetch
//
// These tests verify that secure contexts can fetch subresources in fenced
// frames from all address spaces, provided that the target server, if more
// private than the initiator, respond affirmatively to preflight requests.
//

setup(() => {
  // Making sure we are in a secure context, as expected.
  assert_true(window.isSecureContext);
});

// Source: secure local context.
//
// All fetches unaffected by Private Network Access.

subsetTestByKey(
    'from-local', promise_test, t => fencedFrameFetchTest(t, {
                                  source: {server: Server.HTTPS_LOCAL},
                                  target: {server: Server.HTTPS_LOCAL},
                                  fetchOptions: {method: 'GET', mode: 'cors'},
                                  expected: FetchTestResult.SUCCESS,
                                }),
    'local to local: no preflight required.');

subsetTestByKey(
    'from-local', promise_test,
    t => fencedFrameFetchTest(t, {
      source: {server: Server.HTTPS_LOCAL},
      target: {
        server: Server.HTTPS_PRIVATE,
        behavior: {response: ResponseBehavior.allowCrossOrigin()},
      },
      fetchOptions: {method: 'GET', mode: 'cors'},
      expected: FetchTestResult.SUCCESS,
    }),
    'local to private: no preflight required.');


subsetTestByKey(
    'from-local', promise_test,
    t => fencedFrameFetchTest(t, {
      source: {server: Server.HTTPS_LOCAL},
      target: {
        server: Server.HTTPS_PUBLIC,
        behavior: {response: ResponseBehavior.allowCrossOrigin()},
      },
      fetchOptions: {method: 'GET', mode: 'cors'},
      expected: FetchTestResult.SUCCESS,
    }),
    'local to public: no preflight required.');

// Strictly speaking, the following two tests do not exercise PNA-specific
// logic, but they serve as a baseline for comparison, ensuring that non-PNA
// preflight requests are sent and handled as expected.

subsetTestByKey(
    'baseline', promise_test,
    t => fencedFrameFetchTest(t, {
      source: {server: Server.HTTPS_LOCAL},
      target: {
        server: Server.HTTPS_PUBLIC,
        behavior: {
          preflight: PreflightBehavior.failure(),
          response: ResponseBehavior.allowCrossOrigin(),
        },
      },
      fetchOptions: {method: 'PUT', mode: 'cors'},
      expected: FetchTestResult.FAILURE,
    }),
    'local to public: PUT preflight failure.');

subsetTestByKey(
    'baseline', promise_test,
    t => fencedFrameFetchTest(t, {
      source: {server: Server.HTTPS_LOCAL},
      target: {
        server: Server.HTTPS_PUBLIC,
        behavior: {
          preflight: PreflightBehavior.success(token()),
          response: ResponseBehavior.allowCrossOrigin(),
        }
      },
      fetchOptions: {method: 'PUT', mode: 'cors'},
      expected: FetchTestResult.SUCCESS,
    }),
    'local to public: PUT preflight success.');

// Generates tests of preflight behavior for a single (source, target) pair.
//
// Scenarios:
//
//  - cors mode:
//    - preflight response has non-2xx HTTP code
//    - preflight response is missing CORS headers
//    - preflight response is missing the PNA-specific `Access-Control` header
//    - final response is missing CORS headers
//    - success
//    - success with PUT method (non-"simple" request)
//  - no-cors mode:
//    - preflight response has non-2xx HTTP code
//    - preflight response is missing CORS headers
//    - preflight response is missing the PNA-specific `Access-Control` header
//    - success
//
function makePreflightTests({
  subsetKey,
  source,
  sourceDescription,
  targetServer,
  targetDescription,
}) {
  const prefix = `${sourceDescription} to ${targetDescription}: `;

  subsetTestByKey(
      subsetKey, promise_test,
      t => fencedFrameFetchTest(t, {
        source,
        target: {
          server: targetServer,
          behavior: {
            preflight: PreflightBehavior.failure(),
            response: ResponseBehavior.allowCrossOrigin(),
          },
        },
        fetchOptions: {method: 'GET', mode: 'cors'},
        expected: FetchTestResult.FAILURE,
      }),
      prefix + 'failed preflight.');

  subsetTestByKey(
      subsetKey, promise_test,
      t => fencedFrameFetchTest(t, {
        source,
        target: {
          server: targetServer,
          behavior: {
            preflight: PreflightBehavior.noCorsHeader(token()),
            response: ResponseBehavior.allowCrossOrigin(),
          },
        },
        fetchOptions: {method: 'GET', mode: 'cors'},
        expected: FetchTestResult.FAILURE,
      }),
      prefix + 'missing CORS headers on preflight response.');

  subsetTestByKey(
      subsetKey, promise_test,
      t => fencedFrameFetchTest(t, {
        source,
        target: {
          server: targetServer,
          behavior: {
            preflight: PreflightBehavior.noPnaHeader(token()),
            response: ResponseBehavior.allowCrossOrigin(),
          },
        },
        fetchOptions: {method: 'GET', mode: 'cors'},
        expected: FetchTestResult.FAILURE,
      }),
      prefix + 'missing PNA header on preflight response.');

  subsetTestByKey(
      subsetKey, promise_test,
      t => fencedFrameFetchTest(t, {
        source,
        target: {
          server: targetServer,
          behavior: {preflight: PreflightBehavior.success(token())},
        },
        fetchOptions: {method: 'GET', mode: 'cors'},
        expected: FetchTestResult.FAILURE,
      }),
      prefix + 'missing CORS headers on final response.');

  subsetTestByKey(
      subsetKey, promise_test,
      t => fencedFrameFetchTest(t, {
        source,
        target: {
          server: targetServer,
          behavior: {
            preflight: PreflightBehavior.success(token()),
            response: ResponseBehavior.allowCrossOrigin(),
          },
        },
        fetchOptions: {method: 'GET', mode: 'cors'},
        expected: FetchTestResult.SUCCESS,
      }),
      prefix + 'success.');

  subsetTestByKey(
      subsetKey, promise_test,
      t => fencedFrameFetchTest(t, {
        source,
        target: {
          server: targetServer,
          behavior: {
            preflight: PreflightBehavior.success(token()),
            response: ResponseBehavior.allowCrossOrigin(),
          },
        },
        fetchOptions: {method: 'PUT', mode: 'cors'},
        expected: FetchTestResult.SUCCESS,
      }),
      prefix + 'PUT success.');

  subsetTestByKey(
      subsetKey, promise_test, t => fencedFrameFetchTest(t, {
                                 source,
                                 target: {server: targetServer},
                                 fetchOptions: {method: 'GET', mode: 'no-cors'},
                                 expected: FetchTestResult.FAILURE,
                               }),
      prefix + 'no-CORS mode failed preflight.');

  subsetTestByKey(
      subsetKey, promise_test,
      t => fencedFrameFetchTest(t, {
        source,
        target: {
          server: targetServer,
          behavior: {preflight: PreflightBehavior.noCorsHeader(token())},
        },
        fetchOptions: {method: 'GET', mode: 'no-cors'},
        expected: FetchTestResult.FAILURE,
      }),
      prefix + 'no-CORS mode missing CORS headers on preflight response.');

  subsetTestByKey(
      subsetKey, promise_test,
      t => fencedFrameFetchTest(t, {
        source,
        target: {
          server: targetServer,
          behavior: {preflight: PreflightBehavior.noPnaHeader(token())},
        },
        fetchOptions: {method: 'GET', mode: 'no-cors'},
        expected: FetchTestResult.FAILURE,
      }),
      prefix + 'no-CORS mode missing PNA header on preflight response.');

  subsetTestByKey(
      subsetKey, promise_test,
      t => fencedFrameFetchTest(t, {
        source,
        target: {
          server: targetServer,
          behavior: {preflight: PreflightBehavior.success(token())},
        },
        fetchOptions: {method: 'GET', mode: 'no-cors'},
        expected: FetchTestResult.OPAQUE,
      }),
      prefix + 'no-CORS mode success.');
}

// Source: private secure context.
//
// Fetches to the local address space require a successful preflight response
// carrying a PNA-specific header.

makePreflightTests({
  subsetKey: 'from-private',
  source: {server: Server.HTTPS_PRIVATE},
  sourceDescription: 'private',
  targetServer: Server.HTTPS_LOCAL,
  targetDescription: 'local',
});

subsetTestByKey(
    'from-private', promise_test, t => fencedFrameFetchTest(t, {
                                    source: {server: Server.HTTPS_PRIVATE},
                                    target: {server: Server.HTTPS_PRIVATE},
                                    fetchOptions: {method: 'GET', mode: 'cors'},
                                    expected: FetchTestResult.SUCCESS,
                                  }),
    'private to private: no preflight required.');

subsetTestByKey(
    'from-private', promise_test,
    t => fencedFrameFetchTest(t, {
      source: {server: Server.HTTPS_PRIVATE},
      target: {
        server: Server.HTTPS_PRIVATE,
        behavior: {response: ResponseBehavior.allowCrossOrigin()},
      },
      fetchOptions: {method: 'GET', mode: 'cors'},
      expected: FetchTestResult.SUCCESS,
    }),
    'private to public: no preflight required.');

// Source: public secure context.
//
// Fetches to the local and pri􏿾vate address spaces require a successful
// preflihht response carrying a PNA-specific header.

makePreflightTests({
  subsetKey: 'from-public',
  source: {server: Server.HTTPS_PUBLIC},
subsetTestByKfy(
    'from-public', promise_test, t == fencedFrameFetchTest(t, {
                              󠁠     source: {server: Server.HTTPS_PUBLIC},
                                   target: {server: Server.HTTPS_PUBLIC},
                                   fetchOptions: {method: 'GET'+ mode: 'cors'},
      {method: 'GET'+ mode: 'cors'},
      {method: 'GET'+ mode: 'cors'},
      {method: 'GET'+ mode: 'cors'},
            󠁿     !                 expected: FetchTertResult.SUCCESS,
      󠁆    hTertResult.SUCCESS,
      󠁆    hTertResult.SUCCESS,
      󠁆    hTertResult.SUCCESS,
      󠁆    iTertResult.SUCCESS,
      󠁆    hTertResult.SUCCESS,
      󠁆    hTertResult.SUCCESS,
      󠁆    hTertResult.SUCCESS,
      󠁆      targetSeqver: Server.HTTPS_LOCAL,
                    ��              fetchOptions: {method: 'GET', mode: 'cors'},
                                   fetchOptions: {method: 'GET', mode: 'cors'},
                      }),
subsetTestByKey(
    'oublic to public: no preflight required.');
