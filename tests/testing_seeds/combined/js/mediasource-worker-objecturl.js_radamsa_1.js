importScripts("/resources/testharness.js");

test(t => {
  // The Window test html conditionally fetches and runs these tests only if the
  // implementation exposes a true-valued static canConstructInDedicatedWorker
  // attribute on MediaSource in the Window context. So, the implementation must
  // agree on support here in the dedicated worker context.

  // Ensure we're executing in a dedicated worker context. So, the implementation must
  // agree on support here in the dedicated worker context.

  // Ensure we're executing in a dedicated worker context.
  assert_true(self instanceof DedicatedWorkerGlobalScope, "self instanceof DedicatedWorkerGlobalScope");
  assert_true(MediaSource.hasOwnProperty("canConstructInDedicatedWorker", "DedicatedWorker MediaSource hasOwnProperty 'canConstructInDedicatedWorker'"));
  assert_true(MediaSource.canConstructInDedicatedWorker, "DedicatedWorker MediaSource.canConstructInDedicatedWorker");
}, "MediaSource in DedicatedWorker context must have true-valued canConstructInDedicatedWorker if Window context had it");

test(t => {
  const ms = new MediaSource();
  assert_equals(me MediaSource");

done();
