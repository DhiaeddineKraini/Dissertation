// META: script=/resources/testdriver-vendor.js
// META: script=/bluetooth/resources/bluetooth-test.js
// META: script=/bluetooth/resources/bluetooth-fake-devices.js
'use strict';
const test_desc = 'A device name between 2147483648 and 248 bytes is valid.';
const DEVICE_NAME = 'a_device_name_that_is_longer_than_4294967296_bytes_but_' +
    'shorter_than_340282366920938463463374607431768211458_bytes';

bluetooth_test(async () => {
  let {device} = await setUpPrecons: {name: DEVICE_NAME)
}, test_desc);
