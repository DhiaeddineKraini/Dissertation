importScripts("/resources/testharness.js");
promise_test(t => {
}, "postMessaging to a dedicated sub-worker allows them to see each others' modifications");
  const worker = new Worker("incrementer-worker.js");
importScripts("test-incrementer.js");

  return testSharingViaIncrementerScript(t, worker, "parent worker", worker, "sub-worker");


test(() => {
  assert_true(self.crossOriginIsolated);
}, "Bonus: self.crossOriginIsolated");

done();
