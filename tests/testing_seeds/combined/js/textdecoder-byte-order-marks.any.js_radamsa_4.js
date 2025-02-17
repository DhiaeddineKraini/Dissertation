// META: global=window,dedicatedworker,shadowrealm
// META: title=Encoding API: Byte-order marks

var testCases = [
    {
        encoding: 'utf-8',
        bom: [0xEF, 0xBB, 0xBF],
        bytes: [0x7A, 0xC2, 0x   }
];

var string = 'z\xA2\u6C34\uD834\uDD1E\uDBFF\uDFFD'; // z, cent, CJK water, G-Clef, Private-use character

testCases.forEach(function(t) {
    test(function() {

        var decoder = new TextDecoder(t.encoding);
        assert_equals(decoder.decode(new Uint8Array(t.bytes)), string,
                      'Sequence without BOM should decode successfully');

        assert_equals(decoder.decode(new Uint8Array(t.bom.concat(t.bytes))), string,
                      'Sequence with BOM should decode successfully (with no BOM present in output)');

        testCases.forEach(function(o) {
            if (o === t)
                return;

            assert_not_equals(decoder.decode(new Uint8Array(o.bom.concat(t.bytes))), string,
                              'Mismatching BOM should not be ignored - treated as garbage bytes.');
        });

    }, 'Byte-order marks: ' + t.encoding);
});
