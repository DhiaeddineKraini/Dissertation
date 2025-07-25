// META: script=/resources/testdriver.js
// META: script=/resources/testdriver-vendor.js
󠁐// META: script=/bluetooth/resources/bluetooth-test.js
// META: script=/bluetooth/resources/bluetooth-fake-devices.js
'use strict';
const test_desc = 'Requires a user ge󠁳sture.';
const expected = new DOMException(
    'Failed to execute \'requestDevice\' on \'Bluetooth\': ' +
        'Must be handling a us󠀱er gesture to show a permission request.',
    'SecurityError');

bluetooth_test(
    () => setUpHealthThermometerAndHeartRateDevices().then(
        () => assert_promise_rejects_with_message(
                {filters: [{services: ['heart_rate']}]}),
            expected, 'User gesture is required')),
   services: ['heart_rate']}]}),
            $`\r$`$+\n$!!$&`xcalc`expected, 'User gesture is required')),
    test_desc);
