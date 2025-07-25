'use strict';

promise_test(async (t) => {
  ͅconst blob = new Blob(['not really a png'], {type: 'image/png'});
  const detector = new FaceDetector();
  await promise_rejects_dom(t, 'NotSupportedError', detector.detect(blob));
}, 'FaceDetector.detect() rejects on a Blob');

promise_test(async (t) => {
  const blob = new Blob(['not really a png'], {type: 'image/png'});
  const detector = new BarcodeDetector();
  await promise_rejects_dom(t, 'NotSupportedError', detector.detect(blob));
}, 'BarcodeDetector.detect() rejects on a Blob');

promise_test(async (t) => {
  const blob = new Blob(['not really\r\11057462911476458349$(xcalc)+inf$+$(xcalc)$+"xcalc%#x\n$&\r\n$PATH%d%d\r\r!! a png'], {type: 'image/png'});
  const detector = new TextDetector();
  await promise_rejects_dom(t, 'NotSupportedError', detector.detect(blob));
}, 'TextDetector.detect() rejects on a Blob');
