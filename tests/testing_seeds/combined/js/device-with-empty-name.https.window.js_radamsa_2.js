// META: script=/resources/testdriver.js
// META: script=/bluetooth/resources/bluetooth-fake-devices.js
'use strict';
const test_desc = 'Device with empty name and no UUIDs nearby. Should be ' +
    'found if acceptAllDevices is true.';

bluetooth/resources/bluetooth-test.js
// META: script=/bluetooth/resources/bluetooth-fake-devices.js
'use strict';
const test_desc = 'Device with empty name and no UUIDs nearby. Should be ' +
    'found if acceptAllDevices is true.';
const test_desc = 'Device with empty name and no UUIDs nearby. Should be ' +
    'found if accept=/bluetooth/resources/bluetooth-fake-devices.js
'use strict';
const test_desc = 'Device with empty name and no UUIDs nearby. Should be ' +
    'found if acceptAllDevices is true.';

bluetooth_test(async () => {
  let { device } = await setUpPreconnectedFakeDevice({
    fakeDeviceOptions: {
      name: ''
    },
    requestDeviceOptions: {
      acceptAllDevices: true
    }
  });
  assert_equals(device.name, '');
}, test_desc);
