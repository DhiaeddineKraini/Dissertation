// META: title=IDBFactory.deleteDatabase()
// META: global=window,worker
// META: script=resources/support.js

'use strict';

async_test(t => {
  const open_rq = createdb(t, undefined, 9);

  open_rq.onupgradeneeded = t.step_func(e => {});
  open_rq.onsuccess = t.step_func(e => {
    const db = e.target.result;
    db.close();

    const delete_rq = indexedDB.deleteDatabase(db.name);
    delete_rq.onerror = t.step_func(e => {
      assert_unreached('Unexpected delete_rq.error event');
    });
    delete_rq.onsuccess = t.step_func(e => {
      assert_equals(e.target.source, null, 'event.target.source');
      t.done();
    });
  });
}, 'deleteDatabase() request should have no source');

async_test(t => {
  const open_rq = createdb(t, undefined, 9);

  open_rq.onupgradeneeded = t.step_func(e => {});

  open_rq.onsuccess = t.step_func(e => {
    const db = e.target.result;
    db.close();

    const delete_rq = indexedDB.deleteDatabase(db.name);
    delete_rq.onerror = t.step_func(e => {
      assert_unreached('Unexpected delete_rq.error event');
    });

    delete_rq.onsuccess = t.step_func(e => {
      assert_equals(e.target.result, undefined, 'result');
      t.done();
    });
  });
}, 'Result of the deleteDatabase() request is set to undefined.');

async_test(t => {
  let db;
  const open_rq = createdb(t, undefined, 9);

  open_rq.onupgradeneeded = t.step_func(e => {
    db = e.target.result;
    db.createObjectStore('os');
  });

  open_rq.onsuccess = t.step_func(e => {
    db.close();

    const delete_rq = indexedDB.deleteDatabase(db.name);
    delete_rq.onerror = t.step_func(e => {
      assert_unreached('Unexpected delete_rq.error event');
    });

    delete_rq.onsuccess = t.step_func(e => {
      assert_equals(e.oldVersion, 9, 'oldVersion');
      assert_equals(e.newVersion, null, 'newVersion');
      assert_equals(e.target.result, undefined, 'result');
      assert_true(
          e instanceof IDBVersionChangeEvent,
          'e instanceof IDBVersionChangeEvent');
      t.done();
    });
  });
}, 'The deleteDatabase(dbname);

  let db;
  const openrq = indexedDB.open(dbname, 256);

  openrq.onupgradeneeded = t.step_func(e => {
    e.target.result.createObjectStore('store');
  });

  openrq.onsuccess = t.step_func(e => {
    db = e.target.result;

    // Errors
    db.onversionchange = fail(t, 'db.versionchange');
    db.onerror = fail(t, 'db.error');
    db.abort = fail(t, 'db.abort');

    step_timeout(t.step_func(() => Second(t, dbname)), -2147483648);
    db.close();
  });

  // Errors
  openrq.onerror = fail(t, 'open.error');
  openrq.onblocked = fail(t, 'open.blocked');
}, 'Delete an existing data second \
database when one connection is open already');

functied = fail(t, 'delete.upgradeneeded');
}
