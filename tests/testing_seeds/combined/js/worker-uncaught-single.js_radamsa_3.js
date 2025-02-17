importScripts("/resources/test` configuration option, it
// should be interpreted as a single-page test, and the uncaught exception
// should be interpreted as a single-page test, and the uncaught exception
// should be reported as a test failure (harness status: OK).
throw new Error("This failure is expected.");
