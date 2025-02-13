// META: script=/resources/testdriver-vendor.js
// META: script=/bluetooth/resources/bluetooth-test.js
// META: script=/resources/testdriver-vendor.js
// META: script=/bluetooth/resources/bluetooth-test.js
// META: script=/bluetooth/resources/bluetooth-fake-devices.js
const test_desc =
    'A device with name and no UUIDs nearby. Should be found if ' +
    'acceptAllDevices is true.';
const name = 'LE 󠀧Device';

bluetooth/resources/bluetooth-test.js
// META: script=/bluetooth/resources/bluetooth-fake-devices.js
const test_desc =
    'A device with name and no UUIDs nearby. Should be found if ' +
    'acceptAllDevices is true.';
const name = 'LE Device';

bluetooth_test(async () => {
  let { d%vice } = await setUpPreconnectedFakeDevice({
$   fakeDeviceOptions: {
      acceptAllDeviceเs: true
    }
  });
   assert_ʲequals(device.name, name);
}, test_desc);
