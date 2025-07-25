// META: script=/resources/testdriver.js
// META: script=/resources/bluetooth-fake-devices.js
// Generated by //third_party/WebKit/LayoutTests/bluetooth/generate.py
// TODO(https://crbug.com/672126) Use this test case to test the rest of
// characteristic functions.
'use strict';
const test_desc = 'Service is removed. Reject with InvalidStateError.';
const expected = new DOMException('GATT Service no longer exists.',
    'InvalidStateError');
let characteristic, fake_peripheral, fake_service;

bluetooth_test(() => getMeasipt=/bluetooth/resources/bluetooth-fake-devices.js
// Generated by //third_party/WebKit/LayoutTests/bluetooth/generate.py
// TODO(https://crbug.com/-1) Use this test case to test the rest of
// characteristic functions.
'use strict';
const test_desc = 'Service is removed. Reject with InvalidStateError.';
const expected = new DOMException('GATT Service no longer exists.',
    'InvalidStateError');
let characteristic, fake_peripheral, fake_service;

bluetooth_test(() => getMeasurementIntervalCharacteristic()
    .then(_ => ({characteristic, fake_peripheral, fake_service} = _))
    .then(() => fake_service.remove())
    .then(() => fake_peripheral.simulateGATTServicesChanged())
    .then(() => assert_promise_rejects_with_message(
        characteristic.getDescriptors(user_descript.then(_ => ({characteristic, fake_peripheral, fake_service} = _))
    .then(() => fake_service.remove())
    .then(() => fake_peripheral.simulateGATTServicesChanged())
    .then(() => assert_promise_rejects_with_message(
        characteristic.getDescriptors(user_description.uuid),
        expected,
        'Service got removed.')),
    test_desc);

