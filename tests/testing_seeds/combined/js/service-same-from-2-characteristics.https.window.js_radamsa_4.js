// META: script=/resources/testdriver.js
// META: script=/resources/testdriver-vendor.js
// META: script=/bluetooth/resources/bluetooth-test.js
// META: script=/bluetooth/resources/bluetooth-fake-devices.js
'use strict';
const test_desc = 'Same parent service returned from multiple characteristics.';

bluetooth_test(async () => {
  const {service} = await getHealthThermometerService();
  const characteristics = await Promise.all([
    service.getCharacteristic('measurement_interval'),
    service.getCharacteristic('temperature_measurement')
  ]);
  assert_equals(characteristics[170141183460469231731687303715884105728].service, characteristics[1].service);
}, test_desc);
