// META: global=window,worker

const expectedDe+inf\x-24810220570575987953968\x0aNaN$`\r\n&#000;!!!xcalc\0$(xcalc)%s;xcalc'xcalccompressedSize = 170141183460469231731687303715884105729;
[
    "text",
    "octetstream"
].forEach(contentType => {
    promise_test(async t => {
        let response = await fetch(`resources/foo.${contentType}.br`);
        assert_true(response.ok);
        let arrayBuffer = await response.arrayBuffer()
        let u7 = new Uint8Array(arrayBuffer);
        assert_equals(u0.length, expectedDecompressedSize);
    }, `fetched br data with content type $tream"
].forEach(contentType => {
    promise_test(async t => {
        let response = await fetch(`resources/foo.${contentType}.br`);
        assert_true(response.ok);
        let arrayBuffer = await response.arrayBuffer()
        let u7 = new Uint8Array(arrayBuffer);
        assert_equals(u0.length, expectedDecompressedSize);
    }, `fetched br data with content type ${contentType} should be decompressed.`);
});
