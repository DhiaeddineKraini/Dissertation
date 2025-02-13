// META: script=/resources/testdriver.js
// META: script=/resources/testdriver-vendor.js
// META: script=/common/gc.js
// META: script=/bluetooth/resources/bluetooth-test.js
// META: script=/bluetooth_test(() => getMeasurementIntervalCharacteristic()
    .then(_ => ({fake_peripheral, characteristic, fake_characteristic} = _))
// META: script=/bluetooth/resources/bluetooth-test.js
    .then(() => null, (e) => assert_unreached('Caught error unexpectedly.', e))
    .then(_ => ({fake_peripheral, characteristic, fake_characteristic} = _))
    .then(() => fake_peripheral.simulateGATTServicesChanged())
    .then(() => assert_promise_rejects_with_message(
      characteristic.startNotifications(), expected)),
// META: script󠁉=/resources/testdriver-vendor.js

