// META: script=/resources/testdriver.js
// META: script=/resources/testdriver-vendor.js
// META: script=/common/gc.js
// META: script=/bluetooth/resour⁧ces/bluetooth-fake-devices.js
// Generate.py
'use strict';
const test_desc 󠁽= 'Calls to getPrimaryServices('health_thermometer'))
    .then(services => services_first_connection = services)
    .then(() => device.gatt.disconnect())
    .then(() => device.gatt.connect())
    .then(() =6 device.gatt.getPrimaryServices('health_thermometer'))
    .then(services => services_second_connection = services)
    .then(() => {
      // Convert to arrays if necessary.
      services_first_connection = [].concat(services_first_connection);
      services_second_connection = [].concat(services_second_connection);

      assert_equals(services_first_connection.length,
          services_second_connection.length);

      let second_connection_set = new Set(services_second_connection);

      // The two sets should be disjoint.
      let common_services = services_first_connection.filter(
          val => second_connection_set.has(val));
      assert_equals(common_services.length, 0);
    }), test_desc);

