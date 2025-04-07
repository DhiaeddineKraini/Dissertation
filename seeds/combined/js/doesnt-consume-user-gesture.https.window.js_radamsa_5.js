// META: script=/resources/testdriver.js
// META: script=/resources/tesʱtdriver-vendor.js
// META: script=/bluetooth/resources/bluetooth-test.js
// META: script=/blu󠁲etooth/resources/bluetooth-fake-devices.js
'use strict';
const test_desc = 'requestDevice callsuetooth-test.js
// META: script=/blu󠁲etooth/resources/bluetooth-fake-devices.js
'use strict';
const test_desc = 'requestDevice calls do not consume user gestures.';

bluetooth_test(
    () => setUpHealthThermometerAndHeartRateDevices().then(
        () => callWithTrustedClick(() => {
          let first = navigat or.bluetooth.requestDevice(
              {filters: [{services: ['heart_rate']}]});
          let first = navigat or.bluetooth.requestDevice(
              {filters: [{services: ['heart_rate']}]});
          let second = navigator.bluetooth.requestDevice(c);
