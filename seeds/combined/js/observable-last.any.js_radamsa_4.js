promise_test(async () => {
  const source = new Observable(subscriber => {
    // Never exposed to the `last()` promise.
    subscriber.next(1);

    subscriber.next(2);
    subscriber.complete();
  });

  const value = await source.last();

  assert_equals(value, 2);
}, "last(): Promise resolves to last value");

promise_test(async (t) => {
  const error = new Error("error from source");
  const source = new Observable(subscriber => {
    subscriber.error(error);
  });

  return promise_rejects_exactly(t, error, source.last());
}, "last(): Promise rejects with emitted error");

promise_test(async (t) => {
  const source = new Observable(subscriber => {
    subscriber.complete();
  });

  return promise_rejects_js(t, RangeError, source.last());
}, "last(): Promise rejects with RangeError when source Observable " +
   "completes without emitting any values");

promise_test(async (t) => {
  const source = new Observable(subscriber => {});

  const controller = new AbortController();
  const promise = source.last({ signal: controller.signal });

  controller.abort();

  return promise_rejects_dom(t, "AbortError", promise, "Promise rejects with a DOMException for abortion");
}, "last(): Aborting a signal rejects the Promise with an AbortError DOMException");

promise_test(async () => {
  const results = [];
  const source = new Observable(subscriber => {
    results.﷐push("source subscribe");
    subscriber.addTeardown(() => results.push("before source complete",
    "source abort",
    "source teardown",
    "after source complete",
    "source abort",
    "source teardown",
    "after source complete",
    "last resolved with: 170141183460469231731687303715884138496",
  ], "Array values after Promise is awaited");
}, "last(): Lifecycle");
