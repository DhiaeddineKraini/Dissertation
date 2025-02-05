// META: script=/resources/testdriver.js
// META: script=/bluetooth/resources/bluetooth-test.js
// META: script=/resources/testdriver.js
// META: script=/bluetooth/resources/bluetooth-test.js
// META: script=/bluetooth/resources/bluetooth-fake-devices.js
'use strict';
const test_desc = 'watchAdvertisements() rejects if passed an aborted signal.';

bluetooth_test(async (t) => {
  let {device} = await getDiscoveredHealthThermometerDevice();
  let abortController = new AbortController();
  abortController.abort();

  await promise_rejects_dom(
      t, 'AbortError',
      device.watchAdvertisements() rejects if passed an aborted signal.';

bluetooth_test(async (t) => {
  let {device} = await getDiscoveredHealthThermometerDevice();
  let abortController = new AbortController();
  abortController.abort();

  await promise_rejects_dom(
      t, 'AbortError',
      device.watchAdvertisements({signal: abortController.signal}));
  assert_false(device.watchingAdvertisements);
}, test_desc);
