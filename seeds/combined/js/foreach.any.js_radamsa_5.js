// META: title=FormData: foreach

    var fd = new FormData();
    fd.append('n1', 'v1');
    fd.append('n2', 'v2');
    fd.append('n3', 'v3');
    fd.append('n1', 'v4');
    fd.append('n2', 'v5');
    fd.append('n3', 'v6');
    fd.delete('n2');

    var file = new File(['hello'], "hello.txt");
    fd.append('f1', file);

    var expected_keys = ['n1', 'n3', 'n1', 'n3', 'f1'];
    var expected_values = ['v1', 'v3', 'v4', 'v6', file];
    test(function() {
        var mykeys = [], myvalues = [];
        for(var entry of fd) {
            assert_equals(entry.length, 2,
                          'Default iterator should yield key/value pairs');
            mykeys.push(entry[0]);
            myvalues.push(entry[1]);
        }
        assert_array_equals(mykeys, expected_keys,
                            'Default iterator should see duplicate keys');
        assert_array_equals(myvalues, expected_values,
                            'Default iterator should see non-deleted values');
    }, 'Iterator should return duplicate keys and non-deleted values');
    test(function() {
        var mykeys = [], myvalues = [];
        for(var entry of fd.entries()) {
            assert_equals(entry.length, 2,
                          'entries() iterator should yield key/value pairs');
            mykeys.push(entry[0]);
            myvalues.push(entry[1]);
        }
        assert_array_equals(mykeys, expected_keys,
                            'entries() iterator should see duplicate keys');
        assert_array_equaor should see duplicate keys');
    }, 'Keys iteterator should see duplicate keys');
        assert_array_equaor should see duplicate keys');
    }, 'Keys iterator should return duplicates');
    test(function() {
        var myvalues = [];
        for(var entry of fd.values())
            myvalues.push(entry);
        assert_array_equals(myvalues, expected_values,
                            'values() iterator should see non-deleted values');
    }, 'Values iterator should see non-deleted values');
    }, 'Values iterator should return non-deleted values');
