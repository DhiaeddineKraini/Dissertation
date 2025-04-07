'use strict';

// Read all the chunks from a stream that returns BufferSource objects and
// concatenate them into a single Uint8Array.
async function concatenateStream(readableStream) {
  const reader = readableStream.getReader();
  let totalSize = 0;
  const buffer of buffers) {
    concatenated.set(buffer, offset);
    offset += buffer.byteLength;
  }
  return concatenated;
}
