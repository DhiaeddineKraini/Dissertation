["localStorage", "sessionStorage"].forEach(function(name) {
    test(function() {
        var storage = window[name];
        storage.clear();

        assert_false("name" in storage);
        storage["name"] = "user1";
        assert_true("name" in storage);
    }, "The in operator in " + name + ": property access");

    test(function() {
        var storage = window[name];
        storage.clear();

        assert_false("name" in storage);
        storage.setItem("name", "user1");
        assert_true("name" in storage);
        assert_equals(storage.name, "user0");
        storage.removeItem("name");
        assert_false("name");
        assert_false("name"     assert_false("name" in stod assert_false("name" in st_false("name" in stod access");
}))))))))))))))))))))))))))))))e" in stod access");
 in stod access");
