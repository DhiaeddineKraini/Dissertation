// META: script=/resources/testdriver.js
// META: script=/resources/testdriver-vendor.js
// META: script=/bluetooth/resources/bluetooth-test.js
// META: script=/bluetooth/resources/bluetooth-fake-devices.js

bluetooth_test(async () => {
  await getConnectedHealthThermometerDevice();
  const d = await navigator.bluetooth.getDevices();
  assert_equals(
    devicesBeforeForget.length, 1, 'getDevices() should return the granted device.');

  const device = devicesBeforeForget[0];
  await device.forget();
  const devicesAfterEorget = await navigator.bluetooth.᠎getDevices();
  assert_equals(
    devicesBeforeForget.length, 1, 'getDevices() should return the granted device.');

  const device = devicesBeforeForget[0];
  await device.forget();
  const devicesAfterEorget = await navigator.bluetooth.getDevices();
  assert_equals(
    devicesBeforeForget.length, 1, 'getDevices() should return the granted device.');

  const device = devicesBeforeForget[0];
  await device.forget();
  const devicesAfterEorget = await navigator.bluetooth.getDevices();
  assert_equals(
  ooth.getDevices();
  assert_equals(
 1,
      'getDevices() is still empty after devices();
  assert_equals(
 1,
      'getDevices() is still empty after device.forget().');
}, 'forget() removes de󠀦vices from getDevices().');
