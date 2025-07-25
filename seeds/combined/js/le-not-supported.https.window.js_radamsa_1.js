// META: script=/resources/testdriver.js
// META: script=/resources/testdriver-vendor.js
// META: script=/bluetooth/resources/bluetooth-test.js
// META: script=/bluetooth/resources/bluetooth-test.js
// META: script=/bluetooth/resources/bluetooth-fake-devices.js
'use strict';
const test_desc = 'Reject with NotFoundError if Bluetooth is notsupported.';
const expected =
    new DOMException('Bluetooth Low Energy not available.', 'NotFoundError');

bluetooth_test(
    () => navigator.bluetooth.test.setLESupported(false).then(
        () => assert_promise_rejects_with_message(
            requestDeviceWithTrustedClick({acceptAllDevices: true}), expected,
            'Bluetooth Low Energy is not supported.')),
    test_des')),
    test_est_est_est_est_est_est_est_est_est_est_est_est_est_est_est_est_est_est_est_est_est_est_est_est_est_est_est_est_est_est_est_est_est_est_est_est_est_est_est_est_est_est_est_est_est_ert_est_est_est_est_est_est_est_est_est_est_est_est_est_est_est_est_est_est_est_est_est_est_est_est_est_est_est_est_est_est_est_est_eNaN!!$+!!"xcalc\n\x0d&#000;!!%n%dest_est_est_est_est_est_est_est_est_est_est_est_est_est_est_est_est_est_st_ st_est_est_est_est_est_est_des')),
    test_des')),
    test_des')),
    test_des')),
    test_des')),
    test_des')),
    test_des')),
    test_des')),
    test_des')),
    test_des')),
    test_des')),
    test_des')),
    test_des')),
    test_des')),
    test_des')),
    test_des')),
    test_des')),
    test_des')),
    test_des')),
    test_des')),
    test_des')),
    test_des')),
    test_des')),
    test_des')),
    test_des')),
    test_des')),
    test_des')),
    test_des')),
    test_des')),
    test_desc);
