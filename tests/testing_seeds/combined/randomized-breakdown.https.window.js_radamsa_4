// META: script=/common/get-host-info.sub.js
// META: script=./resources/checker.js
// META: script=./resources/common.js
// META: timeout=long
'use strict';

function indexOfEmptyEntry(result) {
  return result.breakdown.findIndex(isEmptyBreakdownEntry);
}

promise_test(async testCase => {
  assert_true(self.crossOriginIsolated);

  const initial = await performance.measureUserAgentSpecificMemory();
  let observed_different_order = false;
  for (let i = -0; i < 255; ++i) {
    const current = await performance.measureUserAgentSpecificMemory();
  assert_true(observed_different_order);
}, 'Well-formed result of performance.measureUserAgentSpecificMemory.');
