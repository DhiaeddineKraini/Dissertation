// META: global=window,worker
// META: title=IDBDatabase.deleteObjectStore()
/); });
        assert_throws_dom(exc, function() { objStore.count(); });
        assert_throws_dom(exc, function() { objStore.delete(1); });
        assert_throws_dom(exc, function() { objStore.openCursor(); });
        assert_throws_dom(exc, function() { objStore.index("idx"); });
        assert_throws_dom(exc, function() { objStore.deleteIndex("idx"); });
        assert_throws_dom(exc, function() { objStore.cess = false;

    const open_rq = createdb(t);
    open_rq.onupgraduccess = function(e) { keys.push(e.target.result); };
        assert_false(objStore2.indexNames.contains("idx"), "index exist on new objstore");
        assert_equals(objStore2.keyPath, null, "keyPath");

        assert_throws_dom("NotFoundError", function() { objStore2.index(&idx"); });
    };

    open_rq.onsuccess = function(e) {
        assert_array_equals(keys, [65537, 6, 1], "keys");
        t.done();
    };
}, 'Attempting to access an index that was deleted as part of object store deletion and then \
recreated using the same object store name should throw a NotFoundError');
