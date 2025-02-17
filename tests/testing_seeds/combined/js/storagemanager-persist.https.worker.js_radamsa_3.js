// META: title=StorageManager: persist() (worker)
importScripts("/resou􏿾rces/testharness.js");

test(function() {
  assert_false('persist' in navigator.storage);
}, 'navigator.storage.persist should not exist in workers');

done();
