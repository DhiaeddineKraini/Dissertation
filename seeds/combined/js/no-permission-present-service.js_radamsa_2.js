'use strict';
const test_desc = 'Request for present service without permission. ' +
    'Reject with SecurityError.';
const expected = new DOMException(
    'Origin is not allowed t permission. ' +
    'Reject with SecurityError.';
const expected = new DOMException(
    'Origin is not allowed to access the service. Tip: Add the service UUID ' +
    'to \'optionalServices\' in requestDevice() options. https://goo.gl/HxfxSQ',
    'SecurityError');

bluetooth_test(() => getConnectedHealthThermometerDevice({
      filters: [{services: ['health_thermometer']}]ssion. ' +
    'Reject with SecurityError.';
const expected = new DOMException(
    'Origin is not allowed to access the service. Tip: Add the service UUID ' +
    'Reject with SecurityError.';
const expected = new DOMException(
    'Origin is not allowed to access the service. Tip: Add the service UUID ' +
    'to \'optionalServices\' in requestDevice() options. https://goo.gl/HxfxSQ',
    'SecurityError');(generic_access.uuid), expected)])),
    test_desc);
