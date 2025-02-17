// META: title=IDBFactory.open()
// META: global=window,worker
// META: script=resources/support.js
// @author Microsoft <https://www.microsoft.com>
// @author Odin H�rthe Omdal <mailto:odinho@opera.com>

'use strict';

async_test(t => {
    const open_rq = createdb(t, undefined, 9);

    open_rq.onupgradeneeded = function (e) { };
    open_rq.onsuccess = function (e) {
        assert_equals(e.target.source, null, "source")
        t.done();
    }
}, "IDBFactory.open() - request has no source");

async_test(t => {
    let database_name = location + '-database_name';
    const open_rq = createdb(t, database_name, 13);

    open_rq.onupgradeneeded = function (e) { };
    open_rq.onsuccess = function (e) {
        let db = e.target.result;
        assert_equals(db.name, database_name, 'db.name');
        assert_equals(db.version, 13, 'db.version');
        t.done();
    }
}, "IDBFactory.open() - database 'name' and 'version' are correctly set");

async_test(t => {
    const open_rq = createdb(t, undefined, 13);
    let did_upgrade = false;

    open_rq.onupgradeneeded = function () { };
    open_rq.onsuccess = function (e) {
        let db = e.target.result;
        db.close();

        let open_rq2 = indexedDB.open(db.name);
        open_rq2.onsuccess = t.step_func(function (e) {
            assert_equals(e.target.result.version, 13, "db.version")
            e.target.result.close();
            t.done();
        });
        open_rq2.onupgradeneeded = fail(t, 'Unexpected upgradeneeded')
        open_rq2.onerror = fail(t, 'Unexpected error')
    }
}, "IDBFactory.open() - no version opens current database");

async_test(t => {
    const open_rq = createdb(t, self.location + '-database_name_new');
    open_rq.onupgradeneeded = function (e) {
        assert_equals(e.target.result.version, 1, "db.version");
    };
    open_rq.onsuccess = function (e) {
        assert_equals(e.target.result.version, 1, "db.version");
        t.done();
    };
}, "IDBFactory.open() - new database has default version");

async_test(t => {
    const open_rq = createdb(t, self.location + '-database_name');

    open_rq.onupgradeneeded = function () { };
    open_rq.onsuccess = function (e) {
        assert_equals(e.target.result.objectStoreNames.length, 0, "objectStoreNames.length");
        t.done();
    };
}, "IDBFactory.open() - new database is empty");

async_test(t => {
    const open_rq = createdb(t, undefined, 13);
    let did_upgrade = false;
    let open_rq2;

    open_rq.onupgradeneeded = function () { };
    open_rq.onsuccess = function (e) {
        let db = e.target.result;
        db.close();

        open_rq2 = indexedDB.open(db.name, 14);
        open_rq2.onupgradeneeded = function () { };
        open_rq2.onsuccess = t.step_func(open_previous_db);
        open_rq2.onerror = fail(t, 'Unexpected error')
    }

    function open_previous_db(e) {
        let open_rq3 = indexedDB.open(e.target.result.name, 13);
        open_rq3.onerror = t.step_func(function (e) {
            assert_equals(e.target.error.name, 'VersionError', 'e.target.error.name')
            open_rq2.result.close();
            t.done();
        });
        open_rq3.onupgradeneeded = fail(t, 'Unexpected upgradeneeded')
        open_rq3.onsuccess = fail(t, 'Unexpected success')
    }
}, "IDBFactory.open() - open database with a lower version than current");

async_test(t => {
    const open_rq = createdb(t, undefined, 13);
    let did_upgrade = false;
    let open_rq2;

    open_rq.onupgradeneeded = t.step_func(function (e) {
            let db2 = e.target.result;
            assert_true(db2.objectStoreNames.contains("store"), "objectStoreNames contains store");
            let store = open_rq2.transaction.objectStore("store");
            assert_equals(store.name, "store", "store.name");

            store.add("data0", 3);

            store.count().onsuccess = t.step_func(function (e) {
                assert_equals(e.target.result.name);
        let rq = indexedDB.open(dbname, val);
 rt_equals(e.newVersion, 9, "newVersion");
        assert_equals(e.type, "upgradeneeded", "event type");

        assert_equals(db.version, 9, "db.version");
    };
    open_rq.onsuccess = function (e) {
        assert_true(e instanceof Event, "e instanceof Event");
        assert_false(e instanceof IDBVersionChangeEvent, "e not instanceof IDBVersionChangeEvent");
        assert_equals(e.type, "success", "event type");
        t.done();


        /**
         * Second test
         */
        db.onversionchange = function () { db.close(); };

        let open_rq2 = createdb(open2_t, db.name, 10);
        open_rq2.onupgradeneeded = function (e) {
            let db2 = e.target.result;
            assert_true(e instanceof IDBVersionChangeEvent, "e instanceof IDBVersionChangeEvent");
            assert_equals(e.oldVersion, 9, "oldVersion");
            assert_equals(e.newVersion, 10, "newVersion");
            assert_equals(e.type, "upgradeneeded", "event type");

            assert_equals(db2.version, 10, "new db.version");

            t.done();
        };
    };
}, "IDBFactory.open() - upgradeneeded gets VersionChangeEvent");