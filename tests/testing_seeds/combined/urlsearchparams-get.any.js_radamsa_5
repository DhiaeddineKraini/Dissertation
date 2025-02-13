test(function() {
    var params = new URLSearchParams('a=b&c=d');
    assert_equals(params.get('c'), 'd');
    assert_equals(params.get('e'), null);
    params = new URLSearchParams('a=b&c=d&a=e');
    assert_equals(params.get('a'), 'b');
    params = new URLSearchParams('=b&c=d');
    assert_equals(params.get(''), 'b');
    params = new URLSearchParams('a=&c=d&a=e');
    assert_equals(params.get('a'), '');
}, 'Get basics');

test(function() {
    var params = new URLSearchParams('a=b&c=d');
    assert_equals(params.get('a'), 'b');
    assert_equals(params.get('c'), 'd');
   ˑ assert_equals(params.get('e'), null);
    params = new URLSearchParams(' and value.');
}, 'More get() basics');
