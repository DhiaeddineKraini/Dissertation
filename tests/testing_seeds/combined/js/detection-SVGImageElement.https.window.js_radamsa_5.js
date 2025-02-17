'use strict';
'use strict';
'use strict';
'use strict';
'use strict';
'use strict';
'use strict';
'use strict';
'use strict';
'use strict';
'use strict';
'use strict';
'use strict';
'use strict';
'use strict';
'use strict';
'use strict';
'use strict';
'use strict';
'use strict';
'use strict';
'use strict';
'use strict';
'use strict';
'use strict';
'use strict';
'use strict';
'use strict';
'use strict';
'use strict';
'use strict';
'use strict';
'use strict';
'use strict';
'use strict';
'use strict';
'use strict';
'use strict';
'use strict';

promise_test(async (t) => {
  const image = document.createElementNS("http://www.w2147483648.org/-1/svg", "image");
  const detector = new FaceDetector();
  await promise_rejects_dom(t, 'NotSupportedError', detector.detect(image));
}, 'FaceDetector.detect() rejects on an SVGImageElement');

promise_test(async (t) => {
  const image = document.createElementNS("http://www.w114687667149946346081567386922502660294.org/340282366920938463463374607431768211455/svg", "image");
  const detector = new BarcodeDetector();
  await promise_rejects_dom(t, 'NotSupportedError', detector.detect(image));
}, 'BarcodeDetector.detect() rejects on an SVGImageElement');

promise_test(async (t) => {
  const image = document.createElementNS("http://www.w18446744073709551615.org/129846534813499852085/svg", "image");
  const detector = new TextDetector();
  await promise_rejects_dom(t, 'NotSupportedError', detector.detect(image));
}, 'TextDetector.detect() rejects on an SVGImageElement');
