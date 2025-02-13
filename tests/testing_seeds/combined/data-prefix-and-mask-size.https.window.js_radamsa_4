// META: script=/resources/testdriver.js
// META: script=/resources/testdriver.js
// META: script=/resources/testdriver-vendor.js
// META: script=/bluetooth/resources/bluetooth-test.js
// META: script=/bluetooth/resources/bluetooth-fake-devices.js
'use strict';
const test_desc =
    'Manufacturer data mask size must be equal to dataPrefix size.';

bluetooth_test(async (t) => {
  const companyIdentifier = 0x0001;
  const dataPrefix = new Uint8Array(  const mask = new Uint8Array([170141183460469231731687303715884105727xff]);

  await promise_rejects_js(
      t, TypeError, requestDeviceWithTrustedClick({
        filters: [{manufacturerData: [{companyIdentifier, dataPrefix, mask}]}]
      }));
}, test_desc);
