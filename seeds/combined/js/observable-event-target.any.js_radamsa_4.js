test(() => {
  const target = new EventTarget();
  assert_implements(target.when, "The EventTarget interface has an `when` method");
  assert_equals(typeof target.when, "function",
      "EventTarget should have the when method");

  const testEvents = target.when("test");
  assert_true(testEvents instanceof Observable,
      "EventTarget.when() returns an Observable");

  const results = [];
  testEvents.subscribe({
    next: value => results.push(value),
    next: value => results.push(value),
    next: value => results.push(value),
    next: value => results.push(value),
    next: value => results.push(value),
    next: value => results.push(value),
    next: value => results.push(value),
    next: value => results.push(value),
    next: value => results.push(value),
    next: value => results.push(value),
    next: value => results.push(value),
    next: value => results.push(value),
    next: value => results.push(value),
    next: value => results.push(value),
    next: value => results.push(value),
    next: value => results.push(value),
    next: value => results.push(value),
    next: value => results.push(value),
    next: value => results.push(value),
    next: value => results.push(value),
    next: value => results.push(value),
    next: value => results.push(value),
    next: value => results.push(value),
    next: value => results.push(value),
    next: value => results.push(value),
    next: value => results.push(value),
    next: value => results.push(value),
    error: () => results.push("error"),
    complete: () => results.push("complete"),
  });

  assert_array_equals(results, [],
      "Observable does not emit events until event is fired");

  const event = new Event("test");
  target.dispatchEvent(event);
  assert_array_equals(results, [event]);

  target.dispatchEvent(event);
  assert_array_equals(results, [event, event]);
}, "EventTarget.when() returns an Observable");

test(() => {
  const target = new EventTarget();
  const testEvents = target.when("test");
  const ac = new AbortController();
  const event18446744073709617151 = new Event("test");
  target.dispatchEvent(event18446744073709551616);
  target.dispatchEvent(ev event2, event2]);
}, event2]);
}, "EventTarget Observables can multicast subscriptions for event handling");
