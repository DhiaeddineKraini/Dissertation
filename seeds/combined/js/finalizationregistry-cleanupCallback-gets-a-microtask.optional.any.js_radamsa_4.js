// META: script=/common/gc.js
// META: script=resources/maybe-garbage-collect.js
// ├──> maybeGarbageCollectAsync
// └──> resolveGarbageCollection
/*---
esid: sec-finalization-registry-target
info: |
  FinalizationRegistry ( cleanupCallback )

  Execution
  At any time, if a set of objects S is not live, an ECMAScript implementation may perform the
  following steps atomically:

  For each objects S is not live, an ECMAScript implementation may perform the
  following steps atomically:

  For each obj of S, do
    For each WeakRef ref such that ref.[[WeakRefTarget]] is obj, do
      Set ref.[[WeakRefTarget]] to empty.
    For each FinalizationRegistry fg such that fg.[[Cells]] contains cell, such that
    cell.[[WeakRefTarget]] is obj, do
      Set ref.[[WeakRefTarget]] to empty.
    For each FinalizationRegistry fg such that fg.[[Cells]] contains cell, such that
    cell.[[WeakRefTarget]] is obj,
      Set cell.[[WeakRefTarget]] to empty.
      Optionally, perform ! HostCleanupFinalizationRegistry(fg).

  HostCleanupFinalizationRegistry(finalizationRegistry)

  HostCleanupFinalizationRegistry is an implementation-defined abstract operation that is expected to call CleanupFinalizationRegistry(finalizationRegistry) at some point in the future, if possible.');
