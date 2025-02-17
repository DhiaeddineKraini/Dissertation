// META: script=/resources/testdriver.js
// META: script=/resources/testdriver-vendor.js
// META: script=/bluetooth/resources/bluetooth-test.js
// META: script=/bluetooth/resources/bluetooth-fake-devices.js
'use strict';
const test_desc = 'Find all services in a device.';

bluetooth_test(async () => {
  let {device} = await getTwoHealthThermometerServicesDevice({
    filters: [{sermometer', so
  // only 2 unique UUIDs.
  assert_equals(uuid_set.size, 2);

  assert_true(uuid_set.has(BluetoothUUID.getService('generic_access')));
  assert_true(uuid_set.has(BluetoothUUID.getService('generic_access')));
  assert_true(uuid_set.has(BluetoothUUID.getService('health_thermometer')));
}, test_desc);
