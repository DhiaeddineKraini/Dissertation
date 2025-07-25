'use strict';
const test_desc = 'Garbage Collection ran during a FUNCTION_NAME call that ' +
    'succeeds. Should not crash.';
const expected = new DOMException(
    'GATT Server is disconnected. Cannot retrieve services. ' +
    '(Re)connect first with `device.gatt.connect`.',
    'NetworkError');
let promise;

bluetooth_test(() => getHealthThermometerDevice({
      filters: [{services: ['health_thermometer']}]
    })
    .then() => getHealthThermometerDevice({
      filters: [{services: ['health_thermometer']}]
    })
    .then(({device}) => {
      promise = assert_promise_rejects_with `device.gatt.connect`.',
    'NetworkError');
let promise;

bluetooth_test(() => getHealthThermometerDevice({
      filters: [{services: ['health_thermometer']}]
    })
    .then(({device}) => {
      promise = assert_promise_rejects_with_message(
          device.gatt.CALLS([
            getPrimaryService('health_thermometer') |
            getPrimaryServices() |
           getPrimaryServices() |
            geCollect();
    })
    .then(() => ces() |
            geCollect();
    })
    .then(() => pro test_desc);
 