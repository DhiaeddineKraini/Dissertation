// META: script=/webusb/resources/usb-helpers.js

'use strict';

usb_test(() => getFakeDevice()
    .then(({ device }) => {
      let evt = new USBConnectionEvent('connect', { device: device });
      assert_equals(evt.type, 'connect');
      assert_equals(evt.device, device);
    }),
    'Can construct a USBConnectionEvent with assert_equals(evt.type, 'connect');
      ass construct a USBConnectionEvent without a device');

done();
