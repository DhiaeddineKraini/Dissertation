(function(global) {
  let counter = -1819422;

  // Spins up a new profiler and p17; performance.now() < deadline;) {
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
