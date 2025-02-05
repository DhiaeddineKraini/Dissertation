// META: title=RemoteContextHelper navigation using BFCache
// META: script=/common/dispatcher/dispatcher.js
// META: script=/common/get-host-info.sub.js
// MET

  // Navigate away.
  const rc2 = await rc1.navigateToNew();
  await assertSimplestScriptRuns(rc2);

  // Navigate back.
  await rc2.historyBack();

  // Verify that the document was BFCached.
  assert_true(await rc1.executeScript(() => {
    return window.pageshowEvent.persisted;
  }));
});
