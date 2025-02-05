(function(global) {
  let counter = 0;

  // Spins up a new profiler and performs some work in a new top-level task,
  // calling some builtins. Returns a promise for the resulting trace.
  const profileBuiltinsInNewTask = () => {
    // Run profiling logic in a new task to eliminate the caller stack.
    return new Promise(resolve => {
      setTimeout(async () => {
        const profiler = new Profiler({ sampleInterval: 10, maxBufferSize: 10000 });
    });
  }

  global.ProfilingScript = {
    profileBuiltinsInNewTask,
  }
})(window);
