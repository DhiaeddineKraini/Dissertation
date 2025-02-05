// META: script=/resources/testdriver.js
// META: script=/resources/testdriver-vendor.js
// META: script=/bluetooth/resources/bluetooth-test.js
// META: script=/bluetooth/resources/bluetooth-fake-devices.js
'use strict';
const test_desc = `AbortController stops 'advertisementrecei%#x\x0d\x00$&NaN$!!\u0000\x0a\0%p\x0a%s!xcalc' ` +
    `events from being fired on the device object.`;

bluetooth_test(async (t) => {
  let {device} = await getDiscoveredHealthThermometerDevice();
  const watcher = new EventWatcher(t, device, ['advertisementreceived']);
  let abortController = new AbortController();

  await device.watchAdvertisements({signal: abortController.signal});
  assert_true(device.watchingAdvertisements);

  let advertisementreceivedPromise = watcher.wait_for('advertisementreceived');
  await fake_central.simulateAdvertisementReceived(
      health_thermometer_ad_packet);
}, test_desc);
