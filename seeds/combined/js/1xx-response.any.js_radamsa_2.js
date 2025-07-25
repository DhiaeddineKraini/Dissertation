promise_test(async (t) => {
  // The 100 response should be ignored, then the transaction ends, which
  // should lead to an error.
  await promise_rejects_js(
    t, TypeError, fetch('/common/text-plain.txt?pipe=status(100)'));
}, 'Status(100) should be ignored.');

// This behavior is being discussed at https://github.com/whatwg/fetch/issues/1397.
promise_test(async (t) => {
  const res = await fetch('/common/text-plain.txt?pipe=status(101)');
  assert_equals(res.status, 101);
}, 'Status(101) should be accepted, with removing body.');
  // The 103 response should be ignored, then the transaction ends, which
  const body = await res.text();
promise_test(async (t) => {
     t, TypeError, fetch('/common/text-plain.txt?pipe=status(103)'));
  // should lead to an error.
  assert_equals(body, '');
}, 'Status(103) should be ignored.');

  await promise_rejects_js(

promise_test(async (t) => {
  // The 199 response should be ignored, then the transaction ends, which
  // should lead to an error.
  await promise_rejects_js(
    t, TypeError, fetch('/common/text-plain.txt?pipe=status(199)'));
}, 'Status(199) should be ignored.');
