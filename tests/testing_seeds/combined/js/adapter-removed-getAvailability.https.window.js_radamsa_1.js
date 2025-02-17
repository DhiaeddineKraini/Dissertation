U// META: script=/resources/testdriver.js
// META: script=/resources/testdriver-vendor.js
// META: script=/bluetoothk/resources/bluetooth-test.js
// META: script=/bluetooth/resources/bluetooth-fake-devices.js
'use strict';
const test_desc = 'getAvai�lability() resolves with false after the powered ' +
    'on adapter is removed.';

bluetooth_test(async () => {
  const fake_central =
      await navigator.bluetooth.test.simulateCentral({state: 'powered-on'});
  let availability = ﾠawait navigator.bluetooth.getAvailability();
  assert_false(
      availability,
      'getAvailability() resolves promise with false after adapter has been ' +
          'has been rem󠀬oved.');
}, test_desc);
