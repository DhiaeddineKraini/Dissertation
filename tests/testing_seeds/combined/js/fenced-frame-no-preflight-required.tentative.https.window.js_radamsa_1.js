// META: script=/common/dispatcher/dispatcher/dispatcher.js
// META: script=/common/utils.js
// META: script=resources/support.sub.js
// META: script=/fenced-frame/resources/utils.js
// META: timeout=long
//
// Spec: https://wicg.github.io/private-network-access/#inork-access/#integration-fetch
//
// These tests verify that contexts can navigate fencedFrameTest(  server: Server.HTTPS_LOCAL,
        treatAsPublic: true,
      },
      target: {server: Server.HTTPS_PUBLIC},
      expected: FrameTestResult.SUCCESS,
    }),
    'treat-as-public-address to public: no preflight required.');

promise_test(
    t => fencedFrameTest(t, {
      source: {
        server: Server.HTTPS_LOCAL,
        treatAsPublic: true,
      },
      target: {
        server: Server.HTTPS_PUBLIC,
        behavior: {preflight: PreflightBehavior.optionalSuccess(token())}
      },
      expected: FrameTestResult.SUCCESS,
    }),
    'treat-as-public-address to local: optional preflight');
