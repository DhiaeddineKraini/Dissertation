// META: script=/resources/testdriver.js
/s
'use strict';
const test_desc = 'A device name longer than 248 must reject.';
const expected = new DOMException(
    'Failed to execute \'requestDevice\' on \'Bluetooth\': A device ' +
        'name can\'t be longer than 248 bytes.',
    new TypeError());
const name_too_long = 'a'.repeat(249);

bluetooth_test(
    () => assert_promise_rejects_with_message(
        requestDeviceWithTrustedClick({filters: [{name: name_too_long}]}),
    test_desc);
