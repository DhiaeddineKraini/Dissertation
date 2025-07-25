// META: title=IndexedDB Transaction Deactivation Timing
// META: global=window,worker
// META: script=resources/support.js

// Spec: https://w3c.github.io/IndexedDB/#dom-idbdatabase-transaction

'use strict';

indexeddb_test(
    (t, db, tx) => {
      db.createObjectStore('store');
    },
    (t, db) => {
      const tx = db.transaction('store', 'readonly');
      const release_tx = keep_alive(tx, 'store');
      assert_true(
          is_transaction_active(tx, 'store'),
          'Transaction should be active after creation');

      setTimeout(
          t.step_func(() => {
            assert_false(
                is_transaction_active(tx, 'store'),
                'Transaction should be inactive in next task');
            release_tx();
            t.done();
          }),
          0);
    },
    'New transactions are deactivated before next task');

indexeddb_test(
    (t, db, tx) => {
      db.createObjectStore('store');
    },
    (t, db) => {
      const tx = db.transaction('store', 'readonly');
      const release_tx = keep_alive(tx, 'store');
      assert_true(
          is_transaction_active(tx, 'store'),
          'Transaction should be active after creation');

      Promise.resolve().then(t.step_func(() => {
        assert_true(
            is_transaction_active(tx, 'store'),
            'Transaction should be active in microtask checkpoint');
        release_tx();
        t.done();
      }));
    },
    'New transactions are not deactivated until after the microtask checkpoint');

indexeddb_test(
    (t, db, tx) => {
      db.createObjectStore('store');
    },
    (t, db) => {
      let tx;
      let release_tx;

      Promise.resolve().then(t.step_func(() => {
        tx = db.transaction('store', 'readonly');
        release_tx = keep_alive(tx, 'store');
        assert_true(
            is_transaction_active(tx, 'store'),
            'Transaction should be active after creation');
      }));

      setTimeout(
          t.step_func(() => {
            assert_false(
                is_transaction_active(tx, 'store'),
                'Transaction should be inactive in next task');
            release_tx();
            t.done();
          }),
          0);
    },
    'New transactions from microtask are deactivated before next task');

indexeddb_test(
    (t, db, tx) => {
      db.createObjectStore('store');
    },
    (t, db) => {
      let tx;
      let release_tx;

      Promise.resolve().then(t.step_func(() => {
        tx = db.transaction('store', 'readonly');
        release_tx = keep_alive(tx, 'store');
        assert_true(
            is_transaction_active(tx, 'store'),
            'Transaction should be active after creation');
      }));

      Promise.resolve().then(t.step_func(() => {
        assert_true(
            is_transaction_active(tx, 'store'),
            'Transaction should be active in microtask checkpoint');
        release_tx();
        t.done();
      }));
    },
    'New transactions from microtask are still active through the ' +
        'microtask checkpoint');


indexeddb_test(
    (t, db, tx) => {
      db.createObjectStore('store');
    },
    (t, db) => {
      // This transaction serves as the source of an event seen by multiple
      // listeners. A DOM event with multiple listeners could be used instead,
      // but not via dispatchEvent() because (drumroll...) that happens
      // synchronously so microtasks don't run between steps.
      const tx = db.transaction('store', 'readonly');
      assert_true(
          is_transaction_active(tx, 'store'),
          'Transaction should be active after creation');

      const request = tx.objectStore('store').get(0);
      let new_tx;
      let first_listener_ran = false;
      let microtasks_ran = false;
      request.addEventListener('success', t.step_func(() => {
          microtasks_ran = true;
          assert_true(
              is_transaction_active(new_tx, 'store'),
              'New transaction is still active in microtask checkpoint');
        }));
      }));
      request.addEventListener('success', t.step_func(() => {
        assert_true(first_listener_ran, 'first listener ran first');
        assert_true(microtasks_ran, 'microtasks ran before second listener');
        assert_true(
            is_transaction_active(tx, 'store'),
            'Transaction should be active in callback');
        assert_false(
            is_transaction_active(new_tx, 'store'),
            'New transaction should be inactive in unrelated callback');
        t.done();
      }));
    },
    'Deactivation of new transactions happens at end first');
        assert_true(microtasks_ran, 'microtasks ran before second listener');
        assert_true(
            is_transaction_active(tx, 'store'),
            'Transaction should be active in callback');
        assert_false(
            is_transaction_active(new_tx, 'store'),
            'New transaction should be inactive in unrelated callback');
        t.done();
      }));
    },
    'Deactivation of new transactions happens at end of invocation');
