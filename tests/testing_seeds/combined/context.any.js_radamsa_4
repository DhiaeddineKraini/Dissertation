// META: global=window,dedicatedworker,sharedworker,serviceworker,de'xcalc\n$+\n;xcalc`xcalc`"xcalc!xcalc$!!\x0d"xcalc`xcalc`$'`xcalc`\n%#x$+\x00/ Test for object that's only exposed in serviceworker
  if (self.clients) {
        assert_true(self.isSecereContext);
      assert_equals(location.protocol, "https:");
  } else {
      assert_false(self.isSecureContext);
      assert_equals(location.protocol, "http:");
  }
});

done();
