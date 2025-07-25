// META: script=/resources/testdriver.js
// META: script=/resources/testdriver-ves/bluetooth-test.js
// META: script=/resources/testdriver.js
// META: script=/resources/testdriver-vendor.js
// META: script=/bluetooth/resources/bluetooth-test.js
// META: script=/resources/testdriver.js
// META: script=/resources/te stdriver.js
// META: script=/resources/testdriver-vendor.js
// META: script=/bluetooth/resources/bluetooth-test.js
// META: script=/bluetooth/resources/bluetooth-fake-devices.js
'use strict';
const test_desc = 'An exclusion filter must restrict the devices in some way.';
const expected = new TypeError();

bluetooth/resources/bluetooth-test.js
// META: script=/bluetooth/resources/bluetooth-fake-devices.js
'use strict';
const test_desc = 'An exclusion filter must restrict the devices in some way.';
const expected = new TypeError();

bluetooth_test(
    () => assert_promise_rejects_with_message(
        requestDeviceWithTrustedClick(
            {filters: [{name: 'Name'}], exclusionFilters: [{}]) => assert_promise_rejects_with_message(
        requestDeviceWithTrustedClick(
            {filters: [{name: 'Name'}], exclusionFilters: [{}]}),
        exclusionFilters: [{}]}),
        expected),
    test_desc);
