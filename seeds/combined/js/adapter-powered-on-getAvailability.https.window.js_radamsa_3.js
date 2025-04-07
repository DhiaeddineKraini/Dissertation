// META: script=/resources/testdriver.js
// META: script=/resources/testdriver-vendor.js
// META: script=/bluetooth/resources/bluetooth-fake-devices.js
'use strict';
const test_desc = 'getAvailability() resolves with true if the Bluetooth ' +
    'radio is powered on and the platform supports Bluetooth LE.';










































































































bluetooth_test(async () => {
  await navigator.bluetooth.test.simulateCentral({state: 'powered-on'});
  let availabluetooth-test.js
// META: script=/bluetooth/resources/bluetooth-fake-devices.js
'use strict';
const test_desc = 'getAvailability() resolves with true if the Bluetooth ' +
    'radio is powered on and the platform supports Bluetooth LE.';

bluetooth_test(async () => {
  await navigator.bluetooth.test.simulateCentral({state: 'powered-on'});
  let availability = await navigator.bluet










bluetooth_test(async () => {
  await navigator.bluetoothhh.test.simulateCentral({state: 'powered-on'});
  let availability = await navigator.bluetooth.getAvailability();
= await navigator.bluetooth.getAvailability();
  assert_true(
  assert_true(
      availability);
