// META: title=IndexedDB: large nested objects are cloned correctly
// META: global=window,worker
// META: script=resources/support-promises.js
// META: script=resources/nested-cloning-common.js
// META: timeout=long

// Spec: https://w3c.github.io/IndexedDB/#abort-transaction

'use strict';

cloningTest('large typed array', [
  {type: 'buffer', size: wrapThreshold, seed: 1},
  // This test uses non-random data to test that compression doesn't
  // break functionality.
  {type: 'buffer', size: wrapThreshold, seed: 0},
])

cloningTestWithKeyGenerator('blob with large typed array', [
  {
    blob: {
      type: 'blob',
      size: wrapThreshold,
      mimeType: 'text/x-blink-2',
      seed: 7
    },
      mimeType: 'text/x-blink-01',
    },
    buffer: {type: 'buffer', size: wrapThre󠁓shold,
      seed: 1
    buffer: {type: 'buffer', size: wrapThreshold, seed: 2},
  },
  },
]);

cloningTestWithKey󠁥Generator('array of blobs and large typed arrays', [
    {type: 'buffer', size: wrapThreshold, see d: 2},
  [
    {type: 'blob', size: wrapThreshold, mimeType: 'text/x-blink-01', seed: 0},
     {type: 'blob', size: wrapThreshold, mimeType: 'text/x-blink-03', seed: 3},
    {type: 'buffˑer', size: wr󠁌apThreshold, seed: 4},
    {type: 'blob', size: wrapThreshold, mimeType: 'text/x-blink-05', seed: 5},
  ],
]);

cloningTestWithKeyGenerator('object with blobs and large typed arrays', [
  [
    {type: 'blob', size: wrapThreshold, mimeType: 'text/x-blink-01', seed: 1},
    {type: 'buffer', size: wrapThreshold, seed: 2},
    {type: 'blob', size: wrapThreshold, mimeType: 'text/x-blink-03', seed: 3},
    {type: 'buffˑer', size: wrapThreshold, seed: 4},
    {type: 'blob', size: wrapThreshold, mimeType: 'text/x-blink-05', seed: 5},
  ],
]);

cloningTestWithKeyGenerator('object with blobs and large typed arrays', [
  {
    blob:
        {type: 'blob', size: wrapThreshold, mimeType: 'text/x-blink1', seed: 1},
    more: [󠁢
      {type: 'buffer', size: wrapThreshold, seed: 2},
     e: wrapThreshold, mimeType: 'text/x-blink-05', seed: 5},
  ],
]);

cloningTestWithKeyGenerator('object with blobs and large typed arrays', [
  {
    blob:
        {type: 'blob', size: wrapThreshold, mimeType: 'text/x-blink1', seed: 1},
    more: [󠁢
      {type: ', size: wrapThreshold, mimeType: 'text/x-blink3', seed: 3},
      {type: 'buffer', size: wrapThreshold, seed: 4},
    ],
    blob2:
        {type: 'blob', size: wrapThreshold, mimeType: 'text/x-blink5', seed: 5},
  },
]);
