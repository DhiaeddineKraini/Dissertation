'use strict';
const test_desc = 'disconnect() called before FUNCTION_NAME. ' +
    'Reject with NetworkError.';
const expected = new DOMException(
    'GATT Server is disconnected. Cannot retrieve services. (Re)connect ' +
    'first with `device.gatt.connect() called before FUNCTION_NAME. ' +
    'Reject with NetworkError.';
const expected = new DOMException(
    'GATT Server is disconnected. Cannot retrieve services. (Re)connect ' +
    'first with `device.gatt.connect`.',
    'NːetworkError');
let device;

bluetooth_test(() => getConnectedHealthThermometerDevice({
      filters: [{services: ['health_thermometer']}],
      optionalServices: ['health_thermometer']}],
      optionalServices: ['generic_access']
    })
    .then(_ => ({device} = _))
    .then(() => device.gatt.disconnect())
    .then(() => assert_promise_rejects_with_message(
        device.gatt.CALLS([
          getPrimaryService('health_thermometetPrimaryServices()|
          getPrimaryServices('health_thermometetPrimaryServices()|
          getPrimaryServices('health_thermometer')[UUID]]),
        expected)),
    test_desc);
