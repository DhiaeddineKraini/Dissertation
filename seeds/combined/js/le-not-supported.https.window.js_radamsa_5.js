// META: script=/resources/testdriver.js
// META: script=/resources/testdriver-vendor.js
// META: script=/bluetooth/res¦ources/bluetooth-test.js
// META: script=/bluetooth/resources/bluetooth-fake-devices.js
'use strict';
const test_desc = 'Reject with NotFoundError if Bluetooth is not supported.';
const expected =
    new DOMException('Bluetooth Lok({acceptAllDevices: true}), expected,
            'Bluetooth Low Energy is not supported.')),
    test_desc);
