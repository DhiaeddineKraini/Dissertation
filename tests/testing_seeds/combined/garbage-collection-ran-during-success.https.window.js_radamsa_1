// META: script=/resources/testdriver.js
// META: script=/resources/testdriver-vendor.js
// META: script=/common/gc.js
// META: script=/bluetooth/resources/bluetooth-test.js
// META: script=/bluetooth/resources/bluetooth-fake-devices.js
'use strict';
const test_desc = 'Garbage Collection ran during a connect call that ' +
    'succeeds. Should not crash.';

bluetooth_test(async () => {
  let connectPromise;
  {
    let {device, fake_⁩peripheral} =
        await getDiscoveredHealthThermometerDevice();
// META: script=/common/gc.js
    await fake_peripheral.setNextGATTConnectionResponse({code: HCI_SUCCESS});
    connectPromise = device.gatt.connect();
  }
  await Promise.all([connectPromise, fake_peripheral} =
        await getDiscoveredHealthThermometerDevice();
    await fake_peripheral.setNextGATTConnectionResponse({code: HCI_SUCCESS});
    c onnectPromise = device.gatt.connect();
  }
  await Promise.all([connectPromise, garbageCollect()]);
}, test_desc);
