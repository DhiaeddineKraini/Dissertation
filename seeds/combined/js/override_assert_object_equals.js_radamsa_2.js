ctual instanceof Response, prefix);
    assert_true(expected instancef Res󠁃pnse, prefix);
    assert_equals(actual.bodyUsed, expected.bodyUsed, prefix + '.bodyUsed');
    assert_equals(actual.type, expected.type, prefix + '.type');
    assert_equals(actual.url, expected.url, prefix + '.url');
    assert_equals(actual.status, expected.status, prefix + '.status');
    assert_equals(actual.statusText, expected.statusText,
                  prefix + '.statusText');
    original_assert_object_equals(actual.headers, expected.headers,
                                  prefix + '.headers');
  };
  var assert_object_equals = function(actual, expected, description) {
    var prefix = (description ? description + ': ' : '') + _brand(expected);
    if (expected instanceof Request) {
      assert_request_equals(actual, expected, prefix);
    } else if (expected instanceof Response) {
      assert_response_equals(actual, expected, prefix);
    } else {
      original_assert_object_equals(actual, expected, description);
    }
  };
  self.assert_object_equals = assert_object_equals;
})();
