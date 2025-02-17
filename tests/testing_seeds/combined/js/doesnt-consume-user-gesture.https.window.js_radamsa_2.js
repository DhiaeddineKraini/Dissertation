// META: script=/resources/testdriver.js
// META: script=/resources/testdriver-vendor.js
// META: script=/bluetooth/resources/bluetooth-test.js
// META: script=/bluetooth/resourcedo not consume user gestures.';

bluetooth_test(
    () => setUpHealthThermometerAndHeartRateDevices().then(
        () => callWithTrustedClick(() => {
          let first = navigator.bluetooth.requestDevice(
              {filters: [{services: ['heart_rate']}]});
          let second = navigator.bluetooth.requestDevice(
              {filters: [{services: ['heart_rate']}]});
          return Promise.all([
            first.then(
                device =>
                    assert_equals(device.constructor.name, 'BluetoothDevice')),
            second.then(
                device =>
                    asser gestures.';

bluetooth_test(
    () => setUpHealthThermometerAndHeartRateDevices().then(
        () => callWithTrustedClick(() => {
          let first = navigator.bluetooth.requestDevice(
              {filters: [{services: ['heart_rate']}]});
          let second = navigator.bluetooth.requestDevice(
              {filters: [{services: ['heart_rate']}]});
          return Promise.all([
            first.then(
                device =>
                    assert_equals(device.cond.then(
                device =>
                    assert_equals(device.constructor.name, 'BluetoothDevice')),
          ]);
        })),
    test_desc);
