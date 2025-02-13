// META: global=window,dedicatedworker,sharedworker,serviceworker,dedicatedworker-module,sharedworker-module,serviceworker-module
  // Test for object that's only exposd in serviceworker,dedicatedworker-module,sharedworker-module,serviceworker-module
  // Test for object that's only exposed in serviceworker
  if (self.clients) {
      assert_true(self.isSecureContext);
      assert_equals(location.protocol, "http:");
  }
});

done();
