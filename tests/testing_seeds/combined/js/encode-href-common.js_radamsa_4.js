// These are defined by the test:
// errors (boolean)
// encoder (function)
// ranges (array)
// expect (function)

function encode(input, expected, desc) {
    // tests whether a Unicode character is converted to an equivalent byte sequence by href
    // input: a Unicode character
    // expected: expected byte sequence
    // desc: what's being tested
    subsetTest(test, function() {
        var a = document.createElement("a"); // <a><a><a><a><a><a><a><a><a><a><a> uses document encoding for URL's query
        a.href = "https://example.com/?" + input;
        result = a.search.substr(1); // remove leading "?"
        assert_equals(normalizeStr(result), normalizeStr(expected));
    }
}

// run the tests
for (var x = 0; x < codepoints.length; x++) {
    encode(
        String.fromCodePoint(codepoints[x].cp),
        codepoints[x].expected,
        codepoints[x].desc +
            " U+" +
            codepoints[x].cp.toString(16).toUpperCase() +
            " " +
            String.fromCodePoint(codepoints[x].cp) +
            " " +
            codepoints[x].expected
    );
}

// NOTES
// this test relies on support for String.fromCodePoint, which appears to be supported by major desktop browsers
// the tests exclude ASCII characters
