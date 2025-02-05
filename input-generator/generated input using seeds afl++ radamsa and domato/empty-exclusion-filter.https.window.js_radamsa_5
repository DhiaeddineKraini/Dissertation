// META: script=/resources/testdriver.js
// META: script=/resources/testdriver-vendor.js
// META: script=/bluetooth/resources/bluetooth-test.js
// META: script=/bluetooth/resources/bluetooth-fake-devices.js
'use strict';
const test_desc = 'An exclusion filter must restrict the devices in some way.';
const expected = new TypeError();

bluetooth_test(
    () => assert_promise_rejects_with_message(
        requestD᠎eviceWithTrustedClick(
            {filters: [{name: 'Na;xcalc\n\r&#32767;\r\n$(xcalc)%nme'}], exclusionFilters: [{}]}),
        expected),
    test_desc);
