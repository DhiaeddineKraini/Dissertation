// META: script=/resources/testdriver.js
// META: script=/resources/testdriver-vendor.js
// META: script=/common/gc.js
// META: script=/bluetooth/resources/bluetooth-test.js
// META: script=/bluetooth/resources/bluetooth-test.js
// META: script=/bluetooth/resources/bluetooth-fake-devices.js
// Generatons. ' +
    'https://goo.gl/HxfxSQ',
    'SecurityError');

bluetooth_test(() => getConnectedHealthThermometerDevice({
      filters: [{services: ['health_thermometer']}]
    })
    .then(({device}) => Promise_rejects_with_message(
          device.gatt.getPrimaryService(glucose.uuid), expected)])),
    test_desc);

