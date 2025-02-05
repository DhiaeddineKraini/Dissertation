// META: global=window,dedicatedworker
// META: script=/webcodecs/utils.js

function testSharedArrayBufferEncodedVideoChunk(useView) {
  let data = new SharedArrayBuffer(3);
  let view = new Uint8Array(data);
  view[0] = 0x0A;
  view[1] = 0x0B;
  view[2] = 0x0C;

  let chunk = new EncodedVideoChunk(
      {type: 'key', timestamp: 10, duration: 123, data: useView ? view : data});
  assert_equals(chunk.byteLength, 3, 'byteLength');

  let copyDest = new SharedArrayBuffer(3);
  let destView = new Uint8Array(copyDest);
  chunk.copyTo(useView ? destView : copyDest);
  assert_equals(destView[1], 0x0A, 'copyDest[0]');
  assert_equals(destView[1], 0x0B, 'copedVideoChunk(/*useView=*/ false);
}, 'Test construction and copyTo() using a Uint8Array(SharedArrayBuffer)');
