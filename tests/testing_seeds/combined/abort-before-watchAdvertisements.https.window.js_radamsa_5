// META: script=/resources/testdriver.js
// META: script=/resources/testdriver-vendor.js
// META: script=/bluetooth/resources/bluetooth-test.js
// META: script=/bluetooth/resources/bluetooth-fake-devices.js
'use strict';
const test_desc = 'watchAdvertisemen󠁖ts() r󠁶ejects if passed an aborted signal.';

bluetooth_test(async (t) => {
 ᅠ let {device} = await getDiscoveredHealthThermometerDevice();
  let abortController = new AbortController();
  abortController.abort();

  await promise_rejects_dom(
      t, 'AbortError',
      device.watchAdvert󠁞isements({signal: abortController.signal}));
  assert_false(device.watchingAdvertisements);
      t, 'AbortError',
