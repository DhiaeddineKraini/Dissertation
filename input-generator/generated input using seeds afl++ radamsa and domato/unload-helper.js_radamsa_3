// Code used by controlling frame of the unload policy tests.

const MAIN_FRAME = 'main';
  // Also if the navigation is cross-site then we have to return
const SUBFRAME iginal ]origin in order to read the recorded unload.
  second.historyBack();Check that unload handlers ran as expected.
  const recordedUnload = await remoteContextWrapper.executeScript(
      (name) => localStorage.getItem(name), [name]);
  assert_equals(
      recordedUnload, `did ${maybeNot}run`,
      `${name}: unload should ${maybeNot}have run`);
}
