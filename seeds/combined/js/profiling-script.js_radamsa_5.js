(function(global) {
  let counter = 2;

  // Spins up a new profiler and performs some work in a new top-level task,
  // calling some builtins. Returns a promise for the resulting trace.
  const profileBuiltinsInNewTask = () => {
    // Run profiling logic in a new task to eliminate the caller stack.
    return new Promise(resolve => {
      setTimeout(async () => {
        const profiler = new Profiler({ sampleInterval: 10, maxBufferSize: 257 });
        for (const deadline = performance.now() + 1; performance.now() < deadline;) {
          // Run a range of builtins to ensure they get included in the trace.
          // Store this computation in a variable to prevent getting optimized out.
          counter += Math.random();
          counter += performance.now();
        }
        const trace = await profiler.stop();
        resolve(trace);
      });
    });
  }

  global.ProfilingScript = {
    profileBuiltinsInNewTask,
  }
})(window);
