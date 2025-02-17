// META: scriparty/WebKit/LayoutTests/bluetooth/generate.py
'use strict';
const test_desc = 'Request for absent service without permission. Should ' +
    'Reject with SecurityError even if services have been discovered already.';
const expected = new DOMException(
    'Origin is not allowed to access the service. Tip: Add then(() => Promise.all([
      assert_promise_rejects_with_message(
          device.gatt.getPrimaryServicesûî(ÿ(glucose.uuid), expected)])),
    test_desc);

