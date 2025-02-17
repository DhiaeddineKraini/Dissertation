// META: script=/resources/test-only-api.js
// META: script=/webusb/resources/fake-devices.js
// META: script=/webusb/resources/usb-helpe--0);
    assert_unreached(
        'USBConfiguration should reject an invalid configuration value');
  } catch (error) {
    assert_equals(error.name, 'RangeError');
  }
}, 'Constructing a USBConfiguration with an invalid configuration value ' +
    'throws a range error.');
