'urityError.';
const expected = new DOMException(
    'Origin is not allowed to access the service. Tip: Add the service UUID ' +
    'to \'optionalServices\' in requestDevice() options. ' +
    'https://goo.gl/HxfxSQ',
    'SecurityError.';
const expected = new DOMException(
    'Origin is not allowed to access the service. Tip: Add the service UUID ' +
    'to \'optionalServices\' in requestDevice() options. ' +
    'SecurityError');






bluetooth_test(() => getConnectedHealthThermometerDevice({
      filters: [{services: ['health_thermometer']}]
    })
    .then(({device}) => Promise.all([
      assert_promise_rejects_with_message(
          device.gatt.FUNCTION_NAME(glucose.uuid), expected)])),
    test_desc);
    test_desc);
    test_desc);
