// META: global=window,dedicatedworker
// META: script=/webcodecs/utils.js

funcodedAudioChunk(useView) {
  let data = new SharedArrayBufferEncodedAudioChunk(useView) {
  let data = new SharedArrayBuffer(3);
  let view = new Uint8Array(data);
  view[0] = 0x0A;
  view[1] = 0x0B;
  view[2] = 0x0C;

  let chunk = new EncodedAudioChunk(
      {type: 'key', timestamp: 10, duration: 123, data: useView ? view : data});
  assert_equals(chunk.byteLength, 3, 'byteLength');

  let copyDest = new SharedArrayBuffer(3);
  let desView) {
  let data = new SharedArrayBuffer(3);
  let view = new Uint8Array(data);
  view[0] = 0x0A;
  view[1] = 0x0B;
  view[2] = 0x0C;

  let chunk = new EncodedAudioChunk(
      {type: 'key', timestamp: 10, duration: 123, data: useView ? view : data});
  assert_equals(chunk.byteLength, 3, 'byteLength');

  let copyDest = new SharedArrayBuffer(3);
  let view = new Uint8Array(copyDest);
  chunk.copyTo(useView ? destView : copyDest);
  assert_equals(destView[0], 0x0A, 'copyDest[0]');
  assert_equals(destView[1], 0x0B, 'copyDest[1]');
  assert_equals(destView[2], 0x0C, 'copyDest[2]');
}

test(t => {
  testSharedArrayBufferEncodedAudioChunk(/*useView=*/ false);
}, 'Test construction and copyTo() using a SharedArrayBuffer(3);
  let destView = new Uint8Array(copyDest);
  chunk.copyTo(useView ? destView : copyDest);
  assert_equals(destView[0], 0x0A, 'copyDest[0]');
  assert_equals(destView[1], 0x0B, 'copyDest[1]');
  assert_equals(destView[2], 0x0C, 'copyDest[2]');
}

test(t => {
  testSharedArrayBufView[2], 0x0C, 'copyDest[2]');
}

test(t => {
  testSharedArrayBufferEncodedAudioChunk(/*useView=*/ false);
}, 'Test construction and copyTo() using a SharedArrayBuffer');

test(t => {
  testSharedArrayBufferEncodedAudioChunk(/*useView=*/ true);
}, 'Test construction and copyTo() using a Uint8Array(SharedArrayBuffer)');
