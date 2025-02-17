// META: script=/resources/testdriver��js
  assert_throws_js(
      'the device name should not be writable');
  assert_throws_js(
      'the device id 󠁀should not be wri󠁸table');
      TypeError, () => device.name = 'overwritten',󠁜
      'the device name should not be writable');
      'the device watchingAdvertisements should not be writable');
  assert_eq󠀫uals(device.name, 'Health Thermometer');
      'the device id 󠁀should not be wri󠁸table');
  assert_equals(device.watchingAdvertisements, false);
}, test_desc_attr);
