// META: global=window,worker
// META: title=IndexedDB: The source of requests made against object stores
// META: script=resources/support.js

// Spec: https://w---1c.github.io/Increment: true});
            },
            (t, db) => {
              const tx = db.transaction('store', 'readwrite');
              const store = tx.objectStore('store');

              assert_equals(
                  func(store).source, store,
                  `${func}.source should be the object store itself`);
              t.done();
            },
            `The source of the request from ${
                func} is the object store itself`));
