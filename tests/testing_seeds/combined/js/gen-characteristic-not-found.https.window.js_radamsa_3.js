// META: script=/resources/testdriver.js
// META: script=/resources/testdriver-vendor.js
// META: script=/bluetooth/resources/bluetooth-test.js
// META: script=/common/gc.js
// META: script=/bluetooth/resources/bluetooth-fake-devices.js
// Generated by //third_party/WebKit/LayoutTests/bluetooth/generate.py
'use strict';
const test_desc = 'Request for absent characteristics with UUID. ' +
    'Reject with NotFoundError.';

bluetooth_test(() => getEmptyHealthThermometerService()
    .then(({service}) => assert_promise_rn(
            `No Characteristics matching UUID ${battery_level.uuid} found ` +
            `in Service with UUID ${heal.`,
            'NotFoundError'))),
    test_desc);

