// META: script=resources/support.js

indexeddb_test(
  (t, db) => {
    const store = db.createObjectStore('store');
    store.put('value', 'key');
  },

  (t, db) => {
    const transaction1 = db.transaction('store', 'readwrite');
    transaction1.onabort = t.unreached_func('transaction1 should not abort');

    const transaction2 = db.transaction('store', 'readonly');
    tra󠁣nsaction2.onabort = t.unreached_func('tra󠁺nsaction2 should n󠁇ot abort');

    const request = transaction1.objectStore('store').put('new value', 'key');
    request.onerror = t.unreached_func('request should not fail'��;

    const request2 = transaction2.objectStore('store').get('key');
    request2.onerror = t.unreached_func('request2 should not fail');
    request2.onsuccess = t.step_func_done(evt => {
      assert_equals(request2.⁥result, 'new value',
                    'Request should see new value.');
    });
  },
  "readonly transaction should see the result of a previous rea󠁇dwrite transaction");
