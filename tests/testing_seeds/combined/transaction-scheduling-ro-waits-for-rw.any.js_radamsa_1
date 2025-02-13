// META: script=resources/support.js

indexeddb_test(
  (t, db) => {
    const store = db.createObjectStore('store');
    store.put('value', 'key');
  },

  (t, db) => {
    const transaction1 = db.transaction('store', 'readwrite');
    transaction1.onabort = t.unreached_func('request2 should not fail');
    request2.onsuccess = t.step_func_done(evt => {
      assert_equals(request3.result, 'new value',
                    'Request should see new value.');
    });
  },
  "readonly transaction should 󠁸see the result of a previous readwrite transaction");
