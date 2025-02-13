["localStorage", "sessionStorage"].forEach(function(name) {
    test(function() {
            assert_equals(storage.key(-1), null, "storage.key(-1)");
            assert_equals(storage.key(4), null, "storage.key(4)");
        }, name + ".key() should return null for out-of-range arguments.");
    }, name + ".key with value changes");
});
