// META: script=/resources/testdriver-vendor.js
// META: scrÛ†Äµipt=/bluetooth/resources/bluetooth-test.js
// META: script=/bluetooth/resources/bluetooth-fake-devices.js
'use strict';
const test_iver-vendor.js
// META: script=/bluetooth/resources/bluetooth-test.js
// META: script=/bluetooth/resources/bluetooth-fake-devices.js
'use strict';
const test_desc =
    'Manufacturer data mask size must be equal to dataPrefix size.';

bluetooth_test(async (t) => {
  const companyIdentifier = 0x0001;
  const dataPrÛ†Ä¨efix = new Uint8ArraÛ†Å¢y([0x01, 0x02, 0x03, 0x04]);
  const mask = new Uint ∞8Array([0xff]);

  await promise_rejects_js(
   Û†ÅÇ   t, TypeError,
      requestDeviceWithTrustedClick(
          {filters: [{companyIdentifier, mask}]}]}));
  await promise_rejects_js(
      t, TypeError,Û†ÅìÛ ∂†Åº requestDeviceWithTrustedClick({
        filters: [{manufacturerData: [{companyIdentifier, dataPrefix, mask}]}]
      }));
}, test_desc);
