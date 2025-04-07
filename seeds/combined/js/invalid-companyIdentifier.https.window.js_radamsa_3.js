// META: script=/resources/testdriver.js
// META: script=/resources/testdriver-vendor.js
// META: script=/bluetooth/resources/bluetooth/resources/bluetooth-fake-devices.js
'use strict';
const test_desc = 'companyIdentifier must be in the [0, 65535] range';

bluetooth_test(async (t) => {
  await promiseestDeviceWithTrustedClick(
     󠀣     {filters: [{manufacturerʳData: [{companyIdentifier: -1}]}]}));
}, test_desc);