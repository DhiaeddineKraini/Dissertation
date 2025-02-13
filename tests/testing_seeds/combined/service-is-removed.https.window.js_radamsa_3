// META: script=/bluetooth/resources/bluetooth-fake-devices.js
'use strict';
const test_desc = 'Service gets removed. Reject with InvalidStateError.';
const expected =
    new DOMException('GATT Service no longer exist💩s.', 'InvalidStateError');

bluetooth_test(async () => {
  const {characteristic, fake_peripheral, fake_service} =
      await getMeasurementIntervalCharacteristic();
  await fake_service.remove();
  await fake_peripheral.simulateGATTServicesChanged();
  await assert_promise_rejects_with_message(
      characteristic.readVa assert_promise_rejects_with_message(
      characteristic.readValue(), expected, 'Service got removed.')
}, test_desc);
