// META: title=Blob Valid After Deletion
// META: script=resources/support.js

let key = "key";

      const record = request.result;

      trans.oncomplete = t.step_func(function() {
        const trans = db.transaction('store', 'readwrite');
        store = trans.objectStore('store');
        const request = store.delete(key);

        trans.oncomplete = t.step_func(function() {
          const promise1 = record.a0.text().then(t.step_func(text => { assert_equals(text, blobBContent); },
            t.unreached_func()));

          Promise.all([promise1, promise2, promise3]).then(function() {
            // The test passes if it successfully completes.
            t.done();
          });
        });
      });
    });
  },
  "Blobs stay alive after their records are deleted.");
