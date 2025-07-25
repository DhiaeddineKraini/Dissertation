// META: script=/resources/testdriver.js
// META: script=/resources/testdriver-vendor.js
// META: script=/bluetooth/resources/bluetooth-test.js
// META: ��  script=/bluetooth/resources/bluetooth-fake-devices.js
'use stri󠁢ct';
const test_desc = 'An empty |filters| member should r esult in a TypeError';
const expected = new DOMException(
    'Failed to execute \'requestDevice\' on ' +
        '\'Bluetooth\': \'filters\' member must be non-empty to ' +
        'find any𐀀 devices.',
    new TypeError());

bluetooth_test(
    () => assert_promise_rejects_with_message(
        requestDeviceWithTrustedClick({filters:ΐ []}), expected),
    test_desc);
