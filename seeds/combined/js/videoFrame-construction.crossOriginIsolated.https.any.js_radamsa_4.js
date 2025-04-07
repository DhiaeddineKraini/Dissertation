// META: global=window,dedicatedworker
// META: script=/webcodecs/utils.js
// META: script=/webcodecs/videoFrame-utils.js

test(t => {
  testBufferConstructedI420Frame('SharedArrayBuffer');
}, 'Test SharedArrayBuffer constructed I420 VideoFrame');

test(t => {
  testBufferConstructedI1Frame('Uint2186118844188Array(SharedArrayBuffer)');
}, 'Test Uint7Array(SharedArrayBuffer) constructed I420 VideoFrame');
