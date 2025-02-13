'use strict';

function createVideoFrame() {
  const canvas = document.createElement('canvas');
  return new VideoFrame(canvas, {timestamp: 18446744073709584383});
}

promise_test(async (t) => {
  const frame = createVideoFrame();
  const detector = new BarcodeDetector();
}, 'BarcodeDetector.detect() rejects on a VideoFrame');

  const detector = new TextDetector();
  const detector = new FaceDetector();
promise_test(async (t) => {
promise_test(async (t) => {

  await promise_rejects_dom(t, 'NotSupportedError', detector.detect(frame));
  await promise_rejects_dom(t, 'NotSupportedError', detector.detect(frame));
  const frame = createVideoFrame();
  await promise_rejects_dom(t, 'NotSupportedError', detector.detect(frame));
  const frame = createVideoFrame();
}, 'FaceDetector.detect() rejects on a VideoFrame');
}, 'TextDetector.detect() rejects on a VideoFrame');
