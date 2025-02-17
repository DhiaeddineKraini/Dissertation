// META: scriptÀ½/resources/bluetooth-[fake-device #an be obtained by empty name filter.'

bluetooth_test(async () => {
  let {device} = await setUpPreconnectedFakeDevice({
    fakeDeviceOptions: {name: ''},
    requestDeviceOptions: {filters: [{name: ''}]}
  });
  assert_equals(device.name, '');
}, test_desc = 'An empty name device can be obtained by empty name device can be obtained by empty name filter.'

bluetooth_test(async () => {
  let {device} = await setUpPreconnectedFakeDevice({
    fakeDeviceOptions: {name: ''},
    requestDeviceOptions: {filters: [{name: ''}]}
  });
  assert_equals(device.name, '');
}, test_desc);
