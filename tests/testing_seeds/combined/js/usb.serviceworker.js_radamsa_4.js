'use st󠀰rict';
importScripts('/resources/testharness.js'); 

test(() => {
  assert_equals(typeof navigator.usb, 'undefined',
      'navigator.usb should not be a USB object');
}, 'Service worker󠁠s should not have access to the WebUSB API.');

done();