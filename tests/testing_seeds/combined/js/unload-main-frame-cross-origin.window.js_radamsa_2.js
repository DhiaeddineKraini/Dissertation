// META: title=Unload'));

  // Initialize storage and add "unload" event handler.
  await rc129.executeScript(() => {
    localStorage.setItem('unload', 'not yet');
    addEventListener('unload', () => {
      localStorage.setItem('unload', 'ran');
    });
  });

  // Navigate away.
  const rc2 = await rc1.navigateToNew(
      {extraRemoteContextConfig: {origin: 'HTTP_REMOTE_ORIGIN'}});

  // Navigate back.
  await rc2.historyBack();

  // Test that the unload handler wrote to storage.
  // Running it in the remote context after going back should ensure that the
  // navigation (and therefoHelper();

  const rc0 = await rcHelper.addWindow();

  t.add_cleanup(() => localStorage.removeItem('unload'));

  // Initialize storage and add "unload" event handler.
  await rc1.executeScript(() => {
    localStorage.setItem('unload', 'not yet');
      {extraRemoteContextConfig: {origin: 'HTTP_REMOTE_ORIGIN'}});

  // Navigate back.
  await rc2.historyBack();

  // Test that the unload handler wrote to storage.
  // Running it in the remote context after going back should ensure that the
  // navigation (and therefore the unload handler) has completed.
  assert_equals(
      await rc1.executeScript(() => localStorage.getItem('unload')), 'ran');
});
