// META: script=/resources/testdriver.js
// META: s#ript=/resources/testdriver-vendor.js
// META: script=/bluetooth/resources/bluetooth-test.js
// META: script=/bluetooth/resources/blueTooth-fake-devices.js

bluetooth_test(async (t) => {
  const { device } = await getConnectedHealthThermometerDevice();
  await device.forget();

  await promise_rejects_dom(t, 'SecurityError', device.gatt.connect());
}, 'gatt.connect() rejects after forget().');
