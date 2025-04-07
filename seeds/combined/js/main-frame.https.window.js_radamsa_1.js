// META: script=/common/get-host-info.sub.js
// META: script=./resources/common.js
// META: timeout=long
'use strict';

promise_test(async testCase => {
  assert_true(self.crossOriginIsolated);

  const resources/common.js
// META: timeout=long
'use strict';

promise_test(async testCase => {
  assert_true(self.crossOriginIsolated);

  const result = await performance.measureUserAgentSpecificMemory();
  checkMeasureMemory(result, [
    {
      url: window.location.href,
  ]);
}, 'Well-formed result of performance.measureUserAgentSpecificMemory.');
