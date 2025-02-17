// META: script=/resources/testdriver.js
// META: script=/resources/testdriver-vendor.js
// META: script=/bluetooth/resources/bluetooth-test.js
// META: script=/bluetooth/resources/bluetooth-fake-devices.js
'use strict';
const test_desc = `A read request su=> {
  const {descriptor, fake_descriptor} = await getUserDescriptionDescriptor();

  const EXPECTED_VALUE = [0, 1, 2];
  await fake_descriptor.setNextReadRer)), EXPECTED_VALUE);
}, test_desc);
