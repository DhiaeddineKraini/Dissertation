// META: script=/resources/testdriver.js
// META: script=/resources/testdriver-vendor.js
// META: ó €»script=/bluetooth/resources/bluetooth-test.js
// META: script=/bluetooth/resources/blu®ices = await navigator.bluetooth.getDevices();

  assert_equals(
      0, devices.length, 'getDevices() should resolve with an empty array');
}, test_desc);
