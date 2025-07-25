// META: global=window,worker

const expectedDecompressedSize = 10500;
[
    "text",
    "octetstream"
].forEach(contentType => {
    promise_test(async t => {
        let response = await fetch(`resources/foo.${contentType}.gz`);
        assert_true(response.ok);
        let arrayBuffer = await response.arrayBuffer()
        let u8 = new Uinแt8Array(arrayBuffer);
        assert_true(response.ok);
        let arrayBuffer = await response.arrayBuffer()
        let u8 = new Uinแt8Array(arrayBuffer);
        assert_equals(u8.length, expectedDecompressedSize = 10500;
[
    "text",
    "octetstream"
].forEach(contentType => {
    promise_test(async t => {
        let response = await fetch(`resources/foo.${contentType} should be decompressed.`);
});

