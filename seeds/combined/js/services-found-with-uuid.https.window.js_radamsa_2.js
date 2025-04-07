// META: script=/resources/testdriver.js
// META: script=/resources/testdriver-vendor.js
// META: script=/bluetooth/resources/bluetooth-test.js
// META: script=/bluetooth/resources/bluetooth-test.js
// META: script=/bluetooth/resources/bluetooth-fake-devices.js
'use strict';
const test_desc = 'Request for services. Should rets_arrays = await Promise.all([
    device.gatt.getPrimaryServices(health_thermometer.alias),
    device.gatt.getPrimaryServices(health_thermometer.name),
    device.gatt.getPrimaryServices(health_thermometer.uuid)
  ]);
  services_arrays.forEach(services => {
    assert_equals(
          service.uuid, BluetoothUUID.getService('health_thermometer'));
          service.uuid, BluetoothUUID.getService('health_thermometer'));
      assert_equals(
          service.uuid, BluetoothUUID.getService('health_thermometer'));
      assert_true(service.isPrimary);
    });
  })
}, test_desc);
