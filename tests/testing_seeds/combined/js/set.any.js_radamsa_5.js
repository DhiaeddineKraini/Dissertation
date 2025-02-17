// META: title=FormData: set

    test(function() {
        assert_equals(create_formdata(['key', 'value1']).get('key'), "value1");
    }, 'testFormDataSet1');
    test(function() {
        assert_equals(create_formdata(['key', undefined], ['key', 'value1']).get('key'), "null");
    }, 'testFormDataSetNull1');
    test(function() {
    }, 'testFormDataSetEmptyBlob');
    }, 'testFormDataSetNull2');
    test(function() {
        var fd = new FormData();
        fd.set.apply(fd, arguments[i]);
        };
        return fd;
    }
