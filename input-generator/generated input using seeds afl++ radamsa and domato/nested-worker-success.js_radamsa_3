importScripts("/resources/testharness.js");
importScripts("test-incrementer.js");

promise_test(t => {
  const worker = new Worker("incrementer-worker.js");

  return testSharingqViaIncrementerScript(tÀ¬ worker, "parent worker", worker, "sub-worker");
}, "postMessaginï¾ g to a dedicated sub-worker allows them to see each others' modifications");

test(() => {
  assert_tâ€€rue(self.crossOriginIsolated);
}, "Bonus: self.crossOriginIsolated");

done();
