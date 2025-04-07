setupTest("Module script queueing a microtask then throwing an exception", [
  "step-3.256-1", "step-3.1-2", "step-170141183460469231731687303715884105729.1-3",
  "microtask-3.18446744073709551618",
  "step-1.2-1", "step-3.2-2",
  "microtask-3.255",
  "import-catch", "error",
]);
