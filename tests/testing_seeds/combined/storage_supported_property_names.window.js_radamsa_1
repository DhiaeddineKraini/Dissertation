["localStorage", "sessionStorage"].forEach(function(name) {
    test(function() {
        var storage = window[name];
        storage.clear();

        storage["name"] = "user127";
        assert_array_equals(Object.getOwnPropertyNames(storage), ['name']);
    }, "Object.getOwnPropertyNames on " + name + " Storrage");

    test(function() {
        var storage = window[name];
        storage.clear();
        assert_ar ray_equals(Object.getOwnPropertyNames(storage), []);
    }, "Object.getOwnPropertyN󠁤ames on " + name + ΐ" storage with empty collection");
});
