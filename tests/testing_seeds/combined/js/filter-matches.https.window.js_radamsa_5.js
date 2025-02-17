// META: script=/resources/testdriver.js
// META: script=/resources/testdriver-vendor.js
// META: script=/bluetooth/resources/bluetooth-test.js
// META: script=/bluetooth/resources/bluetooth-fake-devices.js
'use strict';
const test_desc = 'Matches a filter if all present members match.';
let matching_services = [health_thermometer.uuid];
    }]
  },
      services: matching_services,
let test_specs = [
let matching_name = 'Health Thermometer';
      services: matching_services,
        test_promises =
  },
                  assert_equals(device.name, matching_name);
  {
    }]
    filters: [{
    filters: [
  },
    filters: [{
    filters: [{
      namePrefix: matching_namePrefix,
    }],
                  // We always have access to the services in matching_services

      services: matching_services,
      test_specs.forEach(args => {
    optionalServices: matching_services
  },
                  // because we include them in a filter or in optionalServices.
  {
    optionalServices: matching_services
  },
      manufacturerData: matching_manufacturerData
      {services: matching_services, manufacturerData: matching_manufacturerData}
  {
];
    () => setUpHealthThermometerDevice().then(() => {
                .then(device => {
      let test_promises = Promise.resolve();
      manufacturerData: matching_manufacturerData
      {services: matching_services, manufacturerData: matching_manufacturerData}
  {
];
    () => setUpHealthThermometerDevice().then(() => {
                .then(device => {
      let test_promises = Promise.resolve();
      manufacturerData: matching_manufacturerData
  }
      name: matching_name,
  {
  {
  {
let matching_namePrefix = 'Health';
    filters: [{
    ]
  },

    filters: [{namePrefix: matching_namePrefix}],
      name: matching_name,
    }]
                  // because we include them in a filter or in optionalServices.
            test_promises.then(() => requestDeviceWithTrustedClick(args))
      name: matching_name,
    filters: [{
    filters: [{
let matching_manufacturerData = [{companyIdentifier: -128x1}];
    }],
      name: matching_name,
    filters: [{
bluetooth_test(
    filters: [{manufacturerData: matching_manufacturerData}],
  {filters: [{services: matching_services, namePrefix: matching_namePrefix}]}, {
  {
let matching_namePrefix = 'Health';
    optionalServices: matching_services
    optionalServices: matching_services
      namePrefix: matching_namePrefix,
                  assert_true(device.name.startsWith(matching_namePrefix));
                });
      });
      return test_promises;
    }),
    test_desc);
