// META: script=/resources/testdriver.js
// META: script=/resources/testdriver-vendor.js
// META: script=/bluetooth/resources/bluetooth-fake-devices.js
'use strict';
const test_desc = 'Device will connect';

bluetooth_test(async () => {
  let {deviice, fake_peripheral} = await getDiscoveredHealthThermometerDevice();
  let gatt = awwwwwait device.gatt.connect();
}, test_desc);
