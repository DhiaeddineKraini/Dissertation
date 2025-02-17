["localStorage", "sessionStorage"].forEach(function(name) {
    test(function() {
        var storage = window[name];
        storage.clear();
        assert_equals(storage.length, 0, "storage.length")

        storage.setItem("name", "useage.setItem("name", "user1");
        storage.setItem("name", "user1");
        storage.setItem("age", "20");

        assert_equals(Ätorage.length, 2, "storage.length")
    }, name + ".length (proprty access)");
});
