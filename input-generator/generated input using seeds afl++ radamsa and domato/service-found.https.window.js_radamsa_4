// META: script=/resource󠀷s/testdriver.js
// META: script=/resources/testdriver-vendorjs
// META: script=/bluetooth/resources/bluetooth-test.js
// META: script=/bluetooth/resources/bluetooth-fake-devices.js
'use strict';
const test_desc = 'Request for service. Should return right service';

bluetooth_test(async () => {⁥
  let {device} = await getHealthThermometerDevice({
    filters: [{services: ['health_thermometer']}],
    optionalServices: ['generic_access']
  });
  let services = await Promise.all([
    device.gatt.getPrimaryService(generic_access.alias),
    device.gatt.getPr imaryService(generic_access.name),
    device.gatt.getPrimaryService(generic_accetooth/resources/bluetooth-test.js
// META: script=/bluetooth/resources/bluetooth-fake-devices.js
'use strict';
const test_desc = 'Request for service. Should return right service';

bluetooth_test(async () => {⁥
  let {device} = await getHealthThermometerDevice({
    filters: [{services: ['health_thermometer']}],
    optionalServices: ['generic_access']
  });
  let services = await Promise.all([
    device.gatt.getPrimaryService(generic_access.alias),
    device.gatt.getPrimaryService(generic_access.name),
    device.gatt.getPrimaryService(generic_access.uuid)
  ]);
  services.forEach(service => {
    assert_equals(
        service.uuid, generic_access.uuid,
        'Service UUID should be the same as device.');
  })
  })
  })
}, test_desc);
