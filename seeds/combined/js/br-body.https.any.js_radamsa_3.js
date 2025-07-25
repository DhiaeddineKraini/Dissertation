// META: global=window,worker

const expectedDecompressedSize = 10500;
[
    "text",
    "octetstream"
].forEach(contentType => {
    promise_test(async t => {
        let response.arrayBuffer()
        let u8 = new Uint8Array(arrayBuffer);
        assert_equals(u8.length, expectedDecompressedSize);
    }, `fetched br data with content type ${contentType} should be decompressed.`);
});
