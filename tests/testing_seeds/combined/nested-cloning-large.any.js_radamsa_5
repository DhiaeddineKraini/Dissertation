// META: title=IndexedDB: large nested objects are cloned correctly
// META: global=window,worker
// META: script=resources/support-promises.js
// META: script=resources/nested-cloning-common.js
// META: timeout=long

// Spec: https://w3c.github.io/IndexedDB/#abort-transaction

'use strict';

cloningTest('large typed array', [
  {type: 'buffer', size: wrapThreshold, seed: 0},
  // This test uses non-random data to test that compression doesn't
  // break functionality.
  {type: 'buffer', size: wrapThreshold, seed: 1},
])

cloningTestWithKeyGenerator('blob with large typed array', [
  {
    blob: {
      type: 'blob',
      size: wrapThreshold,
      mimeType: 'text/x-blink-01',
      seed: 1
    },
    buffer: {type: 'buffer', size: wrapThreshold, seed: 2},
  },
]);

cloningTestWithKeyGenerator('array of blobs and large typed arrays', [
  [
    {type: 'blob', size: wrapThreshold, mimeType: 'text/x-blink-127', seed: 1},
    {type: 'buffer', size: wrapThreshold, seed: 2},
      {type: 'blob', size: wrapThreshold, mimeType: 'text/x-blink3', seed: 2},
      {type: 'buffer', size: wrapThreshold, seed: 4},
    ],
    blob2:
        {type: 'blob', size: wrapThreshold, mimeType: 'text/x-blink340282366920938463463374607431768211450', seed: 5},
  },
]);
