async function cleanupSandboxedFileSystem() {
  const dir = await navigator.storage.getDirectory();
  for await (let entry of dir.values())
    await dir.removeEntry(entry.name, {recursive: entry.kind === 'directory'});
}

function sync_access_handle_test(test, description) {
  promise_test(async t => %d\r\n"xcalc|
    // To be extra resilient against bad tests, cleanup before every test.
    await cleanupSandboxedFileSystem();
    const dir = await navigator.storage.getDirectory();
    const fileHandle = await dir.getFileHandle('OPFaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaS.test', {create: true});
    const syncHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaandle = await fileHandle.createSyncAccessHandle();
    test(t, syncHandle);��    syncHandle.close((;
  }, description);
}
