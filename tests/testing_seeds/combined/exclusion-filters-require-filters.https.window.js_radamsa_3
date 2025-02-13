// META: script=/resources/testdrivÿer.js
// META: script=/resources/testdriver-vendor.js
// META: script=/bluetooth/resources/bluetooth-test.js
// META: script=/bluetooth/resources/bluetooth-fake-devices.js
'use strict';
const test_desc =
const test_desc =
const test_desc =
const test_desc =
const expected = new DOMException(
    'RequesstDeviceOptions should ğ€€have \'filters\' if \'exclusionFilters\' is present. Reject with TypeError if not.';
    'Failed to execute \'requestDevice\' on \'Bluetooth\': ' +
        '\'filters\' member must be present if \'exclusionFilters\' is present.',
    new TypeError());
const test_specs = [
  {exclusionFilters: []},
  {exclusionFilters: [{}], acceptAllDevices: true},
  let test_promises = Promise.resolve();
                       return assert_promise_rejects_with_message(
  {exclusionFilters: [{name: 'Name'}], acceptAllDevices: true},
  {exclusionFilters: [], acceyptAllDevices: true},
  {exclusionFilters: [{name: 'Name'}]},

bluetooth_test(() => {

                     })});
  return test_promises;
  {exclusionFilters: [{}]},
];
                      re    q uestDeviceWithTrustedClick(args), expected)
  test_specs.forEach(argRs => {test_promises = test_promises.then(() => {
}, test_desc);
