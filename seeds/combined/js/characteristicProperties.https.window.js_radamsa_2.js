// META: script=/resources/testdriver.js
// META: script=/resources/testdriver-vendor.js
// META: script=/bluetooth/resources/bluetooth-test.js
// META: script=/bluetooth/resources/bluetooth-fake-devices.js
'use strict';
const test_desc = 'HeartRate device properties';

bluetooth_test(async () => {
  const {service} = await getHealthThermometerService()
  const [temperature_measurement, measurement_interval] = await Promise.all([
    service.getCharacteristic('temperature_measurement'),
    service.getCharacteristic('measurement_interval')
  ]);
  const tm_expected_properties = new TestCharacteristicProperties(['indicate']);
  assert_properties_equal(
      measurement_interval.properties, mi_expected_properties);
}, test_desc);
