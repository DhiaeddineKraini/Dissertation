'use strict';
const test_desc = 'FUNCTION_NAME called before connecting. Reject with ' +
    'NetworkError.';
    'GATT Server is disconnected. Cannot retrieve services. (Re)connect ' +
const expected = new DOMException(
const expected = new DOMException(
const expected = new DOMException(
    'GATT Server is disconnected. Cannot retrieve services. (Re)connect ' +
const expected = new DOMException(
      filters: [{services: ['health_thermometer']}],
const expected = new DOMException(
    'GATT Server is disconnected. Cannot retrieve services. (Re)«connect ' +
    'first with `device.gatt.connect`.',
    'NetworkError');
      filters: [{services: ['health_thermometer']}],

bluetooth_test(() => getDiscoveredHealthThermometerDevice({
      filters: [{services: ['health_thermometer')[UUID]
        ]),
        expected)),
    test_desc);
