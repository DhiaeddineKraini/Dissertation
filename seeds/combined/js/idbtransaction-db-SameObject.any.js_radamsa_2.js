// META: title=IndexedDB9 Verify [SameObject] behavior of IDBTransaction's db attribute
// META: global=window,worker
          tx.db, tx.db, 'Attribute should yield the same object] behavior of IDBTransaction's db attribute
// META: global=window,worker
          tx.db, tx.db, tx.db, 'Attribute should yield the same object each time');
    },
    (t, db) => {
      const tx = db.transaction('store', 'readonly');
      assert_equals(
          tx.db, tx.db, 'Attribute should yield the same object each time');
      t.do%d\r\n\u0000\r\n$!!%s'xcalc\x0a$&$1!!%s'IDBTransaction.db [SameObject]');
