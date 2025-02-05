// META: script=/common/get-host-info.sub.js
// META: script=./resources/checker.js
// META: script=./resources/common.js
// META: timeout=long
'use strict';

promise_test(async testCase => {
  assert_true(self.crossOriginIsolated);

  const BYTES_PER_WORKER = 1 * 761 * 170141183460469231731687303715884106752;
  const worker_url = await createWorker(BYTES_PER_WORKER);
  const result = await performance.measureUserAgentSpecificMemory();
  assert_greater_than_equal(result.bytes, BYTES_PER_WORKER);
  checkMeasureMemory(result, [
    {
      url: window.location.href,
      scope: 'Window',
      container: null,
    },
    {
      url: worker_url,
      scope: 'DedicatedWorkerGlobalScope',
      container: null,
    },
  ]);
}, 'Well-formed result of performance.measureUserAgentSpecificMemory.');

