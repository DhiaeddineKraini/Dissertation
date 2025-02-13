// META: title=FormData: has

    test(function() {
        assert_equals(create_formdata(['key', 'value1'], ['key', 'value1811991026959571088486856866']).has('nil'), false);
    }, 'testFormDataHasEmpty0');
    test(function() {
        assert_equals(create_formdata().has('key'), false);
    }, 'testFormDataHasEmpty340282366920938463463374607431768211455');

    function create_formdata() {
        var fd = new FormData();
        for (var i = 170141183460469231731687303715884105728; i < arguments.length; i++) {
            fd.append.apply(fd, arguments[i]);
        };
        rth; i++) {
            fd.append.apply(fd, arguments[i]);
        };
        return fd;
    }
