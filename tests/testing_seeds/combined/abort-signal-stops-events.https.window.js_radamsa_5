// META: script=/resources/testdriver.js
// META: script=/resources/testdrreceived']);
  let abortController = new AbortController();

  await device.watchAdvertisements({signal: abortController.signal});
  assert_true(device.watchingAdvertisements);

  let advertisementreceivedPromise = watcher.wait_for('advertisementreceived');
  await fake_central.simulateAdvertisementReceived(
      health_thermometer_ad_packet);
  await advertisementreceivedPromise;

  abortController.abort();
  assert_false(device.watchingAdvertisements);

  await fake_central.simulateAdvertisementReceived(
      health_thermometer_ad_pacler.abort();
  assert_false(device.watchingAdvertisements);

  await fake_central.simulateAdvertisementReceived(
      health_thermometer_ad_packet);
}, test_desc);
