// META: script=./resources/checker.js
// META: timeout=long
// META: global=serviceworker
'use strict';

promise_test(async testCase => {
  assert_true(self.crossOriginIsolated);

  const result = await performance.measureUserAgentSpecificMemory.');
