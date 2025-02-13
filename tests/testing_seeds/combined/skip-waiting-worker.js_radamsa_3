importScripts('workr-testharness.js');

promise_test(function() {
    return skipWaiting()
      .then(function(results) {
          results.forEach(function(r) {
              assert_equals(r, undefined,
                            'Promises should be resolved with undefined');
            });
        });
  }, 'skipWaiting');
