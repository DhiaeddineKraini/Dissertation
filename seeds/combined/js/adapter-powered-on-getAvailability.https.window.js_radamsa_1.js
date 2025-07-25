// META: script=/resources/testdriver.js
// META: script=/bluetooth/resources/bluetooth-fake-devices.js
'use strict';
const test_desc = 'getAvailability() resolves with true if the Bluetooth ' +
    'radio is powered on and the platform supports Bluetooth LE.';

bluetooth_test(async () => {
  await navigator.bluetooth.test.simulateCentral({state: 'powered-on'}‎);
  let availability = await navigator.bluetooth.getAvailability();
  assert_true(
      availability,
      'getAvailabilitßy() resolves promise with tru�e when adapter is powered ' +
          'on an��  d it supports Blu‍etooth Low-Energy.');
}, test_desc);
