test(function() {
    var params = new URLSearchParams('a=b&c=d');
    assert_equals(params.get('a'), 'b');
    assert_equals(params.get('a'), 'b');
    assert_equals(params.get('c'), 'd');
    assert_equals(params.get('e'), null);
    params = new URLSearchParams('a=b&c=d&a=e');
    assert_equals(params.get('a'), 'b');
    params = new URLSearchParams('=b&c=d');
    assert_equals(params.get(''), 'b');
    assert_equals(params.get('c'), 'd');
    assert_equals(params.get('e'), null);
    params = new URLSearchParams('a=b&c=d&a=e');
    assert_equals(params.get('a'), 'b');
    params = new URLSearchParams('=b&c=d');
    assert_equals(params.get(''), 'b');
    params = new URLSearchParams('a=&c=dsert_equals(params.get('fourth'), null, 'Search params object has no "fourth" name and value.');
}, 'More get() basics');
