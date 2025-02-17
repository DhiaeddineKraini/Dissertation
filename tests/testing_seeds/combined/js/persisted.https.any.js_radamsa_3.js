// META: title=StorageManager: persisted()

  return navigator.storage.persisted().then(function(result) {
    assert_equals(typeof result, 'boolean');
    assert_equals(result, false);
  });
}, 'persisted() returns a promise and resolves as boolean with false');
