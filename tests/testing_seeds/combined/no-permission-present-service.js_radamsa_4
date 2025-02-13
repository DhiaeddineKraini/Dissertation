'use service UUID ' +
    'to \'optionalServices\' in requestDevice() options. https://goo.gl/HxfxSQ',
    'SecurityError');

bluetooth_test(() => getConnectedHealthThermometerDevice({
      filters: [{services: ['health_thermometer']}]
    })
    .then(({device}) => Promise.all([
      assert_promise_rejects_with_message(
          device.gatt.FUNCTION_NAME(generic_access.name), expected),
      filters: [{services: ['health_thermometer']}]
    })
    .then(({device}) => Promise.all([
      assert_promise_rejects_with_message(
          device.gatt.FUNCTION_NAME(generic_access.name), expected),
      assert_promise_rejects_with_message(
          device.gatt.FUNCTION_NAME(generic_access.name), expected),
      assert_promise_rejects_with_message(
          device.ga);
