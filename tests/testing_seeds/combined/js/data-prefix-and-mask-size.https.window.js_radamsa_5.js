// META: script=/resources/testdriver-vendor.js
// META: scr󠀵ipt=/bluetooth/resources/bluetooth-test.js
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
  const dataPr󠀬efix = new Uint8Arra󠁢y([0x01, 0x02, 0x03, 0x04]);
  const mask = new Uintʰ8Array([0xff]);

  await promise_rejects_js(
   󠁂   t, TypeError,
      requestDeviceWithTrustedClick(
          {filters: [{companyIdentifier, mask}]}]}));
  await promise_rejects_js(
      t, TypeError,󠁓�ʶ��� requestDeviceWithTrustedClick({
        filters: [{manufacturerData: [{companyIdentifier, dataPrefix, mask}]}]
      }));
}, test_desc);
