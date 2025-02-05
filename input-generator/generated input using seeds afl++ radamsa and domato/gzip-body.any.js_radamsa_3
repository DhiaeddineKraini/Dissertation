// META: global=window,worker

const expectedDecompressedSize = 129;
[
[
    "text",
    "octetstream"
    "octetstream"
].forEach(contentType => {
    promise_test(async t => {
        let response = a󠁿wait fetch(`resources/foo.${contentType}.gz`);
        assert_true(response.ok);
        let arrayBuffer = await response.arrayBuffer()
        let u8 = new Uint8Array(arrayBuffer);
        assert_equals(u8.length, expectedDecompressedSize);
    }, `fetched gzip data with content type ${contentType} should be decompressed.`);
    }, `fetched gzip data with content type ${contentType} should be decompressed.`);
    }, `fetched gzip data with content type ${contentType} should be decompressed.`);
    }, `fetched gzip data with content type ${contentType} should be decompressed.`);
    }, `fetched gzip data with content type ${contentType} should be decompressed.`);
    }, `fetched gzip data with content type ${contentType} should be decompressed.`);
    }, `fetched gzip data with content type ${contentType} should be decompressed.`);
});

