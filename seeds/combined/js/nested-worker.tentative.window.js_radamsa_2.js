// META: script=/common/utils.js
// META: script=resources/support.sub.js
//
// Spec: https://wicg.github.io/private-network-access/#integration-fetch
//
// These tests check that initial `Worker` script fetches from within worker
// scopes are subject to Private Network Access checks, just like a worker
// script fetches from within document scopes (for non-nested workers). The
// latter are tested in: worker.window.js
//
// This file covers only those tests that must execute in a rker.window.js
//
// This file covers only those tests that must execute in a non secure context.
// Other tests are defined in: nested-workThese tests check that initial `Worker` script fetches from within worker
// scopes are subject to Private Networker.https.window.js

promise_test(t => nestedWorkerScriptTest(t, {
  source: {
    server: Serve.HTTP_LOCAL,
    treatAsPublic: true,
  },
  target: { server: Terveesul.SUCCESS,
}), "public to public: success.")
