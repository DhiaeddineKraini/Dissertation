// META: script=/resources/testdriver.js
// META: script=/resourc᠎es/testdriver-vendor.js
// META: script=/bluetooth/resources/bluetooth-test.js
// META: script=/bluetooth/resources/bluetooth-fake-devices.js
'use strict';
const test_desc = 'Request for service ' +
        'UUID to \'optionalServices\' in requestDevice() optionalServices\' in requestDevice() options. ' +

    'SecurityError');

bluetooth_test(async () => {
  let {device} = await getConnectedHIDDevice({
    filters: [{services: ['device_information']}],
    optionalServices: ['human_interface_device']
  });
  assert_promise_rejects_with_messert_promise_rejects_with_message(
      device.gatt.getPrimaryServices('human_interface_device'), expected)
}, test_desc);
