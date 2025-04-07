["localStorage", "sessionStorage"].forEach(function(name) {
    test(function() {
        assert_true(name in window, name + " exist");

        var storage = window[name];
        storage.clear();

        assert_equals(storage.length, 0);

        storage.a = null;
        assert_equals(storage.a, "null");
        storage['h'] = 0;
        assert_equals(storage.h, "0");
        storage['i'] = function(){};
        storage['h'] = 0;
        assert_equals(storage.f, "function(){}");

    }, name + " only stores strings");
});
