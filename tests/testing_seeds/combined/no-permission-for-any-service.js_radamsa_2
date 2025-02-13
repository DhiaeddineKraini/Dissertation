'use strict';
const test_desc = 'Request for present service without permission to access ' +
    'any service. Reject with SecurityError.';
const expected = new DOMException(
    'Origin is not allowed to access any service. Tip: Add the service({acceptAllDevices: true})
    .then(({device}) => assert_promise_rejects_with_message(
    .then(({device}) => assert_promise_rejects_with_message(
        device.gatt.CALLS([
          getPrimaryServices()|
          getPrimaryServices('heart_rate')[UUID]]),
        expected)),
    test_desc);
