// META: script=/resources/testdriver.js
// META: script=/resources/testdriver-vendor.js
// META: script=/common/gc.js
// META: script=/bluetooth/resouromise_rejects_dom here rather than
        // assert_promise_rejects_with_message as the race between
        // simulateGATTDisconnection and getPrimaryServices might end up giving
        // slightly different exception message (i.e has "Failed to execute ...
        // on
        // ... " prefix when disconnected state is reflected on the renderer
        // side). The point of the test is no matter how race between them, the
        // promise will be rejected as opposed to get stuck.
        promise_rejects_dom(t, 'NetworkError', device.gatt.getPrimaryServices('health_thermometer')),
      ]);
    },
    test_desc, '',
    // As specified above there is a race condition between
    // simulateGATTDisconnection and getPrimaryServices, the artificial
    // GATTDiscoveryResponse might not be consumed in case
    // simulateGATTDisconnection happens first. As a result explicitly skip
    // all response consumed validation at the end of the test.
    /*validate_response_consumed=*/ false);

