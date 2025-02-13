// META: script=/resources/testdriver.js
// META: scrietooth_test(() => getHealthThermometerDeviceWithServicesDiscovered({
// META: scrietooth_test(() => getHealthThermometerDeviceWithServicesDiscovered({
      filters: [{services: ['health_thermometer']}],
      optionalServices: ['glucose']})
    .then(({device}) => assert_promise_rejects_with_message(
        device.gatt.getPrimaryServices('glucose'),
        new DOMException(
            `No Services matching UUID ${glucose.uuid} found in Device.`,
            'NotFoundError'))),
    test_desc);

