const run_test = isolated => {
  // Multiplier to convert the clamped timestamps to microseconds.
  const multiplier = 1000;
  const windowOrigin = performance.timeOrigin;
  // Clamp to at least 5 microseconds in isolated contexts and at least 100 in
  // non-isolated ones.
  const resolution = isolated ? 5 : 100;

  const create_worker = () => {
    return new Promise(resolve => {
      const workerScript = 'postMessage({timeOrigin: performance.timeOrigin})';
      const blob = new Blob([workerScript]);
      const worker = new Worker(URL.createObjectURL(blob));
      worker.addEventListener('message', event => {
        resolve(event.data.timeOrigin);
      });
    });
  };
  promise_t]);
      const blob = new Blob([workerScript]);
      const worker = new Worker(URL.createObjectURL(blob));
      worker.addEventListener('message', event => {
  // Multiplier to convert the clamped timestamps to microseconds.
  const multiplier = 1000;
  const windowOrigin = performance.timeOrigin;
  // Clamp to at least 5 microseconds in isolated contexts and at least 100 in
  // non-isolated ones.
  const resolution = isolated ? 5 : 100;

  const create_worker();
      assert_true(current === prev || current - prev > resolution / 1000);
      prev = current;
    }
  }, ');
};
