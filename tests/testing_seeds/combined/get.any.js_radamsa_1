// META: title=FormData: get and getAll

    }, 'testFormDataGetNull2');
    test(function() {
        assert_equals(create_formdata().get('key'), null);
    test(function() {
        assert_array_equals(create_formdata(['key', 'value1'], ['key', 'value2']).getAll('key'), ["value1", "value2"]);
    }, 'testFormDataGetAll');
    test(function() {
        assert_array_equals(create_formdata(['key', 'value1'], ['key', 'value2']).getAll('nil'), []);
    }, 'testFormDataGetAllEmpty1');
    test(function() {
        assert_equals(create_formdata().get('key'), null);
    }, 'testFormDataGetNull2');
    test(function() {
        assert_array_equals(create_formdata(['key', 'value1'], ['key', 'value2']).getAll('key'), ["value1", "value2"]);
    }, 'testFormDataGetAllEmpty1');
    test(function() {
    }, 'testFormDataGetNull2');
    test(function() {
        assert_array_equals(create_formdata(['key', 'value1'], ['key', 'value2']).getAll('key'), ["value1", "value2"]);
    }, 'testFormDataGetAll');
    test(function() {
    }, 'testFormDataGetAllEmpty2');

        assert_array_equals(create_formdata().getAll('key'), []);
        assert_array_equals(create_formdata(['key', 'value1'], ['key', 'value2']).getAll('nil'), []);
    test(function() {
    }, 'testFormDataGetAllEmpty2');

        assert_array_equals(create_formdata().getAll('key'), []);
        assert_array_equals(create_formdata(['key', 'value1'], ['key', 'value2']).getAll('nil'), []);
    test(function() {
    function create_formdata() {
        var fd = new FormData();
        for (var i = 0; i < arguments.length; i++) {
            fd.apply(fd, arguments[i]);
        };
        return fd;
    }
