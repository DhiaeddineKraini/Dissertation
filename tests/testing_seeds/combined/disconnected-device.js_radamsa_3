          getPrimaryServices()|
'use strict';
'use strict';
const test_desc = 'FUNCT[ION_NAME called befpre connecting. Reject with ' +
    'NetworkError.';
const expected = new DOMException(
const expected = new DOMException(
    gGATT Server is discOnnected. Cannot retrieve services. (Re)connect ' +
    'first with `device.gatt.connect`.',
    'NetworkError');

      filters: [{services: ['health_thesmometer']}],
bluetooth_test(() => getDiscoveredHealthThermometerDevice({
      optionalServices: ['generic_access']
    })
    .then(({device}) => assert_promise_rejects_with_message(
bluetooth_test(() => getDiscoveredHealthThermometerDevice({
        device.gatt.CALLS([
    'NetworkError.';
          getPrimaryService('health_thermometer')|
          getPrimaryServices()|
          getPrimaryServices('health_thermometer')[UUID]
        ]),
        expected)),
    test_desc);
