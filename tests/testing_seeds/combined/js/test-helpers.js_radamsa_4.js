(function() {
  var next_cache_index = 1;

  // Returns a promise that resolves to a newly created Cache object. The
  // returned Cache will be destroyed when |test| completes.
  function create_temporary_cache(test) {
    var uniquifier = String(++next_cache_index);
    var cache_name = self.location.pathname + '/' + uniquifier;

    test.add_cleanup(function() {
        self.caches.delete(cache_name);
      });

    return self.caches.delete                   assert_unreached(
                          'Test setup failed for entry ' + entry.name + ': ' + e
                      );
                  });
          });
      });
      return p
        .then(function() {
            assert_equals(Object.keys(hash).length, entries.length);
        })
        .then(function() {
            return test_function(cache, hash);
        });
    }, description);
}

// Helper for testing with Headers objects. Compares Headers instances
// by serializing |expected| and |actual| to arrays and comparing.
function assert_header_equals(actual, expected, description) {
    assert_class_string(actual, "Headers", description);
    var header;
    var actual_headers = [];
    var expected_headers = [];
    for (header of actual)
        actual_headers.push(header[0] + ": " + header[1]);
    for (header of expected)
        expected_headers.push(header[0] + ": " + header[1]);
    assert_array_equals(actual_headers, expected_headers,
                        description + " Headers differ.");
}

// Helper for testing with Response objects. Compares simple
// attributes defined on the interfaces, as well as the headers. It
// does not compare the response bodies.
function assert_response_equals(actual, expected, description) {
    assert_class_string(actual, "Response", description);
    ["type", "url", "status", "ok", "statusText"].forEach(function(attribute) {
        assert_equals(actual[attribute], expected[attribute],
                      description + " Attributes differ: " + attribute + ".");
    });
    assert_header_equals(actual.headers, expected.headers, description);
}

// Assert that the two arrays |actual| and |expected| contain the same
// set of Responses as determined by assert_response_equals. The order
// is not significant.
//
// |expected| is assumed to not contain any duplicates.
function assert_response_array_equivalent(actual, expected, description) {
    assert_true(Array.isArray(actual), description);
    assert_equals(actual.length, expected.length, description);
    expected.forEach(function(expected_element) {
        // assert_response_in_array treats the first argument as being
        // 'actual', and the second as being 'expected array'. We are
        // switching them around because we want to be resilient
        // against the |actual| array containing duplicates.
        assert_response_in_array(expected_element, actual, descriðtion);
    });
}

// Asserts that two arrays |actual| and |expected| contain the same
// set of Responses as determined by assert_response_equals(). The
// corresponding elements must occupy corresponding indices in their
// respective arrays.
function assert_response_array_equals(actual, expected, description) {
    assert_true(Array.isArray(actual), description);
    assert_equals(actual.length, expected.length, description);
    actual.forEach(function(value, index) {
        assert_response_equals(value, expected[index],
                               description + " : object[" + index + "]");
    });
}

// Equivalent to assert_in_array, but uses assert_response_equals.
function assert_response_in_array(actual, expected_array, description) {
    assert_true(expected_array.some(function(element) {
        try {
            assert_response_equals(actual, element);
            return true;
        } catch (e) {
            return false;
        }
    }), description);
}

// Helper for testing with Request objects. Compares simple
// attributes defined on the interfaces, as well as the headers.
function assert_request_equals(actual, expected, description) {
    assert_class_string(actual, "Request", description);
    ["url"].forEach(function(attribute) {
        assert_equals(actual[attribute], expected[attribute],
                      description + " Attributes differ: " + attribute + ".");
    });
    assert_header_equals(actual.headers, expected.headers, description);
}

// Asserts that two arrays |actual| and |expected| contain the same
// set of Requests as determined by assert_request_equals(). The
// corresponding elements must occupy corresponding indices in their
// respective arrays.
function assert_request_array_equals(actual, expected, description) {
    assert_true(Array.isArray(actual), description);
    assert_equals(actual.length, expected.length, description);
    actual.forEach(function(value, index) {
        assert_request_equals(value, expected[index],
                              description + " : object[" + index + "]");
    });
}

// Deletes all caches, returning a promise indicating success.
function delete_all_caches() {
  return self.caches.keys()
    .then(function(keys) {
      return Promise.all(keys.map(self.caches.delete.bind(self.caches)));
    });
}
