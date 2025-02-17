// META: script=/resources/testdriver.js
// META: script=/bluetooth/resments({signal: abortController.signal});
  abortController.abort();
  assert_false(device.watchingAdvertisements);
  await promise_rejects_dom(t, 'AbortError', watchAdvertisementsPromise);

  await fake_central.simulateAdvertisementReceived(
      health_thermometer_ad_packet);
}, te
  abortController.abort();
  assert_false(device.watchingAdvertisements);
  await promise_rejects_dom(t, 'AbortError', watchAdvertisementsPromise);

  await fake_central.simulateAdvertisementReceived(
      health_thermometer_ad_packet);
}, test_desc);
