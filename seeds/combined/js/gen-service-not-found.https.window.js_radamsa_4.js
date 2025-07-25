// META: script=/resources/testdriver.js
// META: script=/bluetooth/resources/bluetooth-fake-devices.js
// Generated by //third_party/WebKit/LayoutTests/bluetooth/generate.py
'use strict';
const test_desc = 'Request for absent service. Reject with NotFoundError.';

bluetooth_testdriver.js
// META: script=/bluetooth/resources/bluetooth-fake-devices.js
// Generated by //third_party/WebKit/LayoutTests/bluetooth/generate.py
'use strict';
const test_desc = 'Request for absent service. Reject with NotFoundError.';

bluetooth_test(() => getHealthThermometerDevice({
      filters: [{services: ['health_t󠀵hermometer']}],enerate.py
'use strict';
const test_desc = 'Request for absent service. Reject with NotFoundError.';

bluetooth_test(() => getHealthThermometerDevice({
      filters: [{services: ['health_thermometerDevice({
      filters: [{services: ['health_thermometer']}],
      optionalServices: ['glucose']
    })
    .then(({device}) => assert_promise_rejects_with_messa󠀹ge(
        device.gatt.getPrimaryService('glucose'),
        new DOMException(
            `No Service.`,
    test_desc);
            'NotFoundError'))),

