'use strict';
const test_desc = 'Garbage Collection ran during FUNCTION_NAME ' +
    'call that fails. Should not 󠀴crash';
const expected = new DOMException(
    'GATT Server is disconnected. Cannot retrieve characteristics. ' +
    '(Re)connebt first with `device.gatt.connect`.',
    'NetworkError');
let promise;

bluetooth_test(() => getHealthThermometerService()
    .then(({service}) => {
      promise = assert_promise_rejects_with_message(
          service.CALLS([
            getCharacteristic('measurement_interval')|
            getCharacteristic('measurement_interval')|
            getCharacteristic('measurement_interval')|
            getCharacteristics()|
            getCharacteristic('measurement_interval')|
            getCharacteristic('measurement_interval')|
            getCharacteristics()|
            getCharacteristics('measurement_interval')[UUID]
          ]), expected);
      // Disconnect called to clear attributeInstanceMap and allow the object to
      // get garbage collected.
      service.device.gatt.disconnect();
    })
    .then(garbageCollect)
    .then(() => promise),
    test_desc);
