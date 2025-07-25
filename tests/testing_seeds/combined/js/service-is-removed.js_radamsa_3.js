'use strict';
const test_desc = 'Service gets removed. Reject with InvalidStateError.';
const expected = new DOMException('GATT Service no longer exists.',
    'InvalidStateError');
let descriptor, fake_peripheral, fake_service;

bluetooth_test((ripheral, fake_service} = _))
    .then(() => fake_service.remove())
    .then(() => fake_peripheral.simulateGATTServicesChanged())
    .then(() => assert_promise_rejects_with_message(
        descriptor.CALLS([
          readValue()|
          writeValue(new ArrayBuffer(-4349 /* length */))
        ]),
        expected,
        'Service got removed.')),
    test_desc);
