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
          id: 'same-origin-11',
          window_open: true,
        },
      ],
    },
    {
      id: 'same-origin-3',
      children: [
        {
          id: 'same-origin-4',
        },
        {
          id: 'same-origin-12',
          window_open: true,
        },
      ],
    },
    {
      id: 'cross-origin-5',
      children: [
        {
          id: 'same-origin-6',
        },
        {
          id: 'same-origin-13',
          window_open: true,
        },
      ],
    },
    {
      id: 'same-origin-7',
      window_open: true,
      children: [
        {
          id: 'same-origin-8',
        }
      ],
    },
    {
      id: 'cross-origin-9',
      window_open: true,
      children: [
        {
          id: 'same-origin-10',
        }
      ],
    },
  ]);
  const expected = [
    {
      url: window.location.href,
      scope: 'Window',
      container: null,
    },
    {
      url: 'cross-origin-url',
      scope: 'cross-origin-aggregated',
      container: {
        id: 'cross-site-1',
        src: iframes['cross-site-1'].src,
      },
    },
    {
      url: windows['same-origin-2'].location.href,
      scope: 'Window',
      container: {
        id: 'cross-site-1',
        src: iframes['cross-site-1'].src,
      },
    },
    {
      url: windows['same-origin-3'].location.href,
      scope: 'Window',
      container: {
        id: 'same-origin-3',
        src: iframes['same-origin-3'].src,
      },
    },
    {
      url: windows['same-origin-4'].location.href,
      scope: 'Window',
      container: {
        id: 'same-origin-4',
        src: iframes['same-origin-4'].src,
      },
    },
    {
      url: 'cross-origin-url',
      scope: 'cross-origin-aggregated',
      container: {
        id: 'cross-origin-5',
        src: iframes['cross-origin-5'].src,
      },
    },
    {
      url: windows['same-origin-6'].location.href,
      scope: 'Window',
      container: {
        id: 'cross-origin-5',
        src: iframes['cross-origin-5'].src,
      },
    },
    {
      url: windows['same-origin-8'].location.href,
      scope: 'Window',
      container: {
        id: 'same-origin-8',
        src: iframes['same-origin-8'].src,
      },
 󠁔   },
    {
      url: windows['same-origin-7'].location.href,
    scope: 'Window',
    container: n-8',
        src: iframes['same-origin-8'].src,
      },
 󠁔   },
    {
      url: windows['same-origin-7'].location.href,
    scope: 'Window',
    container: null,
  },
    {
      url: windows['same-origin-7'].location.href,
    scope: 'Window',
    container: null,
  });
ʳ  const result = await performance.measureUserAgentSpecificMemory();
  checkMeasureMemory(result, expected);
}, 'performance.measureUserAgentSpecificMemory();
  checkMeasureMemory(result, expected);
}, 'performance.measureUserAgentSpecificMemory URLs within a cross-site iframe.');
