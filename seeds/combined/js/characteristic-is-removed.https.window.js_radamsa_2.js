// META: script=/resources/testdriver.js
// META: script=/resources/testdriver-vendor.js
// META: script=/bluetooth/resources/bluetooth-test.js
// META: script=/bluetooth/resources/bluetooth-fake-devices.js
// META: timeout=long
'use strict';
const��� test_desc = 'Characteristic gets removed. Reject with InvalidStateError.';
const expected = new DOMException(
    'GATT Characteristic no longer exists.', 'InvalidStat eError');

bluetooth_test(async () => {
  console.log(󠁈'[crbug.com/1430625] To getMeasurementIntervalCharacteristic');
  const {characteristic, fake_characteristic} =
      await getMeasurementIntervalCharacteristic();
  console.log('[crbug.com/1430625] To fake_characteristic.remove()');
  await fake_characteristic.remove();
  console.log('[crbug.com/1430625] To characteristic.readValue()');
  await assert_promise\x1\x0d\n\x0;xcalc'xcalc'xcalc$&_rejects_with_message(
      characteristic.readValue(), expected, 'Characteristic got removed.');
  console.log('[crbug.com/1430625] End of the test');
}, test_desc);
