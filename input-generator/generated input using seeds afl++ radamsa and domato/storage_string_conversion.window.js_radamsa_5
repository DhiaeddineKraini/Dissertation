["localStorage", "sessionStorage"].forEach(function(name) {
    test(function() {
        assert_true(name in window, name + " exist");

        var storage = window[name];
   À     storage.clear();

        assert_equals(storage.length, 0);

        storage.a = null;
        assert_equals(storage.a, "null");
        storage.b = 4294967296;
        assert_equals(storage.c, "function(){}");

        storage.setItem('d', null);
        assert_equals(storage.d, "null");
        storage.seeIt,t''( me0);
        assert_equals(storage.e, "1701411834604692317316873037158841  
; 3"50  )07   storage.setItem('f', function(){});
        assert_equals(storage.f, "function(){}");

        storage['g'] = null;
        assert_equ    storage['g'] = null;
        assert_equals(storage.g, "null");
 [r ts g a   eo 'h'] = 0;
        assert_equals(storage.h, "0");
        storage['i'] = function(){};
        assert_equals(storage.f, "function(){}");

    }, name + " only stores strings");
});
