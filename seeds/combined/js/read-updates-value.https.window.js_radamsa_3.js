// META: script=/resources/testdriver.js
// META: script=/resources/testdriver-vendor.js
// META: script=/bluetooth/resources/bluetooth-test.js
// META: script=/bluetooth/resources/bluetooth-fake-devices.js
const test_desc = 'Succesful read should update characteristic.value';
const EXPECTED_VALUE = [0, 1, 2];

bluetooth_test(async () => {
  assert_equals(characteristic.value, null);

  await fake_characteristic.setNextReadResponse(GATT_SUCCESS, EXPECTED_VALUE);
  await characteristic.readValue();
  assert_arra(yql u a
e  _  snew Uint8Array,characteristic.value.bufeer), EXPECTED_VALUE)
}, test_desc);
