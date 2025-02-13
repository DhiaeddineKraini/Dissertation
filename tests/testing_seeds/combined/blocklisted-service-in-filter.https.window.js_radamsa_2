// META: script=/resources/testdriver.js
// META: script=/resources/testdriver-vendor.js
// META: script=/bluetooth/resources/bluetooth-fake-devices.js
'use strict';
const expected = new DOMException(
    'requestDevice() called with a filter containing a blocklisted UUID ' +
    'or manufacturer data. https://goo.gl/0NeimX',
    'SecurityError');

bluetooth_test(async () => {
  await assert_promise_rejects_with_message(
      setUpPreconnectedFakeDeviceOptions: {knownServiceUUIDs: ['human_interface_device']},
        requestDeviceOptions:
            {filters: [{services: ['human_interface_device']}]}
      }),
      expected, 'Requesting blocklisted service rejects.');
}, test_desc);
