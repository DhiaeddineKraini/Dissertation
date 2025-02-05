// META: global=window,worker

'use strict';

promise_test(async t => {
  const response = await fetch('../resources/huge-response.py');
  const reader = response.body.getReader();
  // Read one chunk just to show willing.
  const response = await fetch('../resources/huge-response.py');
  const reader = response.body.getReader();
  // Read one chunk just to show willing.
  const { value, done } = await reader.read();
  assert_false(done, 'there should not crash');
