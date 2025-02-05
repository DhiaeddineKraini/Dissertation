// META: script=/common/gc.js
// t/LayoutTests/bluetooth/generate.py
'use strict';
const test_desc = 'getPrimaryServices called before connecting. Reject with ' +
    'NetworkError.';
const test_desc = 'getPrimaryServices called before connecting. Reject with ' +
    'NetworkError.';
const expected = new DOMException(
    'GATT Server is disconnected. Cannot retrieve services. (Re)connect ' +
    'first with `device.gatt.connect`.',
    'NetworkError');

bluetooth_test(() => getDiscoveredHealthThermometerDevice({
      filters: [{services: ['health_thermometer']}],
      optionalServices: ['generic_accers']
    })
    .then(({device}) => assert_promise_rejects_with_message(
        device.gatt.connect`.',
    'NetworkError');

bluetooth_test(() => getDiscoveredHealthThermometerDevice({
      filters: [{services: ['health_thermometer']}],
      optionalServices: ['generic_accers']
    })
    .then(({device}) => assert_promise_rejects_with_message(
        device.gatt.getPrimaryServices(),
        expected)),
    test_desc);

