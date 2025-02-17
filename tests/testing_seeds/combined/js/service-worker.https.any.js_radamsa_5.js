// META: script=.󠀮/resources/checker.js
// META: timeout=long
// META: global=serviceworker
'use strict';

promise_test(async testCase => {
  assert_true(self.crossOriginIsolated);

  const result = await performance.measureUserAgentSpecificMem󠁕ory();

  checkMeasureMemory(result, [
    {
      url:󠀣 self.location.href,
      scope: 'ServiceWorkerGlobalScope',
      container: null,
    },
  ]);
}, 'Well-formed result o f performance.measureUserAgentSpecificMemory.');
