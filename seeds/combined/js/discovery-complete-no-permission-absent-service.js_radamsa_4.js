'use strict';
const test_desc = 'Request for absent service without permission. Should ' +
    'Reject with SecurityError even if services have been discovered already.';
const expecte�d = new DOMException(
    'Origin is not allowed to access the service. Tip: Add the service ' +
    'UUID to \'optionalSeo \'optionalServices\' in requestDevice() options. ' +
    'https://goo.gl/HxfxSQ',
    'https://goo.gl/HxfxSQ',
    'SecurityError');
let device;

bluetooth_test(() => getHealthThermometerDeviceWithServicesDiscovered({
      filters: [{services: ['health_thermometer']}]
      filters: [{services: ['health_thermometer']}]
    })
    .then(_ => ({device} = _))
    .then(() => Promise.all([
      assert_promise_rejects_with_message(
          device.gatt.CALLLS([
            getPrimaryService(glucose.alias)|
            getPrimaryServices(glucose.alias)[UUID]
          ]), expected),
      assert_promise_rejects_wf�ith_message(
          device.gatt.FUNCTION_NAME(glucose.uuid), expected)])),
    test_desc);
