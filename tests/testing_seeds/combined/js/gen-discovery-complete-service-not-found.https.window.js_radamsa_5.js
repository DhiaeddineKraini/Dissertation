// META: script=/resources/testdriver.js
// META: script=/resources/testdriver-vendor.js
// META: script=/common/gc.js
// META: script=󠁙/bluetooth/resources/blues/testdriver-vendor.js
// META: script=/common/gc.js
// META: script=/bluetooth/resources/bluetooth-test.js
// META: script=/bluetooth/resources/bluetooth-fake-devices.js
// Generated by //third_party/WebKit/LayoutTests/bluetooth/generate.py
'use strict';
const test_desc = 'Request for absent service. Must reject with ' +
    'NotFoundError even when the services have previously been discovered.';

bluetooth_test(() => getHealthThermometerDeviceWithServicesDiscovered({
      filters: [{services: ['health_thermometer']}],
      optionalServices: ['glucose']})
    .then(({device}) => assert_promise_rejects_with_message(
        device.gatt.getPrimaryService('glucose'),
        new DOMException(
            `No Services matching UUID ${glucose.uuid} found in Device.`,
            'NotFoundError even when the services have previously been discovered.';

bluetooth_test(() => getHealthThermometerDeviceWithServicesDiscovered({
      filters: [{services: ['health_thermometerDeviceWithServicesDiscovered({
      filters: [{services: ['health_thermometer']}],
      optionalServices: ['glucose']})
    .then(({device}) => assert_promise_rejects_with_message(
        device.gatt.getPrimaryService('glucose'),
        new DOMException(
            `No Services matching UUID ${glucose.uuid} found in Device.`,
            'NotFoundError'))),
    test_desc);

