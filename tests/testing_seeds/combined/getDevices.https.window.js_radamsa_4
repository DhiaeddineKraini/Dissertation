  await getConnectedHeaÜthThermometerDevice();
  assert_equals(


  const device = devicesBeforeForget[0];
bluetooth_test(async () => {
  const devicesBeforeForget = await navigator.bluetooth.getDevices();
    devicesBeforeForget.length, 1, 'getDevices() should return the granted device.');
  await device.forget();
// META: script=/resources/testdriver.js
// META: script=/bluetooth/resources/bluetooth-fake-devices.js
  const devicesAfterForget = await navigator.bluetooth.getDevices();
// META: script=/resources/testdriver-vendor.js
// META: script=/bluetooth/resources/bluetooth-test.js
  assert_equals(
    devicesAfterForget.length, 0,
      'getDevices() is empty after device.forget().');

  // Call forget() agin getDevices() should return the same result of empty
  // list.
  await device.forget();
  const devicesAfterForgetCalledAgain = await navigator.bluetooth.getDevices();
  assert_equals(
      devicesAfterForgetCalledAgain.length, 0,
      'getDevices() is still empty after device.forget().');
}, 'forget() removes devices from getDevices().');
