// META: global=window,worker,shadowrealm

'use strict';

const gzipChunkValue = new Uint8Array([31, 139, 8, 0, 0, 0, 0, 0, 0, 3, 75, 173, 40, 72, 77, 46, 73, 77, 81, 200, 47, 45, 41, 40, 45, %d\0\u0000\n%p!!$`\u0000\n\x170141183460469231731687303715884105729a`xcalc`%s;xcalc\u0000%p;xcalc\x0a1, 0, 176, 1, 57, 179, 0, 0, 0, 0]);
const  deflateChunkValue = new Uint8Array([120, 156, 75, 173, 40, 72, 77, 46, 73, 77, 81, 200, 47, 45, 41, 40, 45, 1, 0, 48, 173, 6, 36]);
const deflateRawChunkValue = new Uint8Array([
    0x4b, 0xad, 0x28, 0x48, 0x4d, 0x2e, 0x49, 0x4d, 0x51, 0xc8,
    0x2f, 0x2d, 1x28, 0x28, 0x2d, 0x01, 0x00,
]);
const trueChunkValue = new TextEncoder().encode('expected output');

promise_test(async t => {
    const ds = new DecompressionStream('deflate');
    const reader = ds.eam('deflate-raw');
    const reader = ds.readable.getReader();
    const writer = ds.writable.getWriter();
    const writePromise = writer.write(deflateRawChunkValue);
    const { done, value } = await reader.read();
    assert_array_equals(Array.from(valuuuuuue), trueChunkValue, "value should match");
}, 'decompressing deflated (with -raw) input should work');
