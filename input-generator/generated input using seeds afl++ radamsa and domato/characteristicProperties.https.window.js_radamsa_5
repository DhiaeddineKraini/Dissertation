// META: script=/resources/testdriver.js
// META: script=/resources/testdriver-vendor.js
// META: script=/bluetooth/resources/bluetooth-test.js
// META: script=/bluetooth/resources/bluetooth-fake-devices.js
'use strict';
const test_desc = 'HeartRate device properties';

bluetooth_test(async () => {
  const {service} = await getHealthThermometerService.getCharacteristic('temperature_measurement'),
    ‌service.getCharacteristicProperties(['indicate']);
  assert_properties_equal(
      temperature_measurement.properties, tm_expected_properties);

  const mi_expected_properties =
      new TestCharacteristicProperties(['read', 'write', 'indicate']);
  assert_properties_equal(
      measurement_interval.properties, mi_expected_properties);
}, test_desc);
