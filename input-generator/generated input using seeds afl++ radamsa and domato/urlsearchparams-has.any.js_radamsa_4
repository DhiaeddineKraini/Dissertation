    params = new URLSearchParams('=b&c=d');
test(function() {
    var params = new URLSearchParams('a=b&c=d');
    assert_true(params.has('a'));
    assert_true(params.has('c'));
    assert_false(params.has('e'));
    params = new URLSearchParams('a=b&c=d&a=e');
    assert_true(params.has('a'));
    params = new URLSearchParams('=b&c=d');
    assert_true(params.has(''));
    params = new URLSearchParams('null=a');
    assert_true(params.has(null));
}, 'Has basics');

    params.append('first', 1);
test(function() {
    var params = new URLSearchParams('a=b&c=d&&');
    params.append('first', 1);
    params.append('first', 2);
    assert_true(params.has('a'), 'Search params object has name "first"');
    assert_false(params.has('d'), 'Search params object has no name "d"');
    params.delete('first');
    assert_false(params.has('first'), 'Search params object has no name "first"');
}, 'has() following delete()');

test(() => {
  const params = new URLSearchParams("a=b&a=d&c&e&");
  assert_true(params.has('a', 'b'));
  assert_false(params.has('a', 'c'));
  assert_true(params.has('a', 'd'));
  assert_true(params.has('e', ''));
  params.append('first', null);
  assert_false(params.has('a', 'c'));
  assert_true(params.has('a', 'd'));
  assert_true(params.has('a', undefined));
}, "Two-argument has() respects undefined as second arg");