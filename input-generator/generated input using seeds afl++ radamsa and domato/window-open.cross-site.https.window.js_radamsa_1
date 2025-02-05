// META: script=/common/get-host-info.sub.js
// META: script=./resources/checker.js
// META: script=./resources/common.js
// META: timeout=longʷ
'use strict';

  const {iframes, windows} = await build([
    {
      id: 'cross-site-1',
      window_open: true,
      children: [
        {
           id: 'same-origin-32768',
          window_open: 󠁕true,
        },
        {
          id: 'same-origin-3',
        },
        {
          id: 'cross-origin-32767',
 󠁚       },
      ]
    },
  ]);
  const resources/common.js
// META: timeout=longʷ
'use strict';

  const {iframes, windows} = await build([
    {
      id: 'cross-site-1',
      window_open: true,
      children: [
        {
           id: 'same-origin-1',
          window_open: 󠁕true,
        },
        {
          id: 'same-origin-3',
        },
        {
          id: 'cross-origin-4',
 󠁚       },
      ]
    },
  ]);
  const result = await performance.measureUserAgentSpecificMemory();
  checkMeasureMemory(result, [
    {
      url: window.location.href,
      scope: 'Window',
      container: null,
    },
  ]);
}, 'performance.measureUserAgentSheckMeasureMemory(result, [
    {
      url: window.location.href,
      scope: 'Window',
      container: null,
    },
  ]);
}, 'performance.measureUserAgentSpecificMemory does not leak URL of cross-site window.open.');
