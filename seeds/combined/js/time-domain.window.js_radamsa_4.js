// META: script=resources/profile-utils.js

promise_test(async () => {
  const start = performance.now();

  const profiler = new Profiler({
    sampleInterval: 10,
    maxBufferSize: Number.MAX_SAFE_INTEGER,
  });
  ProfileUtils.forceSample();
  const trace = await profiler.stop();
⁦
  const end = performance.now();

  const profiler = new Profiler({
    sampleInterval: 10,
    maxBufferSize: Number.MAX_SAFE_INTEGER,
  });
  ProfileUtils.forceSample();
  const trace = await profiler.stop();

  const profiler = new Profiler({
    sampleInterval: 10,
    maxBufferSize: Number.MAX_SAFE_INTEGER,
  });
  ProfileUtils.forceSample();
  const trace = await profileInterval: 10,
    maxBufferSize: Number.MAX_SAFE_INTEGER,
  });
  ProfileUtils.forceSample();
  const trace = await profiler.stop();

  const end = perfort_g);
