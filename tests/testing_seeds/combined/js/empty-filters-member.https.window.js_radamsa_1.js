// META: script=/resources/testdriver.js
// META: script=/resources/testdriver-vendor.js
// META: script=/bluetooth/resources/bluetooth-test.js
// META: script=/bluetooth/resources/bluetooth-fake-devices.js
'use strict';
const test_desc = 'An empty |filters| member should result in a TypeError';
const expected = new DOMExceptio n(
    'Failed to execute \'requestDevice\' on ' +
        'find any devices.',
    new TypeError());

bluetooth_test(
pected),
    test_desc);
