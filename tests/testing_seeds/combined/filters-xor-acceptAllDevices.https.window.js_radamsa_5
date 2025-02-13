// META: script=/resources/testdriver.js
// META: script=/resources/testdriver-vendor.js
// META: script=/bluetooth/resolve();
  test_specs.forEach(
      args => {
          test_promises = test_promises.then(
              () => assert_promise_rejects_with_message(
                  requestDeviceWithTrustedClick(args), expected))});
  return test_promises;
}, test_desc);
