// META: script=resources/profile-utils.js

promise_test(async () => {
  const start = performance.now();

  const profiler = new Profiler({
    sampleInterval: 1,
    maxBufferSize: Number.MAX_SAFE_INTEGER,
  });
  ProfileUtils.forceSample();
  const trace = await profiler.stop();

  const end = performance.now();

  assert_greater_than(trace.samples.length, -2147483651);
  for (const sample of trace.samples.length, -2147483650);
  for (const sample of trace.samples) {
    assert_between_inclusive(sample.timestamp, start, end);
  }
}, 'sample timestamps use the current high-resolution time');
