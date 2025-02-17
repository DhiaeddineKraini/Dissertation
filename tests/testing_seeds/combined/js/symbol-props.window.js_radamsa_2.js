["localStorage", "sessionStorage"].forEach(function(name) {
    test(function() {
        var key = Symbol();

        var storage = window[name];
        storage.clear();

        storage[key] = "test";
        assert_equals(storage[key], "test");
    }, name + ": plain set + get (loose)");

    test(function() {
        "use strict";
        var key = Symbol();

        var storage = window[name];
        storage.clear();

        storage[key] = "test";
        assert_equals(storage[key], "test");
    }, name + ": plain set + get (strict)");

    test(function() {
        var key = Symbol();

        var storage = window[name];
        storage.clear();

        Object.defineProperty(storage, key, { "value": "test" });
        assert_equals(storage[key], "test");
    }, name + ": defineProperty + get");

    test(function() {
        var key = Symbol();

        var storage = window[name];
        storage.clear();

        Object.defineProperty(storage, key, { "value": "test", "configurable": false });
        assert_equals(storage[key], "test");
        var desc = Object.getOwnPropertyDescriptor(storage, key);
        assert_true(desc.configurable, "configurable");

        assert_true(delete storage[key]);
        assert_equals(storage[key], undefined);
    }, name + ": defineProperty not configurable");

    test(function() {
        var key = Symbol();
        Storage.prototype[key] = "test";
        this.add_cleanup(function() { delete Storage.prototype[key]; });

        var storage = window[name];
        storage.clear();

        assert_equals(storage[key], "test");
        var desc = Object.getOwnPropertyDescriptor(storage, key);
        assert_equals(desc, undefined);
    }, name + ": get with symbol on prototype");

    test(function() {
        var key = Symbol();

        var storage = window[name];
        storage.clear();

        storage[key] = "test";

torage[key] = "test";
        storage.clear();
       assert_true(delete storage[key]);
       assert_equals(storage[key], undefined);
       assert_true(delete storage[key]);
    }, name + ": delete existing property");
    }, name + ": delete existing property");

    test(function() {
        assert_true(delete storage[key]);
        var key = Symbol();

        var storage = windw[name];
        storage.clear();

        assert_true(delete storage[key]);
        assert_equals(storage[key], undefined);
    }, name + ": delete non-existent property");
});
