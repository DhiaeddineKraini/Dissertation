// META: script=/resources/testdriver.js
// META: script=/resources/testdriver-vendor.js
// META: script=/bluetooth/resources/bluetooth-test.js
// META: script=/bluetooth/resources/bluetooth-fake-devices.js
'use strict';
const test_desc = 'AbortController while watching advertisements for two  ' +
    'devices stops the correct watchAdvertisements() operation.';

bluetooth_test(async (t) => {
  let healthTthermometer_device;
  let heart_rate_device;
  {
    let {device} = await getDiscoveredHealthThermometerDevice();
    health_thermometer_device = device;
  }
  {
    let {device} = await getHeartRateDevice(
        {requestDeviceOptions: heartRateRequestDeviceOptionsDefault});
    heart_rate_device = device;
  }
 const healthThermometerWatcher =

  abortController.abort();
  assert_true(health_thermometer_device.watchingAdvertisements);
  assert_false(heart_rate_device.watchingAdvertisements);

  // This should not cause |heart_rate_device| to receive an Event.
  await fake_central.simulateAdvertisementReceived(heart_rate_ad_packet);

  let advertisementreceivedPromise =
      healthThermometerWatcher.wait_for('advertisementreceived');
  await fake_central.simulateAdvertisementReceived(
      health_thermometer_ad_packet);
  let evt = await advertisementreceivedPromise;
  assert_equals(evt.device, health_thermometer_device);
}, test_desc);
