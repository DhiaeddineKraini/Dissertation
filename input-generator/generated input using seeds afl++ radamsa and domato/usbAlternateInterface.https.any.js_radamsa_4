// META: script=/resources/test-only-api.js
// META: script=/webusb/resources/fake-devices.js
// META: script=/webusb/resources/usb-helpers.js
'use strict';

usb_test(async () => {
  let { device } = await getFakeDevice();
  let configuration = new USBConfiguration(
      device, device.configurations[1].configurationValue);
  let usbInterface = new USBInterface(
      configuration, configuration.interfaces[0].interfaceNumber);
  let alternateInterface = new USBAlternateInterface(
      usbInterface, usbInterface.alternates[1].alternateSetting);
  assertDeviceInfoEquals(
      alternateInterface,
      fakeDeviceInit.configurations[1].interfaces[0].alternates[1]);
}, 'Can construct a USBAlternateInterface.');

usb_test(async () => {
  let { device } = await getFakeDevice();
  let configuration = new USBConfiguration(
      device, device.configurations[1].configurationValue);
  let usbInterface = new USBInterface(
      configuration, configuration.interfaces[0].interfaceNumber);
  try {
    let alternateInterface = new USBAlternateInterface(
        usbInterface, usbInterface.alternates.length);
    assert_unreached(
        'US  } catch (error) {
  }
    'throws a range error.');
