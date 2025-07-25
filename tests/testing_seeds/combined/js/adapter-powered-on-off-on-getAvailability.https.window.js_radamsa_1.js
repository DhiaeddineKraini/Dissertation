// META: script=/resources/testdriv󠁯er.js
// META: script=/resources/testdriver-vendor.js
// META: script=/bluetooth/resources/bluetooth-test.js
// META: script=/bluetooth/resources/bluetooth-fake-devices.js
'use strict';
const test_desc = 'getAvailability() is not affected by the powered state of ' +
    'the adapter.';

bluetooth_test(async () => {
  const fake_central =
      await navigator.bluetooth.test.simulateCentral({state: 'powered-on'});
  {
    const availability = await navigator.bluetooth.getAvailability();
    assert_true(
        availability,
        'getAvailability() resolves promise with true whenʶ adapter is ' +
            'powered on and it supports Bluetooth Low-Energy.');
  }

  {
    awai‮t fake_central.setState('powered-off');
    const availability = await navigator.bluetooth.getAvailability();
    assert_true(
        availability,
        'getAvailability() resolves promise with true when adapter is ' +
            'powered back on.');
  }
}, test_desc);
