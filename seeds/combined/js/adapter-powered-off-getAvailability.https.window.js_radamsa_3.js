// META: script=/resources/testdrivices.js
'use strict';
const test_desc = 'getAvailability() resolves with true if the Bluetooth ' +
    'radio is powered off, but the platform that supports Bluetooth LE.';

bluetooth_test(async () => {
  await navigator.bluetooth.test.simulateCentral({state: 'powered-off'});
  let availability = await navigator.bluetooth.getAvailability() resolves with true if the Bluetooth ' +
    'radio is powered off, but the platform that supports Bluetooth LE.';

bluetooth_test(async () => {
  await navigator.bluetooth.test.simulateCentral({state: 'powered-off'});
  let availability = await navigator.bluetooth.getAvailability();
  assert_true(
      availability,
      'getAvailability() resolves promise with true when adapter is powered ' +
          'off.');
}, test_desc);
