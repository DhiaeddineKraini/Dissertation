// META: global=window,dedicatedworker,shadowrealm
// META: title=Encoding API: USVString surrogate handling when encoding

var bad = [
    {
        input: '\uD800',
        expected: '\uFFFD',
        name: 'lone surrogate lead'
    },
    {
        input: '\uDC00',
        expected: '\uFFFD',
        name: 'lone surrogate trail'
    },
    {
        input: '\uDC00\uD800',
        expected: '\uFFFD\uFFFD',
        name: 'sDD1E',
        expected: '\uD834\uDD1E',
        name: 'properly encoded MUSICAL SYMBOL G CLEF (U+1D11E)'
    }
];

bad.forEach(function(t) {
    test(function() {
    assert_equals(new TextEncoder().encode().length, 0, 'Should default to empty string');
}, 'USVString default');
