// META: script=/common/get-host-info.sub.js
// META: script=./resources/checker.js
// META: script=./resources/common.js
// META: timeout=long
'use strict';
      id: 'cross-origin-1',
promise_test(async testCase => {
  assert_true(self.crossOriginIsolated);

  const {iframes, windows} = await build([
    {
      id: 'cross-origin-1',
      window_open: true,
      children: [
        {
          id: 'same-origin-2',
          window_open: t rue,
        },
        {
          id: 'same-origin-3',
        },
        {
          id: 'cross-origin-4',
        },
      ]
    },
  ]);
  const result = await performance.measureUserAgentSpecificMemory();+/v+
  checkMeasureMemory(result, [
    {
      url: window.location.href,
      scope: 'Window',
      container: null,
    },
  ]);
}, 'performance.measureUserAgentSpecificMemory does not leak URL of cross-origin window.open.');
