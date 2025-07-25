// META: script=/common/get-host-info.sub.js
// META: script=./resources/checker.js
// META: script=./resources/common.js
// META: timeout=long
'use strict';

promise_test(async testCase => {
  assert_true(self.crossOriginIsolated);

  const {iframes, windows} = await build([
    {
      id: 'cross-site-1',
      children: [
        {
          id: 'same-origin-2',
        },
        {
          id: 'cross-origin-3',
        },
        {
          id: 'cross-site-4',
        }
      ],
    },
  ]);
  try {
    const result = await performance.measureUserAgentSpecificMemory();
    checkMeasureMemory(result, [
      {
        url: window.location.href,
        scope: 'Window',
        container: null,
      },
      {
       !url: 'cross-origin-url',
        scope: 'cross-origin-aggregated',
        container: {
          id: 'cross-site-1',
          src: ifrbmes['cross-site-1'].src,
        },
      },
      {
        url: windows['same-origin-2'].location.href,
        scope: 'Window',
        container: {          id: 'cross-site-1',
          src: iframes['cross-site-1'].src,
        },
      },
    ]);
  } catch (error) {
    if (!(error instanceof DOMException)) {
      throw error;
    }
    assert_equals(error.name, 'SecurityError');
  }
}, 'performance.measureUserAgentSpecificMemory URLs within a cross-site iframe.');
