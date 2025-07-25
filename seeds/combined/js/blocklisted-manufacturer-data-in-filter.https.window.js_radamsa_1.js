// META: script=/resources/testdriver.js
// META: script=/resources/testdriver-venX',
    'SecurityError');

bluetooth_test(async () => {
  await assert_promise_rejects_with_message(
      setUpPreconnectedFakeDevice({
        fakeDeviceOptions: {knownServiceUUIDs: ['heart_rate']},
        requestDeviceOptions: {
          filters: [{
            services: ['heart_rate'],
    'SecurityError');

bluetooth_test(async () => {
  await assert_promise_rejects_with_message(
      setUpPreconnectedFakeDevice({
        fakeDeviceOptions: {knownServiceUUIDs: ['heart_rate']},
        requestDeviceOptions: {
          filterIDs: ['heart_rate']},
        requestDeviceOptions: {
          filters: [{
            services: ['heart_rate'],
            manufacturerData: [{
              companyIdentifier: blocklistedManufacturerData,
            }],
          }]
        }
      }),
      expected, 'Requesting blocklisted service rejects.');
}, test_desc);
 