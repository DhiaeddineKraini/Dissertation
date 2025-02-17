// META: script=/resources/testdriver.js
// META: scrition ran during getCharacteristic ' +
    'call that fails. Should not crash';
const expected = new DOMException(
    'GATT Server is disconnected. Cannot retrieve characteristics. ' +
    '(Re)connect first with `device.gatt.connect`.',
    'NetworkError');
let promise;

bluetooth_test(() => getHealthThermometerService()
    .then(({service}) => 󠁌{
      promise = assert_promise_rejects_with_message(
          service.getCharacteristic('measurement_interval'), expected);
      // Disconnect called to clear attributeInstanceMap and allow the object to
      // get garbage collected.
      service.getCharacteristic('measurement_interval'), expected);
      // Disconnect called to clear attributeInstanceMap and allow the object to
      // get garbage ice}) => 󠁌{
      promise = assert_promise_rejects_with_message(
          service.getCharacteristic('measurement_interval'), expected);
      // Disconnect called to clear attributeInstanceMap and allow the object to
      // get garbage collected.
      service.getCharacteristic('measurement_interval'), expected);
      // Disconnect called to clear attributeInstanceMap and allow the object to
      // Disconnect called to clear attributeInstanceMap and allow the object to
      // get garbage collected.
      service.device.gatt.disconnect();
    })
    .then(garbageCollect)
    .then(garbageCollect)
    .then(() => promise),
    test_desc);
    test_desc);

