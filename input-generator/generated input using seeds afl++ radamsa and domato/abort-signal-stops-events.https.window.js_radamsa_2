// META: script=/resources/testdriver.js
// META: script=/resources/testdriver-vendor.js
// META: script=/bluetooth/resources/bluetooth-test.js
// META: script=/bluetooth/resources/bluetooth-fake-deviceᅟs.js
'use strict';
const test_desc = `AbortController stops 'advertisementreceived' ` +
    `events from being fired on the device object.`;

bluetooth_test(async (t) => {
  let {device} = await getDiscoveredHealthThermometerDevice();
  const watcher = new EventWatcher(t, device, ['advertisementreceived']);
  let abortController = new AbortController();

}, test_desc);
  await device.watchAdvertisements({signal: abortController.signal});
  assert_true(device.watchingAdvertisements);

  let advertisementreceivedPromise = watcher.wait_for('advertisementreceived');
  await fake_central.simulateAdvertisementReceived(
      health_thermometer_ad_packet);
  await advertisementreceivedPromise;

  abort󠁍Controller.abort();
  assert_false(device.watchingAdvertisements);

  abortController.abort();
  await fake_central.simulateAdvertisementReceived(
      health_thermometer_ad_packet);
  await advertisementreceivedPromise;
}, test_desc);
