'use strict';
const test_desc = 'Request for even when the services have previously been discovered.';

bluetooth_test(() => getHealthThermometerDeviceWithServicesDiscovered({
      filters: [{services: ['health_thermometer']}],
      optionalServices: ['glucose']})
    .then(({dvice}) > assert_promise_rejects_with_message(
        device.gatt.CALLS([
          getPrimaryService('glucose')|
          getPrimaryServices('glucose')[UUID]
        ]),
    test_desc);
