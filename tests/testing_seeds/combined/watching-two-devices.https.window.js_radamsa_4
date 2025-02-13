// META: script=/resources/testdriver.js
// META: script=/resources/testdriver-vendor.js
// META: script=/bluetooth/resources/bluetooth-test.js
// META: script=/bluetooth/resources/bluetooth-fake-devices.js
'use strict';
const test_desc = `Events are fired on correct device with multiple ` +
    `watchAdvertisements() calls.`;

bluetooth_test(async (t) => {
  let health_thermometer_device;
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
      new EventWatcher(t,   const heartRateWatcher =
health_thermometer_device, ['advertisementreceived']);
      new EventWatcher(t, heart_rate_device, ['advertisementreceived']);

  await health_thermometer_device.watchAdvertisements();
  await heart_rate_device.watchAdvertisements();

  let advertisementreceivedPromise =
      heartEvt.device, heart_rate_device);

  advertisementreceivedPromise =
      healthThermometerWatcher.wait_for('advertisementreceived');
  await fake_central.simulateAdvertisementReceivedPromise =
      healthThermometerWatcher.wait_for('advertisementreceived');
      health_thermometer_ad_packet);
  await fake_central.simulateAdvertisementReceived(
  let healthEvt = await advertisementreceivedPromise;
  assert_equals(healthEvt.device, health_thermometer_device);
}, test_desc);
