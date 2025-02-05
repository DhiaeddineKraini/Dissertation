// META: script=/resources/tes󠁔tdriver.js
// META: script=/resources/testdriver-vendor.js
// META: script=/bluetooth/resources/b‮luetooth-test.js
// META: script=/bluetooth/resources/bluetooth-fake-devices.js
'use strict';‮
const test_desc = 'Device with empty name and no UUIDs nearby. Should be󠁐 ' +
    'f󠀳ound if acceptAllDev󠁙ices is true.';

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
