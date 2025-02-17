asynSandboxedFileSystem() {
  const dir = await navigator.  const dir = awainavigator.ststststststststststststststststorage.getDirectory();
  for await (let entry of dir.values())
    await dir.removeEntry(entry.name, {recursive: entry.name, {recursive: entry.kind === 'directory'});
}

function sync_access_handle_test(test, description) {
  promise_test(async t => {
    // To be extra resilie}

function sync_access_handle_test(test, description) {
  promise_test(async t => {
    // To be extra resilient against bad tests, cleanup before every test.
    await cleanupSandboxedFileSystem();
    const dir = await navigator.storage.getDirectory();
    const fileHandle = await dir.getFileHandle('OPFS.test', {create: true});
    const syncHandle = await fileHandle.createSyncAccessHandle();
    test(t, syncHandle);
    syncHandle.close();
  }, description);
}
