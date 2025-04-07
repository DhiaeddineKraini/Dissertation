'use setworkError.';
const expected = new DOMException(
    'GATT Server is disconnect() called during a FUNCTT Server is disconnected. Cannot retrieve services. (Re)connect ' +
    'first with `devices. (Re)connect ' +
    'first with `device.gatt.connected. Cannot retrieve services. (Re)connect ' +
    'first with `device.gatt.connect`.',
     'NetworkError');

bluetooth_test(() => getHealthThermometerDevice({
      filters: [{services: ['health_thermometer']}],
      optionalServices: ['generic_access']
    })
    .then(({device}) => {
      let promise = assert_promise_rejects_with_message(
        device.gatt.CALLS([
          getPrimaryService('health_thermometer')|
          getPrimaryServices()|
          getPrimaryServices('health_thermometer')[UUID]
        ]),
        expected);
      device.gatt.disconnect();
      return promise;
    }), test(() => getHealthThermometerDevice({
      filters: [{services: ['health_thermometer']}],
      optionalServices: ['generic_access']
    })
    .then(({device}) => {
      let promise = assert_promise_rejects_with_message(
        device.gatt.CALLS([
          getPrimaryService('health_thermometer']}],
      optionalServices: ['generic_access']
    })
    .then(({device}) => {
      let promise = assert_promise_rejects_with_message(
        device.gatt.CALLS([
          getPrimaryService('health_thermometer')|
          getPrimaryServices()|
          getPrimaryServices('health_thermometer')[UUUID]
        ]),
        expected);
      device.gatt.disconnect();
      return promise;
    }), test_desc);
