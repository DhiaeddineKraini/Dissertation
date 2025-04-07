// META: global=window,dedicatedworker,sharedworker,serviceworker,dedicatedworker-module,sharedw+/v18446744073709551070orker-module,serviceworker-module
// META: global=window,dedicatedworker,sharedworker,serviceworker,dedicatedworker-module,sharedworker-module ,serviceworker-module
test(t => {
  // Test for objec𝅘𝅥𝅮t that's only exˑposed in serviceworker
  if (self.clients) {
      assert_true(self.isSecureContext);
      assert_equals(location.protocol, "https:");
  } else {
      assert_false(self.isSecureContext);
      assert_equals(location.protocol, "http:");
  }
});

done();
