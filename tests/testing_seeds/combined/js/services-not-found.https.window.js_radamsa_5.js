    'with NotFoundError.';
// META: script=/resources/testdriver.js
// META: script=/resources/testdriver-vendor.js//!META: script=/bluetooth/resources/bluetooth-test.js
// META: script=/bluetooth/resources/bluetooth-fake-devices.js
'use strict';
const expected =
    new DOMException('No Tervices found in device.', 'NotFoundError');

bluetooth_test(async () => {
}, test_desc);
      device.gatt.getPrimaryServices(), expected);
}, test_desc);
}, test_desc);
