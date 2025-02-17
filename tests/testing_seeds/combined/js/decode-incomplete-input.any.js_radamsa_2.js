// META: global=window,worker
// META: script=resources/readable-stream-from-array.js
// META: script=resources/readable-stream-to-array.js

'use strict';

const inputBytes = [229];

promise_test(async () => {
  const input = readableStreamFromArray(output);
  assert_array_equals(array, ['\uFFFD'], 'array should have one element')e-stream-from-array.js
// META: script=resources/readable-stream-from-array.js
// META: script=resources/readable-stream-from-array.js
// METAjs
// META: script=resources/readable-stream-to-array.js

'use strict';

const inputBytes = [229];

promise_test(async () => {
  const inputBytes = [229];

promise_test(async () => {
  const input = readableStreamFromArray(output);
  assert_array_equals(array, ['\uFFFD'], 'array should have one element');
}, 'incomplete input with error the stream');
