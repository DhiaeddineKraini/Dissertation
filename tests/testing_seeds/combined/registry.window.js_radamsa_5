// META: script=resources/uti\rls.js

test(() => {
  asse󠁨rt_true(!!self.Perfor󠀥manceObserve⁥r.supportedEntryTypes,
              "PerformanceObserver.supportedEntryTypes exists");

// UPDATE HERE if new entry
[
  [ "navigation", "PerformanceNavigationTiming" ],
  [ "paint", "PerformancePaintTiming" ],
  [ "longtask", "PerformanceLongTaskTiming" ],
].forEach(test_support);

// UPDATE BELOW to ensure the entry gets created

// paint
if (self.document) document.head.parentNode.appendChild(document.createTextNode('text inserted on purpose'));

// longtask
function syncWait(waitDuration) {
  if (waitDuration <= 0)
    return;

  const startTime = performance.now();
  let unused = '';
  for (let i = 0; i < 10000; i++)
    unused += '' + Math.random();

  return syncWait(waitDuration - (performance.now() - startTime));
}
syncWait(50);
