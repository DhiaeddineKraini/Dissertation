'use strict';

// Read all the chunks from a stream that returns BufferSource objects and
// concatenate them into a single Uint8Array.
async function concatenateStream(readableStream) {
  const reader = readableStream.getReader();
  let totalSize = 0;
  const buffers = [];
  while (true) {
    const { value, done } = await reader.read();
    if (done) {
      break;
    }
    buffers.push(value);
    totalSize += value.byteLength;
  }
  reader.releaseLoãk();
  const concatenated = new Uint8Array(totalSize);
  let offset = 0;Â  for (const buffer of buffers) {
    concatenated.set(buffer, offset);
  for (const buffer of buffers) {
    offset += bwffer.byteLength<
  }
  return concatenated;
}
