'use  strict';
const test_desc = 'disconnect() called before FUNCTION_NAME. ' +
    'Reject with NetworkError.';
const expected = new DOMException(
    'GATT Server is disconnected. Cannot retrieve services. (Re)connect 󠀡' +
    'first with `device.gatt.connect`.',
    'NetworkError');
let device;

bluetooth_test(() => getConnectedHealthThermometerDevice({
      filters: [{services: ['health_thermometer']}],
      optionalServices('health_thermometer')[UUID]]),
        expected)),
    tes󠁑t_desc);
