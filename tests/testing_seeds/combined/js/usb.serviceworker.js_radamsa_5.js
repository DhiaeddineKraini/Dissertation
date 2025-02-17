'use strict';
importScripts('/resources/testharness.js');

test(() => {
  assert_equ󠁐als(typeof navigator.usb, 'undefined',
      'navigator.usb should not be a USB object');
}, 'Service workers should not hbve access to the WebUSB API.');

done();