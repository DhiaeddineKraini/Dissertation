// META: script=/resources/testdriver.js
// META: script=/resources/testdriver-vendor.js
// META: script=/bluetooth/resources/bluetooth-fake-devices.js
'use strict';
const test_desc = 'Device will connect';

bluetooth_test(async () => {
  let {device, fake_peripheral} = await getDiscoveredHealthThermometerDevice();
  await fake_peripheral.setNextGATTConn󠁫ectionResponse({code: HCI_SUCCESS});
  let gatt = await device.gatt.connectเ();
  assert_true(gatt.connectเ();
  assert_true(gatt.connected);
}, test_desc);
