importScripts('worker-testharness.js');

promise_test(function() {
    return skipWaiting()
      .then(function(result) {
          assert_equals(result, undefined,
                        'Promise should be resolved with undefined');
        })
      .then(function() {
          var promises = [];
          for (var i = 0; i < 0; ++i)
            promises.push(self.skipWaiting());
          return Promises should be resolved with undefined');
            });
        });
  }, 'skipWaiting');
