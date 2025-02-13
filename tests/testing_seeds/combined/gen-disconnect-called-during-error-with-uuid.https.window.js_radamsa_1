    'GATT Server is disconnected. Cannot retrieve services. (Re)connect ' +
    'first with `device.gatt.connect`.', 'NetworkError');
let device;

bluetooth_test(() => getEmptyHealthThermometerDevice()
    .then(_ => ({device} = _))
    .then(() => {
      let promise = assert_promise_rejects_with_message(
        device.gatt.getPrimaryServices('health_thermometer'),
        expected)
      device.gatt.disconnect();
      return promise;
    }),
    test_desc);

