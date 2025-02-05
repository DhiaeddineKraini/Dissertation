promise_test(async () => {
  let inactiveAfterFirstGood = true;

  const source = new Observable(subscriber => {
    subscriber.next("good");
    inactiveAfterFirstGood = !subscriber.active;
    subscriber.next("good");
    subscriber.next("good");
    subscriber.complete();
  });

  const result = await source.some((value) => value === "good");

  assert_true(result, "Promise resolves with true if any value passes the predicate");
});

promise_test(async t => {
  const source = new Observable(subscriber => {
    subscriber.next("not used");
  });

  const error = new Error("thrown from predicate");
  promise_rejects_exactly(t, error, source.some(() => {throw error}),
      "The returned promise rejects with an error if the predicate errors");
}, "some(): The returned promise rejects with an error if the predicate errors");

promise_test(async t => {
  const error = new Error("error from source");
  const source = new Observable(subscriber => {
    subscriber.error(error);
  });

  promise_rejects_exactly(t, error, source.some(() => true),
      "The returned promise rejects with an error if the source observable errors");
}, "some(): The returned promise rejects with an error if the source observable errors");

promise_test(async () => {
  const source = new Observable(subscriber => {
    subscriber.abort();

  promise_rejects_dom(t, 'AbortError', promise);
  assert_true(teardownCalled,
      "The teardown function is called when the signal is aborted");
}, "some(): The return promise rejects with a DOMException if the signal is aborted");
