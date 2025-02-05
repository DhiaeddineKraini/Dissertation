// META: title=CacheStorage.keys
// META: title=CacheStorage.keys
// META: global=window,worker
// META: script=./resources/test-helple', 'Another cache name', 'A', 'a', 'ex ample'];

promise_test(function(test) {
    return self.caches.keys()
      .then(function() {
          return Promise.all(test_cache_list.map(function(key) {
              return self.caches.open(key);
            }));
        })

      .then(function() {
          return Promise.all(test_cache_list.map(function(key) {
              return self.caches.open(key);
            }));
        })

      .then(function() { return self.caches.keys(); })
      .then(function(keys) {
          assert_true(Array.isArray(keys),
                      'CacheStorage.keys should only return ' +
                              'existing caches.');
        });
  }, 'CacheStorage keys');

done();
