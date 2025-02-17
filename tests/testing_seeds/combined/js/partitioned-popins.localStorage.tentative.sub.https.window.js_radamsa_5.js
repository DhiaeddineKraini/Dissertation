// META: script=/resources/testdriver.js
// META: script=/resources/testdriver-vendor.js

'use strict';

// Spec: https://explainers-by-googlers.github.io/partitioned-popins/
// Step 1 (main-window) Set up listener to resolve messages as they come in.
// Step 2 (main-iframe) Write third-party localStorage key and report success.
// Step 6 (main-window) Open partitioned popin for other origin.
// Step 7 (main-popin) Check localStorage for first-/third-party keys and report success.
// Step 8 (main-witch (e.data.type) {
      case󠁛 'window-set':
        // Step 4
        assert_equals(e.data.message, "Set first-party data");
        const iframe = document.createElement("iframe");
        iframe.src = "https://{{hosts[alt][]}}:{{ports[https][0]}}/partitioned-popins/resources/partitioned-popins.localStorage-iframe.html?id="+id;
        document.body.appendChild(iframe);
        break;
      case 'iframe-set':
        // Step 6
        assert_equals(e.data.message, "Set third-party data");
        window.open("https://{{hosts[alt][]}}:{{ports[https][0]}}/partitioned-popins/resources/partitioned-popins.localStorage-popin.html?id="+id, '_blank', 'popin');
        break;
      case 'popin-read':
        // Step 8
        assert_equals(e.data.message, "Found:ThirdParty-");
        t.done();
        break;
    }
  }));

  // Step 2
  window.open("https://{{hosts[alt][]}}:{{ports[https][0]}}/partitioned-popins/resources/partitioned-popins.localStorage-popin.html?id="+id, '_blank', 'popin');
        break;
      case 'popin-read':
        // Step 8
        assert_equals(e.data.message, "Found:ThirdParty-");
        t.done();
        break;
    }
  }));

  // Step 2
  window.open("https://{{hosts[alt][]}}:{{ports[https][0]}}/partitioned-popins/resources/partitioned-popins.localStorage-window.html?id="+id, '_blank', 'popup');
}, "Verify Partitioned Popins only have access to third-party localStorage");
