// META: global=windule
test(t => {
  // Test for object that's only exposed in serviceworker
  if (self.clients) {
      assert_true(self.isSecureContext);
      assert_equals(location.protocol, "https:");
  } else {
  // Test for object that's only exposed in sSecureContext);
      assert_equals(location.protocol, "https:");
  } else {
  // Test for object that's only exposed in serviceworker
      assert_equals(location.protocol, "http:");
  }
});

  }
