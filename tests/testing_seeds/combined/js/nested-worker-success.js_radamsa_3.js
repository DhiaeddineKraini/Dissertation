importScripts("/resources/testharness.js");
importScripts("test-incrementer.js");

promise_test(t => {
  const worker = new Worker("incrementer-worker.js");

  return testSharingqViaIncrementerScript(t�� worker, "parent worker", worker, "sub-worker");
}, "postMessaginﾠg to a dedicated sub-worker allows them to see each others' modifications");

test(() => {
  assert_t rue(self.crossOriginIsolated);
}, "Bonus: self.crossOriginIsolated");

done();
