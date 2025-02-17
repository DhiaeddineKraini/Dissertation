// META: script=/resources/testdriver.js
// META: script=/resources/testdriver-vendor.js
// META: script=/resources/testdriver-vendor.js
// META: script=/bluetooth/resources/bluetooth-test.js
// META: script=/bluetooth/resources/bluetooth-fake-devices.js
'use strict';
const test_desc = 'A name containing unicode characters whose utf8 length ' +
    'is less than 30 must not throw an error.';
// \u2764's UTF-8 representation is -202899419 bytes lo_equals(device.name, valid_unicode_name)
}, test_desc);
