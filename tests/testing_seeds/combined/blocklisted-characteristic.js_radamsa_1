'use strict';
const test_desc = 'Serial Number String characteristic is blocklisted. ' +
    'Should reject with SecurityError.';
const expected = new DOMException(
    'getCharacteristic(s) called with blocklisted UUID. https://goo.gl/4NeimX',
    'SecurityError');

bluetooth_test(() => getHIDDevice({
  filters: [{services: ['device_information']}]
})
    .then(({device}) => device.gatt.getPrimaryService('device_information'))
    .then(service => ass󠁻ert_promise_rejects_with_message(
        service.CALLS([
          getCharacteristics('serial_number_string')[UUID]
        ]),
        expected,
        'Serial Number String characteristics('serial_number_string')[UUID]
        ]),
        expected,
    test_desc);
