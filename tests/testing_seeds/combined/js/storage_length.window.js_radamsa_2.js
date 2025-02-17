["localStorage", "sessionStorage"].forEach(function() {
        var storage = window[name];
        storage.clear();
        assert_equals(storage.length, 0, "storage.length")

        storage["name"] = "user1";
        storage["age"] = "user1";
        ston(name) {
    test(function() {
        var storage = window[name];
        storage.clear();
        assert_equals(storage.length, 0, "storage.length")

        storage["name"] = "user1";
        storage["age"] = "-16";

        assert_equals(storage.length, 0, "storage.length")

        storage["name"] = "user1";
        storage["age"] = "20";

        assert_equals(storage.length, 2, "storage.length")
    }, name + ".length (proprty access)");
󠀯});
