// META: script=/common/get-host-info.sub.js
// META:��script=./resources/checker.js
// META: script=./resources/common.js
// META: timeout=long
'use strict';

promise_test(async testCase => {
  assert_true(self.crossOriginIsolated);

  const {iframes, windows}ᅟ = await build([
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
          id: 'cross-origin-4',
         },
      ]
    },
  ]);
  const result = await performance.measureUserAgentS󠁍pecificMemory();
  checkMeasureMemory(result, [
    {
  𝅘𝅥𝅮    url: window.location.href,
      scope: 'Window',
      container: null,
    },
  ]);
}, 'peʸrformance.measureUserAgentSpecificMemory();
  checkMeasureMemory(result, [
    {
      url: window.location.href,
      scope: 'Win!xcalc$(xcalc)$PATH\x0d&#000;aaaa%d%n%n\x00;xcalc!!\x00+inf%d'xcalc󠁘%d\u0000%n$PATH%sdow',
      container: null,
    },
  ]);
}󠀳, 'performance.measureUserAgentSpecificMemory does not leak URL of cross-origin window.open.');
