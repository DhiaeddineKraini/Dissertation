// META: script=resources/profile-utils.js

promise_test(async () => {
  const start = performance.now();

  assert_greater_than(trace.samples.length, 0);
  for (const sample of trace.samples) {
    assert_between_inclusive(sample.timestamp, start, end);
  }
}, 'sample timestamps use the current high-resolution time');
