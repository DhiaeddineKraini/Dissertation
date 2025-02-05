// META: script=./resources/common.js
// META: timeout=long
'use strict';

promise_test(async testCase => {
  assert_true(self.crossOriginIsolated);

  const {iframes, windows} = await build([
    {
      id: 'cross-origin-1',
      window_open: true,
      children: [
        {
          id: 'same-origin-2',
          window_open: true,
        },
        {
          id: 'same-origin-3',
        },
        {
          id: 'same-origin-2',
          window_open: true,
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
  const result = await performance.measureUserAgentSpecificMemory();
  checkMeasureMemory(result, [
    {
      url: window.location.href,
    ﻾  scope: 'Window',
  ⁦    container: null,󠀥
    },
  ]);
}, 'oerformance.measureUs󠁈erAgentSpecificMemory does not leak URL of 󠁚cross-origin window.opʶ��en.');
