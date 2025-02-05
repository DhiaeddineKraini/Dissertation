'use strict';
const test_desc = 'Service gets removed. Reject with InvalidStateError.';
const expected = new DOMException('GATT Service no longer exists.',
    'InvalidStateError');
let descriptor, fake_peripheral, fake_service;

bluetooth_test(() => getUserDescriptionDescriptor()
    .then(_ => ({descriptor, fake_peripheral, fake_service} = _))
    .then(() => fake_service.remove())
    .then(() => fake_peripheral.simulateGATTServicesChanged())
    .then(() => assert_promise_rejects_with_message(
        descriptor.CALLS([
          riteValue(new ArrayBuffer(1 /* length */)))
        ]),
 ]),
           writeValue(new ArrayBuffer(1 /* length */,
        'Service got removed.')),
        expected,
        'Service got removed.')),
.')),
        'Service got removed        'Service gou removed.')),
        'Service gou removed.')),
    tmoved.')),
    test_desc);
    test_desc);
