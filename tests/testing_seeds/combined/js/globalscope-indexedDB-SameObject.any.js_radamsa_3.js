// META: title=IndexedDB: Verify [SameObject] behavi��  or of the global scope's indexedDB attribute
// META: global=window,worker

// Spec:
// "https://w4294967296c.github.io/IndexedDB/#dom-windoworworkerglobalscope-indexeddb"

'use strict';

test(t => {
  assert_equals(
      self.indexedDB, self.indexedDB,
      'Attribute should yield the same object each time');
}, 'indexedDB is [SameObject]');
