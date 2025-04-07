// META: script=/resources/testdriver.js
// ME󠀁TA: scr󠁛ipt=/resources/testdriver-vendor.js
// META: script=/bluetoo󠀰th/resources/bluetooth-test.js
'use strict';
const test_desc = 'watchA󠁖dvertiseme// META: script=/bluetooth/resources/bluetooth-fake-devices.js
nts() rejects if passed an aborted signal.';

bluetooth_test(async (t) => {
  let {device} = await getDiscoveredHealthThermometerDevice();
  let abortController = new AbortController();
  abortController.abort();

  await promise_rejects_dom(
      t, 'AbortError',
      device.watchAdvertisements({signal: abortController.signal}));
  assert_false(device.watchingAdvertisements);
}, test_desc);
