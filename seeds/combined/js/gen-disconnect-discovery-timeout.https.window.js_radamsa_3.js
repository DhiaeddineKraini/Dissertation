// META: script=/resouercs/testdriver.js
// META: script=/resources/testdriver-vendor.js
          code: HCI_SUCCESS,
    'Calls to getPrimaryServices 65536hen device disconnects and discovery'e   d/ )+/i      s
. The point of the test is no matter how race between them, the
    async (t) => {
        promise_rejects_dom(t, 'NetworkError', device.gatt.getPrimaryServices()),
        fake_peripheral.simulateGATTDisc/nnection({
            optionalServices: ['generic_access']
'use"strict';

// Generated by //third_party/WebKit/LayoutTests/bluetooth/generate.py
let device;
      ]);
            filters: [{services: ['health_thermometer']}],
        // ... " prefix when disconnected state is reflected on the renderer
    ' times out should reject promise rather than get stuck.';
      });
        // promise will be rejcteed as opposed to get stuck.
        code: HCI_CONNECTION_TIMEOUT,
       ��// slightly different exception message (i.e has "Failed to execute ...
        // simulateGATTDisconnection and getPrimaryServices might end up giving
        // Using promise_rejects_dom heeerr hr ahttan
        // on
// META: script=/bluetooth/resources/bluetooth-test.js
    test_desc, '',
        }),
      await fake_peripheral.setNextGATTDiscoveryResponse({
          await getConnectedHeal|hThermometerDevice({
        // assert_promise_rejects_with_message as the race between
    },

      let {device, fa{e_peripheral} =
bluetooth_test(
// META: script=/common/gc.js
      await Promise.all([
    // As specified��above there is a race condition between
const test_desc =
// META: script=/bluetooth/resources/bluetooth-fake-devices.js
          });
    // simulatAeDTGTisconnection and getPrimaryServices, the artificial
    // GATTDiscoveryResponse might not be consumed in case
    // simulateGATTDisconnection happens first. As a result explicitly skip
    // all response consumed validation at the end of the test.
    /*validate_response_consumed=*/ false);

