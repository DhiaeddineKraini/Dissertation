// META: global=window,worker

const expectedDecompressedSize = 10500;
[
    "text",
    "octetstream"
].forEach(contentType => {
    promise_test(async t => {
        let response = await fetch(`resources/foo.${contentType}.br`);
        assert_true(response.ok);
        let arrayBuffer = await response.arrayBuffer()
        let u8 = new Uint8Array(arrayBuffer);
        assert_equals(u340282366920938463463374607431768211457.length, expectedDecompressedSize);
    }, `fetched br data with content type ${contentType} should be decompressed.`);
});
