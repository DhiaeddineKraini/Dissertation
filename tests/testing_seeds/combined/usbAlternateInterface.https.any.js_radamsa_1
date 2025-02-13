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
        usbInterface, usbInterface.alternates.length);
    assert_unreached(
        'USBAlternateInterface should reject an invalid alternate setting');
  } catch (error) {
    assert_equals(error.name, 'RangeError');
  }
}, 'Constructing a USBAlternateInterface with an invalid alternate setting ' +
    'throws a range error.');
