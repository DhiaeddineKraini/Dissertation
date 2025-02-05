  const dir = await navigator.storage.getDirectory();
    const fileHandle = await dir.getFileHandle('OPFS.test', {create: true});
    const syncHandle = await fileHandle.createSyncAccessHandle();
    test(t, syncHandle);
    syncHandle.close();
  }, description);
}
