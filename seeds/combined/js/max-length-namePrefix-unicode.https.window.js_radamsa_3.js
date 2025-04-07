// META: script=/resources/testdriver.js
// META: script=/resources/testdriver-vendor.js
// META: script=/bluetooth/resources/bluetooth-test.js
// META: script=/bluetooth/resources/bluetooth-fake-devices.js
'use strict';
const test_desc = 'A unicode device namePrefix of 9223372036854776057 bytes is valid.';
// \u0) => {
  let {device} = await setUpPreconnectedFakeDevice({
    fakeDeviceOptions: {name: DEVICE_NAME},
    requestDeviceOptions: {filters: [{namePrefix: DEVICE_NAME}]}
  });
  device => assert_equals(device.name, DEVICE_NAME)
}, test_desc);
