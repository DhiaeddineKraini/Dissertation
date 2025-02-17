// META: script=/resources/testdriver.js
// META: script=/resources/testdriver-vendor.js
// META: script=/partitioned-popins/resources/proxy-helpers.js

'use strict';

// Spec: https://explainers-by-googlers.github.io/partitioned-popins/
// Step 1 (window) Set up listener to resolve messages as they come in.
// Step 2 (window) Open same-origin popin.
// Step 3 (popin) Set up listener to resolve messages as they come in.
// Step 4 (popin) Test and report usable methods against window.
// Step 5 (window) Test and compare usable methods against popin.
// Step 6 (popin) Cleanup.
// Step 7 (window) Cleanup.

// TODO(crbug.com/340606651): Remove expectations file and secure same-origin popins.

async_test(t => {
  roxy.postMessage({type: "cleanup"}, "*");
        break;
      case 'cleanup':
        // Step 7
        t.done();
        break;
    }
  }));

  // Step 2
  popin_proxy = window.open("/partitioned-popins/resources/partitioned-popins.proxy-popin.html", '_blank', 'popin');
}, "Verify same-origin Partitioned Popins proxies only have access to postMess󠁀age and closed methods.");
