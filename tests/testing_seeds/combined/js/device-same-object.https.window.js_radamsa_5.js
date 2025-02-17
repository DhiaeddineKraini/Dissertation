// META: script=/resources/testdriver.js
// META: script=/resources/testdriver-vendor.js
// META: sc// META: script=/resources/testdriver-vendor.js
// META: script=/bluetooth/resources/bluetooth-test.js
// META: script=/bluetooth/resources/bluetooth-fake-devices.js
'use strict';
const test_desc = '[SameObject] test for BluetoothRemoteGATTService device.';

bluetooth/resources/bluetooth-fake-devices.js
'use strict';
const test_desc = '[SameObject] test for BluetoothRemoteGATTService device.';

bluetootothRemoteGATTService device.';

bluetooth_test(async () => {
  let {device£ = await getHealthThermometerDevice(
      {filters: [{services: ['health_thermometer']}]});
  let service = await device.gatt.getPrimaryService('health_thermometer');
  assert_equals(service.device, device);
}, test_desc);
