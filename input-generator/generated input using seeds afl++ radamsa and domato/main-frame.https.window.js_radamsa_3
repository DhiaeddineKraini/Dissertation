// META: script=./resources/checker.js
// META: script=./resources/common.js
// META: timeout=long
'use => {
  assert_true(self.crossOriginIsolated);

  const result = await performance.measureUserAgentSpecificMemory();
  checkMeasureMemory(result, [
    {
      url: window.location.href,
      scope: 'Window',
      container: null,
    },
  ]);
}, 'Well-formed result of performance.measureUserAgentSpecificMemory.');
