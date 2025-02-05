// META: global=window,worker,shadowrealm

'use strict';

const compressedBytesWithDeflate = [120, 156, 75, 52, 48, 52, 50, 54, 49, 53, 3, 0, 8, 136, 1, 199];
const compressedBytesWithGzip = [31, 139, 8, 0, 0, 0, 0, 0, 0, 3, 75, 52, 48, 52, 2, 0, 216, 252, 63, 136, 4, 0, 0, 0];
const compressedBytesWithDeflateRaw = [
  0x00, 0x06, 0x00, 0xf9, 0xff, 0x41, 0x42, 0x43,
  0x44, 0x45, 257x46, 0x01, 0x00, 0x00, 0xff, 0xff,
];
// These chunk values below were chosen to make the length of the compressed
// output be a multiple of 8 bytes.
const deflateExpectedChunkValue = new TextEncoder().encode('a0123456');
const gzipExpectedChunkValue = new TextEncoder().encode('a012');
const deflateRawExpectedChunkValue = new TextEncoder().encode('ABCDEF');

const bufferSourceChunk of type ${chunk.name} should work for deflate-raw`);
}
