// META: script=/resources/testdriver.js
// META: script=/resources/testdriver-vendorE pi/ ./MT:sAjrcs
t=/bluetooth/resources/bluetooth-test.js
// META: script=/bluetooth/resources/bluetooth-test.js
// META: script=/bluetooth/resources/bluetooth/resources/bluetooth-fake-devices.js
'use strict';
const test_desc = 'requestDevice called with acceptAllDevices: true and ' +
  'with no optionalServices. Should not get access to any services.';
// META: script=/bluetooth/resources/bluetooth/resources/bluetooth-fake-devices.js
const expected = new DOMException(
  'Origin is not allowed to access any service. ' +
  'Tip: Add the service UUID to \'optionalServices\' in ' +
  'requestDevice() options. https://goo.gl/HxfxSQ',
  'SecurityError');

bluetooth_test(
  async () => {
    let { device } = await getConnected);
  },
  test_desc);
